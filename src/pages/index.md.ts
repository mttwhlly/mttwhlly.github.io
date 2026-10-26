import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const entries = await getCollection('caseStudies', ({ data }) => !data.draft);
  const studies = entries
    .map((entry) => ({ slug: entry.id.replace(/\.(mdx?)$/, ''), ...entry.data }))
    .sort((a, b) => a.order - b.order || b.publishedDate.localeCompare(a.publishedDate));

  const markdown = `---
title: Matt Whalley — Senior Product Engineer · Design, Engineering & AI
description: Bridging AI, product, design and engineering to turn emerging technology into products people can actually use.
canonical: https://mattwhalley.com/
---

# Matt Whalley

Senior Product Engineer
Design · Engineering · AI

I solve complex product problems and build systems that last — bringing design, engineering
and AI together to turn ambitious ideas and tangled systems into products people can trust.

I'm a Senior Product Engineer at [Help Scout](https://www.helpscout.com). Before that I led
frontend engineering and design systems at DataSpring (formerly CAQH), built digital services for
Broward County, and spend my free time bouldering.

I'm based in Saint Augustine, Florida.

## Case studies

${studies.map((s) => `- [${s.title}](https://mattwhalley.com/case-studies/${s.slug}) — ${s.description}`).join('\n')}

## Projects

- [Swells](https://swells.surf) — AI-powered surf reports from hyperlocal data, with listen mode.
- [RFD Checker](https://www.figma.com/community/plugin/1621901729405123866) — Catches design handoff issues before devs (or agents) code.
- Hang Lab — iOS/WatchOS hangboard training app for climbers.

## More

- [Contact](mailto:matt@mattwhalley.com)
- [LinkedIn](https://linkedin.com/in/mttwhlly)
- [Privacy](https://mattwhalley.com/privacy)
- [llms.txt](https://mattwhalley.com/llms.txt)
- [sitemap.xml](https://mattwhalley.com/sitemap.xml)
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
