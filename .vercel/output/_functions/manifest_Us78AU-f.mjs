import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_D1QKJVsD.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DuqfC_Gm.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/","cacheDir":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/node_modules/.astro/","outDir":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/dist/","srcDir":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/src/","publicDir":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/public/","buildClientDir":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/dist/client/","buildServerDir":"file:///Users/mattwhalley/Projects/mttwhlly.github.io/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.6.1_@types+node@22.14.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/spotify","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/spotify\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"spotify","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/spotify.ts","pathname":"/api/spotify","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{font-family:system-ui,sans-serif;padding:2rem;max-width:800px;margin:0 auto;line-height:1.6}h1[data-astro-cid-6tqurwfq],h2[data-astro-cid-6tqurwfq]{color:#4f46e5}.card[data-astro-cid-6tqurwfq]{background-color:#f9fafb;border-radius:.5rem;padding:1.5rem;margin-bottom:1.5rem;border:1px solid #e5e7eb}.success[data-astro-cid-6tqurwfq]{color:#047857;background-color:#ecfdf5;border-color:#a7f3d0}.warning[data-astro-cid-6tqurwfq]{color:#b45309;background-color:#fffbeb;border-color:#fcd34d}pre[data-astro-cid-6tqurwfq]{background-color:#1e293b;color:#e2e8f0;padding:1rem;border-radius:.25rem;overflow-x:auto}code[data-astro-cid-6tqurwfq]{font-family:Menlo,Monaco,Courier New,monospace}.test-button[data-astro-cid-6tqurwfq]{background-color:#4f46e5;color:#fff;border:none;padding:.5rem 1rem;border-radius:.25rem;cursor:pointer;font-weight:500}.test-button[data-astro-cid-6tqurwfq]:hover{background-color:#4338ca}.test-results[data-astro-cid-6tqurwfq]{min-height:200px;margin-top:1rem}\n"}],"routeData":{"route":"/debug","isIndex":false,"type":"page","pattern":"^\\/debug\\/?$","segments":[[{"content":"debug","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/debug.astro","pathname":"/debug","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CGpO41eA.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://mattwhalley.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/debug.astro",{"propagation":"none","containsHead":true}],["/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/spotify@_@ts":"pages/api/spotify.astro.mjs","\u0000@astro-page:src/pages/debug@_@astro":"pages/debug.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.6.1_@types+node@22.14.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/mattwhalley/Projects/mttwhlly.github.io/node_modules/.pnpm/astro@5.6.1_@types+node@22.14.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BmxxK-E2.mjs","\u0000@astrojs-manifest":"manifest_Us78AU-f.mjs","/Users/mattwhalley/Projects/mttwhlly.github.io/src/components/Footer":"_astro/Footer.TKJK3Nll.js","@astrojs/react/client.js":"_astro/client.DyS41jpO.js","/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/debug.astro?astro&type=script&index=0&lang.ts":"_astro/debug.astro_astro_type_script_index_0_lang.DgO0f-o6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/debug.astro?astro&type=script&index=0&lang.ts","async function a(n){const t=document.getElementById(\"results\");t.innerHTML=`<p>Testing ${n} request to /api/spotify...</p>`;try{const e=await fetch(\"/api/spotify\",{method:n}),i=e.status;let s=\"\";try{s=await e.json(),s=JSON.stringify(s,null,2)}catch{s=await e.text()}t.innerHTML=`\n          <p>Response Status: ${i}</p>\n          <pre><code>${s}</code></pre>\n        `,e.ok?t.classList.add(\"success\"):t.classList.add(\"warning\")}catch(e){t.innerHTML=`\n          <p>Error: ${e.message}</p>\n        `,t.classList.add(\"warning\")}}document.getElementById(\"testGet\").addEventListener(\"click\",()=>a(\"GET\"));document.getElementById(\"testPost\").addEventListener(\"click\",()=>a(\"POST\"));"]],"assets":["/_astro/index.CGpO41eA.css","/CNAME","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/mstile-150x150.png","/robots.txt","/safari-pinned-tab.svg","/_astro/Footer.TKJK3Nll.js","/_astro/client.DyS41jpO.js","/_astro/index.BVOCwoKb.js","/images/ben.png","/images/dan-d.png","/images/me.png","/images/titus.jpg","/images/titus.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"KgFlE0KCWD8GEH2/KyIeDy54OFFS5axW2gxsAAtOyKE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
