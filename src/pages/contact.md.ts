import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const markdown = `# Contact Matt Whalley

I'm Matt Whalley, currently open to Senior Product Engineering roles building AI products,
design-system infrastructure, or tools that need to hold up at scale. Based in St. Augustine,
Florida, working remotely.

## Reach me

- Email: matt@mattwhalley.com
- LinkedIn: https://linkedin.com/in/mttwhlly
- GitHub: https://github.com/mttwhlly

## Downloads

- [Résumé](https://mattwhalley.com/matt-whalley-resume.pdf)
- [User manual](https://mattwhalley.com/matt-whalley-user-manual.pdf)

For background on the work referenced above, see [About](https://mattwhalley.com/about) and the
[case studies](https://mattwhalley.com/case-studies).
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
