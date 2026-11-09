const T={
ru:{ann:'Бесплатная доставка по Грузии от 300 ₾',ann2:'Самовывоз: ул. Зураба Горгиладзе, 98',search:'Поиск по бренду или средству',
 dept:{all:'Все',hair:'Волосы',face:'Уход за лицом',makeup:'Макияж',men:'Для мужчин',gifts:'Подарочные наборы',acc:'Аксессуары для волос',body:'Уход за телом',instock:'В наличии',fav:'Избранное'},
 soon:'Раздел скоро откроется. Пока напишите нам, что ищете, и мы привезём под заказ.',allHair:'Все средства для волос',allFace:'Весь уход за лицом',
 nav:{all:'Все',shampoo:'Шампуни',conditioner:'Кондиционеры',mask:'Маски',leavein:'Несмываемый уход',oils:'Масла и сыворотки',styling:'Стайлинг',treat:'Ампулы и особый уход',acc:'Аксессуары',instock:'В наличии',fav:'Избранное',cleanse:'Очищение и тоники',fserum:'Сыворотки',cream:'Кремы',eye:'Для кожи вокруг глаз',fmask:'Маски и пилинги',spf:'Защита SPF',fkit:'Наборы'},
 type:{shampoo:'Шампунь',conditioner:'Кондиционер',mask:'Маска',leavein:'Несмываемый уход',oil:'Масло',serum:'Сыворотка',styling:'Стайлинг',ampoule:'Ампула',tonic:'Тоник',kit:'Набор',perfume:'Парфюм для волос',accessory:'Аксессуар для волос',tool:'Техника и расчёски',cleanser:'Очищающее средство',toner:'Тоник',cream:'Крем',eye:'Средство для век',peel:'Пилинг',spf:'Защита от солнца'},
 need:{blonde:'для светлых волос',repair:'восстановление',volume:'объём',curls:'для кудрявых волос',hairloss:'против выпадения',shine:'блеск',oily:'для жирной кожи головы',dry:'увлажнение',color:'для окрашенных волос',scalp:'уход за кожей головы',hold:'фиксация',heat:'термозащита',antiage:'антивозрастной уход',bright:'сияние и ровный тон',acne:'для жирной и проблемной кожи',sensitive:'для чувствительной кожи'},
 allBrands:'Все бренды',
 heroK:'Из кабинетов LamereL',heroH:'Профессиональный уход за волосами, которым работают наши стилисты',heroP:'Шампуни, маски и масла брендов, которые мы используем в салоне. Теперь для дома.',heroCta:'Смотреть',
 saleK:'Забрать сегодня',saleH:'Всё, что есть в салоне прямо сейчас',orderK:'Под заказ',orderH:'Привезём всё, что захотите: люкс-бренды косметики и парфюмерии',
 hits:'Все товары',items:n=>`${n} ${n%10==1&&n%100!=11?'товар':(n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?'товара':'товаров')}`,
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
 sendingT:'Отправляем заказ',sentT:'Заказ принят',sentP:'Спасибо! Администратор скоро свяжется с вами по телефону, чтобы подтвердить наличие, оплату и доставку.',doneTitle:'Заказ готов',doneP:'Отправьте этот текст нам в Telegram или WhatsApp. Администратор подтвердит наличие и время.',copy:'Скопировать текст заказа',copied:'Скопировано',selected:'Текст выделен, скопируйте его',again:'Вернуться в каталог',
 orderHead:'Заказ LamereL Beauty Shop',oName:'Имя',oPhone:'Телефон',oGet:'Получение',oPay:'Оплата',oNote:'Комментарий'},
ka:{ann:'უფასო მიწოდება საქართველოში 300 ₾-დან',ann2:'თვითგატანა: ზურაბ გორგილაძის ქ. 98',search:'ძიება ბრენდით ან პროდუქტით',
 dept:{all:'ყველა',hair:'თმა',face:'სახის მოვლა',makeup:'მაკიაჟი',men:'მამაკაცებისთვის',gifts:'სასაჩუქრე ნაკრებები',acc:'თმის აქსესუარები',body:'სხეულის მოვლა',instock:'მარაგშია',fav:'რჩეულები',cleanse:'წმენდა და ტონიკები',fserum:'შრატები',cream:'კრემები',eye:'თვალის ირგვლივ',fmask:'ნიღბები და პილინგები',spf:'SPF დაცვა',fkit:'ნაკრები'},
 soon:'განყოფილება მალე გაიხსნება. მოგვწერეთ, რას ეძებთ, და შეკვეთით ჩამოვიტანთ.',allHair:'ყველა თმის საშუალება',allFace:'სახის მთელი მოვლა',
 nav:{all:'ყველა',shampoo:'შამპუნები',conditioner:'კონდიციონერები',mask:'ნიღბები',leavein:'ჩაურეცხავი მოვლა',oils:'ზეთები და შრატები',styling:'სტაილინგი',treat:'ამპულები და სპეც. მოვლა',acc:'აქსესუარები',instock:'მარაგშია',fav:'რჩეულები'},
 type:{shampoo:'შამპუნი',conditioner:'კონდიციონერი',mask:'ნიღაბი',leavein:'ჩაურეცხავი მოვლა',oil:'ზეთი',serum:'შრატი',styling:'სტაილინგი',ampoule:'ამპულა',tonic:'ტონიკი',kit:'ნაკრები',perfume:'თმის სუნამო',accessory:'თმის აქსესუარი',tool:'ტექნიკა და სავარცხლები',cleanser:'გამწმენდი საშუალება',toner:'ტონიკი',cream:'კრემი',eye:'თვალის კრემი',peel:'პილინგი',spf:'მზისგან დაცვა'},
 need:{blonde:'ქერა თმისთვის',repair:'აღდგენა',volume:'მოცულობა',curls:'ხვეული თმისთვის',hairloss:'ცვენის საწინააღმდეგო',shine:'ბზინვარება',oily:'ცხიმიანი სკალპისთვის',dry:'დატენიანება',color:'შეღებილი თმისთვის',scalp:'სკალპის მოვლა',hold:'ფიქსაცია',heat:'თერმოდაცვა',antiage:'ანტიასაკობრივი მოვლა',bright:'ნათება და თანაბარი ტონი',acne:'ცხიმიანი და პრობლემური კანისთვის',sensitive:'მგრძნობიარე კანისთვის'},
 allBrands:'ყველა ბრენდი',
 heroK:'LamereL-ის კაბინეტებიდან',heroH:'პროფესიონალური თმის მოვლა, რომლითაც ჩვენი სტილისტები მუშაობენ',heroP:'შამპუნები, ნიღბები და ზეთები ბრენდებისგან, რომლებსაც სალონში ვიყენებთ. ახლა სახლისთვისაც.',heroCta:'ნახვა',
 saleK:'წაიღეთ დღესვე',saleH:'ყველაფერი, რაც ახლა სალონშია',orderK:'შეკვეთით',orderH:'ჩამოვიტანთ ყველაფერს, რაც გსურთ: ლუქს ბრენდების კოსმეტიკა და პარფიუმერია',
 hits:'ყველა პროდუქტი',items:n=>`${n} პროდუქტი`,
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
 sendingT:'შეკვეთა იგზავნება',sentT:'შეკვეთა მიღებულია',sentP:'გმადლობთ! ადმინისტრატორი მალე დაგიკავშირდებათ ტელეფონით მარაგის, გადახდისა და მიწოდების დასადასტურებლად.',doneTitle:'შეკვეთა მზადაა',doneP:'გამოგვიგზავნეთ ეს ტექსტი Telegram-ში ან WhatsApp-ში. ადმინისტრატორი დაადასტურებს მარაგს და დროს.',copy:'შეკვეთის ტექსტის კოპირება',copied:'დაკოპირდა',selected:'ტექსტი მონიშნულია, დააკოპირეთ',again:'კატალოგში დაბრუნება',
 orderHead:'შეკვეთა LamereL Beauty Shop',oName:'სახელი',oPhone:'ტელეფონი',oGet:'მიღება',oPay:'გადახდა',oNote:'კომენტარი'},
en:{ann:'Free delivery across Georgia on orders over 300 ₾',ann2:'Pickup: 98 Zurab Gorgiladze St.',search:'Search brands or products',
 dept:{all:'All',hair:'Hair',face:'Skincare',makeup:'Makeup',men:'Men',gifts:'Gift sets',acc:'Hair accessories',body:'Body care',instock:'In stock',fav:'Favourites',cleanse:'Cleansers & toners',fserum:'Serums',cream:'Creams',eye:'Eye care',fmask:'Masks & peels',spf:'SPF',fkit:'Sets'},
 soon:'This section opens soon. Tell us what you are looking for and we will order it for you.',allHair:'All hair care',allFace:'All face care',
 nav:{all:'All',shampoo:'Shampoo',conditioner:'Conditioner',mask:'Masks',leavein:'Leave-in',oils:'Oils & serums',styling:'Styling',treat:'Ampoules & treatments',acc:'Accessories',instock:'In stock',fav:'Favourites'},
 type:{shampoo:'Shampoo',conditioner:'Conditioner',mask:'Mask',leavein:'Leave-in',oil:'Oil',serum:'Serum',styling:'Styling',ampoule:'Ampoule',tonic:'Tonic',kit:'Kit',perfume:'Hair perfume',accessory:'Hair accessory',tool:'Tools & brushes',cleanser:'Cleanser',toner:'Toner',cream:'Cream',eye:'Eye care',peel:'Peel',spf:'Sun protection'},
 need:{blonde:'for blonde hair',repair:'repair',volume:'volume',curls:'for curls',hairloss:'anti-hair loss',shine:'shine',oily:'for oily scalp',dry:'hydration',color:'for coloured hair',scalp:'scalp care',hold:'hold',heat:'heat protection',antiage:'anti-ageing',bright:'radiance & even tone',acne:'oily & blemish-prone skin',sensitive:'sensitive skin'},
 allBrands:'All brands',
 heroK:'From the LamereL salon',heroH:'The professional hair care our stylists work with',heroP:'Shampoos, masks and oils from the brands we use in the salon. Now for home.',heroCta:'Shop now',
 saleK:'Pick up today',saleH:'Everything in stock at the salon right now',orderK:'Pre-order',orderH:'We’ll bring anything you want: luxury beauty and fragrance brands',
 hits:'All products',items:n=>`${n} ${n==1?'product':'products'}`,
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
 sendingT:'Sending your order',sentT:'Order received',sentP:'Thank you! Our administrator will call you shortly to confirm availability, payment and delivery.',doneTitle:'Order ready',doneP:'Send this text to us on Telegram or WhatsApp. Our administrator will confirm availability and timing.',copy:'Copy order text',copied:'Copied',selected:'Text selected, copy it',again:'Back to the catalogue',
 orderHead:'LamereL Beauty Shop order',oName:'Name',oPhone:'Phone',oGet:'Delivery',oPay:'Payment',oNote:'Comment'}
};

