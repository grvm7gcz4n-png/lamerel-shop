"""Собирает products.json и index.html.
Запуск: python3 tools/build.py  (из корня репозитория)"""
import json, os, sys, datetime
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT,'tools'))
import catalog_src
from catalog_src import P
IMG=getattr(catalog_src,'IMG',{})
_PF=os.path.join(ROOT,'tools/photo_found.json')
if os.path.exists(_PF):
    for _k,_v in json.load(open(_PF)).items(): IMG.setdefault(int(_k),_v['url'])
_PW=os.path.join(ROOT,'tools/photo_web.json')
if os.path.exists(_PW):
    for _k,_v in json.load(open(_PW)).items():
        if _v.get('status')=='ok': IMG.setdefault(int(_k),_v['file'])
RU=getattr(catalog_src,'RU',{})
DEPT=getattr(catalog_src,'DEPT',{})
FACE=getattr(catalog_src,'FACE',{})
FACE_BRANDS=getattr(catalog_src,'FACE_BRANDS',set())

import re
TYPE_RU={'shampoo':'Шампунь','conditioner':'Кондиционер','mask':'Маска','leavein':'Несмываемый уход','oil':'Масло','serum':'Сыворотка',
 'styling':'Средство для укладки','ampoule':'Ампула','tonic':'Тоник','kit':'Набор','perfume':'Парфюм для волос'}
WORD_RU=[('hairspray','Лак'),('lacca','Лак'),('spray','Спрей'),('gel','Гель'),('mousse','Мусс'),('wax','Воск'),('paste','Паста'),('clay','Глина'),
 ('powder','Пудра'),('texturizer','Текстурайзер'),('milk','Молочко'),('lotion','Лосьон'),('balm','Бальзам'),('primer','Праймер'),('fluid','Флюид'),('cream','Крем')]
NEED_RU={'blonde':'для светлых волос','repair':'для восстановления','volume':'для объёма','curls':'для кудрявых волос','hairloss':'против выпадения',
 'shine':'для блеска','oily':'для жирной кожи головы','dry':'для увлажнения','color':'для окрашенных волос','scalp':'для кожи головы','heat':'с термозащитой'}
STRIP=r'\b(hair mask|shampoo|conditioner|masque|mask|serum|spray|cream|gel|mousse|wax|paste|fluid|lotion|tonic|ampoules?|hairspray)\b'
def auto_ru(name,typ,need):
    if typ in ('accessory','tool') or not need: return ''
    head=TYPE_RU.get(typ,'')
    if typ in ('styling','leavein'):
        low=name.lower()
        for w,r in WORD_RU:
            if w in low: head=r;break
    line=re.sub(STRIP,'',name,flags=re.I)
    if typ=='oil': line=re.sub(r'\boil\b','',line,flags=re.I)
    line=re.sub(r'\s+',' ',line).strip(' -&')
    return ' '.join(x for x in (head,NEED_RU.get(need,''),line) if x)

def dept_of(pid,name,typ,need):
    if pid in DEPT: return DEPT[pid]
    low=name.lower()
    if typ in ('accessory','tool'): return 'acc'
    if typ=='kit' and re.search(r'gift|box|set|kit',low): return 'gifts'
    if re.search(r'pasta & love|\bmen\b|beard|shave|homme',low): return 'men'
    if not need: return 'body'
    return 'hair'

LIVE_F=os.path.join(ROOT,'tools/altegio_live.json')
SNAP_F=os.path.join(ROOT,'tools/altegio_titles_snapshot.json')
VOL_RE=re.compile(r'(\d+(?:[.,]\d+)?)\s?(ml|мл|მლ|g|gr|гр|г|გრ)\b',re.I)
GUESS=[(r'shampoo|шампун|wash|შამპუნ','shampoo'),(r'conditioner|кондиционер|rinse|бальзам|კონდიც','conditioner'),
       (r'mask|masque|маска|ნიღაბ','mask'),(r'\boil\b|масл|ზეთ','oil'),(r'serum|сыворот|შრატ','serum'),
       (r'spray|лак|\bgel\b|гель|mousse|мусс|wax|воск|paste|clay|სპრეი|გელ','styling'),(r'ampoule|ампул|ამპულ','ampoule')]
