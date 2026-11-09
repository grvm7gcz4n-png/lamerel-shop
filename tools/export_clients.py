"""Выгрузка всей клиентской базы (только для расшифровки владельцем ключа tools/claude_pub.pem).
В лог печатается только количество."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sync_altegio import call, unwrap, LOCATION
partner, login, pw = (os.environ.get(k, '') for k in ('ALTEGIO_PARTNER_TOKEN', 'ALTEGIO_LOGIN', 'ALTEGIO_PASSWORD'))
ut = unwrap(call('POST', '/auth', f'Bearer {partner.strip()}', {'login': login.strip(), 'password': pw}))['user_token']
auth = f'Bearer {partner.strip()}, User {ut}'
out, page = [], 1
F = ['id', 'name', 'surname', 'phone', 'email', 'first_visit_date', 'last_visit_date', 'sold_amount', 'visits_count', 'deposit_balance']
while True:
    r = unwrap(call('POST', f'/locations/{LOCATION}/clients/search', auth,
                    {'fields': F, 'page': page, 'page_size': 200, 'order_by': 'id', 'order_by_direction': 'ASC'}))
    if not r: break
    out += r; page += 1
    if len(r) < 200: break
json.dump(out, open(os.environ['OUT'], 'w'), ensure_ascii=False)
print('клиентов:', len(out))
