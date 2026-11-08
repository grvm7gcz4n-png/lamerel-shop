"""Собирает products.json и index.html.
Запуск: python3 tools/build.py  (из корня репозитория)"""
import json, os, sys, datetime
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT,'tools'))
import catalog_src
from catalog_src import P
IMG=getattr(catalog_src,'IMG',{})
RU=getattr(catalog_src,'RU',{})
DEPT=getattr(catalog_src,'DEPT',{})

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

def products():
    live=None
    if os.path.exists(LIVE_F):
        live=json.load(open(LIVE_F))['goods']
    snap=json.load(open(SNAP_F)) if os.path.exists(SNAP_F) else {}
    rows=[]
    for pid,(brand,name,vol,typ,need,price,stock) in P.items():
        ru=RU.get(pid)
        if live is not None:
            g=live.get(str(pid))
            if not g: continue                      # товара больше нет в Altegio / в категории бренда
            price,stock=g['price'],g['stock']
            old=snap.get(str(pid))
            if old is None: snap[str(pid)]=g['title']   # первое знакомство: запоминаем название
            elif g['title']!=old:                      # название поменяли в Altegio — берём его
                name,v2,_=parse_title(g['title'],brand); vol=v2 or vol; ru=None
        rows.append((pid,brand,name,vol,typ,need,price,stock,ru))
    if live is not None:
        known={str(p) for p in P}
        for sid,g in live.items():
            if sid in known: continue
            name,vol,typ=parse_title(g['title'],g['brand'])
            rows.append((int(sid),g['brand'],name,vol,typ,'',g['price'],g['stock'],None))
        json.dump(snap,open(SNAP_F,'w'),ensure_ascii=False,indent=0,sort_keys=True)
    out=[]
    for pid,brand,name,vol,typ,need,price,stock,ru in rows:
        if not price: continue
        dept=dept_of(pid,name,typ,need) if (need or pid in P) else 'hair'
        item=dict(id=pid,brand=brand,name=name,name_ru=ru or auto_ru(name,typ,need or 'repair' if pid not in P else need),dept=dept,vol=vol,type=typ,need=need,price=price,stock=max(0,int(stock)))
        for ext in ('webp','jpg','png'):
            if os.path.exists(os.path.join(ROOT,'photos',f'{pid}.{ext}')):
                item['img']=f'photos/{pid}.{ext}'; break
        else:
            if pid in IMG: item['img']=IMG[pid]
        out.append(item)
    return out

HEAD=('<!doctype html>\n<html lang="ru">\n<head>\n<meta charset="utf-8">\n'
      '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
      '<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}'
      ':root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>\n')

def main(write_products=True):
    if write_products:
        data=dict(updated=datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds'),products=products())
        json.dump(data,open(os.path.join(ROOT,'products.json'),'w'),ensure_ascii=False,indent=0)
    page=open(os.path.join(ROOT,'src/page.html')).read().replace('/*__SCRIPT__*/',open(os.path.join(ROOT,'src/script.js')).read())
    open(os.path.join(ROOT,'src/artifact.html'),'w').write(page)
    i=page.index('</style>')+len('</style>')
    open(os.path.join(ROOT,'index.html'),'w').write(HEAD+page[:i]+'\n</head>\n<body>\n'+page[i:]+'\n</body>\n</html>\n')

if __name__=='__main__':
    main()
