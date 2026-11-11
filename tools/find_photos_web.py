"""Поиск фото товаров через поиск картинок (запускается в GitHub Actions, где открыт интернет).
Берём только картинки с официальных сайтов брендов и крупных магазинов, где в заголовке есть бренд
и слова из названия. Фото скачиваются на сайт (photos/p/<id>.jpg), для проверки собираются листы
tools/photo_review/sheet_N.jpg. Ничего не публикуется на сайте, пока фото не прошло проверку."""
import json, os, re, sys, time, html, io, urllib.parse, urllib.request
from PIL import Image, ImageDraw, ImageFont
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = json.load(open(os.path.join(ROOT, 'products.json'))); P = P if isinstance(P, list) else P['products']
REJ = json.load(open(os.path.join(ROOT, 'tools/photo_rejected.json'))) if os.path.exists(os.path.join(ROOT, 'tools/photo_rejected.json')) else {}
OUTF = os.path.join(ROOT, 'tools/photo_web.json')
found = json.load(open(OUTF)) if os.path.exists(OUTF) else {}
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
TRUST = ['kerastase', 'lorealprofessionnel', 'loreal', 'alfaparf', 'keune', 'gigi', 'philipmartins', 'barbaitaliana', 'braehaircare', 'brae',
         'balmainhair', 'phformula', 'zoskinhealth', 'lasultanedesaba', 'dior', 'charlottetilbury', 'chi', 'farouk', 'schwarzkopf', 'dermalogica',
         'davines', 'oliviagarden', 'chanel', 'wella', 'moroccanoil', 'theordinary', 'babyliss', 'tigi', 'stbarth', 'oribe', 'babor', 'wahl',
         'carolinaherrera', 'sephora', 'lookfantastic', 'notino', 'cultbeauty', 'feelunique', 'douglas', 'ulta', 'beautybay', 'skinstore',
         'dermstore', 'spacenk', 'harrods', 'selfridges', 'nordstrom', 'saloncentric', 'sallybeauty', 'hqhair', 'escentual', 'amazon',
         'boots', 'johnlewis', 'flaconi', 'parfumdreams', 'ricaud', 'sephora', 'bergdorfgoodman', 'neimanmarcus', 'macys', 'ulta', 'yesstyle',
         'oliveyoung', 'stylevana', 'jolse', 'iherb', 'goldapple', 'letu', 'rivegauche', 'beautyhaircare', 'salonsdirect', 'professionalbeauty']
SKIP_DEPT = {'acc', 'style'}
STOP = set('the a for with and of de la le les du des pour avec & ml g oz mini travel size set hair'.split())
def toks(s): return [t for t in re.findall(r'[a-z0-9]+', s.lower().replace('é', 'e').replace('è', 'e')) if len(t) > 2 and t not in STOP]

def get(url, binary=False, timeout=20):
    r = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.8'}), timeout=timeout)
    data = r.read(8_000_000)
    return (data, r.headers.get('Content-Type', '')) if binary else data.decode('utf-8', 'ignore')

def bing(q):
    h = get('https://www.bing.com/images/search?q=' + urllib.parse.quote(q) + '&form=HDRSC2&first=1&qft=+filterui:imagesize-medium')
    out = []
    for m in re.finditer(r'\sm="([^"]+)"', h):
        try: j = json.loads(html.unescape(m.group(1)))
        except Exception: continue
        if j.get('murl'): out.append({'img': j['murl'], 'page': j.get('purl', ''), 'title': j.get('t', '') or ''})
    return out

