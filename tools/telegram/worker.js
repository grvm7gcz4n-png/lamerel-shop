// Cloudflare Worker «lamerel-orders»:
//  1) принимает заказ с сайта и пересылает его в Telegram-группу;
//  2) принимает фото товаров, присланные боту @lamerel_bot, и ставит их на сайт.
//
// Секреты (Settings → Variables and Secrets, тип Secret):
//   BOT_TOKEN — токен бота от @BotFather
//   CHAT_ID   — id группы заказов (фото принимаются только от участников этой группы)
//   GH_TOKEN  — токен GitHub с правом Contents: Read and write для репозитория lamerel-shop
// Один раз после установки откройте в браузере: https://<адрес воркера>/setup-bot
const ALLOWED = ['https://grvm7gcz4n-png.github.io', 'https://lamerel.ge', 'https://www.lamerel.ge'];
const REPO = 'grvm7gcz4n-png/lamerel-shop';
const PRODUCTS = `https://raw.githubusercontent.com/${REPO}/main/products.json`;

function cors(origin) {
  const ok = ALLOWED.includes(origin) || /\.claudeusercontent\.com$|\.claude\.ai$/.test(new URL(origin || 'https://x').hostname);
  return {
    'Access-Control-Allow-Origin': ok ? origin : ALLOWED[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

async function secretOf(env) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('lamerel:' + env.BOT_TOKEN));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 40);
}

const tg = (env, method, body) => fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
}).then(r => r.json());

const gh = (env, path, init = {}) => fetch(`https://api.github.com/repos/${REPO}/${path}`, {
  ...init,
  headers: { 'Authorization': `Bearer ${env.GH_TOKEN}`, 'Accept': 'application/vnd.github+json', 'User-Agent': 'lamerel-bot', 'X-GitHub-Api-Version': '2022-11-28', ...(init.headers || {}) },
});

function b64(buf) {
  const b = new Uint8Array(buf); let s = '';
  for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
  return btoa(s);
}

const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zа-яё0-9ა-ჿ]+/g, ' ').trim();

async function products() {
  const r = await fetch(PRODUCTS, { cf: { cacheTtl: 120 } });
  const j = await r.json();
  return Array.isArray(j) ? j : (j.products || []);
}

function find(list, caption) {
  const c = caption.trim();
  const digits = c.replace(/\D/g, '');
  if (/^\d{6,}$/.test(c.replace(/\s/g, ''))) {
    const hit = list.filter(p => String(p.id) === digits || String(p.barcode || '') === digits || (p.alt_ids || []).map(String).includes(digits));
    if (hit.length) return hit;
  }
  const words = norm(c).split(' ').filter(w => w.length > 1);
  if (!words.length) return [];
  return list.filter(p => {
    const hay = ' ' + norm([p.brand, p.name, p.name_ru, p.vol, p.id, p.barcode].join(' ')) + ' ';
    return words.every(w => hay.includes(w));
  });
}

const label = p => `${p.brand ? p.brand + ' — ' : ''}${p.name_ru || p.name}${p.vol ? ', ' + p.vol : ''}`;

async function isMember(env, userId) {
  const r = await tg(env, 'getChatMember', { chat_id: env.CHAT_ID, user_id: userId });
  return r.ok && ['creator', 'administrator', 'member'].includes(r.result.status);
}

async function putFile(env, path, contentB64, message) {
  let sha;
  const ex = await gh(env, `contents/${path}`);
  if (ex.ok) sha = (await ex.json()).sha;
  const r = await gh(env, `contents/${path}`, { method: 'PUT', body: JSON.stringify({ message, content: contentB64, branch: 'main', ...(sha ? { sha } : {}) }) });
  return r.ok;
}

async function delFile(env, path, message) {
  const ex = await gh(env, `contents/${path}`);
  if (!ex.ok) return false;
  const { sha } = await ex.json();
  const r = await gh(env, `contents/${path}`, { method: 'DELETE', body: JSON.stringify({ message, sha, branch: 'main' }) });
  return r.ok;
}

const HELP = 'Чтобы поставить фото на сайт: отправьте мне фото товара и в подписи напишите штрихкод, номер товара или название (например: «Kerastase Elixir Ultime масло»).\n\nОдно фото — одно сообщение с подписью.\nУбрать своё фото: напишите «удалить 12345678» (номер товара).';

