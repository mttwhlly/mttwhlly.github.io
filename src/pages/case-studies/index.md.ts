import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const entries = await getCollection('caseStudies', ({ data }) => !data.draft);
  const studies = entries
    .map((entry) => ({ slug: entry.id.replace(/\.(mdx?)$/, ''), ...entry.data }))
    .sort((a, b) => a.order - b.order || b.publishedDate.localeCompare(a.publishedDate));

  const lines = [
    '# Case studies',
    '',
    'Deep dives into how the work actually happened.',
    '',
    ...studies.map(
      (s) => `- [${s.title}](https://mattwhalley.com/case-studies/${s.slug}) — ${s.description}`
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
