const T={
ru:{ann:'Бесплатная доставка по Грузии от 300 ₾',ann2:'Самовывоз: ул. Зураба Горгиладзе, 98',search:'Поиск по бренду или средству',
 nav:{all:'Все',shampoo:'Шампуни',conditioner:'Кондиционеры',mask:'Маски',leavein:'Несмываемый уход',oils:'Масла и сыворотки',styling:'Стайлинг',treat:'Ампулы и особый уход',acc:'Аксессуары',instock:'В наличии',fav:'Избранное'},
 type:{shampoo:'Шампунь',conditioner:'Кондиционер',mask:'Маска',leavein:'Несмываемый уход',oil:'Масло',serum:'Сыворотка',styling:'Стайлинг',ampoule:'Ампула',tonic:'Тоник',kit:'Набор',perfume:'Парфюм для волос',accessory:'Аксессуар для волос',tool:'Техника и расчёски'},
 need:{blonde:'для светлых волос',repair:'восстановление',volume:'объём',curls:'для кудрявых волос',hairloss:'против выпадения',shine:'блеск',oily:'для жирной кожи головы',dry:'увлажнение',color:'для окрашенных волос',scalp:'уход за кожей головы',hold:'фиксация',heat:'термозащита'},
 allBrands:'Все бренды',
 heroK:'Из кабинетов LamereL',heroH:'Профессиональный уход за волосами, которым работают наши стилисты',heroP:'Шампуни, маски и масла брендов, которые мы используем в салоне. Теперь для дома.',heroCta:'Смотреть',
 saleK:'Забрать сегодня',saleH:'Всё, что есть в салоне прямо сейчас',orderK:'Под заказ',orderH:'Привезём всё, что захотите: люкс-бренды косметики и парфюмерии',
 hits:'Уход за волосами',items:n=>`${n} ${n%10==1&&n%100!=11?'товар':(n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?'товара':'товаров')}`,
 sort:{stock:'Сначала в наличии',cheap:'Сначала дешевле',exp:'Сначала дороже',name:'По названию'},
 add:'В корзину',added:'Добавлено',out:'Нет в наличии',left:n=>`Осталось ${n} шт.`,empty:'Ничего не нашлось. Напишите нам, привезём под заказ.',favEmpty:'В избранном пока пусто. Нажмите ♡ на товаре.',loading:'Загружаем каталог…',loadErr:'Не удалось загрузить каталог. Обновите страницу.',
 bandH:'Нет нужного средства?',bandP:'Мы байеры и закупаем напрямую в США, Европе и Азии. Пришлите ссылку или название, посчитаем цену с доставкой.',
 st:[['1','Пришлите ссылку или фото средства'],['2','Назовём цену в лари с доставкой']],
 fAbout:'Магазин при LamereL Beauty Center в Батуми. Только оригинальная косметика.',fAddr:'Адрес',addr:'ул. Зураба Горгиладзе, 98, Батуми',fPay:'Оплата',pay:'Картой, переводом или наличными при получении',updated:'Наличие обновлено',
 cart:'Корзина',cartEmpty:'Корзина пуста. Выберите средства в каталоге.',total:'Итого',goods:'Товары',delivery:'Доставка',toPay:'К оплате',checkout:'Оформить заказ',back:'Назад в корзину',confirm:'Подтвердить заказ',
 freeLeft:x=>`До бесплатной доставки по Грузии: ${x}`,freeOk:'Доставка бесплатно',
 coTitle:'Оформление',name:'Имя',namePh:'Как к вам обращаться',phone:'Телефон или WhatsApp',get:'Получение',dPick:'Самовывоз из салона, Горгиладзе 98',dBat:'Курьер по Батуми',dGeo:'Доставка по Грузии',
 address:'Адрес',addrPh:'Улица, дом, квартира',payL:'Оплата',pays:['Картой при получении','Переводом на счёт','Наличными'],note:'Комментарий',notePh:'Например, нужен подарочный пакет',from15:'от 15 ₾',
 fill:'Заполните: ',fName:'имя',fPhone:'телефон (минимум 9 цифр)',fAddrE:'адрес доставки',
 doneTitle:'Заказ готов',doneP:'Отправьте этот текст нам в Telegram или WhatsApp. Администратор подтвердит наличие и время.',copy:'Скопировать текст заказа',copied:'Скопировано',selected:'Текст выделен, скопируйте его',again:'Вернуться в каталог',
 orderHead:'Заказ LamereL Beauty Shop',oName:'Имя',oPhone:'Телефон',oGet:'Получение',oPay:'Оплата',oNote:'Комментарий'},
ka:{ann:'უფასო მიწოდება საქართველოში 300 ₾-დან',ann2:'თვითგატანა: ზურაბ გორგილაძის ქ. 98',search:'ძიება ბრენდით ან პროდუქტით',
 nav:{all:'ყველა',shampoo:'შამპუნები',conditioner:'კონდიციონერები',mask:'ნიღბები',leavein:'ჩაურეცხავი მოვლა',oils:'ზეთები და შრატები',styling:'სტაილინგი',treat:'ამპულები და სპეც. მოვლა',acc:'აქსესუარები',instock:'მარაგშია',fav:'რჩეულები'},
 type:{shampoo:'შამპუნი',conditioner:'კონდიციონერი',mask:'ნიღაბი',leavein:'ჩაურეცხავი მოვლა',oil:'ზეთი',serum:'შრატი',styling:'სტაილინგი',ampoule:'ამპულა',tonic:'ტონიკი',kit:'ნაკრები',perfume:'თმის სუნამო',accessory:'თმის აქსესუარი',tool:'ტექნიკა და სავარცხლები'},
 need:{blonde:'ქერა თმისთვის',repair:'აღდგენა',volume:'მოცულობა',curls:'ხვეული თმისთვის',hairloss:'ცვენის საწინააღმდეგო',shine:'ბზინვარება',oily:'ცხიმიანი სკალპისთვის',dry:'დატენიანება',color:'შეღებილი თმისთვის',scalp:'სკალპის მოვლა',hold:'ფიქსაცია',heat:'თერმოდაცვა'},
 allBrands:'ყველა ბრენდი',
 heroK:'LamereL-ის კაბინეტებიდან',heroH:'პროფესიონალური თმის მოვლა, რომლითაც ჩვენი სტილისტები მუშაობენ',heroP:'შამპუნები, ნიღბები და ზეთები ბრენდებისგან, რომლებსაც სალონში ვიყენებთ. ახლა სახლისთვისაც.',heroCta:'ნახვა',
 saleK:'წაიღეთ დღესვე',saleH:'ყველაფერი, რაც ახლა სალონშია',orderK:'შეკვეთით',orderH:'ჩამოვიტანთ ყველაფერს, რაც გსურთ: ლუქს ბრენდების კოსმეტიკა და პარფიუმერია',
 hits:'თმის მოვლა',items:n=>`${n} პროდუქტი`,
 sort:{stock:'ჯერ მარაგში არსებული',cheap:'ჯერ იაფი',exp:'ჯერ ძვირი',name:'სახელით'},
 add:'კალათაში',added:'დამატებულია',out:'არ არის მარაგში',left:n=>`დარჩა ${n} ც.`,empty:'ვერაფერი მოიძებნა. მოგვწერეთ და შეკვეთით ჩამოვიტანთ.',favEmpty:'რჩეულებში ჯერ არაფერია. დააჭირეთ ♡ პროდუქტზე.',loading:'კატალოგი იტვირთება…',loadErr:'კატალოგი ვერ ჩაიტვირთა. განაახლეთ გვერდი.',
 bandH:'ვერ იპოვეთ სასურველი პროდუქტი?',bandP:'ჩვენ ბაიერები ვართ და პირდაპირ ვყიდულობთ აშშ-ში, ევროპასა და აზიაში. გამოგვიგზავნეთ ბმული ან სახელი და დაგითვლით ფასს მიწოდებით.',
 st:[['1','გამოგვიგზავნეთ ბმული ან ფოტო'],['2','გეტყვით ფასს ლარში მიწოდებით']],
 fAbout:'მაღაზია LamereL Beauty Center-თან, ბათუმში. მხოლოდ ორიგინალი კოსმეტიკა.',fAddr:'მისამართი',addr:'ზურაბ გორგილაძის ქ. 98, ბათუმი',fPay:'გადახდა',pay:'ბარათით, გადარიცხვით ან ნაღდით მიღებისას',updated:'მარაგი განახლდა',
 cart:'კალათა',cartEmpty:'კალათა ცარიელია. აირჩიეთ პროდუქტები კატალოგში.',total:'სულ',goods:'პროდუქტები',delivery:'მიწოდება',toPay:'გადასახდელი',checkout:'შეკვეთის გაფორმება',back:'კალათაში დაბრუნება',confirm:'შეკვეთის დადასტურება',
 freeLeft:x=>`უფასო მიწოდებამდე: ${x}`,freeOk:'მიწოდება უფასოა',
 coTitle:'გაფორმება',name:'სახელი',namePh:'როგორ მოგმართოთ',phone:'ტელეფონი ან WhatsApp',get:'მიღება',dPick:'თვითგატანა სალონიდან, გორგილაძის 98',dBat:'კურიერი ბათუმში',dGeo:'მიწოდება საქართველოში',
 address:'მისამართი',addrPh:'ქუჩა, სახლი, ბინა',payL:'გადახდა',pays:['ბარათით მიღებისას','გადარიცხვით','ნაღდი ფულით'],note:'კომენტარი',notePh:'მაგალითად, საჩუქრის პაკეტი',from15:'15 ₾-დან',
 fill:'შეავსეთ: ',fName:'სახელი',fPhone:'ტელეფონი (მინიმუმ 9 ციფრი)',fAddrE:'მიწოდების მისამართი',
 doneTitle:'შეკვეთა მზადაა',doneP:'გამოგვიგზავნეთ ეს ტექსტი Telegram-ში ან WhatsApp-ში. ადმინისტრატორი დაადასტურებს მარაგს და დროს.',copy:'შეკვეთის ტექსტის კოპირება',copied:'დაკოპირდა',selected:'ტექსტი მონიშნულია, დააკოპირეთ',again:'კატალოგში დაბრუნება',
 orderHead:'შეკვეთა LamereL Beauty Shop',oName:'სახელი',oPhone:'ტელეფონი',oGet:'მიღება',oPay:'გადახდა',oNote:'კომენტარი'},
en:{ann:'Free delivery across Georgia on orders over 300 ₾',ann2:'Pickup: 98 Zurab Gorgiladze St.',search:'Search brands or products',
 nav:{all:'All',shampoo:'Shampoo',conditioner:'Conditioner',mask:'Masks',leavein:'Leave-in',oils:'Oils & serums',styling:'Styling',treat:'Ampoules & treatments',acc:'Accessories',instock:'In stock',fav:'Favourites'},
 type:{shampoo:'Shampoo',conditioner:'Conditioner',mask:'Mask',leavein:'Leave-in',oil:'Oil',serum:'Serum',styling:'Styling',ampoule:'Ampoule',tonic:'Tonic',kit:'Kit',perfume:'Hair perfume',accessory:'Hair accessory',tool:'Tools & brushes'},
 need:{blonde:'for blonde hair',repair:'repair',volume:'volume',curls:'for curls',hairloss:'anti-hair loss',shine:'shine',oily:'for oily scalp',dry:'hydration',color:'for coloured hair',scalp:'scalp care',hold:'hold',heat:'heat protection'},
 allBrands:'All brands',
 heroK:'From the LamereL salon',heroH:'The professional hair care our stylists work with',heroP:'Shampoos, masks and oils from the brands we use in the salon. Now for home.',heroCta:'Shop now',
 saleK:'Pick up today',saleH:'Everything in stock at the salon right now',orderK:'Pre-order',orderH:'We’ll bring anything you want: luxury beauty and fragrance brands',
 hits:'Hair care',items:n=>`${n} ${n==1?'product':'products'}`,
 sort:{stock:'In stock first',cheap:'Price: low to high',exp:'Price: high to low',name:'By name'},
 add:'Add to bag',added:'Added',out:'Out of stock',left:n=>`Only ${n} left`,empty:'Nothing found. Message us and we will order it for you.',favEmpty:'No favourites yet. Tap ♡ on a product.',loading:'Loading the catalogue…',loadErr:'The catalogue did not load. Please refresh the page.',
 bandH:'Can’t find your product?',bandP:'We are buyers and shop directly in the US, Europe and Asia. Send a link or a name and we will quote a price with delivery.',
 st:[['1','Send a link or a photo'],['2','Get a price in lari, delivery included']],
 fAbout:'The shop of LamereL Beauty Center in Batumi. Authentic cosmetics only.',fAddr:'Address',addr:'98 Zurab Gorgiladze St., Batumi',fPay:'Payment',pay:'Card, bank transfer or cash on receipt',updated:'Stock updated',
 cart:'Your bag',cartEmpty:'Your bag is empty. Pick something from the catalogue.',total:'Total',goods:'Products',delivery:'Delivery',toPay:'To pay',checkout:'Checkout',back:'Back to bag',confirm:'Confirm order',
 freeLeft:x=>`${x} more for free delivery`,freeOk:'Free delivery',
 coTitle:'Checkout',name:'Name',namePh:'Your name',phone:'Phone or WhatsApp',get:'Delivery method',dPick:'Pickup at the salon, 98 Gorgiladze',dBat:'Courier in Batumi',dGeo:'Delivery across Georgia',
 address:'Address',addrPh:'Street, building, flat',payL:'Payment',pays:['Card on receipt','Bank transfer','Cash'],note:'Comment',notePh:'For example, gift wrapping',from15:'from 15 ₾',
 fill:'Please fill in: ',fName:'name',fPhone:'phone (at least 9 digits)',fAddrE:'delivery address',
 doneTitle:'Order ready',doneP:'Send this text to us on Telegram or WhatsApp. Our administrator will confirm availability and timing.',copy:'Copy order text',copied:'Copied',selected:'Text selected, copy it',again:'Back to the catalogue',
 orderHead:'LamereL Beauty Shop order',oName:'Name',oPhone:'Phone',oGet:'Delivery',oPay:'Payment',oNote:'Comment'}
};

