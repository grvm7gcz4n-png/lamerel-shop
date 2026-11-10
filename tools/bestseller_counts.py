"""Считает продажи товаров по складским операциям Altegio за период.
Пишет tools/bestseller_counts.json: {good_id: {title, qty, sum}} + образцы типов операций. Без данных клиентов."""
import json, os, sys, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sync_altegio import call, unwrap, LOCATION, ROOT
partner, login, pw = (os.environ.get(k, '') for k in ('ALTEGIO_PARTNER_TOKEN', 'ALTEGIO_LOGIN', 'ALTEGIO_PASSWORD'))
ut = unwrap(call('POST', '/auth', f'Bearer {partner.strip()}', {'login': login.strip(), 'password': pw}))['user_token']
auth = f'Bearer {partner.strip()}, User {ut}'
req = json.load(open(os.path.join(ROOT, 'tools/bestseller_request.json')))
cnt = {}; types = collections.Counter(); page = 1; n = 0
while True:
    r = unwrap(call('GET', f"/storages/transactions/{LOCATION}?start_date={req['from']}&end_date={req['to']}&count=1000&page={page}", auth))
    if not r: break
    for t in r:
        n += 1
        tid = t.get('type_id'); types[f"{tid}:{t.get('type')}"] += 1
        if tid != 1: continue          # 1 = продажа товара
        g = t.get('good') or {}
        gid = str(g.get('id') or t.get('good_id'))
        c = cnt.setdefault(gid, {'title': g.get('title', ''), 'qty': 0, 'sum': 0.0})
        c['qty'] += abs(float(t.get('amount') or 0)); c['sum'] += float(t.get('cost') or 0)
    if len(r) < 1000: break
    page += 1
json.dump({'period': [req['from'], req['to']], 'rows': n, 'types': types, 'goods': cnt},
          open(os.path.join(ROOT, 'tools/bestseller_counts.json'), 'w'), ensure_ascii=False, indent=0)
print('операций', n, 'товаров', len(cnt), dict(types))