// Каталог приходит из products.json (собирается из Altegio)
let P=[],UPDATED='';
const DEPTS=['all','hair','face','makeup','men','gifts','acc','body','instock','fav'];
const SOON=['makeup','men','gifts','acc','body'];
const NAV={shampoo:['shampoo'],conditioner:['conditioner'],mask:['mask'],leavein:['leavein'],oils:['oil','serum'],styling:['styling'],treat:['ampoule','tonic','kit','perfume'],acc:['accessory','tool']};
const FNAV={cleanse:['cleanser','toner'],fserum:['serum'],cream:['cream'],eye:['eye'],fmask:['mask','peel'],spf:['spf'],fkit:['kit']};
const SUBNAV={hair:NAV,face:FNAV};
const FORM={cleanser:'bottle',toner:'bottle',cream:'jar',eye:'tube',peel:'tube',spf:'tube',shampoo:'bottle',conditioner:'tube',mask:'jar',leavein:'tube',oil:'dropper',serum:'dropper',styling:'bottle',ampoule:'dropper',tonic:'bottle',kit:'wide',perfume:'bottle',accessory:'wide',tool:'wide'};
const BRANDLOOK={'iS Clinical':{c:'#FFFFFF',k:'#1E5A8C'},'ZO Skin Health':{c:'#F4F4F2',k:'#1B1B1B'},Dermalogica:{c:'#2A2A2A',k:'#E9E9E9',dark:1},GIGI:{c:'#EEF2F4',k:'#1F3D5A'},CHI:{c:'#2B2A2C',k:'#C9C9CB',dark:1},BRAE:{c:'#F2EBE3',k:'#1A1A1A'},MOCHEQI:{c:'#EEE7DB',k:'#7A5B33'},Davines:{c:'#E9E4D8',k:'#3E3A33'},Balmain:{c:'#1E1C1D',k:'#C8A96A',dark:1},'Kérastase':{c:'#1F1F22',k:'#C9A86A',dark:1},Keune:{c:'#F4F2EE',k:'#1A1A1A'},"L'Oréal Professionnel":{c:'#F3EEE8',k:'#111'},Matrix:{c:'#EFE9F2',k:'#222'},"Philip Martin's":{c:'#F1EDE4',k:'#2F4A3A'}};
const TINT={blonde:'#E6DAF0',curls:'#F2D9BF',hairloss:'#DDE8D6',volume:'#E9E2F2',shine:'#F2E3B8',scalp:'#D5EAE6',oily:'#D8E9E0',dry:'#F1E1D3',color:'#F0D5DC',repair:'#EDE3D6',heat:'#F0DCCB',hold:'#E4E4E4',antiage:'#EADFEF',bright:'#F6E7C8',acne:'#DCEADF',sensitive:'#F3DEDF'};

const $=s=>document.querySelector(s);
const ls={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const S={lang:ls.get('lml-lang','ru'),dept:'all',cat:'all',brand:'all',q:'',sort:'stock',cart:ls.get('lml-cart',[]),fav:ls.get('lml-fav',[]),step:'cart',del:'pickup',loaded:false,err:false};
if(!T[S.lang])S.lang='ru';
const t=()=>T[S.lang];
const fmt=n=>n.toLocaleString(S.lang==='en'?'en-US':'ru-RU')+' ₾';
const byId=id=>P.find(p=>p.id===id);
const inStock=p=>p&&p.stock>0;
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const nm=p=>p['name_'+S.lang]||p.name;
const desc=p=>{const L=t();const a=L.type[p.type]||'';const b=L.need[p.need]||'';return a+(b?' · '+b:'')};

function pkg(p,scale){
  const look=BRANDLOOK[p.brand]||{c:'#E8E1D9',k:'#222'};
  const c=look.dark?look.c:(TINT[p.need]||look.c);
  const form=FORM[p.type]||'bottle';
  const lbl=['bottle','jar','wide','tube'].includes(form)?`<span class="lbl">${esc(p.brand)}</span>`:'';
  const ph=p.img?`<img class="ph" src="${esc(p.img)}" alt="${esc(p.brand+' '+p.name)}" loading="lazy" referrerpolicy="no-referrer" onload="this.parentNode.classList.add('hasph')" onerror="this.remove()">`:'';
  return ph+`<div class="pkg ${form}${look.dark?' dark':''}" style="--c:${c};--k:${look.k}${scale?`;transform:scale(${scale})`:''}">${lbl}</div>`;
}

function renderStatic(){
  const L=t();document.documentElement.lang=S.lang;
  document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===S.lang));
  $('#annText').innerHTML=`${L.ann}<span class="ship2"> · ${L.ann2}</span>`;
  $('#q').placeholder=$('#q2').placeholder=L.search;
  $('#catNav').innerHTML=DEPTS.filter(k=>k!=='body'||P.some(p=>p.dept==='body')).map(k=>
    `<button data-dept="${k}" class="${k==='instock'?'sale':''}" aria-pressed="${S.dept===k}">${L.dept[k]}</button>`).join('');
  const SN=SUBNAV[S.dept];
  const subs=SN?['all',...Object.keys(SN).filter(k=>k!=='acc')].filter(k=>k==='all'||P.some(p=>p.dept===S.dept&&SN[k].includes(p.type))):[];
  $('#subRow').hidden=!SN;
  $('#subRow').innerHTML=subs.map(k=>`<button class="schip" data-cat="${k}" aria-pressed="${S.cat===k}">${k==='all'?(S.dept==='face'?L.allFace:L.allHair):L.nav[k]}</button>`).join('');
  const brands=[...new Set(P.map(p=>p.brand))];
  const b=brands.map(x=>`<span>${esc(x)}</span>`).join('');$('#marq').innerHTML=(b+b+b+b);
  const dbr=[...new Set(P.filter(p=>!['all','instock','fav'].includes(S.dept)?p.dept===S.dept:true).map(p=>p.brand))];
  $('#brandRow').hidden=dbr.length<2;
  $('#brandRow').innerHTML=['all',...dbr].map(x=>`<button class="bchip" data-brand="${esc(x)}" aria-pressed="${S.brand===x}">${x==='all'?L.allBrands:esc(x)}</button>`).join('');
  $('#sort').innerHTML=Object.entries(L.sort).map(([k,v])=>`<option value="${k}"${k===S.sort?' selected':''}>${v}</option>`).join('');
  $('#band').innerHTML=`<div><span class="k">${L.orderK}</span><h2>${L.orderH}</h2><p>${L.bandP}</p></div>
    <div class="steps">${L.st.map(s=>`<div><b>${s[0]}</b>${s[1]}</div>`).join('')}</div>`;
  const upd=UPDATED?new Date(UPDATED).toLocaleString(S.lang==='en'?'en-GB':(S.lang==='ka'?'ka-GE':'ru-RU'),{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}):'';
  try{$('#foot').innerHTML=footHTML(upd)}catch(e){}
}

function filtered(){
  const q=S.q.trim().toLowerCase();
  let a=P.filter(p=>{
    if(S.brand!=='all'&&p.brand!==S.brand)return false;
    if(S.dept==='instock'){if(!inStock(p))return false}
    else if(S.dept==='fav'){if(!S.fav.includes(p.id))return false}
    else if(S.dept!=='all'&&p.dept!==S.dept)return false;
    const SN=SUBNAV[S.dept];if(SN&&SN[S.cat]&&!SN[S.cat].includes(p.type))return false;
    if(q&&!(p.brand+' '+p.name+' '+(p.name_ru||'')+' '+(p.barcode||'')+' '+desc(p)).toLowerCase().includes(q))return false;
    return true});
  const nm=(x,y)=>(x.brand+x.name).localeCompare(y.brand+y.name);
  a.sort((x,y)=>S.sort==='cheap'?x.price-y.price:S.sort==='exp'?y.price-x.price:S.sort==='name'?nm(x,y):((inStock(y)-inStock(x))||nm(x,y)));
  return a;
}
function renderGrid(){
  const L=t();
  if(!S.loaded){$('#grid').innerHTML=`<p class="empty">${S.err?L.loadErr:L.loading}</p>`;$('#secTitle').textContent=L.hits;$('#count').textContent='';return}
  const items=filtered();
  $('#secTitle').textContent=S.dept==='all'?L.hits:(SUBNAV[S.dept]&&S.cat!=='all'?L.nav[S.cat]:L.dept[S.dept]);
  $('#count').textContent=L.items(items.length);
  if(!items.length){$('#grid').innerHTML=`<p class="empty">${S.dept==='fav'?L.favEmpty:(SOON.includes(S.dept)&&!S.q&&S.brand==='all'?L.soon:L.empty)}</p>`;return}
  $('#grid').innerHTML=items.map(cardHTML).join('');
}
function cardHTML(p){const L=t();
    const ok=inStock(p),fav=S.fav.includes(p.id);
    return `<article class="card${ok?'':' out'}">
      <a class="img" href="#p-${p.id}" aria-label="${esc(p.brand+' '+nm(p))}">${pkg(p)}
        <div class="badges">${!ok?`<span class="badge out">${L.out}</span>`:''}</div>
        <button class="heart" data-fav="${p.id}" aria-pressed="${fav}" aria-label="${L.nav.fav}"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
      </a>
      <div class="brand">${esc(p.brand)}</div>
      <h3 class="pname"><a href="#p-${p.id}">${esc(nm(p))}</a></h3>
      <div class="pmeta">${desc(p)}${p.vol?' · '+esc(p.vol):''}</div>
      <div class="price"><b>${fmt(p.price)}</b></div>
      <button class="add" data-add="${p.id}" id="add-${p.id}" ${ok?'':'disabled'}>${ok?L.add:L.out}</button>
    </article>`}
