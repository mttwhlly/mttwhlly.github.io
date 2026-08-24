/**
 * Strips MDX-only syntax (import statements, embedded React diagram components) from a raw
 * .mdx file so the prose reads as plain markdown for agents that can't render JSX.
 */
export function mdxBodyToMarkdown(raw: string): { frontmatter: string; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: '', body: raw.trim() };

  const [, frontmatter, rest] = match;

  const body = rest
    .replace(/^import\s+.*from\s+['"].*['"];?\s*$/gm, '')
    .replace(/<[A-Z][A-Za-z0-9]*(\s[^>]*?)?\/>/g, '')
    .replace(/<([A-Z][A-Za-z0-9]*)\b[^>]*>[\s\S]*?<\/\1>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return { frontmatter: frontmatter.trim(), body };
}
