import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const entries = await getCollection('caseStudies', ({ data }) => !data.draft);
  const studies = entries
    .map((entry) => ({ slug: entry.id.replace(/\.(mdx?)$/, ''), ...entry.data }))
    .sort((a, b) => a.order - b.order || b.publishedDate.localeCompare(a.publishedDate));

  const markdown = `# Matt Whalley

Senior/Staff Product Engineer (AI & Design Systems)

I solve complex product problems and build systems that last — bringing design, engineering,
and AI together to turn ambitious ideas and tangled systems into products people can trust.

Currently open to Senior Product Engineering roles building AI products, design-system
infrastructure, or tools that need to hold up at scale.

Based in Saint Augustine, Florida.

## Case studies

${studies.map((s) => `- [${s.title}](https://mattwhalley.com/case-studies/${s.slug}) — ${s.description}`).join('\n')}

## Projects

- [Swells](https://swells.surf) — AI-powered surf reports from hyperlocal data, with listen mode.
- [RFD Checker](https://www.figma.com/community/plugin/1621901729405123866) — Catches design handoff issues before devs (or agents) code.
- Hang Lab — iOS/WatchOS hangboard training app for climbers.

## More

- [About](https://mattwhalley.com/about)
- [Contact](https://mattwhalley.com/contact)
- [Privacy](https://mattwhalley.com/privacy)
- [llms.txt](https://mattwhalley.com/llms.txt)
- [sitemap.xml](https://mattwhalley.com/sitemap.xml)
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
