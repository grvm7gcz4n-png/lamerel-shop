# Как добавлять бренд из Altegio в каталог

Филиал Altegio: location_id 231935. Склад магазина «Продажа»: inventory_id 438457.
Бренды — подкатегории категории «Товары для продажи» (594251):
Davines 748233 · Balmain 932351 · KERASTASE 865448 · KEUNE 791804 · Loreal/Matrix 702068 · Philip Martin's 728170
(уже добавлены: CHI 1081956 · BRAE 1002242 · MOCHEQI 1026089)

1. Список товаров бренда: api_call_operation `get_product_category_composition`
   {location_id: 231935, category_id: <id>, page_size: 20, page: N} — по 20 штук, страницы до конца (children_count).
2. Цена и остаток: `products_search` {location_id: 231935, product_ids: [до 50 id]}.
   Цена = sale_price. Остаток = sale_quantity на складе inventory_id 438457, округлить вниз, минимум 0.
3. Товары с sale_price = 0 не добавлять (салонные расходники, пробники, краски, оксиды).
4. Добавить в словарь P в tools/catalog_src.py блок бренда:
   id: ('БРЕНД', 'Официальное название на английском', 'объём', тип, назначение, цена, остаток)
   - Название: официальное английское название продукта без бренда, без опечаток; грузинские/русские названия перевести
     на официальное название линейки бренда. Объём отдельно ('250 ml', '200 g') если известен.
   - Бренд: 'Davines', 'Balmain', 'Kérastase', 'Keune', "L'Oréal Professionnel" или 'Matrix' (по линейке), "Philip Martin's".
   - тип: shampoo, conditioner, mask, leavein, oil, serum, styling, ampoule, tonic, kit, perfume, accessory, tool
   - назначение: blonde, repair, volume, curls, hairloss, shine, oily, dry, color, scalp, hold, heat, '' (пусто для аксессуаров)
5. Если появились новые бренды — добавить их цвета в BRANDLOOK в src/script.js (необязательно).
6. `python3 tools/build.py`, проверить `node` синтаксис скрипта index.html, commit, `git fetch origin main && git rebase origin/main`, push в main.
7. Русские названия: для каждого добавленного товара добавь запись в словарь RU в tools/catalog_src.py:
   id: 'Тип по-русски + назначение + название линейки латиницей', например 'Шампунь для объёма Gorgeous Volume',
   'Маска для светлых волос Blonde Repair', 'Термозащитный спрей Thermique'. Без бренда и без объёма.
