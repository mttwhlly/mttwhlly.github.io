import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const markdown = `# About Matt Whalley

I'm Matt Whalley, a Senior/Staff Product Engineer based in St. Augustine, Florida. I solve
complex product problems and build systems that last — bringing design, engineering, and AI
together to turn ambitious ideas and tangled systems into products people can trust.

I lead UX engineering and frontend architecture for AI-enabled web and mobile products, with a
focus on making AI useful, usable, and sustainable. I work across the full product stack — from
design systems and component architecture to agentic workflows and AI-assisted development
tooling.

## Focus areas

- AI product engineering and agentic development workflows
- Frontend architecture (React, React Native, Next.js)
- Design systems and design-to-code handoff
- UX engineering and user-centered product development
- Technical leadership and team enablement

The [case studies](https://mattwhalley.com/case-studies) page has deep dives on shipped work —
an agentic provider search over 1.6M healthcare records, an AI code reviewer, and a design
system made reliable for AI agents, among others. The [homepage](https://mattwhalley.com/) lists
current projects and experience.

Currently open to Senior Product Engineering roles building AI products, design-system
infrastructure, or tools that need to hold up at scale. See
[Contact](https://mattwhalley.com/contact) for how to reach me, or download the
[résumé](https://mattwhalley.com/matt-whalley-resume.pdf).
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
