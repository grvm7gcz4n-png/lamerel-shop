// Cloudflare Worker «lamerel-sync»: каждые 10 минут запускает синхронизацию сайта с Altegio на GitHub.
// Настройки воркера:
//   Settings → Triggers → Cron Triggers → Add: */10 * * * *
//   Settings → Variables and Secrets: GH_TOKEN (Secret) — токен GitHub с правом Actions: Read and write для репозитория lamerel-shop
const REPO = 'grvm7gcz4n-png/lamerel-shop';
const WORKFLOW = 'sync.yml';

async function run(env) {
  const r = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.GH_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'lamerel-sync-worker',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ ref: 'main' }),
  });
  return r.status; // 204 — запущено
}

export default {
  async scheduled(event, env, ctx) { ctx.waitUntil(run(env)); },
  async fetch(req, env) {
    const st = await run(env);
    return new Response(st === 204 ? 'Синхронизация запущена' : `Ошибка GitHub: ${st}`, { status: st === 204 ? 200 : 500 });
  },
};
