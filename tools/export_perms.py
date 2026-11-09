"""Права пользователей локации (зашифрованная выгрузка для владельца ключа tools/claude_pub.pem)."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from sync_altegio import call, unwrap, LOCATION
partner, login, pw = (os.environ.get(k, '') for k in ('ALTEGIO_PARTNER_TOKEN', 'ALTEGIO_LOGIN', 'ALTEGIO_PASSWORD'))
ut = unwrap(call('POST', '/auth', f'Bearer {partner.strip()}', {'login': login.strip(), 'password': pw}))['user_token']
auth = f'Bearer {partner.strip()}, User {ut}'
users = unwrap(call('GET', f'/locations/{LOCATION}/users', auth))
out = []
for u in users:
    try: p = unwrap(call('GET', f'/locations/{LOCATION}/users/{u["id"]}/permissions', auth))
    except Exception as e: p = {'error': str(e)[:200]}
    out.append({'user': u, 'perms': p})
json.dump(out, open(os.environ['OUT'], 'w'), ensure_ascii=False)
print('users:', len(out))
