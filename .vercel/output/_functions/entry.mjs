import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_KRpFqrJS.mjs';
import { manifest } from './manifest_Us78AU-f.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/spotify.astro.mjs');
const _page2 = () => import('./pages/debug.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.6.1_@types+node@22.14.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/spotify.ts", _page1],
    ["src/pages/debug.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b6d68e2f-8646-4653-a0db-ef46c79000af",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