def parse_title(title,brand):
    t=title
    t=re.sub(r'^(BR_|PM\s)','',t)
    for b in {brand,brand.split()[0],'Kerastase','Loreal',"L'Oreal",'Philip Martins',"Philip Martin's",'Balmain','Mocheqi'}:
        t=re.sub(r'^\s*'+re.escape(b)+r'\b[\s\-:/]*','',t,flags=re.I)
    vol=''
    m=VOL_RE.search(t)
    if m:
        u=m.group(2).lower(); u='ml' if u in ('ml','мл','მლ') else 'g'
        vol=f"{m.group(1).replace(',','.')} {u}"; t=(t[:m.start()]+t[m.end():])
    t=re.sub(r'\s+',' ',t).strip(' -,')
    typ='leavein'
    for rx,ty in GUESS:
        if re.search(rx,title,re.I): typ=ty;break
    return t or title, vol, typ

FACE_GUESS=[(r'eye|глаз|თვალ','eye'),(r'spf|sunscreen|sun ','spf'),(r'toner|тоник','toner'),(r'clean|soap|мыло|wash|gel','cleanser'),
  (r'peel|foliant|pads','peel'),(r'mask|masque|маска','mask'),(r'serum|сыворот','serum'),(r'set|kit|to go|набор','kit')]
GEO=re.compile(r'[\u10A0-\u10FF][\u10A0-\u10FF.\s]*')
def face_row(pid,g,snap):
    brand=g['brand'];title=g['title']
    vol=''
    m=VOL_RE.search(title)
    if m:
        u=m.group(2).lower(); vol=f"{m.group(1).replace(',','.')} {'ml' if u in ('ml','мл','მლ') else 'g'}"
    old=snap.get(str(pid))
    if old is None: snap[str(pid)]=title
    if pid in FACE and (old is None or old==title):
        n,typ,need,ru=FACE[pid]
        return (pid,brand,n,vol,typ,need,g['price'],g['stock'],ru)
    t=re.sub(r'^\s*(zo\s?skin(\s?health)?|zo|is clinical|dermalogica|gigi)\b','',title,flags=re.I)
    t=VOL_RE.sub('',GEO.sub('',t)); t=re.sub(r'\s+',' ',t).strip(' -,')
    if re.search('[А-Яа-яЁё]',t):
        base=FACE.get(pid)
        n,ru=(base[0] if base else t),t
    else: n,ru=t.title() if t.islower() else t,None
    typ='cream'
    for rx,ty in FACE_GUESS:
        if re.search(rx,title,re.I): typ=ty;break
    need=FACE[pid][2] if pid in FACE else ''
    return (pid,brand,n,vol,typ,need,g['price'],g['stock'],ru)

SKIP_OTHER={'24567897','21963206','24618829'}   # кофе, пакеты

