// Cloudflare Worker: принимает заказ с сайта и пересылает его в Telegram.
// Секреты задаются в настройках воркера (Settings → Variables and Secrets):
//   BOT_TOKEN — токен бота от @BotFather (тип Secret)
//   CHAT_ID   — id чата или группы, куда приходят заказы
// Токен хранится только здесь, на сайте его нет.
const ALLOWED = ['https://grvm7gcz4n-png.github.io', 'https://lamerel.ge', 'https://www.lamerel.ge'];

function cors(origin) {
  const ok = ALLOWED.includes(origin) || /\.claudeusercontent\.com$|\.claude\.ai$/.test(new URL(origin || 'https://x').hostname);
  return {
    'Access-Control-Allow-Origin': ok ? origin : ALLOWED[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(req, env) {
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