def score(p, c):
    dom = urllib.parse.urlparse(c['page'] or c['img']).netloc.lower().replace('www.', '')
    dkey = re.sub(r'[^a-z]', '', dom.split('.')[0] if dom.count('.') < 2 else ''.join(dom.split('.')[:-1]))
    trusted = any(t in dkey for t in TRUST)
    text = (c['title'] + ' ' + urllib.parse.unquote(c['page'])).lower()
    btoks = toks(p['brand']) or ['']
    if not any(b in re.sub(r'[^a-z0-9]', '', text) for b in [''.join(btoks)] + btoks): return -1
    nt = toks(p['name'])
    hit = sum(1 for t in nt if t in text)
    need = min(len(nt), 2) if nt else 0
    if hit < need: return -1
    return hit / max(len(nt), 1) + (0.6 if trusted else 0) + (0.3 if p['brand'].lower().split()[0] in dom else 0)

def fetch_img(url):
    data, ct = get(url, binary=True)
    im = Image.open(io.BytesIO(data)).convert('RGB')
    if min(im.size) < 250: raise ValueError('small')
    im.thumbnail((700, 700))
    bg = Image.new('RGB', (max(im.size),) * 2, (255, 255, 255)); bg.paste(im, ((bg.width - im.width) // 2, (bg.height - im.height) // 2))
    return bg

def main(limit):
    os.makedirs(os.path.join(ROOT, 'photos/p'), exist_ok=True)
    todo = [p for p in P if (p.get('stock') or 0) > 0 and not p.get('img') and p.get('brand') and p['dept'] not in SKIP_DEPT
            and str(p['id']) not in found and str(p['id']) not in REJ]
    print('к поиску:', len(todo)); t0 = time.time(); n = 0
    for p in todo[:limit]:
        if time.time() - t0 > 40 * 60: break
        q = f"{p['brand']} {p['name']} {p.get('vol') or ''}".strip()
        try: cands = bing(q)
        except Exception as e: print('поиск не удался', p['id'], e); time.sleep(5); continue
        best = sorted([(score(p, c), c) for c in cands[:35]], key=lambda x: -x[0])
        ok = False
        for s, c in best[:4]:
            if s < 0.9: break
            try:
                im = fetch_img(c['img'])
                fn = f"photos/p/{p['id']}.jpg"; im.save(os.path.join(ROOT, fn), quality=85, optimize=True)
                found[str(p['id'])] = {'file': fn, 'src': c['img'][:300], 'page': c['page'][:300], 'title': c['title'][:150], 'score': round(s, 2), 'status': 'check'}
                ok = True; n += 1; break
            except Exception: continue
        print(('✓' if ok else '—'), p['id'], q[:70])
        time.sleep(1.2)
    json.dump(found, open(OUTF, 'w'), ensure_ascii=False, indent=0)
    # листы для проверки
    rv = os.path.join(ROOT, 'tools/photo_review'); os.makedirs(rv, exist_ok=True)
    for f in os.listdir(rv): os.remove(os.path.join(rv, f))
    chk = [(k, v) for k, v in found.items() if v.get('status') == 'check']
    byid = {str(p['id']): p for p in P}
    try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 15)
    except Exception: font = ImageFont.load_default()
    for s in range(0, len(chk), 20):
        sheet = Image.new('RGB', (5 * 260, 4 * 320), 'white'); d = ImageDraw.Draw(sheet)
        for i, (k, v) in enumerate(chk[s:s + 20]):
            x, y = (i % 5) * 260, (i // 5) * 320
            try: im = Image.open(os.path.join(ROOT, v['file'])); im.thumbnail((240, 240)); sheet.paste(im, (x + 10, y + 5))
            except Exception: pass
            p = byid.get(k, {}); label = f"{k}\n{p.get('brand','')}\n{p.get('name','')}"
            lines = []
            for part in label.split('\n'):
                while len(part) > 28: lines.append(part[:28]); part = part[28:]
                lines.append(part)
            d.multiline_text((x + 8, y + 248), '\n'.join(lines[:4]), fill='black', font=font, spacing=1)
        sheet.save(os.path.join(rv, f'sheet_{s // 20 + 1:02d}.jpg'), quality=80)
    print('найдено за запуск', n, 'всего на проверке', len(chk))

if __name__ == '__main__':
    main(int(sys.argv[1]) if len(sys.argv) > 1 else 600)
