# Markdown negotiation Worker

`markdown-negotiation-worker.js` runs in front of the existing GitHub Pages origin for
mattwhalley.com (the domain is already proxied through Cloudflare). It does not change hosting
or DNS — it only intercepts requests to add `Accept`-header content negotiation
([acceptmarkdown.com](https://acceptmarkdown.com)) that a static host can't do on its own:
serving `text/markdown` for `Accept: text/markdown`, setting `Vary: Accept`, returning `406` for
unsupported types, and honoring q-values. It also preserves a real `404` status when a
nonexistent path is requested with `Accept: text/markdown`, using the site's `/404.md`.

It works by probing for a markdown sibling of the requested page (e.g. `/about` → `/about.md`,
`/case-studies/ai-search` → `/case-studies/ai-search.md`) that the Astro build already generates
via the `*.md.ts` routes in `src/pages/`. If the client prefers markdown and a sibling exists, it
serves that sibling with the right headers; otherwise it passes the original response through
unmodified (plus `Vary`).

## Redeploying

```bash
cd cloudflare
set -a; source ../.env; set +a   # loads CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID
npx wrangler@latest deploy
```

`.env` (gitignored) holds `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. The token needs
`Workers Scripts: Edit`, `Workers Routes: Edit`, and `Zone: Read`, scoped to the
mattwhalley.com zone.

## Verifying

From the repo root:

```bash
node scripts/verify-agent-readiness.mjs https://mattwhalley.com
```

or manually:

```bash
curl -sI -H "Accept: text/markdown" https://mattwhalley.com/
curl -s -o /dev/null -w "%{http_code}\n" -H "Accept: application/json" https://mattwhalley.com/
curl -s -o /dev/null -w "%{http_code}\n" -H "Accept: text/markdown" https://mattwhalley.com/some-path-that-does-not-exist
```

## Adding a new page

If you add a new top-level page, add a matching `<slug>.md.ts` route (see
`src/pages/about.md.ts` for the pattern) and pass `markdownUrl="/<slug>.md"` to `Layout` in the
`.astro` page — the Worker will pick it up automatically without redeploying.