// Каталог приходит из products.json (собирается из Altegio)
let P=[],UPDATED='';
const NAV={shampoo:['shampoo'],conditioner:['conditioner'],mask:['mask'],leavein:['leavein'],oils:['oil','serum'],styling:['styling'],treat:['ampoule','tonic','kit','perfume'],acc:['accessory','tool']};
const FORM={shampoo:'bottle',conditioner:'tube',mask:'jar',leavein:'tube',oil:'dropper',serum:'dropper',styling:'bottle',ampoule:'dropper',tonic:'bottle',kit:'wide',perfume:'bottle',accessory:'wide',tool:'wide'};
const BRANDLOOK={CHI:{c:'#2B2A2C',k:'#C9C9CB',dark:1},BRAE:{c:'#F2EBE3',k:'#1A1A1A'},MOCHEQI:{c:'#EEE7DB',k:'#7A5B33'},Davines:{c:'#E9E4D8',k:'#3E3A33'},Balmain:{c:'#1E1C1D',k:'#C8A96A',dark:1},'Kérastase':{c:'#1F1F22',k:'#C9A86A',dark:1},Keune:{c:'#F4F2EE',k:'#1A1A1A'},"L'Oréal Professionnel":{c:'#F3EEE8',k:'#111'},Matrix:{c:'#EFE9F2',k:'#222'},"Philip Martin's":{c:'#F1EDE4',k:'#2F4A3A'}};
const TINT={blonde:'#E6DAF0',curls:'#F2D9BF',hairloss:'#DDE8D6',volume:'#E9E2F2',shine:'#F2E3B8',scalp:'#D5EAE6',oily:'#D8E9E0',dry:'#F1E1D3',color:'#F0D5DC',repair:'#EDE3D6',heat:'#F0DCCB',hold:'#E4E4E4'};

