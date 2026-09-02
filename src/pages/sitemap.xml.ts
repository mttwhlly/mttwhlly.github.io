import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://mattwhalley.com';

// Last commit date per case-study slug, from `git log -1 --format=%cs -- <file>`.
// Update the relevant entry when a case study's content changes.
const CASE_STUDY_LASTMOD: Record<string, string> = {
  'agentic-workflows': '2026-08-17',
  'ai-code-review': '2026-08-17',
  'ai-native-judgment': '2026-07-23',
  'ai-search': '2026-08-19',
  'enterprise-design-system': '2026-08-19',
  'false-positive-rates': '2026-07-20',
};

const SITE_LASTMOD = '2026-08-24';

export const GET: APIRoute = async () => {
  const entries = await getCollection('caseStudies', ({ data }) => !data.draft);

  const staticUrls = [
    { loc: '/', lastmod: SITE_LASTMOD, priority: '1.0' },
    { loc: '/privacy', lastmod: SITE_LASTMOD, priority: '0.3' },
    { loc: '/case-studies', lastmod: SITE_LASTMOD, priority: '0.8' },
  ];

  const caseStudyUrls = entries.map((entry) => {
    const slug = entry.id.replace(/\.(mdx?)$/, '');
    return {
      loc: `/case-studies/${slug}`,
      lastmod: CASE_STUDY_LASTMOD[slug] ?? SITE_LASTMOD,
      priority: '0.9',
    };
  });

  const urls = [...staticUrls, ...caseStudyUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
