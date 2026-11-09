"""Разовое переименование клиентов (имена латиницей). План зашифрован (tools/client_plan.enc).
В логи и отчёт пишутся только ID клиентов — репозиторий публичный.
Для каждого клиента: читаем карточку, отправляем те же поля с новым именем, читаем снова и сверяем.
При любом расхождении — стоп."""
import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sync_altegio import call, unwrap, LOCATION, ROOT

CHECK = ['phone', 'email', 'birth_date', 'sex_id', 'importance_id', 'discount', 'card', 'comment',
         'sms_check', 'sms_not', 'spent', 'balance', 'visits']

def labels(c): return sorted(x.get('id') for x in (c.get('categories') or []) if isinstance(x, dict))

def main():
    req = json.load(open(os.path.join(ROOT, 'tools/client_request.json')))
    plan = json.load(open(os.environ['PLAN_FILE']))
    limit = int(req.get('limit') or 0)
    rep_f = os.path.join(ROOT, 'tools/client_rename_report.json')
    rep = json.load(open(rep_f)) if os.path.exists(rep_f) else {}
    done = rep.setdefault('done', []); errors = rep.setdefault('errors', {})
    partner, login, pw = (os.environ.get(k, '') for k in ('ALTEGIO_PARTNER_TOKEN', 'ALTEGIO_LOGIN', 'ALTEGIO_PASSWORD'))
    ut = unwrap(call('POST', '/auth', f'Bearer {partner.strip()}', {'login': login.strip(), 'password': pw}))['user_token']
    auth = f'Bearer {partner.strip()}, User {ut}'
    n = 0
    for cid, x in plan.items():
        if cid in done or cid in errors: continue
        if limit and n >= limit: break
        n += 1
        try:
            c = unwrap(call('GET', f'/client/{LOCATION}/{cid}', auth))
            if (c.get('name') or '').strip() == x['new']:
                done.append(cid); continue
            if (c.get('name') or '').strip() != x['old'].strip():
                errors[cid] = 'имя в Altegio уже изменено вручную — пропущено'; print('пропуск', cid); continue
            body = {'name': x['new'], 'phone': c.get('phone')}
            for k in ('email', 'card', 'comment'):
                if c.get(k): body[k] = c[k]
            if c.get('birth_date') and not str(c['birth_date']).startswith('0000'): body['birth_date'] = c['birth_date']
            for k in ('sex_id', 'importance_id', 'discount', 'sms_check', 'sms_not'):
                if c.get(k) is not None: body[k] = c[k]
            lb = labels(c)
            if lb: body['labels'] = lb
            call('PUT', f'/client/{LOCATION}/{cid}', auth, body)
            time.sleep(0.4)
            c2 = unwrap(call('GET', f'/client/{LOCATION}/{cid}', auth))
            for _ in range(3):   # карточка иногда отдаётся из кэша — перечитываем
                if (c2.get('name') or '').strip() == x['new']: break
                time.sleep(2); c2 = unwrap(call('GET', f'/client/{LOCATION}/{cid}', auth))
            diff = [k for k in CHECK if str(c.get(k)) != str(c2.get(k))]
            if labels(c) != labels(c2): diff.append('categories')
            if (c2.get('name') or '').strip() != x['new']: diff.append('name не сменилось')
            if diff:
                errors[cid] = 'СТОП, изменились поля: ' + ', '.join(diff)
                print('СТОП', cid, diff); break
            done.append(cid); print('ok', cid)
        except Exception as e:
            msg = str(e)
            for s in (x['old'], x['new']): msg = msg.replace(s, '***')
            errors[cid] = msg[:200]; print('ошибка', cid, msg[:200])
            if len(errors) >= 3: break
    rep['total'] = len(plan); rep['renamed'] = len(done); rep['errors_count'] = len(errors)
    json.dump(rep, open(rep_f, 'w'), ensure_ascii=False, indent=1)

if __name__ == '__main__':
    main()