const $=s=>document.querySelector(s);
const ls={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const S={lang:ls.get('lml-lang','ru'),cat:'all',brand:'all',q:'',sort:'stock',cart:ls.get('lml-cart',[]),fav:ls.get('lml-fav',[]),step:'cart',del:'pickup',loaded:false,err:false};
if(!T[S.lang])S.lang='ru';
const t=()=>T[S.lang];
const fmt=n=>n.toLocaleString(S.lang==='en'?'en-US':'ru-RU')+' ₾';
const byId=id=>P.find(p=>p.id===id);
const inStock=p=>p&&p.stock>0;
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const desc=p=>{const L=t();const a=L.type[p.type]||'';const b=L.need[p.need]||'';return a+(b?' · '+b:'')};

function pkg(p,scale){
  const look=BRANDLOOK[p.brand]||{c:'#E8E1D9',k:'#222'};
  const c=look.dark?look.c:(TINT[p.need]||look.c);
  const form=FORM[p.type]||'bottle';
  const lbl=['bottle','jar','wide','tube'].includes(form)?`<span class="lbl">${esc(p.brand)}</span>`:'';
  return `<div class="pkg ${form}${look.dark?' dark':''}" style="--c:${c};--k:${look.k}${scale?`;transform:scale(${scale})`:''}">${lbl}</div>`;
}

function renderStatic(){
  const L=t();document.documentElement.lang=S.lang;
  document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===S.lang));
  $('#annText').innerHTML=`${L.ann}<span class="ship2"> · ${L.ann2}</span>`;
  $('#q').placeholder=$('#q2').placeholder=L.search;
  $('#catNav').innerHTML=['all','shampoo','conditioner','mask','leavein','oils','styling','treat','acc','instock','fav'].filter(k=>!NAV[k]||!S.loaded||P.some(p=>NAV[k].includes(p.type))).map(k=>
    `<button data-cat="${k}" class="${k==='instock'?'sale':''}" aria-pressed="${S.cat===k}">${L.nav[k]}</button>`).join('');
  const pick=['mask','oil','shampoo'].map(ty=>P.find(p=>p.type===ty&&p.brand!=='CHI')).filter(Boolean);
  $('#hero').innerHTML=`
   <a href="#catalog" class="ban main" data-cat="all">
     <div class="stage">${pick.map((p,i)=>pkg(p,[1.25,1.35,1.15][i])).join('')}</div>
     <span class="k">${L.heroK}</span><h2>${L.heroH}</h2><p>${L.heroP}</p><span class="cta">${L.heroCta}</span></a>
   <a href="#catalog" class="ban order" id="toBand"><span class="k">${L.orderK}</span><h2>${L.orderH}</h2></a>`;
  const brands=[...new Set(P.map(p=>p.brand))];
  const b=brands.map(x=>`<span>${esc(x)}</span>`).join('');$('#marq').innerHTML=(b+b+b+b);
  $('#brandRow').innerHTML=['all',...brands].map(x=>`<button class="bchip" data-brand="${esc(x)}" aria-pressed="${S.brand===x}">${x==='all'?L.allBrands:esc(x)}</button>`).join('');
  $('#sort').innerHTML=Object.entries(L.sort).map(([k,v])=>`<option value="${k}"${k===S.sort?' selected':''}>${v}</option>`).join('');
  $('#band').innerHTML=`<div><h2>${L.bandH}</h2><p>${L.bandP}</p></div>
    <div class="steps">${L.st.map(s=>`<div><b>${s[0]}</b>${s[1]}</div>`).join('')}</div>`;
  const upd=UPDATED?new Date(UPDATED).toLocaleString(S.lang==='en'?'en-GB':(S.lang==='ka'?'ka-GE':'ru-RU'),{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}):'';
  $('#foot').innerHTML=`<div class="fl"><b>LamereL</b><p style="margin-top:10px">${L.fAbout}</p>${upd?`<p style="margin-top:10px;opacity:.6;font-size:12px">${L.updated}: ${upd}</p>`:''}</div>
    <div><h4>${L.fAddr}</h4><p>${L.addr}</p></div><div><h4>${L.fPay}</h4><p>${L.pay}</p></div>`;
}

