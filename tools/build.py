"""Собирает products.json и index.html.
Запуск: python3 tools/build.py  (из корня репозитория)"""
import json, os, sys, datetime
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT,'tools'))
import catalog_src
from catalog_src import P
IMG=getattr(catalog_src,'IMG',{})
RU=getattr(catalog_src,'RU',{})

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

def products():
    out=[]
    for pid,(brand,name,vol,typ,need,price,stock) in P.items():
        if not price: continue
        item=dict(id=pid,brand=brand,name=name,name_ru=RU.get(pid) or auto_ru(name,typ,need),vol=vol,type=typ,need=need,price=price,stock=max(0,int(stock)))
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