async function onUpdate(env, u) {
  const m = u.message || u.edited_message;
  if (!m || !m.from) return;
  const chat = m.chat.id;
  const say = text => tg(env, 'sendMessage', { chat_id: chat, text, reply_to_message_id: m.message_id, disable_web_page_preview: true });
  if (m.chat.type !== 'private') return;                       // фото принимаем только в личке с ботом
  if (!(await isMember(env, m.from.id))) return say('Эта функция только для сотрудников LamereL.');

  const text = (m.caption || m.text || '').trim();
  const del = text.match(/^(?:удалить|\/delete)\s+(\d{6,})/i);
  if (del) {
    let ok = false;
    for (const ext of ['jpg', 'png']) ok = (await delFile(env, `photos/u/${del[1]}.${ext}`, `Фото товара ${del[1]} удалено через бота`)) || ok;
    return say(ok ? '🗑 Фото убрано. На сайте изменится примерно через 10 минут.' : 'Своего фото у этого товара нет.');
  }

  let fileId, ext = 'jpg';
  if (m.photo && m.photo.length) fileId = m.photo[m.photo.length - 1].file_id;
  else if (m.document && /^image\/(jpeg|png)$/.test(m.document.mime_type || '')) { fileId = m.document.file_id; ext = m.document.mime_type === 'image/png' ? 'png' : 'jpg'; }
  if (!fileId) return say(HELP);
  if (!text) return say('Добавьте подпись к фото: штрихкод, номер товара или название. Отправьте фото ещё раз с подписью.');

  const hits = find(await products(), text);
  if (!hits.length) return say(`Не нашёл товар по подписи «${text}». Попробуйте штрихкод с упаковки или другое название.`);
  if (hits.length > 1) {
    const list = hits.slice(0, 10).map(p => `${p.id} — ${label(p)}`).join('\n');
    return say(`Нашёл несколько товаров (${hits.length}). Отправьте фото ещё раз и в подписи укажите номер:\n\n${list}${hits.length > 10 ? '\n…' : ''}`);
  }
  const p = hits[0];
  const f = await tg(env, 'getFile', { file_id: fileId });
  if (!f.ok) return say('Не удалось получить фото из Telegram, попробуйте ещё раз.');
  if ((f.result.file_size || 0) > 8_000_000) return say('Фото слишком большое (больше 8 МБ). Отправьте обычным фото, не файлом.');
  const img = await fetch(`https://api.telegram.org/file/bot${env.BOT_TOKEN}/${f.result.file_path}`);
  if (!img.ok) return say('Не удалось скачать фото, попробуйте ещё раз.');
  const buf = await img.arrayBuffer();
  const other = ext === 'jpg' ? 'png' : 'jpg';
  await delFile(env, `photos/u/${p.id}.${other}`, `Фото товара ${p.id}: замена`);
  const ok = await putFile(env, `photos/u/${p.id}.${ext}`, b64(buf), `Фото товара ${p.id} из Telegram`);
  return say(ok ? `✅ Фото поставлено: ${label(p)} (№ ${p.id}).\nНа сайте появится примерно через 10 минут.` : '⚠️ Не удалось сохранить фото на сайт. Напишите Claude, он проверит доступ.');
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (url.pathname === '/setup-bot' && req.method === 'GET') {
      const r = await tg(env, 'setWebhook', { url: `${url.origin}/tg`, secret_token: await secretOf(env), allowed_updates: ['message', 'edited_message'] });
      const g = await gh(env, '');
      return new Response(`Telegram: ${r.ok ? 'бот подключён ✅' : 'ошибка — ' + r.description}\nGitHub: ${g.ok ? 'доступ есть ✅' : 'нет доступа — проверьте GH_TOKEN (' + g.status + ')'}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    if (url.pathname === '/tg' && req.method === 'POST') {
      if (req.headers.get('X-Telegram-Bot-Api-Secret-Token') !== await secretOf(env)) return new Response('forbidden', { status: 403 });
      const u = await req.json().catch(() => null);
      if (u) ctx.waitUntil(onUpdate(env, u).catch(e => console.log('bot error', e && e.message)));
      return new Response('ok');
    }

    // заказы с сайта
    const origin = req.headers.get('Origin') || '';
    const h = cors(origin);
    if (req.method === 'OPTIONS') return new Response(null, { headers: h });
    if (req.method === 'GET') return new Response('LamereL orders: ok', { headers: h });
    if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: h });
    let body;
    try { body = await req.json(); } catch { return new Response('Bad JSON', { status: 400, headers: h }); }
    const text = String(body.text || '').slice(0, 3800).trim();
    if (text.length < 20 || !/\d{6,}/.test(text.replace(/\D/g, ''))) return new Response('Empty order', { status: 400, headers: h });
    const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text, disable_web_page_preview: true }),
    });
    return new Response(r.ok ? 'ok' : 'telegram error', { status: r.ok ? 200 : 502, headers: h });
  },
};
