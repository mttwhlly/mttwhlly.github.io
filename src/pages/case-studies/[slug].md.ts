import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs/promises';
import path from 'node:path';
import { mdxBodyToMarkdown } from '../../utils/mdx-to-markdown';

export async function getStaticPaths() {
  const entries = await getCollection('caseStudies', ({ data }) => !data.draft);
  return entries.map((entry) => ({
    params: { slug: entry.id.replace(/\.(mdx?)$/, '') },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'src/content/case-studies', `${params.slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf-8');
  const { frontmatter, body } = mdxBodyToMarkdown(raw);

  const markdown = `---\n${frontmatter}\n---\n\n${body}\n`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
