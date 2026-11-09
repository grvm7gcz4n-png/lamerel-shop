"""Разовое переименование товаров в Altegio по плану.
Запрос: tools/rename_request.json {"plan": "...json", "limit": N}
Меняется только название. Для каждого товара: читаем карточку, отправляем те же поля с новым названием,
читаем снова и сверяем цену, штрихкод, артикул, категорию, единицы и остатки. При любом расхождении — стоп."""
import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sync_altegio import call, unwrap, LOCATION, ROOT

KEEP = ['category_id', 'cost', 'barcode', 'article', 'unit_equals', 'critical_amount', 'desired_amount', 'comment']
CHECK = ['category_id', 'cost', 'barcode', 'article', 'unit_id', 'service_unit_id', 'unit_equals', 'critical_amount', 'desired_amount']

def amounts(g): return sorted((a.get('storage_id'), float(a.get('amount') or 0)) for a in g.get('actual_amounts') or [])

def main():
    req = json.load(open(os.path.join(ROOT, 'tools/rename_request.json')))
    plan = json.load(open(os.path.join(ROOT, req['plan'])))
    limit = int(req.get('limit') or 0)
    rep_f = os.path.join(ROOT, 'tools/rename_report.json')
    rep = json.load(open(rep_f)) if os.path.exists(rep_f) else {}
    done = rep.setdefault('done', {}); errors = rep.setdefault('errors', {})
    partner, login, pw = (os.environ.get(k, '') for k in ('ALTEGIO_PARTNER_TOKEN', 'ALTEGIO_LOGIN', 'ALTEGIO_PASSWORD'))
    ut = unwrap(call('POST', '/auth', f'Bearer {partner.strip()}', {'login': login.strip(), 'password': pw}))['user_token']
    auth = f'Bearer {partner.strip()}, User {ut}'
    n = 0
    for gid, x in plan.items():
        if gid in done: continue
        if limit and n >= limit: break
        n += 1
        try:
            g = unwrap(call('GET', f'/goods/{LOCATION}/{gid}', auth))
            if isinstance(g, list): g = g[0]
            if g.get('title', '').strip() == x['new']:
                done[gid] = {'old': g['title'], 'new': x['new'], 'note': 'уже было'}; continue
            body = {k: g[k] for k in KEEP if g.get(k) is not None}
            body.update(title=x['new'], sale_unit_id=g.get('unit_id'), service_unit_id=g.get('service_unit_id'))
            call('PUT', f'/goods/{LOCATION}/{gid}', auth, body)
            time.sleep(0.4)
            g2 = unwrap(call('GET', f'/goods/{LOCATION}/{gid}', auth))
            if isinstance(g2, list): g2 = g2[0]
            diff = [k for k in CHECK if str(g.get(k)) != str(g2.get(k))]
            if amounts(g) != amounts(g2): diff.append('actual_amounts')
            if g2.get('title') != x['new']: diff.append('title не сменился')
            if diff:
                errors[gid] = {'old': g.get('title'), 'diff': {k: [g.get(k), g2.get(k)] for k in diff if k in g}, 'note': ', '.join(diff)}
                print('СТОП: расхождение', gid, diff); break
            done[gid] = {'old': g.get('title'), 'new': x['new']}
            print('ok', gid, x['new'])
        except Exception as e:
            errors[gid] = {'old': x.get('old'), 'note': str(e)[:300]}
            print('ошибка', gid, e)
            if len(errors) >= 3: break
    rep['total'] = len(plan); rep['renamed'] = len(done)
    json.dump(rep, open(rep_f, 'w'), ensure_ascii=False, indent=1)

if __name__ == '__main__':
    main()
