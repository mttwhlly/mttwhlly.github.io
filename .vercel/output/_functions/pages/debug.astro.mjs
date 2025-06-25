import { c as createAstro, a as createComponent, r as renderHead, b as renderScript, d as renderTemplate } from '../chunks/astro/server_D1QKJVsD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://mattwhalley.com", "SSR": true};
const $$Astro = createAstro("https://mattwhalley.com");
const $$Debug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Debug;
  const environment = Object.assign(__vite_import_meta_env__, { SPOTIFY_CLIENT_ID: "a385f63458f54b75acd2f9e935ddd708", SPOTIFY_CLIENT_SECRET: "a408b5969c204b7f8019a918f1261641", SPOTIFY_REFRESH_TOKEN: "AQA1r5Vp1w0J9AL0O8a3vZpwBn5R9st6lWKJvBSWcDkCplC8XTqC5QS4cH3TnhJGnfP-xtJ2oFTd2wMzvX_ouLbQkMIQJ_k-hHv3i1JHguobR2AlS86SbkLEpDO3vDnu1Yw" });
  const envKeys = Object.keys(environment);
  const safeEnv = {};
  for (const key of envKeys) {
    safeEnv[key] = environment[key] ? "[SET]" : "[NOT SET]";
  }
  const serverProtocol = Astro2.request.url.startsWith("https") ? "https" : "http";
  const serverHost = Astro2.url.host;
  const fullUrl = Astro2.url.toString();
  return renderTemplate`<html data-astro-cid-6tqurwfq> <head><title>Astro Server Debug</title>${renderHead()}</head> <body data-astro-cid-6tqurwfq> <h1 data-astro-cid-6tqurwfq>Astro Server Configuration Debug</h1> <div class="card" data-astro-cid-6tqurwfq> <h2 data-astro-cid-6tqurwfq>Server Information</h2> <p data-astro-cid-6tqurwfq><strong data-astro-cid-6tqurwfq>Server URL:</strong> ${fullUrl}</p> <p data-astro-cid-6tqurwfq><strong data-astro-cid-6tqurwfq>Protocol:</strong> ${serverProtocol}</p> <p data-astro-cid-6tqurwfq><strong data-astro-cid-6tqurwfq>Host:</strong> ${serverHost}</p> </div> <div class="card" data-astro-cid-6tqurwfq> <h2 data-astro-cid-6tqurwfq>Environment Variables</h2> <p data-astro-cid-6tqurwfq>Spotify API credentials (should show as [SET]):</p> <pre data-astro-cid-6tqurwfq><code data-astro-cid-6tqurwfq>SPOTIFY_CLIENT_ID: ${safeEnv.SPOTIFY_CLIENT_ID || "[NOT SET]"}
SPOTIFY_CLIENT_SECRET: ${safeEnv.SPOTIFY_CLIENT_SECRET || "[NOT SET]"}
SPOTIFY_REFRESH_TOKEN: ${safeEnv.SPOTIFY_REFRESH_TOKEN || "[NOT SET]"}</code></pre> </div> <div class="card" data-astro-cid-6tqurwfq> <h2 data-astro-cid-6tqurwfq>API Endpoint Test</h2> <p data-astro-cid-6tqurwfq>Test the Spotify API endpoint with the buttons below:</p> <button class="test-button" id="testGet" data-astro-cid-6tqurwfq>Test GET /api/spotify</button> <button class="test-button" id="testPost" data-astro-cid-6tqurwfq>Test POST /api/spotify</button> <div class="test-results" id="results" data-astro-cid-6tqurwfq> <p data-astro-cid-6tqurwfq>Results will appear here...</p> </div> </div> ${renderScript($$result, "/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/debug.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/debug.astro", void 0);
const $$file = "/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/debug.astro";
const $$url = "/debug";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Debug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
