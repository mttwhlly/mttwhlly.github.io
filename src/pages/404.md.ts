import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const markdown = `---
title: 404 — Page not found
description: The requested page does not exist on mattwhalley.com.
canonical: https://mattwhalley.com/404
---

# 404 — Page not found

That page doesn't exist — it may have moved, been renamed, or never existed at this URL.

## Where to look next

- [Home](https://mattwhalley.com/) — profile, projects, and case studies
- [Case studies](https://mattwhalley.com/case-studies) — deep dives on shipped AI/product work
- [Contact](mailto:matt@mattwhalley.com) — reach out directly
- [sitemap.xml](https://mattwhalley.com/sitemap.xml) — full list of indexable URLs
- [llms.txt](https://mattwhalley.com/llms.txt) — a machine-readable summary of this site, for agents
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