function filtered(){
  const q=S.q.trim().toLowerCase();
  let a=P.filter(p=>{
    if(S.brand!=='all'&&p.brand!==S.brand)return false;
    if(S.cat==='instock'&&!inStock(p))return false;
    if(S.cat==='fav'&&!S.fav.includes(p.id))return false;
    if(NAV[S.cat]&&!NAV[S.cat].includes(p.type))return false;
    if(q&&!(p.brand+' '+p.name+' '+desc(p)).toLowerCase().includes(q))return false;
    return true});
  const nm=(x,y)=>(x.brand+x.name).localeCompare(y.brand+y.name);
  a.sort((x,y)=>S.sort==='cheap'?x.price-y.price:S.sort==='exp'?y.price-x.price:S.sort==='name'?nm(x,y):((inStock(y)-inStock(x))||nm(x,y)));
  return a;
}
function renderGrid(){
  const L=t();
  if(!S.loaded){$('#grid').innerHTML=`<p class="empty">${S.err?L.loadErr:L.loading}</p>`;$('#secTitle').textContent=L.hits;$('#count').textContent='';return}
  const items=filtered();
  $('#secTitle').textContent=S.cat==='all'?L.hits:L.nav[S.cat];
  $('#count').textContent=L.items(items.length);
  if(!items.length){$('#grid').innerHTML=`<p class="empty">${S.cat==='fav'?L.favEmpty:L.empty}</p>`;return}
  $('#grid').innerHTML=items.map(p=>{
    const ok=inStock(p),fav=S.fav.includes(p.id);
    return `<article class="card${ok?'':' out'}">
      <div class="img">${pkg(p)}
        <div class="badges">${!ok?`<span class="badge out">${L.out}</span>`:(p.stock<=2?`<span class="badge">${L.left(p.stock)}</span>`:'')}</div>
        <button class="heart" data-fav="${p.id}" aria-pressed="${fav}" aria-label="${L.nav.fav}"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
      </div>
      <div class="brand">${esc(p.brand)}</div>
      <h3 class="pname">${esc(p.name)}</h3>
      <div class="pmeta">${desc(p)}${p.vol?' · '+esc(p.vol):''}</div>
      <div class="price"><b>${fmt(p.price)}</b></div>
      <button class="add" data-add="${p.id}" id="add-${p.id}" ${ok?'':'disabled'}>${ok?L.add:L.out}</button>
    </article>`}).join('');
}
function counts(){
  const n=S.cart.reduce((a,l)=>a+l.q,0);$('#cartCount').textContent=n||'';$('#favCount').textContent=S.fav.length||'';
}
const sub=()=>S.cart.reduce((a,l)=>{const p=byId(l.id);return a+(p?l.q*p.price:0)},0);
const FREE=300;
const delivery=()=>S.del==='pickup'||sub()>=FREE?0:S.del==='batumi'?10:15;