function counts(){
  const n=S.cart.reduce((a,l)=>a+l.q,0);$('#cartCount').textContent=n||'';$('#favCount').textContent=S.fav.length||'';
}
const sub=()=>S.cart.reduce((a,l)=>{const p=byId(l.id);return a+(p?l.q*p.price:0)},0);
// адрес воркера, который пересылает заказы в Telegram (пусто — заказ отправляет сам клиент)
const ORDER_HOOK='';
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
      <div class="t"><b>${esc(p.brand)}</b>${esc(nm(p))}<br><span>${p.vol?esc(p.vol)+' · ':''}${fmt(p.price)}${inStock(p)?'':' · '+L.out}</span></div>
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
  } else if(S.step==='sending'){
    $('#dTitle').textContent=L.sendingT;body.innerHTML=`<p class="empty">${L.sendingT}…</p>`;foot.innerHTML='';
  } else if(S.sent){
    $('#dTitle').textContent=L.sentT;
    body.innerHTML=`<p style="margin:0;font-size:16px;line-height:1.5">${L.sentP}</p><div class="order-text" id="otext">${esc(S.text)}</div>`;
    foot.innerHTML=`<button class="primary" id="newOrder">${L.again}</button>`;
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
  const lines=S.cart.map(l=>{const p=byId(l.id);return `• ${p.brand} ${nm(p)}${p.vol?' '+p.vol:''} × ${l.q} = ${fmt(p.price*l.q)}`});
  const note=$('#co-note').value.trim();
  S.text=[L.orderHead,...lines,`${L.goods}: ${fmt(sub())}`,`${L.delivery}: ${S.del==='georgia'&&delivery()?L.from15:fmt(delivery())}`,`${L.total}: ${fmt(sub()+delivery())}`,'',
    `${L.oName}: ${n}`,`${L.oPhone}: ${ph}`,`${L.oGet}: ${dn}${S.del!=='pickup'?', '+a:''}`,`${L.oPay}: ${$('#co-pay').value}`,...(note?[`${L.oNote}: ${note}`]:[])].join('\n');
  // текст для администраторов: всегда по-русски, со штрихкодом и кодом товара
  const R=T.ru,dr={pickup:R.dPick,batumi:R.dBat,georgia:R.dGeo}[S.del];
  const adm=['🛍 Новый заказ с сайта · '+new Date().toLocaleString('ru-RU',{timeZone:'Asia/Tbilisi'}),'',
    ...S.cart.map(l=>{const p=byId(l.id);return `• ${p.brand} ${p.name_ru||p.name}${p.vol?' '+p.vol:''} × ${l.q} = ${p.price*l.q} ₾\n   код ${p.id}${p.barcode?' · ШК '+p.barcode:''}`}),'',
    `Товары: ${sub()} ₾`,`Доставка: ${S.del==='georgia'&&delivery()?'от 15 ₾':delivery()+' ₾'}`,`Итого: ${sub()+delivery()} ₾`,'',
    `👤 ${n}`,`📞 ${ph}`,`🚚 ${dr}${S.del!=='pickup'?', '+a:''}`,`💳 ${$('#co-pay').value}`,...(note?[`💬 ${note}`]:[]),`🌐 язык сайта: ${S.lang.toUpperCase()}`].join('\n');
  S.sent=false;
  if(ORDER_HOOK){
    S.step='sending';renderCart();
    fetch(ORDER_HOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:adm})})
      .then(r=>{S.sent=r.ok}).catch(()=>{S.sent=false}).finally(()=>{S.step='done';if(S.sent){S.cart=[];ls.set('lml-cart',S.cart);counts()}renderCart()});
    return;
  }
  S.step='done';renderCart();
}

