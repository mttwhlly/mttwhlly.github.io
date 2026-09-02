#!/usr/bin/env node
/**
 * Smoke-tests the two agent-readiness behaviors covered by CLAUDE.md's "Is Agentic" fixes:
 *   1. Nonexistent paths return a real HTTP 404 with a recoverable body.
 *   2. `Accept: text/markdown` negotiation (RFC 9110 q-values, Vary: Accept, 406) is honored.
 *
 * Usage:
 *   node scripts/verify-agent-readiness.mjs [baseUrl]
 *   BASE_URL=http://127.0.0.1:4321 node scripts/verify-agent-readiness.mjs
 *
 * Defaults to https://mattwhalley.com. Point it at a local `pnpm preview` server to check the
 * static-site pieces (markdown siblings, alternate links, 404 status/body) before the Cloudflare
 * Worker is deployed — the negotiation checks (Vary, 406, Accept:text/markdown on `/`) only pass
 * once cloudflare/markdown-negotiation-worker.js is live, since GitHub Pages alone can't vary a
 * response by request header.
 */

const baseUrl = process.argv[2] || process.env.BASE_URL || 'https://mattwhalley.com';
const NONEXISTENT_PATH = '/__agent-readiness-check-does-not-exist__';

let failures = 0;
let passes = 0;

function report(ok, label, detail) {
  if (ok) {
    passes += 1;
    console.log(`  ok   ${label}`);
  } else {
    failures += 1;
    console.log(`  FAIL ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

async function fetchRaw(path, headers = {}) {
  return fetch(new URL(path, baseUrl), { headers, redirect: 'manual' });
}

async function checkRealNotFound() {
  console.log('\n404 status + recoverable body');
  const res = await fetchRaw(NONEXISTENT_PATH);
  report(res.status === 404, 'nonexistent path returns HTTP 404', `got ${res.status}`);
  const body = await res.text();
  const hasLinks = /sitemap\.xml|llms\.txt/i.test(body);
  report(hasLinks, 'body links to sitemap.xml or llms.txt for recovery');
}

async function checkMarkdownSiblings() {
  console.log('\nMarkdown siblings exist (static, always available)');
  for (const path of ['/index.md', '/about.md', '/contact.md', '/privacy.md', '/404.md']) {
    const res = await fetchRaw(path);
    const ct = res.headers.get('content-type') || '';
    report(
      res.ok && ct.includes('text/markdown'),
      `${path} is 200 text/markdown`,
      `got ${res.status} ${ct}`
    );
  }
}

async function checkAlternateLinks() {
  console.log('\n<link rel="alternate" type="text/markdown"> present on HTML pages');
  for (const path of ['/', '/about', '/contact']) {
    const res = await fetchRaw(path);
    const body = await res.text();
    report(
      /<link rel="alternate" type="text\/markdown"/.test(body),
      `${path} advertises its markdown alternate`
    );
  }
}

async function checkNegotiation() {
  console.log('\nAccept-based negotiation (requires the Cloudflare Worker to be deployed)');

  const md = await fetchRaw('/', { Accept: 'text/markdown' });
  const mdCt = md.headers.get('content-type') || '';
  report(mdCt.includes('text/markdown'), 'Accept: text/markdown on / returns text/markdown', `got ${mdCt}`);
  report((md.headers.get('vary') || '').includes('Accept'), '/ response Vary header includes Accept');

  const html = await fetchRaw('/', { Accept: 'text/html' });
  const htmlCt = html.headers.get('content-type') || '';
  report(htmlCt.includes('text/html'), 'Accept: text/html on / returns text/html', `got ${htmlCt}`);

  const notFoundMd = await fetchRaw(NONEXISTENT_PATH, { Accept: 'text/markdown' });
  report(
    notFoundMd.status === 404 && (notFoundMd.headers.get('content-type') || '').includes('text/markdown'),
    'Accept: text/markdown on a nonexistent path returns 404 + text/markdown',
    `got ${notFoundMd.status} ${notFoundMd.headers.get('content-type')}`
  );

  const rejected = await fetchRaw('/', { Accept: 'application/x-not-a-real-type' });
  report(rejected.status === 406, 'unsupported Accept type returns 406', `got ${rejected.status}`);
}

async function main() {
  console.log(`Verifying agent readiness against ${baseUrl}`);
  await checkRealNotFound();
  await checkMarkdownSiblings();
  await checkAlternateLinks();
  await checkNegotiation();

  console.log(`\n${passes} passed, ${failures} failed`);
  if (failures > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