function add(id){
  const p=byId(id);if(!inStock(p))return;
  const ex=S.cart.find(l=>l.id===id);
  if(ex){if(ex.q<p.stock)ex.q++}else S.cart.push({id,q:1});
  ls.set('lml-cart',S.cart);counts();
  const b=$('#add-'+id);if(b){b.textContent=t().added;b.classList.add('done');setTimeout(()=>{b.textContent=t().add;b.classList.remove('done')},1200)}
}

function openCart(){S.step='cart';$('#scrim').hidden=false;$('#drawer').hidden=false;renderCart()}
function closeCart(){$('#scrim').hidden=true;$('#drawer').hidden=true}

function renderCart(){
  const L=t(),body=$('#dBody'),foot=$('#dFoot');
  S.cart=S.cart.filter(l=>byId(l.id));
  if(S.step==='cart'){
    $('#dTitle').textContent=L.cart;
    if(!S.cart.length){body.innerHTML=`<p style="color:var(--muted)">${L.cartEmpty}</p>`;foot.innerHTML='';return}
    body.innerHTML=S.cart.map((l,i)=>{const p=byId(l.id);return `<div class="line">
      <div class="thumb">${pkg(p,.42)}</div>
      <div class="t"><b>${esc(p.brand)}</b>${esc(p.name)}<br><span>${p.vol?esc(p.vol)+' · ':''}${fmt(p.price)}${inStock(p)?'':' · '+L.out}</span></div>
      <div class="qty"><button data-dec="${i}" aria-label="−">−</button>${l.q}<button data-inc="${i}" aria-label="+">+</button></div></div>`}).join('');
    const left=FREE-sub();
    foot.innerHTML=`<div class="row total"><span>${L.total}</span><span>${fmt(sub())}</span></div>
      <div class="hint">${left>0?L.freeLeft(fmt(left)):L.freeOk}</div>
      <button class="primary" id="toCheckout">${L.checkout}</button>`;
  } else if(S.step==='checkout'){
    $('#dTitle').textContent=L.coTitle;
    body.innerHTML=`<form class="co" id="co" novalidate>
      <label>${L.name}<input id="co-name" autocomplete="name" placeholder="${L.namePh}"></label>
      <label>${L.phone}<input id="co-phone" type="tel" autocomplete="tel" placeholder="+995 5__ ___ ___"></label>
      <label>${L.get}<select id="co-del"><option value="pickup">${L.dPick}</option><option value="batumi">${L.dBat}</option><option value="georgia">${L.dGeo}</option></select></label>
      <label id="addrWrap" hidden>${L.address}<input id="co-addr" autocomplete="street-address" placeholder="${L.addrPh}"></label>
      <label>${L.payL}<select id="co-pay">${L.pays.map(x=>`<option>${x}</option>`).join('')}</select></label>
      <label>${L.note}<textarea id="co-note" rows="2" placeholder="${L.notePh}"></textarea></label>
      <div class="err" id="co-err"></div></form>`;
    $('#co-del').value=S.del;
    const sync=()=>{S.del=$('#co-del').value;$('#addrWrap').hidden=S.del==='pickup';sumFoot()};
    $('#co-del').addEventListener('change',sync);sync();
  } else {
    $('#dTitle').textContent=L.doneTitle;
    body.innerHTML=`<p style="margin:0">${L.doneP}</p><div class="order-text" id="otext">${esc(S.text)}</div><button class="ghost" id="copy">${L.copy}</button>`;
    foot.innerHTML=`<div class="sendrow"><a class="ghost" href="https://wa.me/?text=${encodeURIComponent(S.text)}" target="_blank" rel="noopener">WhatsApp</a>
      <a class="ghost" href="https://t.me/share/url?url=%20&text=${encodeURIComponent(S.text)}" target="_blank" rel="noopener">Telegram</a></div>
      <button class="primary" id="newOrder">${L.again}</button>`;
  }
}
function sumFoot(){
  const L=t();
  $('#dFoot').innerHTML=`<div class="row"><span>${L.goods}</span><span>${fmt(sub())}</span></div>
    <div class="row"><span>${L.delivery}</span><span>${S.del==='georgia'&&delivery()?L.from15:fmt(delivery())}</span></div>
    <div class="row total"><span>${L.toPay}</span><span>${fmt(sub()+delivery())}</span></div>
    <button class="ghost" id="backCart">${L.back}</button><button class="primary" id="placeOrder">${L.confirm}</button>`;
}
function placeOrder(){
  const L=t(),n=$('#co-name').value.trim(),ph=$('#co-phone').value.trim(),a=$('#co-addr').value.trim();
  const e=[];if(!n)e.push(L.fName);if(ph.replace(/\D/g,'').length<9)e.push(L.fPhone);if(S.del!=='pickup'&&!a)e.push(L.fAddrE);
  if(e.length){$('#co-err').textContent=L.fill+e.join(', ')+'.';return}
  const dn={pickup:L.dPick,batumi:L.dBat,georgia:L.dGeo}[S.del];
  const lines=S.cart.map(l=>{const p=byId(l.id);return `• ${p.brand} ${p.name}${p.vol?' '+p.vol:''} × ${l.q} = ${fmt(p.price*l.q)}`});
  const note=$('#co-note').value.trim();
  S.text=[L.orderHead,...lines,`${L.goods}: ${fmt(sub())}`,`${L.delivery}: ${S.del==='georgia'&&delivery()?L.from15:fmt(delivery())}`,`${L.total}: ${fmt(sub()+delivery())}`,'',
    `${L.oName}: ${n}`,`${L.oPhone}: ${ph}`,`${L.oGet}: ${dn}${S.del!=='pickup'?', '+a:''}`,`${L.oPay}: ${$('#co-pay').value}`,...(note?[`${L.oNote}: ${note}`]:[])].join('\n');
  S.step='done';renderCart();
}