def products():
    live=None
    if os.path.exists(LIVE_F):
        live=json.load(open(LIVE_F))['goods']
    snap=json.load(open(SNAP_F)) if os.path.exists(SNAP_F) else {}
    rows=[];face_rows=[]
    for pid,(brand,name,vol,typ,need,price,stock) in P.items():
        ru=RU.get(pid)
        if live is not None:
            g=live.get(str(pid))
            if not g: continue                      # товара больше нет в Altegio / в категории бренда
            price,stock=g['price'],g['stock']
            old=snap.get(str(pid))
            if old is None: snap[str(pid)]=g['title']   # первое знакомство: запоминаем название
            elif g['title']!=old:                      # название поменяли в Altegio — берём его
                n2,v2,_=parse_title(g['title'],brand)
                if re.search('[А-Яа-яЁё]',n2): ru=n2; vol=v2 or vol   # русское название -> RU-версия сайта, английское остаётся
                else: name=n2; vol=v2 or vol; ru=None
        rows.append((pid,brand,name,vol,typ,need,price,stock,ru))
    if live is not None:
        known={str(p) for p in P}
        for sid,g in live.items():
            if sid in known: continue
            if g['brand'] in FACE_BRANDS:
                if g['stock']<=0: continue            # уход за лицом: только то, что есть на складе «Продажа»
                face_rows.append(face_row(int(sid),g,snap)); continue
            name,vol,typ=parse_title(g['title'],g['brand'])
            rows.append((int(sid),g['brand'],name,vol,typ,'',g['price'],g['stock'],None))
        json.dump(snap,open(SNAP_F,'w'),ensure_ascii=False,indent=0,sort_keys=True)
    out=[]
    # прочие товары со склада «Продажа» (все категории), карта названий в tools/other_catalog.txt
    if live is not None:
        omap={}
        for ln in open(os.path.join(ROOT,'tools/other_catalog.txt')):
            if ln.startswith('#') or not ln.strip(): continue
            pid_,b_,d_,t_,en_,ru_=[x.strip() for x in ln.rstrip('\n').split('|')]
            omap[pid_]=(b_,d_,t_,en_,ru_)
        unm={}
        for sid,g in (json.load(open(LIVE_F)).get('other') or {}).items():
            if sid in SKIP_OTHER or not g['price'] or g['stock']<=0: continue
            m=VOL_RE.search(g['title']); vol=''
            if m:
                u=m.group(2).lower(); vol=f"{m.group(1).replace(',','.')} {'ml' if u in ('ml','мл','მლ') else 'g'}"
            if sid in omap:
                b_,d_,t_,en_,ru_=omap[sid]
            else:
                unm[sid]=g['title']; nm_,vol2,t_=parse_title(g['title'],'');vol=vol or vol2
                b_,d_,en_,ru_=g['title'].split()[0].title(),'body',nm_,None
            item=dict(id=int(sid),brand=b_,name=en_,name_ru=ru_,dept=d_,vol=vol,type=t_,need='',price=g['price'],stock=int(g['stock']))
            if g.get('barcode'): item['barcode']=str(g['barcode']).strip()
            if int(sid) in IMG: item['img']=IMG[int(sid)]
            out.append(item)
        json.dump(unm,open(os.path.join(ROOT,'tools/other_unmapped.json'),'w'),ensure_ascii=False,indent=0)
    for pid,brand,name,vol,typ,need,price,stock,ru in face_rows:
        if not price: continue
        item=dict(id=pid,brand=brand,name=name,name_ru=ru,dept='face',vol=vol,type=typ,need=need,price=price,stock=max(0,int(stock)))
        bc=live.get(str(pid),{}).get('barcode','')
        if bc: item['barcode']=str(bc).strip()
        if pid in IMG: item['img']=IMG[pid]
        out.append(item)
    for pid,brand,name,vol,typ,need,price,stock,ru in rows:
        if not price: continue
        dept=dept_of(pid,name,typ,need) if (need or pid in P) else 'hair'
        item=dict(id=pid,brand=brand,name=name,name_ru=ru or auto_ru(name,typ,need or 'repair' if pid not in P else need),dept=dept,vol=vol,type=typ,need=need,price=price,stock=max(0,int(stock)))
        bc=(live or {}).get(str(pid),{}).get('barcode','')
        if bc: item['barcode']=str(bc).strip()
        for ext in ('webp','jpg','png'):
            if os.path.exists(os.path.join(ROOT,'photos',f'{pid}.{ext}')):
                item['img']=f'photos/{pid}.{ext}'; break
        else:
            if pid in IMG: item['img']=IMG[pid]
        out.append(item)
    out=dedup(out)
    bf=os.path.join(ROOT,'tools/bestsellers.json')
    if os.path.exists(bf):
        rank={pid:i+1 for i,pid in enumerate(json.load(open(bf))['ids'])}
        for p in out:
            r=min([rank[i] for i in [p['id']]+p.get('alt_ids',[]) if i in rank] or [0])
            if r: p['best']=r
    return out

def dedup(items):
    '''Один товар — одна карточка: одинаковые бренд + название + объём склеиваются.
    Остаётся позиция в наличии (при равенстве — с большим остатком, затем более новая), остатки суммируются.'''
    def norm(p):
        n=(p.get('name_ru') or p['name']).lower()
        n=re.sub('[\u10A0-\u10FF]+','',n); n=re.sub('[^a-zа-яё0-9%+]+',' ',n).strip()
        return (p['brand'],p['dept'],n,(p.get('vol') or '').replace(' ',''))
    groups={}
    for p in items: groups.setdefault(norm(p),[]).append(p)
    res=[]; merged=[]
    for k,g in groups.items():
        if len(g)==1: res.append(g[0]); continue
        g.sort(key=lambda p:(p['stock']>0,p['stock'],p['id']),reverse=True)
        best=dict(g[0]); best['stock']=sum(p['stock'] for p in g)
        best['alt_ids']=[p['id'] for p in g[1:]]
        if not best.get('img'): best['img']=next((p['img'] for p in g if p.get('img')),None) or best.pop('img',None)
        if best.get('img') is None: best.pop('img',None)
        res.append(best); merged.append([(p['id'],p['price'],p['stock']) for p in g])
    json.dump(merged,open(os.path.join(ROOT,'tools/duplicates.json'),'w'),ensure_ascii=False,indent=0)
    return res

