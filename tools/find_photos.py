"""Поиск фото товаров: по штрихкоду (Open Beauty Facts, UPCitemdb) и в официальных магазинах брендов (Shopify).
Результат: tools/photo_found.json {id: {url, src, match}}. Ничего не скачивает, только ссылки."""
import json, os, re, sys, time, urllib.request, urllib.parse, concurrent.futures as cf
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = {'User-Agent': 'Mozilla/5.0 (LamereL shop photo finder)', 'Accept': 'application/json'}
SHOPIFY = {  # бренд -> официальные магазины
    'Moroccanoil': ['moroccanoil.com'], 'Color Wow': ['colorwowhair.com'], 'Rhode': ['rhodeskin.com'],
    'Tangle Teezer': ['tangleteezer.com'], 'Oribe': ['oribe.com'], 'Janeke': ['janeke.com', 'janeke.us'],
    'Olivia Garden': ['oliviagarden.com'], 'Medicube': ['medicube.us'], "d'Alba": ['dalba.us'],
    'ZO Skin Health': ['zoskinhealth.com'], 'Davines': ['us.davines.com', 'davines.com'],
    'Alfaparf Milano': ['alfaparfmilanopro.us', 'alfaparfmilano.com'], 'BRAE': ['braehair.com', 'braeusa.com'],
    'CHI': ['chi.com'], 'Balmain': ['balmainhair.com', 'balmainhair.us'], "Philip Martin's": ['philipmartins.com'],
    'Charlotte Tilbury': ['charlottetilbury.com'], 'Hourglass': ['hourglasscosmetics.com'],
    'pHformula': ['phformula.com', 'phformula.co.uk'], 'GIGI': ['gigicosmetics.us', 'gigi-cosmetics.com'],
    'La Sultane de Saba': ['lasultanedesaba.com', 'lasultanedesaba.us'], 'Mila Dopiz': ['miladopiz.com'],
    'Touchy': ['touchy.ru'], 'PUSY': ['pusy.ru'], 'Toplash': ['toplash.com'], 'Dr.Althea': ['dralthea.com'],
    'St Barth': ['ligne-st-barth.com'], 'Barba Italiana': ['barbaitaliana.com'], 'TIGI Bed Head': ['tigihaircare.com'],
    'Keune': ['keune.com'], 'MOCHEQI': ['mocheqi.ru'], 'The Ordinary': ['theordinary.com'],
}
def get(url, timeout=15):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8', 'replace'))
def words(s): return set(re.findall(r'[a-z0-9]{3,}', (s or '').lower()))
def obf(bc):
    try:
        d = get(f'https://world.openbeautyfacts.org/api/v2/product/{bc}.json?fields=image_front_url,image_url,product_name,brands')
        p = d.get('product') or {}
        u = p.get('image_front_url') or p.get('image_url')
        if u: return dict(url=u, src='openbeautyfacts', match=f"{p.get('brands','')} {p.get('product_name','')}")
    except Exception: pass
UPC_LEFT = [100]
def upc(bc):
    if UPC_LEFT[0] <= 0: return
    try:
        UPC_LEFT[0] -= 1
        d = get('https://api.upcitemdb.com/prod/trial/lookup?upc=' + bc)
        for it in d.get('items') or []:
            imgs = [i for i in it.get('images') or [] if i.startswith('https://')]
            if imgs: return dict(url=imgs[0], src='upcitemdb', match=it.get('title', ''))
    except Exception as e:
        if '429' in str(e): UPC_LEFT[0] = 0
def shop(p):
    q = re.sub(r'\b\d+(\.\d+)?\s?(ml|g)\b', '', p['name'], flags=re.I).strip()
    want = words(q)
    for dom in SHOPIFY.get(p['brand'], []):
        try:
            d = get(f'https://{dom}/search/suggest.json?' + urllib.parse.urlencode({'q': q, 'resources[type]': 'product', 'resources[limit]': 4}))
            best = None
            for it in (d.get('resources', {}).get('results', {}).get('products') or []):
                sc = len(want & words(it.get('title'))) / max(1, len(want))
                img = it.get('image') or (it.get('featured_image') or {}).get('url')
                if img and (best is None or sc > best[0]): best = (sc, img, it.get('title'))
            if best and best[0] >= 0.6:
                u = best[1]; u = 'https:' + u if u.startswith('//') else u
                return dict(url=u, src=dom, match=best[2], score=round(best[0], 2))
        except Exception: continue
def main():
    prods = json.load(open(os.path.join(ROOT, 'products.json')))['products']
    out_f = os.path.join(ROOT, 'tools/photo_found.json')
    found = json.load(open(out_f)) if os.path.exists(out_f) else {}
    todo = [p for p in prods if not p.get('img') and str(p['id']) not in found]
    todo.sort(key=lambda p: (p['stock'] <= 0, p['brand']))
    def one(p):
        bc = re.sub(r'\D', '', p.get('barcode') or '')
        r = obf(bc) if len(bc) >= 8 else None
        r = r or shop(p)
        return p, r
    with cf.ThreadPoolExecutor(12) as ex:
        res = list(ex.map(one, todo))
    for p, r in res:
        if r: found[str(p['id'])] = r
    # UPCitemdb (лимит 100 в день) — для оставшихся в наличии
    for p in todo:
        if str(p['id']) in found or p['stock'] <= 0: continue
        bc = re.sub(r'\D', '', p.get('barcode') or '')
        if len(bc) >= 8:
            r = upc(bc)
            if r: found[str(p['id'])] = r
            time.sleep(0.3)
    json.dump(found, open(out_f, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
    by = {}
    for v in found.values(): by[v['src']] = by.get(v['src'], 0) + 1
    print('Найдено:', len(found), by)
if __name__ == '__main__':
    main()