document.addEventListener('click',e=>{
  const el=e.target.closest('button,a');if(!el)return;const d=el.dataset;if(el.classList.contains('ban'))e.preventDefault();
  if((d.dept||d.cat||d.brand||el.id==='favBtn')&&view()!=='shop'){history.pushState(null,'','#shop');route();window.scrollTo(0,0)}
  if(d.lang){S.lang=d.lang;ls.set('lml-lang',S.lang);renderStatic();renderGrid();refreshP();if(!$('#drawer').hidden)renderCart()}
  else if(d.dept){S.dept=d.dept;S.cat='all';S.brand='all';renderStatic();renderGrid();if(el.closest('#hero'))$('#catalog').scrollIntoView({behavior:'smooth'})}
  else if(d.cat){S.cat=d.cat;renderStatic();renderGrid()}
  else if(d.brand){S.brand=d.brand;renderStatic();renderGrid()}
  else if(d.add)add(+d.add);
  else if(d.fav){const id=+d.fav;S.fav=S.fav.includes(id)?S.fav.filter(x=>x!==id):[...S.fav,id];ls.set('lml-fav',S.fav);counts();renderGrid();refreshP()}
  else if(d.inc){const l=S.cart[+d.inc],p=byId(l.id);if(l.q<(p?p.stock:0))l.q++;ls.set('lml-cart',S.cart);counts();renderCart()}
  else if(d.dec){const i=+d.dec;S.cart[i].q--;if(!S.cart[i].q)S.cart.splice(i,1);ls.set('lml-cart',S.cart);counts();renderCart()}
  else if(el.id==='openCart')openCart();
  else if(el.id==='favBtn'){S.dept='fav';renderStatic();renderGrid();$('#catalog').scrollIntoView({behavior:'smooth'})}
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
['#q','#q2'].forEach(id=>$(id).addEventListener('input',e=>{S.q=e.target.value;$('#q').value=$('#q2').value=S.q;if(view()==='salon'){renderSalon();return}if(view()!=='shop'){history.pushState(null,'','#shop');route()}renderGrid()}));
$('#sort').addEventListener('change',e=>{S.sort=e.target.value;renderGrid()});
renderStatic();renderGrid();counts();
setTimeout(()=>{route();lastView=view()});
fetch('products.json?v='+Date.now()).then(r=>{if(!r.ok)throw 0;return r.json()}).then(d=>{
  P=d.products||[];UPDATED=d.updated||'';S.loaded=true;renderStatic();renderGrid();counts();route();
}).catch(()=>{S.err=true;renderGrid()});
// ===== Страница товара (#p-<id>) =====
const PT={
ru:{home:'Главная',code:'Код товара',barcode:'Штрихкод',brandL:'Бренд',vol:'Объём',typeL:'Тип средства',needL:'Назначение',
  tabs:{desc:'Описание',use:'Как применять',brand:'О бренде'},inStock:'В наличии',outStock:'Нет в наличии — привезём под заказ',
  similar:'Похожие товары',back:'← Назад к каталогу',notFound:'Товар не найден. Возможно, его убрали из каталога.',share:'Скопировать ссылку',copied:'Ссылка скопирована',
  note:'Описание носит общий характер. Точный состав и рекомендации — на упаковке.',
  lead:(t,b)=>`${t} ${b} — профессиональный уход, которым работают в салонах. Подходит для домашнего ухода между визитами к стилисту.`},
ka:{home:'მთავარი',code:'პროდუქტის კოდი',barcode:'შტრიხკოდი',brandL:'ბრენდი',vol:'მოცულობა',typeL:'საშუალების ტიპი',needL:'დანიშნულება',
  tabs:{desc:'აღწერა',use:'გამოყენება',brand:'ბრენდის შესახებ'},inStock:'მარაგშია',outStock:'არ არის მარაგში — შეკვეთით ჩამოვიტანთ',
  similar:'მსგავსი პროდუქტები',back:'← კატალოგში დაბრუნება',notFound:'პროდუქტი ვერ მოიძებნა.',share:'ბმულის კოპირება',copied:'ბმული დაკოპირდა',
  note:'აღწერა ზოგადი ხასიათისაა. ზუსტი შემადგენლობა და რეკომენდაციები — შეფუთვაზე.',
  lead:(t,b)=>`${t} ${b} — პროფესიონალური მოვლა, რომელსაც სალონებში იყენებენ. შესაფერისია სახლის მოვლისთვის სტილისტთან ვიზიტებს შორის.`},
en:{home:'Home',code:'Product code',barcode:'Barcode',brandL:'Brand',vol:'Size',typeL:'Product type',needL:'Concern',
  tabs:{desc:'Description',use:'How to use',brand:'About the brand'},inStock:'In stock',outStock:'Out of stock — available to order',
  similar:'You may also like',back:'← Back to the catalogue',notFound:'Product not found. It may have been removed.',share:'Copy link',copied:'Link copied',
  note:'General description. See the pack for exact ingredients and directions.',
  lead:(t,b)=>`${t} by ${b} — professional care used in salons. Suitable for home care between stylist visits.`}
};
const BENEFIT={
 blonde:{ru:'Нейтрализует желтизну, сохраняет чистый оттенок светлых и осветлённых волос и делает их мягкими и блестящими.',ka:'ანეიტრალებს სიყვითლეს, ინარჩუნებს ქერა და გაღიავებული თმის სუფთა ელფერს და ხდის მას რბილს და ბზინვარეს.',en:'Neutralises brassiness, keeps blonde and lightened hair a clean shade and leaves it soft and shiny.'},
 repair:{ru:'Восстанавливает повреждённые волосы, укрепляет их структуру, уменьшает ломкость и возвращает мягкость.',ka:'აღადგენს დაზიანებულ თმას, აძლიერებს მის სტრუქტურას, ამცირებს მტვრევადობას და უბრუნებს სირბილეს.',en:'Repairs damaged hair, strengthens its structure, reduces breakage and restores softness.'},
 volume:{ru:'Придаёт объём от корней, делает тонкие волосы плотнее на вид и не утяжеляет их.',ka:'ძირებიდან აძლევს მოცულობას, თხელ თმას ვიზუალურად ამკვრივებს და არ ამძიმებს.',en:'Adds volume from the roots and makes fine hair look thicker without weighing it down.'},
 curls:{ru:'Подчёркивает и разделяет локоны, увлажняет и уменьшает пушистость кудрявых и вьющихся волос.',ka:'გამოკვეთს და ჰყოფს კულულებს, ატენიანებს და ამცირებს ხვეული თმის აბურძგვნას.',en:'Defines and separates curls, hydrates and reduces frizz in curly and wavy hair.'},
 hairloss:{ru:'Помогает уменьшить выпадение волос, тонизирует кожу головы и поддерживает рост здоровых волос.',ka:'ხელს უწყობს თმის ცვენის შემცირებას, ატონიზირებს სკალპს და ხელს უწყობს ჯანსაღი თმის ზრდას.',en:'Helps reduce hair loss, energises the scalp and supports healthy growth.'},
 shine:{ru:'Дарит волосам зеркальный блеск, разглаживает поверхность волоса и облегчает расчёсывание.',ka:'თმას აძლევს სარკისებრ ბზინვარებას, ასწორებს თმის ზედაპირს და აადვილებს დავარცხნას.',en:'Gives hair a mirror shine, smooths the hair surface and makes combing easier.'},
 oily:{ru:'Мягко очищает кожу головы, регулирует выработку себума и сохраняет свежесть волос дольше.',ka:'რბილად წმენდს სკალპს, არეგულირებს ცხიმის გამოყოფას და თმას დიდხანს ინარჩუნებს სუფთად.',en:'Gently cleanses the scalp, balances oil production and keeps hair fresh for longer.'},
 dry:{ru:'Глубоко увлажняет и питает сухие волосы, делает их мягкими, эластичными и послушными.',ka:'ღრმად ატენიანებს და კვებავს მშრალ თმას, ხდის მას რბილს, ელასტიურს და დამყოლს.',en:'Deeply hydrates and nourishes dry hair, leaving it soft, supple and manageable.'},
 color:{ru:'Защищает цвет окрашенных волос от вымывания и тусклости, сохраняет яркость оттенка.',ka:'იცავს შეღებილი თმის ფერს ჩამორეცხვისა და მქრქალობისგან, ინარჩუნებს ელფერის სიკაშკაშეს.',en:'Protects colour-treated hair from fading and dullness and keeps the shade vibrant.'},
 scalp:{ru:'Освежает и очищает кожу головы, снимает дискомфорт и создаёт условия для здоровых волос.',ka:'აგრილებს და წმენდს სკალპს, ხსნის დისკომფორტს და ქმნის პირობებს ჯანსაღი თმისთვის.',en:'Refreshes and cleanses the scalp, soothes discomfort and creates the conditions for healthy hair.'},
 hold:{ru:'Надёжно фиксирует укладку, сохраняет форму в течение дня и легко удаляется расчёсыванием.',ka:'საიმედოდ აფიქსირებს ვარცხნილობას, ინარჩუნებს ფორმას მთელი დღე და ადვილად შორდება დავარცხნით.',en:'Holds the style securely all day and brushes out easily.'},
 heat:{ru:'Защищает волосы от высоких температур фена, утюжка и плойки, предотвращает пересушивание.',ka:'იცავს თმას ფენის, უთოსა და სახვევის მაღალი ტემპერატურისგან, ხელს უშლის გამოშრობას.',en:'Protects hair from the heat of dryers, straighteners and curling irons and prevents drying out.'}
};
const USE={
 shampoo:{ru:'Нанесите на влажные волосы, вспеньте массажными движениями и смойте. При необходимости повторите.',ka:'წაისვით სველ თმაზე, მასაჟური მოძრაობებით აქაფეთ და ჩამოიბანეთ. საჭიროების შემთხვევაში გაიმეორეთ.',en:'Apply to wet hair, massage into a lather and rinse. Repeat if needed.'},
 conditioner:{ru:'После шампуня нанесите на длины и кончики, оставьте на 1–3 минуты и смойте.',ka:'შამპუნის შემდეგ წაისვით თმის სიგრძეზე და ბოლოებზე, დატოვეთ 1–3 წუთით და ჩამოიბანეთ.',en:'After shampooing, apply to the lengths and ends, leave for 1–3 minutes and rinse.'},
 mask:{ru:'Нанесите на чистые влажные волосы, оставьте на 5–10 минут и тщательно смойте. Используйте 1–2 раза в неделю.',ka:'წაისვით სუფთა სველ თმაზე, დატოვეთ 5–10 წუთით და კარგად ჩამოიბანეთ. გამოიყენეთ კვირაში 1–2-ჯერ.',en:'Apply to clean, damp hair, leave for 5–10 minutes and rinse thoroughly. Use 1–2 times a week.'},
 leavein:{ru:'Нанесите на влажные или сухие волосы по длине. Не смывайте, затем приступайте к укладке.',ka:'წაისვით სველ ან მშრალ თმაზე სიგრძეზე. არ ჩამოიბანოთ, შემდეგ დაიწყეთ დავარცხნა.',en:'Apply to damp or dry hair through the lengths. Do not rinse; style as usual.'},
 oil:{ru:'Разотрите несколько капель в ладонях и распределите по длинам и кончикам влажных или сухих волос.',ka:'რამდენიმე წვეთი გაზილეთ ხელისგულებში და გაანაწილეთ სველი ან მშრალი თმის სიგრძეზე და ბოლოებზე.',en:'Warm a few drops between your palms and smooth through the lengths and ends of damp or dry hair.'},
 serum:{ru:'Нанесите небольшое количество на волосы или кожу головы, как указано на упаковке. Не смывайте.',ka:'წაისვით მცირე რაოდენობა თმაზე ან სკალპზე, როგორც შეფუთვაზეა მითითებული. არ ჩამოიბანოთ.',en:'Apply a small amount to hair or scalp as directed on the pack. Do not rinse.'},
 styling:{ru:'Нанесите на влажные или сухие волосы перед укладкой или для завершения образа. Количество подбирайте по длине и густоте волос.',ka:'წაისვით სველ ან მშრალ თმაზე დავარცხნამდე ან ვარცხნილობის დასასრულებლად. რაოდენობა შეარჩიეთ თმის სიგრძისა და სიხშირის მიხედვით.',en:'Apply to damp or dry hair before styling or as a finishing touch. Adjust the amount to your hair length and density.'},
 ampoule:{ru:'Используйте курсом по инструкции на упаковке или по рекомендации вашего стилиста.',ka:'გამოიყენეთ კურსად შეფუთვაზე მითითებული ინსტრუქციით ან თქვენი სტილისტის რეკომენდაციით.',en:'Use as a course following the pack instructions or your stylist’s advice.'},
 tonic:{ru:'Нанесите на кожу головы по проборам и помассируйте. Не смывайте.',ka:'წაისვით სკალპზე გაყოფის ხაზებზე და დაიზილეთ. არ ჩამოიბანოთ.',en:'Apply to the scalp section by section and massage in. Do not rinse.'},
 perfume:{ru:'Распылите на волосы с расстояния 20–30 см.',ka:'მოასხურეთ თმაზე 20–30 სმ-ის მანძილიდან.',en:'Spray onto hair from 20–30 cm away.'},
 _:{ru:'Используйте по инструкции на упаковке.',ka:'გამოიყენეთ შეფუთვაზე მითითებული ინსტრუქციით.',en:'Use according to the instructions on the pack.'}
};
const BRANDINFO={
 'Davines':{ru:'Итальянский бренд из Пармы. Davines создаёт профессиональный уход и стайлинг с натуральными ингредиентами и заботой об экологии.',ka:'იტალიური ბრენდი პარმიდან. Davines ქმნის პროფესიონალურ მოვლასა და სტაილინგს ნატურალური ინგრედიენტებით და ეკოლოგიაზე ზრუნვით.',en:'An Italian brand from Parma. Davines makes professional care and styling with natural ingredients and a focus on sustainability.'},
 'Kérastase':{ru:'Французский бренд профессионального ухода класса люкс. Kérastase используют в салонах по всему миру для индивидуальных ритуалов ухода.',ka:'ფრანგული ლუქს-კლასის პროფესიონალური მოვლის ბრენდი. Kérastase-ს იყენებენ სალონებში მთელ მსოფლიოში.',en:'A French luxury professional hair care brand used in salons worldwide for tailored care rituals.'},
 "L'Oréal Professionnel":{ru:'Французский профессиональный бренд. Средства L’Oréal Professionnel созданы для работы стилистов и домашнего ухода между визитами.',ka:'ფრანგული პროფესიონალური ბრენდი. L’Oréal Professionnel-ის საშუალებები შექმნილია სტილისტებისთვის და სახლის მოვლისთვის.',en:'A French professional brand made for stylists and for home care between salon visits.'},
 'Keune':{ru:'Нидерландский профессиональный бренд с многолетней историей. Keune известен уходом, окрашиванием и стайлингом для салонов.',ka:'ნიდერლანდური პროფესიონალური ბრენდი ხანგრძლივი ისტორიით. Keune ცნობილია მოვლის, შეღებვისა და სტაილინგის საშუალებებით.',en:'A Dutch professional brand with a long history, known for salon care, colour and styling.'},
 'CHI':{ru:'Американский профессиональный бренд. CHI известен шёлковыми комплексами и средствами для укладки и термозащиты.',ka:'ამერიკული პროფესიონალური ბრენდი. CHI ცნობილია აბრეშუმის კომპლექსებით, სტაილინგისა და თერმოდაცვის საშუალებებით.',en:'An American professional brand known for its silk treatments, styling and heat protection.'},
 'BRAE':{ru:'Бразильский профессиональный бренд ухода за волосами. BRAE создаёт восстанавливающие и уходовые линии для салонов и дома.',ka:'ბრაზილიური პროფესიონალური თმის მოვლის ბრენდი. BRAE ქმნის აღმდგენ და მომვლელ ხაზებს სალონისა და სახლისთვის.',en:'A Brazilian professional hair care brand making repair and care ranges for salon and home.'},
 "Philip Martin's":{ru:'Итальянский бренд натуральной профессиональной косметики для волос и тела.',ka:'იტალიური ბრენდი, ნატურალური პროფესიონალური კოსმეტიკა თმისა და სხეულისთვის.',en:'An Italian brand of natural professional cosmetics for hair and body.'},
 'Balmain':{ru:'Balmain Hair Couture — линия ухода, стайлинга и аксессуаров для волос от модного дома Balmain.',ka:'Balmain Hair Couture — Balmain-ის მოდის სახლის თმის მოვლის, სტაილინგისა და აქსესუარების ხაზი.',en:'Balmain Hair Couture — the hair care, styling and accessories line from the Balmain fashion house.'},
 'Dermalogica':{ru:'Американский бренд профессиональной косметики для кожи. Основан в 1986 году в Лос-Анджелесе и создан специально для косметологов.',ka:'ამერიკული პროფესიონალური კანის მოვლის ბრენდი. დაარსდა 1986 წელს ლოს-ანჯელესში, სპეციალურად კოსმეტოლოგებისთვის.',en:'An American professional skincare brand founded in Los Angeles in 1986 and created for skin therapists.'},
 'ZO Skin Health':{ru:'Американский бренд медицинской косметики, созданный дерматологом Зейном Обаджи. Средства для восстановления здоровья кожи.',ka:'ამერიკული სამედიცინო კოსმეტიკის ბრენდი, რომელიც დერმატოლოგმა ზეინ ობაჯიმ შექმნა.',en:'An American medical-grade skincare brand created by dermatologist Dr Zein Obagi.'},
 'GIGI':{ru:'Израильский бренд профессиональной косметики для косметологов с 1957 года. Линии для разных типов кожи и задач: New Age G4, Nutri-Peptide, Texture, Aroma Essence и другие.',ka:'ისრაელური პროფესიონალური კოსმეტიკის ბრენდი კოსმეტოლოგებისთვის 1957 წლიდან.',en:'An Israeli professional skincare brand for cosmetologists since 1957, with lines such as New Age G4, Nutri-Peptide and Texture.'},
 'iS Clinical':{ru:'Американский бренд космецевтики из Калифорнии. Формулы на основе растительных экстрактов и высоких концентраций активных ингредиентов, используется в клиниках и у дерматологов.',ka:'ამერიკული კოსმეცევტიკის ბრენდი კალიფორნიიდან, აქტიური ინგრედიენტების მაღალი კონცენტრაციით.',en:'An American cosmeceutical brand from California with plant-based, highly concentrated active formulas used by clinics and dermatologists.'},
 'MOCHEQI':{ru:'MOCHEQI Musk — уходовая косметика для волос: шампуни, кондиционеры, маски и масла для ежедневного ухода.',ka:'MOCHEQI Musk — თმის მოვლის კოსმეტიკა: შამპუნები, კონდიციონერები, ნიღბები და ზეთები ყოველდღიური მოვლისთვის.',en:'MOCHEQI Musk — hair care for every day: shampoos, conditioners, masks and oils.'}
};
const FLEAD={ru:(t,b)=>`${t} ${b} — профессиональная косметика для кожи, с которой работают косметологи. Подходит для ежедневного домашнего ухода и поддержки результата салонных процедур.`,
 ka:(t,b)=>`${t} ${b} — პროფესიონალური კოსმეტიკა კანისთვის, რომელსაც კოსმეტოლოგები იყენებენ. შესაფერისია ყოველდღიური მოვლისთვის და სალონური პროცედურების შედეგის შესანარჩუნებლად.`,
 en:(t,b)=>`${t} by ${b} — professional skincare used by cosmetologists. Suitable for daily home care and for keeping the results of salon treatments.`};
const FBENEFIT={
 dry:{ru:'Глубоко увлажняет, восстанавливает защитный барьер кожи и снимает ощущение стянутости.',ka:'ღრმად ატენიანებს, აღადგენს კანის დამცავ ბარიერს და ხსნის დაჭიმულობის შეგრძნებას.',en:'Deeply hydrates, restores the skin barrier and relieves tightness.'},
 antiage:{ru:'Помогает разгладить морщины, повышает упругость и эластичность кожи.',ka:'ხელს უწყობს ნაოჭების შემცირებას, ზრდის კანის სიმკვრივეს და ელასტიურობას.',en:'Helps smooth wrinkles and improves firmness and elasticity.'},
 bright:{ru:'Выравнивает тон, уменьшает пигментацию и возвращает коже сияние.',ka:'ათანაბრებს ტონს, ამცირებს პიგმენტაციას და კანს უბრუნებს ნათებას.',en:'Evens skin tone, reduces pigmentation and restores radiance.'},
 acne:{ru:'Регулирует выработку себума, очищает поры и уменьшает воспаления.',ka:'არეგულირებს ცხიმის გამოყოფას, წმენდს ფორებს და ამცირებს ანთებას.',en:'Balances oil production, clears pores and reduces breakouts.'},
 sensitive:{ru:'Успокаивает чувствительную кожу, уменьшает покраснения и раздражение.',ka:'ამშვიდებს მგრძნობიარე კანს, ამცირებს სიწითლეს და გაღიზიანებას.',en:'Soothes sensitive skin and reduces redness and irritation.'}
};
const FUSE={
 cleanser:{ru:'Нанесите на влажную кожу лица утром и вечером, помассируйте и смойте тёплой водой.',ka:'წაისვით სველ კანზე დილით და საღამოს, დაიზილეთ და ჩამოიბანეთ თბილი წყლით.',en:'Massage onto damp skin morning and evening, then rinse with warm water.'},
 toner:{ru:'После очищения нанесите на ватный диск или ладони и распределите по лицу.',ka:'გაწმენდის შემდეგ წაისვით ბამბის დისკზე ან ხელისგულებზე და გაანაწილეთ სახეზე.',en:'After cleansing, apply with a cotton pad or your palms over the face.'},
 serum:{ru:'Нанесите несколько капель на очищенную кожу перед кремом.',ka:'წაისვით რამდენიმე წვეთი გაწმენდილ კანზე კრემის წინ.',en:'Apply a few drops to clean skin before your cream.'},
 cream:{ru:'Нанесите на очищенную кожу лица и шеи лёгкими движениями до впитывания.',ka:'წაისვით გაწმენდილ სახისა და კისრის კანზე მსუბუქი მოძრაობებით შეწოვამდე.',en:'Smooth over clean face and neck until absorbed.'},
 eye:{ru:'Нанесите небольшое количество вокруг глаз похлопывающими движениями безымянного пальца.',ka:'წაისვით მცირე რაოდენობა თვალების ირგვლივ არათითის მსუბუქი შეხებით.',en:'Pat a small amount around the eyes with your ring finger.'},
 mask:{ru:'Нанесите на очищенную кожу, оставьте на 10–15 минут и смойте. Используйте 1–2 раза в неделю.',ka:'წაისვით გაწმენდილ კანზე, დატოვეთ 10–15 წუთით და ჩამოიბანეთ. გამოიყენეთ კვირაში 1–2-ჯერ.',en:'Apply to clean skin, leave for 10–15 minutes and rinse. Use 1–2 times a week.'},
 peel:{ru:'Используйте по инструкции на упаковке, обычно 1–3 раза в неделю. Днём обязательно наносите SPF.',ka:'გამოიყენეთ შეფუთვაზე მითითებით, ჩვეულებრივ კვირაში 1–3-ჯერ. დღისით აუცილებლად წაისვით SPF.',en:'Use as directed on the pack, usually 1–3 times a week. Always wear SPF during the day.'},
 spf:{ru:'Нанесите последним шагом утреннего ухода за 15 минут до выхода на солнце. Обновляйте каждые 2 часа.',ka:'წაისვით დილის მოვლის ბოლო ეტაპზე, მზეზე გასვლამდე 15 წუთით ადრე. განაახლეთ ყოველ 2 საათში.',en:'Apply as the last step of your morning routine 15 minutes before sun exposure. Reapply every 2 hours.'},
 kit:{ru:'Используйте средства набора по порядку, указанному на упаковке.',ka:'გამოიყენეთ ნაკრების საშუალებები შეფუთვაზე მითითებული თანმიმდევრობით.',en:'Use the products in the order shown on the pack.'}
};
const tr=(o)=>o?(o[S.lang]||o.ru):'';
const navOf=p=>{const N=SUBNAV[p.dept];return N?Object.keys(N).find(k=>N[k].includes(p.type)):null};

function productHTML(p){
  const L=t(),Q=PT[S.lang],ok=inStock(p),fav=S.fav.includes(p.id);
  const typeName=L.type[p.type]||'';
  const crumbs=[`<a href="#" data-go="home">${H[S.lang].home}</a>`,`<a href="#shop" data-home="1">${H[S.lang].shop}</a>`];
  if(p.dept){crumbs.push(`<a href="#catalog" data-crumb-dept="${p.dept}">${L.dept[p.dept]||''}</a>`)}
  const sub=navOf(p);
  if(sub)crumbs.push(`<a href="#catalog" data-crumb-sub="${sub}" data-crumb-sdept="${p.dept}">${L.nav[sub]}</a>`);
  crumbs.push(`<a href="#catalog" data-crumb-brand="${esc(p.brand)}" data-crumb-bdept="${p.dept||''}">${esc(p.brand)}</a>`);
  const accL={ru:`${typeName} ${p.brand} — аксессуар для ухода за волосами и создания причёсок.`,ka:`${typeName} ${p.brand} — აქსესუარი თმის მოვლისა და ვარცხნილობისთვის.`,en:`${typeName} by ${p.brand} — a hair accessory for care and styling.`};
  const isFace=p.dept==='face';
  const descTxt=[(['accessory','tool'].includes(p.type)?accL[S.lang]:isFace?tr(FLEAD)(typeName,p.brand):Q.lead(typeName,p.brand)),tr((isFace?FBENEFIT:BENEFIT)[p.need]),(p.desc&&p.desc[S.lang])||''].filter(Boolean);
  const sim=P.filter(x=>x.id!==p.id&&x.type===p.type&&(x.need===p.need||x.brand===p.brand)).sort((a,b)=>(inStock(b)-inStock(a))||((b.brand===p.brand)-(a.brand===p.brand))).slice(0,4);
  const spec=[[Q.brandL,esc(p.brand)],[Q.typeL,typeName],p.need?[Q.needL,L.need[p.need]]:null,p.vol?[Q.vol,esc(p.vol)]:null,p.barcode?[Q.barcode,`<span class="mono">${esc(p.barcode)}</span>`]:null,[Q.code,String(p.id)]].filter(Boolean);
  return `<nav class="crumbs" aria-label="breadcrumbs">${crumbs.join('<span>›</span>')}</nav>
  <div class="pv">
    <div class="pv-img img">${pkg(p)}</div>
    <div class="pv-info">
      <div class="brand">${esc(p.brand)}</div>
      <h1 class="pv-name">${esc(nm(p))}</h1>
      <div class="pmeta">${desc(p)}${p.vol?' · '+esc(p.vol):''}</div>
      <div class="pv-price">${fmt(p.price)}</div>
      <div class="pv-stock ${ok?'ok':'no'}">${ok?Q.inStock:Q.outStock}</div>
      <div class="pv-actions">
        <button class="add" data-add="${p.id}" id="add-${p.id}" ${ok?'':'disabled'}>${ok?L.add:L.out}</button>
        <button class="pv-fav heart" data-fav="${p.id}" aria-pressed="${fav}" aria-label="${L.nav.fav}"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
      </div>
      <dl class="specs">${spec.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>
      <button class="linkbtn" id="shareP">${Q.share}</button>
    </div>
  </div>
  <div class="pv-tabs" role="tablist">
    ${['desc','use','brand'].map((k,i)=>`<button role="tab" data-ptab="${k}" aria-selected="${i===0}">${Q.tabs[k]}</button>`).join('')}
  </div>
  <div class="pv-panel" data-panel="desc">${descTxt.map(x=>`<p>${esc(x)}</p>`).join('')}<p class="pv-note">${Q.note}</p></div>
  <div class="pv-panel" data-panel="use" hidden><p>${esc(tr((isFace?FUSE[p.type]:USE[p.type])||USE._))}</p></div>
  <div class="pv-panel" data-panel="brand" hidden><p>${esc(tr(BRANDINFO[p.brand])||p.brand)}</p></div>
  ${sim.length?`<h2 class="pv-h2">${Q.similar}</h2><div class="grid pv-sim">${sim.map(cardHTML).join('')}</div>`:''}
  <p style="margin-top:28px"><a href="#" data-home="1" class="linkbtn">${Q.back}</a></p>`;
}

function refreshP(){if(view()==='product'||view()==='home'||view()==='salon'){const y=scrollY;route();scrollTo(0,y)}}
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-ptab],[data-home],[data-crumb-dept],[data-crumb-sub],[data-crumb-brand],#shareP');if(!el)return;
  const d=el.dataset;
  if(d.ptab){document.querySelectorAll('[data-ptab]').forEach(b=>b.setAttribute('aria-selected',b===el));document.querySelectorAll('.pv-panel').forEach(x=>x.hidden=x.dataset.panel!==d.ptab);return}
  e.preventDefault();
  if(el.id==='shareP'){const u=location.href;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>el.textContent=PT[S.lang].copied).catch(()=>{el.textContent=u});return}
  if(d.home){S.dept='all';S.cat='all';S.brand='all'}
  if(d.crumbDept){S.dept=d.crumbDept;S.cat='all';S.brand='all'}
  if(d.crumbSub){S.dept=d.crumbSdept||'hair';S.cat=d.crumbSub;S.brand='all'}
  if(d.crumbBrand){S.dept=d.crumbBdept||'all';S.cat='all';S.brand=d.crumbBrand}
  history.pushState(null,'','#shop');route();renderStatic();renderGrid();
  $('#catalog').scrollIntoView();
});
// ===== Главная, салон, навигация по разделам =====
const BOOK='https://n235464.alteg.io/';
// ссылка сразу на выбранную услугу: дальше клиент выбирает мастера и время
const bookSvc=id=>`${BOOK}company/231935/personal/select-master?o=s${id}`;
const PHONE='+995 555 27-77-00',PHONE_RAW='+995555277700';
const WA_ICON='<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.3 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 1.8a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4z"/><path fill="currentColor" d="M9.1 7.3c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5 0 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.4z"/></svg>';
const waLink=()=>'https://wa.me/'+PHONE_RAW.slice(1)+'?text='+encodeURIComponent(h().waText);
const mapEmbed=()=>`https://www.google.com/maps?q=${encodeURIComponent('LamereL Beauty Center, Zurab Gorgiladze St 98, Batumi')}&hl=${S.lang==='ka'?'ka':S.lang}&z=17&output=embed`;
const MAP='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('LamereL Beauty Center, Zurab Gorgiladze St 98, Batumi');
const H={
ru:{home:'Главная',salon:'Салон',shop:'Магазин',book:'Онлайн-запись',
 kick:'Батуми · ул. Зураба Горгиладзе, 98',
 h1:'Центр красоты и магазин профессиональной косметики',
 lead:'LamereL — один центр красоты, где собраны практически все бьюти-услуги: более 400 процедур для волос, лица, тела и ногтей. А в нашем магазине — оригинальная косметика всех категорий: уход за волосами, лицом и телом, декоративная косметика, люкс-бренды и любимые марки на каждый день.',
 bookBtn:'Записаться онлайн',waBtn:'Записаться через администратора',waText:'Здравствуйте! Хочу записаться на услугу.',shopBtn:'Перейти в магазин',
 salonT:'Салон',salonP:'Услуги и цены, онлайн-запись к мастеру в удобное время.',salonA:'Смотреть услуги',
 shopT:'Магазин',shopP:'Оригинальная косметика всех категорий: уход, декоративная, люкс и на каждый день. Бесплатная доставка по Грузии от 300 ₾.',shopA:'Смотреть товары',
 dirT:'Направления',
 aboutT:'О нас',
 about:['Мы собрали в одном месте всё, что нужно для красоты: парикмахерский зал, маникюр и подологию, эстетическую, аппаратную и инъекционную косметологию, лазерную эпиляцию, массаж, брови и ресницы, перманентный макияж и коллагеновый солярий.',
  'Наши гости приезжают со всего мира, поэтому мы говорим с вами на удобном языке и принимаем оплату картой, переводом и наличными.',
  'В магазине LamereL Beauty Shop — оригинальная косметика всех категорий: уход за волосами, лицом и телом, декоративная косметика, люкс-бренды и профессиональные марки. Чего нет в наличии, привезём под заказ.'],
 facts:[['400+','услуг'],['12','направлений'],['300 ₾','бесплатная доставка от']],
 contT:'Контакты',hoursL:'Часы работы',hours:'Ежедневно с 10:00 до 20:00',payL:'Оплата',payV:'Карта, перевод, наличные',addrL:'Адрес',addr:'Батуми, ул. Зураба Горгиладзе, 98',phoneL:'Телефон',map:'Открыть на карте',wa:'Написать в WhatsApp',
 svcT:'Услуги салона',svcNote:'Цены указаны в лари. «от» означает, что точная стоимость зависит от зоны, длины волос или препарата — мастер уточнит её на консультации.',
 allSvc:'Все',from:'от',free:'бесплатно',ask:'по консультации',bookS:'Записаться',min:'мин',hr:'ч',svcSearch:'Найти услугу',noSvc:'Ничего не нашлось. Позвоните нам, и мы подскажем.',svcLoading:'Загружаем услуги…',
 svcEmpty:'Список услуг скоро появится. Записаться можно онлайн или по телефону.'},
ka:{home:'მთავარი',salon:'სალონი',shop:'მაღაზია',book:'ონლაინ ჩაწერა',
 kick:'ბათუმი · ზურაბ გორგილაძის ქ. 98',
 h1:'სილამაზის ცენტრი და პროფესიონალური კოსმეტიკის მაღაზია',
 lead:'LamereL — ერთი სილამაზის ცენტრი, სადაც თითქმის ყველა ბიუტი მომსახურებაა: 400-ზე მეტი პროცედურა თმის, სახის, სხეულისა და ფრჩხილებისთვის. ჩვენს მაღაზიაში კი — ყველა კატეგორიის ორიგინალური კოსმეტიკა: თმის, სახისა და სხეულის მოვლა, დეკორატიული კოსმეტიკა, ლუქს ბრენდები და ყოველდღიური საყვარელი ბრენდები.',
 bookBtn:'ონლაინ ჩაწერა',waBtn:'ჩაწერა ადმინისტრატორთან',waText:'გამარჯობა! მინდა ჩავეწერო მომსახურებაზე.',shopBtn:'მაღაზიაში გადასვლა',
 salonT:'სალონი',salonP:'მომსახურებები და ფასები, ონლაინ ჩაწერა სასურველ დროს.',salonA:'მომსახურებების ნახვა',
 shopT:'მაღაზია',shopP:'ყველა კატეგორიის ორიგინალური კოსმეტიკა: მოვლა, დეკორატიული, ლუქსი და ყოველდღიური. უფასო მიწოდება საქართველოში 300 ₾-დან.',shopA:'პროდუქტების ნახვა',
 dirT:'მიმართულებები',
 aboutT:'ჩვენ შესახებ',
 about:['ერთ სივრცეში გავაერთიანეთ ყველაფერი სილამაზისთვის: თმის დარბაზი, მანიკიური და პოდოლოგია, ესთეტიკური, აპარატული და ინექციური კოსმეტოლოგია, ლაზერული ეპილაცია, მასაჟი, წარბები და წამწამები, პერმანენტული მაკიაჟი და კოლაგენური სოლარიუმი.',
  'ჩვენთან სტუმრები მთელი მსოფლიოდან მოდიან, ამიტომ გესაუბრებით თქვენთვის მოსახერხებელ ენაზე და ვიღებთ გადახდას ბარათით, გადარიცხვით და ნაღდი ფულით.',
  'LamereL Beauty Shop-ში — ყველა კატეგორიის ორიგინალური კოსმეტიკა: თმის, სახისა და სხეულის მოვლა, დეკორატიული კოსმეტიკა, ლუქს და პროფესიონალური ბრენდები. რაც მარაგში არ არის, შეკვეთით ჩამოვიტანთ.'],
 facts:[['400+','მომსახურება'],['12','მიმართულება'],['300 ₾','უფასო მიწოდება']],
 contT:'კონტაქტი',hoursL:'სამუშაო საათები',hours:'ყოველდღე 10:00–20:00',payL:'გადახდა',payV:'ბარათი, გადარიცხვა, ნაღდი',addrL:'მისამართი',addr:'ბათუმი, ზურაბ გორგილაძის ქ. 98',phoneL:'ტელეფონი',map:'რუკაზე ნახვა',wa:'მოგვწერეთ WhatsApp-ში',
 svcT:'სალონის მომსახურებები',svcNote:'ფასები მითითებულია ლარში. „-დან“ ნიშნავს, რომ ზუსტი ღირებულება დამოკიდებულია ზონაზე, თმის სიგრძეზე ან პრეპარატზე.',
 allSvc:'ყველა',from:'-დან',free:'უფასო',ask:'კონსულტაციით',bookS:'ჩაწერა',min:'წთ',hr:'სთ',svcSearch:'მომსახურების ძებნა',noSvc:'ვერაფერი მოიძებნა. დაგვირეკეთ და დაგეხმარებით.',svcLoading:'იტვირთება…',
 svcEmpty:'მომსახურებების სია მალე გამოჩნდება. ჩაწერა შესაძლებელია ონლაინ ან ტელეფონით.'},
en:{home:'Home',salon:'Salon',shop:'Shop',book:'Book online',
 kick:'Batumi · 98 Zurab Gorgiladze St',
 h1:'Beauty center and professional cosmetics shop',
 lead:'LamereL is one beauty center with almost every beauty service in one place: more than 400 treatments for hair, face, body and nails. Our shop offers original cosmetics in every category: hair, face and body care, make-up, luxury brands and everyday favourites.',
 bookBtn:'Book online',waBtn:'Book via our administrator',waText:'Hello! I would like to book a service.',shopBtn:'Go to the shop',
 salonT:'Salon',salonP:'Services and prices, online booking at a time that suits you.',salonA:'See services',
 shopT:'Shop',shopP:'Original cosmetics in every category: care, make-up, luxury and everyday. Free delivery across Georgia from 300 ₾.',shopA:'See products',
 dirT:'What we do',
 aboutT:'About us',
 about:['Everything for beauty in one place: hair salon, manicure and podiatry, aesthetic, device and injection cosmetology, laser hair removal, massage, brows and lashes, permanent make-up and a collagen solarium.',
  'Our guests come from all over the world, so we speak your language and accept card, bank transfer and cash.',
  'LamereL Beauty Shop offers original cosmetics in every category: hair, face and body care, make-up, luxury and professional brands. Anything we don’t stock, we can order for you.'],
 facts:[['400+','services'],['12','service areas'],['300 ₾','free delivery from']],
 contT:'Contacts',hoursL:'Opening hours',hours:'Every day 10:00–20:00',payL:'Payment',payV:'Card, transfer, cash',addrL:'Address',addr:'98 Zurab Gorgiladze St, Batumi',phoneL:'Phone',map:'Open in maps',wa:'Message on WhatsApp',
 svcT:'Salon services',svcNote:'Prices in GEL. “from” means the final price depends on the area, hair length or product — your specialist will confirm it.',
 allSvc:'All',from:'from',free:'free',ask:'on consultation',bookS:'Book',min:'min',hr:'h',svcSearch:'Find a service',noSvc:'Nothing found. Call us and we will help.',svcLoading:'Loading services…',
 svcEmpty:'The service list is coming soon. You can book online or by phone.'}
};
// направления: группы категорий Altegio
const DIRS=[
 {k:'offers',ic:'🎁',n:{ru:'Спецпредложения',ka:'სპეც. შეთავაზებები',en:'Special offers'},c:[13490722]},
 {k:'laser',ic:'✨',n:{ru:'Лазерная эпиляция',ka:'ლაზერული ეპილაცია',en:'Laser hair removal'},c:[7239117,7239112,12906472,13644329,6543931,13903235]},
 {k:'electro',ic:'⚡',n:{ru:'Электроэпиляция',ka:'ელექტროეპილაცია',en:'Electrolysis'},c:[13234291]},
 {k:'hair',ic:'💇‍♀️',n:{ru:'Волосы',ka:'თმა',en:'Hair'},c:[13489348,10853988]},
 {k:'nails',ic:'💅',n:{ru:'Маникюр и педикюр',ka:'მანიკიური და პედიკიური',en:'Manicure & pedicure'},c:[7239103]},
 {k:'podo',ic:'🦶',n:{ru:'Подология',ka:'პოდოლოგია',en:'Podiatry'},c:[13534059]},
 {k:'cosm',ic:'💉',n:{ru:'Косметология',ka:'კოსმეტოლოგია',en:'Cosmetology'},c:[7072531,10853987,13292037]},
 {k:'wax',ic:'🍯',n:{ru:'Депиляция воском и нитью',ka:'ცვილით და ძაფით დეპილაცია',en:'Waxing & threading'},c:[7239107,12906474,7171919]},
 {k:'massage',ic:'💆‍♀️',n:{ru:'Массаж и коррекция тела',ka:'მასაჟი და სხეულის კორექცია',en:'Massage & body'},c:[7072522]},
 {k:'brows',ic:'👁️',n:{ru:'Брови и ресницы',ka:'წარბები და წამწამები',en:'Brows & lashes'},c:[7171915,7171916]},
 {k:'pmu',ic:'✍️',n:{ru:'Перманентный макияж',ka:'პერმანენტული მაკიაჟი',en:'Permanent make-up'},c:[7239104]},
 {k:'makeup',ic:'💄',n:{ru:'Макияж',ka:'მაკიაჟი',en:'Make-up'},c:[7239108]},
 {k:'sol',ic:'☀️',n:{ru:'Коллагеновый солярий',ka:'კოლაგენური სოლარიუმი',en:'Collagen solarium'},c:[12906473]}
];
let SV=null;S.dir='all';S.lsub='all';
const LASERS=[
 {k:'alex',c:[7239117,7239112],n:{ru:'Александритовый лазер',ka:'ალექსანდრიტის ლაზერი',en:'Alexandrite laser'},w:'755 nm',
  d:{ru:'Самый быстрый и эффективный для светлой кожи и тёмных волос. Заметный результат уже после первых процедур, крупные зоны обрабатываются быстро. Сбривать волоски перед процедурой не нужно.',
     ka:'ყველაზე სწრაფი და ეფექტური ღია კანისა და მუქი თმისთვის. შესამჩნევი შედეგი პირველივე პროცედურებიდან. პროცედურამდე თმის გაპარსვა საჭირო არ არის.',
     en:'The fastest and most effective option for fair skin and dark hair. Visible results after the first sessions; large areas are treated quickly. No need to shave before the session.'}},
 {k:'nd',c:[12906472,13644329],n:{ru:'Неодимовый лазер',ka:'ნეოდიმის ლაზერი',en:'Nd:YAG laser'},w:'1064 nm',
  d:{ru:'Проникает глубже всех и безопасен для смуглой и загорелой кожи. Хорошо справляется с жёсткими волосами и также очень хорошо работает на светлых волосах. Перед процедурой волосы нужно сбрить.',
     ka:'ყველაზე ღრმად აღწევს და უსაფრთხოა მუქი და გარუჯული კანისთვის. კარგად შორდება უხეშ თმას და ასევე ძალიან კარგად მუშაობს ღია ფერის თმაზე. პროცედურამდე თმა უნდა გაიპარსოს.',
     en:'Penetrates the deepest and is safe for darker and tanned skin. Works well on coarse hair and also very well on light hair. Hair must be shaved before the session.'}},
 {k:'diode',c:[6543931,13903235],n:{ru:'Диодный лазер',ka:'დიოდური ლაზერი',en:'Diode laser'},w:'808 nm',
  d:{ru:'Универсальный и комфортный: подходит для большинства типов кожи и волос, процедура проходит мягко. Перед процедурой волосы нужно сбрить.',
     ka:'უნივერსალური და კომფორტული: შეესაბამება კანისა და თმის უმეტეს ტიპს. პროცედურამდე თმა უნდა გაიპარსოს.',
     en:'Versatile and comfortable: suits most skin and hair types, with a gentle treatment. Hair must be shaved before the session.'}}
];
const LH={ru:{t:'У нас три вида лазерной эпиляции',p:'Какой лазер подойдёт именно вам, специалист подберёт на консультации по типу кожи и волос.',see:'Смотреть услуги',all:'Все лазеры',phone:'Запись через администратора'},
 ka:{t:'ჩვენთან ლაზერული ეპილაციის სამი სახეობაა',p:'რომელი ლაზერი მოგერგებათ, სპეციალისტი შეარჩევს კონსულტაციაზე.',see:'მომსახურებების ნახვა',all:'ყველა ლაზერი',phone:'ჩაწერა ადმინისტრატორთან'},
 en:{t:'We offer three types of laser hair removal',p:'Your specialist will choose the right laser for your skin and hair type at a consultation.',see:'See services',all:'All lasers',phone:'Book via reception'}};
