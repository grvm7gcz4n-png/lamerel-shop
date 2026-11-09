"""Разовое удаление пустых карточек клиентов (одобрено владельцем 09.11.2026).
Список — только ID (tools/delete_ids.json). Перед удалением каждая карточка проверяется:
0 визитов, 0 покупок, 0 баланс, номер не +995. Иначе — пропуск."""
import json, os, sys, time, urllib.error
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sync_altegio import call, unwrap, LOCATION, ROOT
ids = json.load(open(os.path.join(ROOT, 'tools/delete_ids.json')))
rep_f = os.path.join(ROOT, 'tools/delete_report.json')
rep = json.load(open(rep_f)) if os.path.exists(rep_f) else {}
done = rep.setdefault('deleted', []); skip = rep.setdefault('skipped', {}); err = rep.setdefault('errors', {})
partner, login, pw = (os.environ.get(k, '') for k in ('ALTEGIO_PARTNER_TOKEN', 'ALTEGIO_LOGIN', 'ALTEGIO_PASSWORD'))
ut = unwrap(call('POST', '/auth', f'Bearer {partner.strip()}', {'login': login.strip(), 'password': pw}))['user_token']
auth = f'Bearer {partner.strip()}, User {ut}'
for cid in ids:
    s = str(cid)
    if s in done or s in skip: continue
    try:
        c = unwrap(call('GET', f'/client/{LOCATION}/{cid}', auth))
        why = []
        if int(c.get('visits') or 0): why.append('есть визиты')
        if float(c.get('spent') or 0): why.append('есть покупки')
        if float(c.get('balance') or 0): why.append('есть баланс')
        if str(c.get('phone') or '').lstrip('+').startswith('995'): why.append('грузинский номер')
        if why: skip[s] = ', '.join(why); print('пропуск', cid, why); continue
        call('DELETE', f'/client/{LOCATION}/{cid}', auth)
        time.sleep(0.2)
        done.append(s); print('удалён', cid)
    except Exception as e:
        err[s] = str(e)[:150]; print('ошибка', cid, str(e)[:150])
        if len(err) >= 5: break
rep['total'] = len(ids); rep['deleted_count'] = len(done); rep['skipped_count'] = len(skip); rep['errors_count'] = len(err)
json.dump(rep, open(rep_f, 'w'), ensure_ascii=False, indent=1)
