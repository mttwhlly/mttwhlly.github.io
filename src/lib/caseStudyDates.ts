// Last commit date per case-study slug, from `git log -1 --format=%cs -- <file>`.
// Update the relevant entry when a case study's content changes.
// Shared by sitemap.xml.ts (lastmod) and case-studies/[slug].astro (dateModified + visible freshness date).
export const CASE_STUDY_LASTMOD: Record<string, string> = {
  'agentic-workflows': '2026-08-17',
  'ai-code-review': '2026-08-17',
  'ai-native-judgment': '2026-07-23',
  'ai-search': '2026-08-19',
  'enterprise-design-system': '2026-08-19',
  'false-positive-rates': '2026-07-20',
};

export const SITE_LASTMOD = '2026-08-24';