const h=()=>H[S.lang];
const view=()=>{const x=location.hash;return /^#p-\d+$/.test(x)?'product':x==='#shop'?'shop':x==='#salon'?'salon':'home'};
function go(v){history.pushState(null,'',v==='home'?location.pathname+location.search:'#'+v);route()}
const durFmt=s=>{const m=Math.round((s||0)/60);if(!m)return'';const L=h();return m>=60?`${Math.floor(m/60)} ${L.hr}${m%60?' '+m%60+' '+L.min:''}`:`${m} ${L.min}`};
const priceFmt=x=>{const L=h();if(!x.pmax&&!x.pmin)return L.ask;if(!x.pmin&&x.pmax)return `0–${x.pmax} ₾`;if(x.pmin&&x.pmax&&x.pmin!==x.pmax)return S.lang==='ka'?`${x.pmin}${L.from} ₾`:`${L.from} ${x.pmin} ₾`;const p=x.pmin||x.pmax;return p+' ₾'};
const svN=x=>x.n[S.lang]||x.n.ru;

function renderSiteNav(){
  const L=h(),v=view(),act=v==='product'?'shop':v;
  $('#siteNav').innerHTML=['home','salon','shop'].map(k=>`<a href="${k==='home'?'#':'#'+k}" data-go="${k}" aria-current="${act===k?'page':'false'}">${L[k]}</a>`).join('')+
    `<a class="booklink" href="${BOOK}" target="_blank" rel="noopener">${L.book}</a>`;
  $('#q').placeholder=$('#q2').placeholder=v==='salon'?L.svcSearch:t().search;
  const sm=$('.logo small');if(sm)sm.textContent=(v==='shop'||v==='product')?'Beauty Shop':'Beauty Center';
}
function renderHome(){
  const L=h();
  $('#home').innerHTML=`
  <section class="hm-hero"><div class="wrap hm-grid"><div>
    <p class="kick">${L.kick}</p>
    <h1>${L.h1}</h1>
    <p class="hm-lead">${L.lead}</p>
    <div class="hm-ctas"><a class="btn pri" href="${BOOK}" target="_blank" rel="noopener">${L.bookBtn}</a><a class="btn wa" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON}${L.waBtn}</a><a class="btn" href="#shop" data-go="shop">${L.shopBtn}</a></div></div>
    <figure class="hm-photo" style="margin:0"><img src="photos/facade.jpg" alt="LamereL Beauty Center" onerror="this.parentNode.remove()"></figure>
  </div></section>
  <section class="wrap hm-two">
    <a class="hm-tile salon" href="#salon" data-go="salon"><span class="hm-n">01</span><h2>${L.salonT}</h2><p>${L.salonP}</p><span class="hm-a">${L.salonA} →</span></a>
    <a class="hm-tile shop" href="#shop" data-go="shop"><span class="hm-n">02</span><h2>${L.shopT}</h2><p>${L.shopP}</p><span class="hm-a">${L.shopA} →</span></a>
  </section>
  <section class="wrap hm-sec"><h2 class="hm-h">${L.dirT}</h2>
    <div class="dirs">${DIRS.map(d=>`<a href="#salon" data-dir="${d.k}"><span class="ic" aria-hidden="true">${d.ic}</span>${d.n[S.lang]}</a>`).join('')}</div>
  </section>
  <section class="wrap hm-sec hm-about"><h2 class="hm-h">${L.aboutT}</h2>
    <div class="ab-grid"><div>${L.about.map(p=>`<p>${p}</p>`).join('')}</div>
    <dl class="facts">${L.facts.map(f=>`<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('')}</dl></div>
  </section>
  ${contactsHTML()}`;
}
function contactsHTML(){
  const L=h();
  return `<section class="wrap hm-sec" id="contacts"><h2 class="hm-h">${L.contT}</h2>
    <div class="cont">
      <div><span class="cl">${L.addrL}</span><p><a class="addr" href="${MAP}" target="_blank" rel="noopener">📍 ${L.addr}</a></p><a href="${MAP}" target="_blank" rel="noopener">${L.map} →</a></div>
      <div><span class="cl">${L.hoursL}</span><p>🕙 ${L.hours}</p></div>
      <div><span class="cl">${L.phoneL}</span><p><a href="tel:${PHONE_RAW}">📞 ${PHONE}</a></p><a class="walink" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON}${L.wa}</a></div>
      <div><span class="cl">${L.book}</span><p>${L.salonP}</p><a class="btn pri" href="${BOOK}" target="_blank" rel="noopener">${L.bookBtn}</a></div>
    </div>
    <div class="mapbox"><iframe title="Google Maps — LamereL" src="${mapEmbed()}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
  </section>`;
}
function footHTML(upd){
  const L=h(),T0=t();
  return `<div class="fl"><b>LamereL</b><p style="margin-top:10px">${L.kick}</p>
    <p style="margin-top:10px"><a href="${BOOK}" target="_blank" rel="noopener">${L.book} →</a></p>${upd?`<p style="margin-top:10px;opacity:.6;font-size:12px">${T0.updated}: ${upd}</p>`:''}</div>
    <div><h4>${L.addrL}</h4><p><a href="${MAP}" target="_blank" rel="noopener">${L.addr}</a></p><h4 style="margin-top:14px">${L.hoursL}</h4><p>${L.hours}</p></div>
    <div><h4>${L.phoneL}</h4><p><a href="tel:${PHONE_RAW}">${PHONE}</a></p><p><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp</a></p><h4 style="margin-top:14px">${L.payL}</h4><p>${L.payV}</p></div>`;
}
function renderSalon(){
  const L=h();
  if(!SV){$('#salon').innerHTML=`<div class="wrap sec"><p class="empty">${L.svcLoading}</p></div>`;return}
  const cats=SV.categories||[],svs=SV.services||[];
  const q=S.q.trim().toLowerCase();
  const dirOf=c=>(DIRS.find(d=>d.c.includes(c))||{k:'other'}).k;
  const dirs=DIRS.filter(d=>svs.some(x=>d.c.includes(x.cat)));
  const lz=S.dir==='laser'&&S.lsub!=='all'?LASERS.find(l=>l.k===S.lsub):null;
  const list=svs.filter(x=>(S.dir==='all'||dirOf(x.cat)===S.dir)&&(!lz||lz.c.includes(x.cat))&&(!q||Object.values(x.n).join(' ').toLowerCase().includes(q)));
  const order=DIRS.flatMap(d=>d.c);
  const byCat=cats.filter(c=>list.some(x=>x.cat===c.id)).sort((a,b)=>{const ia=order.indexOf(a.id),ib=order.indexOf(b.id);return (ia<0?999:ia)-(ib<0?999:ib)});
  $('#salon').innerHTML=`<div class="wrap sec">
    <div class="sec-h svh"><h2>${L.svcT}</h2><a class="btn pri sm" href="${BOOK}" target="_blank" rel="noopener">${L.bookBtn}</a></div>
    <div class="subrow dirrow">${['all',...dirs.map(d=>d.k)].map(k=>`<button class="schip dchip${k==='offers'?' hot':''}" data-dir="${k}" aria-pressed="${S.dir===k}">${k==='all'?L.allSvc:`<span class="di" aria-hidden="true">${DIRS.find(d=>d.k===k).ic}</span>`+DIRS.find(d=>d.k===k).n[S.lang]}</button>`).join('')}</div>
    <p class="svnote">${L.svcNote}</p>
    ${S.dir==='laser'?laserIntro(svs):''}
    ${svs.length?(byCat.length?byCat.map(c=>`<details class="svcat"${S.dir!=='all'||q?' open':''}><summary><h3>${esc(svN(c))}<span>${list.filter(x=>x.cat===c.id).length}</span></h3></summary>
      <ul class="svl">${list.filter(x=>x.cat===c.id).sort(svSort).map(x=>`<li><div class="svn">${esc(svN(x))}${durFmt(x.dur)?`<small>${durFmt(x.dur)}</small>`:''}</div><div class="svp">${priceFmt(x)}</div><a class="svb" href="${bookSvc(x.id)}" target="_blank" rel="noopener">${L.bookS}</a></li>`).join('')}</ul></details>`).join(''):`<p class="empty">${L.noSvc}</p>`):`<p class="empty">${L.svcEmpty}</p>`}
  </div>${contactsHTML()}`;
}
// в лазерной эпиляции сначала комплексы: XL, L, M, S, XS, затем наборы зон (с «+»), затем отдельные зоны
const KX=['XL','L','M','S','XS'];
function svRank(x){
  if(!LASERS.some(l=>l.c.includes(x.cat)))return 99;
  const t=x.n.ru+' '+x.n.en;const m=t.match(/(^|\s)(XL|XS|L|M|S)\s+(комплекс|complex)/i);
  if(m)return KX.indexOf(m[2].toUpperCase());
  return /\+/.test(t)?10:99;
}
function svSort(a,b){const ra=svRank(a),rb=svRank(b);if(ra!==rb)return ra-rb;if(ra===10)return (b.pmin||0)-(a.pmin||0);return (a.w||0)-(b.w||0)||svN(a).localeCompare(svN(b))}
function laserIntro(svs){
  const L=LH[S.lang];
  return `<div class="lz"><h3 class="lz-t">${L.t}</h3><p class="lz-p">${L.p}</p>
  <div class="lz-g">${LASERS.map(l=>{const n=svs.filter(x=>l.c.includes(x.cat)).length;
    return `<div class="lz-c${S.lsub===l.k?' on':''}"><span class="lz-w">${l.w}</span><h4>${l.n[S.lang]}</h4><p>${l.d[S.lang]}</p>
    ${n?`<button class="lz-b" data-lsub="${l.k}">${L.see} (${n}) →</button>`:`<a class="lz-b" href="tel:${PHONE_RAW}">${L.phone} →</a>`}</div>`}).join('')}</div>
  ${S.lsub!=='all'?`<button class="lz-all" data-lsub="all">← ${L.all}</button>`:''}</div>`;
}
function route(){
  const v=view();
  const show=(sel,on)=>{const e=$(sel);if(e)e.hidden=!on};
  show('#home',v==='home');show('#salon',v==='salon');show('#catalog',v==='shop');show('#pview',v==='product');
  show('.brands',v==='shop'||v==='product');show('nav.cats',v==='shop'||v==='product');show('section.band',v==='shop'||v==='product');
  if(v==='home')renderHome();
  if(v==='salon')renderSalon();
  if(v==='product'){
    const id=+location.hash.slice(3),p=S.loaded?byId(id):null;
    $('#pview').innerHTML=S.loaded?(p?productHTML(p):`<p class="empty">${PT[S.lang].notFound}</p>`):`<p class="empty">${t().loading}</p>`;
    document.title=p?`${p.brand} ${nm(p)} — LamereL Beauty Shop`:'LamereL';
  } else document.title=v==='shop'?'LamereL Beauty Shop':'LamereL Beauty Center — Батуми';
  renderSiteNav();
  const upd=UPDATED?new Date(UPDATED).toLocaleString(S.lang==='en'?'en-GB':(S.lang==='ka'?'ka-GE':'ru-RU'),{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}):'';
  $('#foot').innerHTML=footHTML(upd);
}
let lastView=null;
window.addEventListener('hashchange',()=>{route();if(view()!==lastView)window.scrollTo(0,0);lastView=view()});
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-go],[data-dir],[data-lsub]');if(!el)return;
  const d=el.dataset;
  if(d.go){e.preventDefault();go(d.go);window.scrollTo(0,0);return}
  if(d.lsub){S.lsub=d.lsub;renderSalon();const g=document.querySelector('.svcat');if(g&&d.lsub!=='all')g.scrollIntoView({behavior:'smooth',block:'start'});return}
  if(d.dir){e.preventDefault();S.dir=d.dir;S.lsub='all';if(view()!=='salon'){go('salon');window.scrollTo(0,0)}else renderSalon()}
});
fetch('services.json?v='+Date.now()).then(r=>r.ok?r.json():{categories:[],services:[]}).catch(()=>({categories:[],services:[]})).then(d=>{SV=d;if(view()==='salon')renderSalon()});
