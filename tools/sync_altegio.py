"""Забирает товары, цены и остатки из Altegio и сохраняет в tools/altegio_live.json.
Ключи берутся из переменных окружения (секреты GitHub):
  ALTEGIO_PARTNER_TOKEN, ALTEGIO_LOGIN, ALTEGIO_PASSWORD
Результат и ошибки пишутся в tools/sync_status.json (без секретов)."""
import json, os, sys, time, datetime, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCATION = 231935
SALES_STORAGE = 438457          # склад «Продажа»
ROOT_CATEGORY = 594251          # «Товары для продажи»
BRAND_CATEGORIES = {            # категория Altegio -> бренд на сайте
    748233: 'Davines', 932351: 'Balmain', 1002242: 'BRAE', 1081956: 'CHI',
    865448: 'Kérastase', 791804: 'Keune', 702068: "L'Oréal Professionnel",
    1026089: 'MOCHEQI', 728170: "Philip Martin's",
    790220: 'ZO Skin Health', 983813: 'Dermalogica', 602624: 'GIGI', 1018100: 'iS Clinical',   # уход за лицом
}
BASES = ['https://api.alteg.io/api/v1']
ACCEPTS = ['application/vnd.api.v2+json', 'application/json']

status = {'started': datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds'), 'steps': []}

def log(msg):
    status['steps'].append(msg)
    print(msg, flush=True)

def save_status(ok):
    status['ok'] = ok
    status['finished'] = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds')
    json.dump(status, open(os.path.join(ROOT, 'tools/sync_status.json'), 'w'), ensure_ascii=False, indent=1)

def call(method, path, auth, body=None, accept=ACCEPTS[0]):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(BASES[0] + path, data=data, method=method)
    req.add_header('Authorization', auth)
    req.add_header('Accept', accept)
    req.add_header('Content-Type', 'application/json')
    req.add_header('User-Agent', 'LamereL-shop-sync/1.0')
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.loads(r.read().decode() or '{}')
        except urllib.error.HTTPError as e:
            text = e.read().decode(errors='replace')[:300]
            if e.code == 429 and attempt < 3:
                time.sleep(3 * (attempt + 1)); continue
            raise RuntimeError(f'{method} {path} -> HTTP {e.code}: {text}')
        except urllib.error.URLError as e:
            if attempt < 3:
                time.sleep(3); continue
            raise RuntimeError(f'{method} {path} -> {e}')

def unwrap(resp):
    if isinstance(resp, dict) and 'data' in resp:
        return resp['data']
    return resp

def sync_services(auth):
    services, cats, source = [], [], ''
    try:   # то, что доступно в онлайн-записи
        d = unwrap(call('GET', f'/book_services/{LOCATION}', auth)) or {}
        services, cats, source = d.get('services') or [], d.get('category') or d.get('categories') or [], 'book_services'
    except Exception as e:
        log(f'book_services: {e}')
    if not services:
        services = unwrap(call('GET', f'/company/{LOCATION}/services', auth)) or []
        cats = unwrap(call('GET', f'/company/{LOCATION}/service_categories', auth)) or []
        source = 'company/services'
    if services: log('Поля услуги: ' + ', '.join(sorted(services[0].keys())))
    # полные названия «ქართული / Русский / English» из настроек услуг (в онлайн-записи бывают сокращённые)
    full = {}
    try:
        for x in unwrap(call('GET', f'/company/{LOCATION}/services', auth)) or []:
            full[x.get('id')] = (x.get('title') or '').strip()
        log(f'Полных названий услуг: {len(full)}')
    except Exception as e:
        log(f'company/services: {e}')
    for x in services:
        t = full.get(x.get('id'))
        if t and t.count('/') >= (x.get('title') or '').count('/'): x['title'] = t
    keep = []
    for x in services:
        if x.get('active') in (0, False): continue
        keep.append(dict(id=x.get('id'), title=(x.get('title') or x.get('booking_title') or '').strip(),
                         category_id=x.get('category_id'), price_min=x.get('price_min') or 0, price_max=x.get('price_max') or 0,
                         duration=x.get('seance_length') or x.get('duration') or 0, weight=x.get('weight') or 0))
    kc = [dict(id=c.get('id'), title=(c.get('title') or '').strip(), weight=c.get('weight') or 0) for c in cats]
    json.dump(dict(source=source, services=keep, categories=kc), open(os.path.join(ROOT, 'tools/services_live.json'), 'w'),
              ensure_ascii=False, indent=0, sort_keys=True)
    log(f'Услуг: {len(keep)} ({source}), категорий: {len(kc)}')

def main():
    partner = os.environ.get('ALTEGIO_PARTNER_TOKEN', '').strip()
    login = os.environ.get('ALTEGIO_LOGIN', '').strip()
    password = os.environ.get('ALTEGIO_PASSWORD', '')
    missing = [n for n, v in (('ALTEGIO_PARTNER_TOKEN', partner), ('ALTEGIO_LOGIN', login), ('ALTEGIO_PASSWORD', password)) if not v]
    if missing:
        log('Нет секретов: ' + ', '.join(missing)); save_status(False); return 1

    # 1. ключ пользователя
    resp = call('POST', '/auth', f'Bearer {partner}', {'login': login, 'password': password})
    user_token = (unwrap(resp) or {}).get('user_token')
    if not user_token:
        msg = (resp.get('meta') or {}).get('message') if isinstance(resp, dict) else ''
        log('Авторизация не удалась: ' + str(msg or 'нет user_token в ответе')); save_status(False); return 1
    auth = f'Bearer {partner}, User {user_token}'
    log('Авторизация: ок')

    # 2. дерево категорий, чтобы понять бренд товара даже во вложенных подкатегориях
    parent = {}
    try:
        cats = unwrap(call('GET', f'/goods_categories/{LOCATION}?count=1000', auth)) or []
        for c in cats:
            cid = c.get('id') or c.get('category_id')
            parent[cid] = c.get('parent_category_id') or c.get('parent_id') or 0
        log(f'Категорий: {len(parent)}')
    except Exception as e:
        log(f'Категории не загрузились ({e}); беру только прямые категории брендов')

    def brand_of(cid):
        seen = 0
        while cid and seen < 10:
            if cid in BRAND_CATEGORIES: return BRAND_CATEGORIES[cid]
            cid = parent.get(cid); seen += 1
        return None

    # 3. все товары постранично
    goods, page = [], 1
    while True:
        batch = unwrap(call('GET', f'/goods/{LOCATION}?page={page}&count=100', auth)) or []
        if not isinstance(batch, list) or not batch: break
        goods.extend(batch)
        if len(batch) < 100: break
        page += 1
        if page > 100: break
    log(f'Товаров в Altegio: {len(goods)}')

    live, sample_keys = {}, None
    for g in goods:
        sample_keys = sample_keys or sorted(g.keys())
        gid = g.get('good_id') or g.get('id')
        brand = brand_of(g.get('category_id'))
        if not gid or not brand: continue
        stock = 0
        for a in g.get('actual_amounts') or []:
            if int(a.get('storage_id') or 0) == SALES_STORAGE:
                stock = a.get('amount') or 0
        live[str(gid)] = dict(title=(g.get('title') or '').strip(), price=g.get('cost') or 0,
                              stock=max(0, int(float(stock))), brand=brand,
                              barcode=g.get('barcode') or '', article=g.get('article') or '')
    log(f'Товаров брендов магазина: {len(live)}')
    if sample_keys: log('Поля товара: ' + ', '.join(sample_keys))
    if not live:
        log('Не найдено ни одного товара брендов — данные сайта не меняю'); save_status(False); return 1

    # 4. услуги салона для страницы «Салон» (ошибка здесь не ломает синхронизацию товаров)
    try:
        sync_services(auth)
    except Exception as e:
        log(f'Услуги не загрузились: {e}')

    out = dict(updated=datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds'), goods=live)
    json.dump(out, open(os.path.join(ROOT, 'tools/altegio_live.json'), 'w'), ensure_ascii=False, indent=0, sort_keys=True)
    save_status(True)
    return 0

if __name__ == '__main__':
    try:
        sys.exit(main())
    except Exception as e:
        log(f'Ошибка: {e}')
        save_status(False)
        sys.exit(1)