EMO=re.compile('[\u2190-\u21ff\u2300-\u23ff\u2460-\u24ff\u25a0-\u25ff\u2700-\u27bf\u2b00-\u2bff\ufe0f\u200d\U0001F000-\U0001FAFF]')
def split3(title):
    t=EMO.sub('',title)
    parts=[re.sub(r'\s+',' ',p).strip(' -') for p in t.split('/')]
    parts=[p for p in parts if p]
    ka=next((p for p in parts if re.search('[\u10A0-\u10FF]',p)),'')
    ru=next((p for p in parts if re.search('[А-Яа-яЁё]',p)),'')
    en=next((p for p in parts if re.search('[A-Za-z]',p) and not re.search('[А-Яа-яЁё\u10A0-\u10FF]',p)),'')
    base=ru or en or ka or t.strip()
    out=dict(ru=ru or en or ka,ka=ka or ru or en,en=en or ru or ka)
    if len(parts)==3 and not (ka and ru and en): out=dict(ka=parts[0],ru=parts[1],en=parts[2])
    cap=lambda x:(x[:1].upper()+x[1:]) if re.match('[a-zа-яё]',x[:1]) else x
    return {k:cap(v or base) for k,v in out.items()}

def build_services():
    f=os.path.join(ROOT,'tools/services_live.json')
    if not os.path.exists(f): return
    d=json.load(open(f))
    cats={c['id']:c for c in d['categories']}
    i18f=os.path.join(ROOT,'tools/services_i18n.json')
    I18N=json.load(open(i18f)) if os.path.exists(i18f) else {}
    pf=os.path.join(ROOT,'tools/service_popularity.json')
    POP=json.load(open(pf)) if os.path.exists(pf) else {}
    out=[]
    for x in d['services']:
        if not x['title']: continue
        n=split3(x['title']); n.update(I18N.get(str(x['id']),{}))
        out.append(dict(id=x['id'],cat=x['category_id'],n=n,pmin=x['price_min'],pmax=x['price_max'],dur=x['duration'],w=x.get('weight',0),p=POP.get(str(x['id']),0)))
    used={x['cat'] for x in out}
    cl=[dict(id=c['id'],n=split3(c['title']),w=c.get('weight',0)) for c in d['categories'] if c['id'] in used]
    data=dict(categories=cl,services=out)
    pf=os.path.join(ROOT,'services.json')
    old=json.load(open(pf)) if os.path.exists(pf) else None
    if old!=data: json.dump(data,open(pf,'w'),ensure_ascii=False,indent=0)

HEAD=('<!doctype html>\n<html lang="ru">\n<head>\n<meta charset="utf-8">\n'
      '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
      '<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}'
      ':root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>\n'
      '<link rel="manifest" href="manifest.webmanifest">\n'
      '<meta name="theme-color" content="#681956">\n'
      '<link rel="icon" type="image/png" sizes="48x48" href="icons/favicon-48.png">\n'
      '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">\n'
      '<meta name="apple-mobile-web-app-capable" content="yes">\n'
      '<meta name="mobile-web-app-capable" content="yes">\n'
      '<meta name="apple-mobile-web-app-title" content="LamereL">\n'
      '<meta name="apple-mobile-web-app-status-bar-style" content="default">\n'
      '<meta name="description" content="Центр красоты и магазин косметики в Батуми, ул. Зураба Горгиладзе, 98. Более 400 услуг, онлайн-запись. Ежедневно 10:00–20:00.">\n'
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"BeautySalon","name":"LamereL Beauty Center",'
      '"url":"https://lamerel.ge","telephone":"+995555277700","address":{"@type":"PostalAddress","streetAddress":"Zurab Gorgiladze St 98",'
      '"addressLocality":"Batumi","addressCountry":"GE"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification",'
      '"dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"10:00","closes":"20:00"}]}</script>\n')

def main(write_products=True):
    if write_products:
        prods=products(); pf=os.path.join(ROOT,'products.json')
        old=json.load(open(pf)) if os.path.exists(pf) else {}
        if old.get('products')!=prods:   # дату обновляем только если каталог реально изменился
            data=dict(updated=datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds'),products=prods)
            json.dump(data,open(pf,'w'),ensure_ascii=False,indent=0)
    build_services()
    page=open(os.path.join(ROOT,'src/page.html')).read().replace('/*__SCRIPT__*/',open(os.path.join(ROOT,'src/script.js')).read())
    open(os.path.join(ROOT,'src/artifact.html'),'w').write(page)
    i=page.index('</style>')+len('</style>')
    open(os.path.join(ROOT,'index.html'),'w').write(HEAD+page[:i]+'\n</head>\n<body>\n'+page[i:]+'\n</body>\n</html>\n')

if __name__=='__main__':
    main()
