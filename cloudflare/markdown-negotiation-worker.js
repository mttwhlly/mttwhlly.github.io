/**
 * Edge content negotiation for mattwhalley.com.
 *
 * mattwhalley.com is a static build (Astro, output: 'static') deployed to GitHub Pages, fronted
 * by Cloudflare as a proxy. GitHub Pages cannot vary a response by request header, so genuine
 * `Accept: text/markdown` negotiation (per https://acceptmarkdown.com) has to happen here, at
 * the edge, before the request reaches the origin.
 *
 * The Astro build already emits a markdown sibling next to most HTML pages (e.g. `/about` ->
 * `/about.md`, via `src/pages/about.md.ts`) and a generic `/404.md` for paths that don't exist.
 * This Worker's job is purely: read the client's Accept header, decide whether HTML or Markdown
 * was requested (honoring q-values), and serve the right representation with the right headers
 * — including on 404s, where the real 404 status must be preserved even though the body comes
 * from a normally-200 `/404.md` file.
 *
 * Compliance targets (acceptmarkdown.com):
 *   1. Serves text/markdown for `Accept: text/markdown` requests
 *   2. Sets `Vary: Accept` (merged with `Accept-Encoding`)
 *   3. Returns 406 when neither text/html nor text/markdown is acceptable
 *   4. Honors q-values / specificity per RFC 9110
 */

const ASSET_EXT_RE = /\.[a-zA-Z0-9]+$/;

/** Parse an Accept header into {type, subtype, q} entries. Returns null if no header was sent. */
function parseAccept(header) {
  if (!header) return null;
  return header
    .split(',')
    .map((part) => {
      const segments = part.trim().split(';');
      const rawType = segments.shift() || '';
      const [type, subtype] = rawType.trim().split('/');
      let q = 1;
      for (const seg of segments) {
        const [key, value] = seg.trim().split('=');
        if (key === 'q') {
          const parsed = parseFloat(value);
          if (!Number.isNaN(parsed)) q = parsed;
        }
      }
      return { type: (type || '*').trim(), subtype: (subtype || '*').trim(), q };
    })
    .filter((entry) => entry.type && entry.subtype);
}

/** Effective q-value for wantType/wantSubtype, honoring specificity (exact > type/* > *\/*). */
function effectiveQ(entries, wantType, wantSubtype) {
  if (entries === null) return 1; // No Accept header sent: everything is acceptable.
  let bestQ = 0;
  let bestSpecificity = -1;
  for (const entry of entries) {
    const typeMatches = entry.type === '*' || entry.type === wantType;
    const subtypeMatches = entry.subtype === '*' || entry.subtype === wantSubtype;
    if (!typeMatches || !subtypeMatches) continue;
    const specificity = (entry.type !== '*' ? 2 : 0) + (entry.subtype !== '*' ? 1 : 0);
    if (specificity >= bestSpecificity) {
      bestSpecificity = specificity;
      bestQ = entry.q;
    }
  }
  return bestQ;
}

function negotiate(acceptHeader) {
  const entries = parseAccept(acceptHeader);
  const qHtml = effectiveQ(entries, 'text', 'html');
  const qMarkdown = effectiveQ(entries, 'text', 'markdown');
  if (qHtml === 0 && qMarkdown === 0) return { acceptable: false };
  return { acceptable: true, preferMarkdown: qMarkdown > qHtml };
}

function mergeVary(existing) {
  const parts = new Set(
    (existing || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  );
  parts.add('Accept');
  parts.add('Accept-Encoding');
  return Array.from(parts).join(', ');
}

function markdownCandidates(pathname) {
  if (pathname === '/') return ['/index.md'];
  // GitHub Pages canonicalizes every page to a trailing slash (301 /about -> /about/), but the
  // Astro build emits markdown siblings flat (/about.md, /case-studies/ai-search.md), not nested
  // (/about/index.md) — except for actual directory-index routes like /case-studies/index.md.
  // Try both shapes so either convention resolves.
  if (pathname.endsWith('/')) {
    const trimmed = pathname.slice(0, -1);
    return [`${trimmed}.md`, `${pathname}index.md`];
  }
  return [`${pathname}.md`, `${pathname}/index.md`];
}

async function probeMarkdown(origin, candidates) {
  for (const candidate of candidates) {
    const probeUrl = new URL(candidate, origin);
    const resp = await fetch(probeUrl.toString(), {
      cf: { cacheTtl: 300, cacheEverything: true },
    });
    if (resp.ok) return { path: candidate, resp };
  }
  return null;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Non-GET/HEAD, or anything with a file extension (assets, .md/.xml/.txt/.json/.pdf/...),
    // already behaves correctly as a single fixed representation — pass through untouched.
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return fetch(request);
    }
    const lastSegment = pathname.slice(pathname.lastIndexOf('/') + 1);
    if (ASSET_EXT_RE.test(lastSegment)) {
      return fetch(request);
    }

    const decision = negotiate(request.headers.get('Accept'));
    if (!decision.acceptable) {
      return new Response(
        '406 Not Acceptable\n\nThis resource is available as text/html or text/markdown.\n',
        {
          status: 406,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            Vary: 'Accept, Accept-Encoding',
          },
        }
      );
    }

    const origin = await fetch(request);

    // Redirects (e.g. GitHub Pages' /about -> /about/ canonicalization) and other non-content
    // statuses carry no body to negotiate — pass them through as-is, just tagged with Vary so
    // caches don't merge them with a negotiated response for the same URL.
    if (origin.status >= 300 && origin.status !== 404) {
      const headers = new Headers(origin.headers);
      headers.set('Vary', mergeVary(headers.get('Vary')));
      return new Response(origin.body, { status: origin.status, headers });
    }

    const sibling = await probeMarkdown(url.origin, markdownCandidates(pathname));

    if (decision.preferMarkdown) {
      if (sibling) {
        const headers = new Headers(sibling.resp.headers);
        headers.set('Content-Type', 'text/markdown; charset=utf-8');
        headers.set('Vary', 'Accept, Accept-Encoding');
        headers.set('Link', `<${pathname}>; rel="alternate"; type="text/html"`);
        return new Response(sibling.resp.body, { status: origin.status, headers });
      }
      if (origin.status === 404) {
        const fallback = await fetch(new URL('/404.md', url.origin).toString());
        if (fallback.ok) {
          const headers = new Headers(fallback.headers);
          headers.set('Content-Type', 'text/markdown; charset=utf-8');
          headers.set('Vary', 'Accept, Accept-Encoding');
          return new Response(fallback.body, { status: 404, headers });
        }
      }
    }

    const headers = new Headers(origin.headers);
    headers.set('Vary', mergeVary(headers.get('Vary')));
    if (sibling) {
      headers.set('Link', `<${sibling.path}>; rel="alternate"; type="text/markdown"`);
    }
    return new Response(origin.body, { status: origin.status, headers });
  },
};
