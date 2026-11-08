"""Собирает products.json и index.html.
Запуск: python3 tools/build.py  (из корня репозитория)"""
import json, os, sys, datetime
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT,'tools'))
from catalog_src import P

def products():
    out=[]
    for pid,(brand,name,vol,typ,need,price,stock) in P.items():
        if not price: continue
        item=dict(id=pid,brand=brand,name=name,vol=vol,type=typ,need=need,price=price,stock=max(0,int(stock)))
        for ext in ('webp','jpg','png'):
            if os.path.exists(os.path.join(ROOT,'photos',f'{pid}.{ext}')):
                item['img']=f'photos/{pid}.{ext}'; break
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