document.addEventListener('click',e=>{
  const el=e.target.closest('button,a');if(!el)return;const d=el.dataset;if(el.classList.contains('ban'))e.preventDefault();
  if(d.lang){S.lang=d.lang;ls.set('lml-lang',S.lang);renderStatic();renderGrid();if(!$('#drawer').hidden)renderCart()}
  else if(d.cat){S.cat=d.cat;renderStatic();renderGrid();if(el.closest('#hero'))$('#catalog').scrollIntoView({behavior:'smooth'})}
  else if(d.brand){S.brand=d.brand;renderStatic();renderGrid()}
  else if(d.add)add(+d.add);
  else if(d.fav){const id=+d.fav;S.fav=S.fav.includes(id)?S.fav.filter(x=>x!==id):[...S.fav,id];ls.set('lml-fav',S.fav);counts();renderGrid()}
  else if(d.inc){const l=S.cart[+d.inc],p=byId(l.id);if(l.q<(p?p.stock:0))l.q++;ls.set('lml-cart',S.cart);counts();renderCart()}
  else if(d.dec){const i=+d.dec;S.cart[i].q--;if(!S.cart[i].q)S.cart.splice(i,1);ls.set('lml-cart',S.cart);counts();renderCart()}
  else if(el.id==='openCart')openCart();
  else if(el.id==='favBtn'){S.cat='fav';renderStatic();renderGrid();$('#catalog').scrollIntoView({behavior:'smooth'})}
  else if(el.id==='toBand')$('#band').scrollIntoView({behavior:'smooth'});
  else if(el.id==='closeCart')closeCart();
  else if(el.id==='toCheckout'){S.step='checkout';renderCart()}
  else if(el.id==='backCart'){S.step='cart';renderCart()}
  else if(el.id==='placeOrder')placeOrder();
  else if(el.id==='copy'){const L=t();(navigator.clipboard?navigator.clipboard.writeText(S.text):Promise.reject()).then(()=>el.textContent=L.copied).catch(()=>{const r=document.createRange();r.selectNodeContents($('#otext'));const s=getSelection();s.removeAllRanges();s.addRange(r);el.textContent=L.selected})}
  else if(el.id==='newOrder'){S.cart=[];ls.set('lml-cart',S.cart);counts();closeCart()}
});
$('#scrim').addEventListener('click',closeCart);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
['#q','#q2'].forEach(id=>$(id).addEventListener('input',e=>{S.q=e.target.value;$('#q').value=$('#q2').value=S.q;renderGrid()}));
$('#sort').addEventListener('change',e=>{S.sort=e.target.value;renderGrid()});
renderStatic();renderGrid();counts();
fetch('products.json?v='+Date.now()).then(r=>{if(!r.ok)throw 0;return r.json()}).then(d=>{
  P=d.products||[];UPDATED=d.updated||'';S.loaded=true;renderStatic();renderGrid();counts();
}).catch(()=>{S.err=true;renderGrid()});
