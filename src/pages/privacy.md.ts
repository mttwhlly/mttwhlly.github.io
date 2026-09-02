import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const markdown = `# Privacy

This is a static personal portfolio site. There's no login, no user accounts, and no forms on
this site that collect personal information. This page describes exactly what does happen when
you visit.

## What this site does not do

- No analytics or ad-tracking scripts of any kind
- No cookies set by this site's own code
- No account creation, and no forms that submit personal data

## Third-party requests this site makes

- **Google Fonts** — page loads fonts from fonts.gstatic.com. Google may log standard request
  data (e.g. IP address) under its own privacy policy.
- **"Now" widget** — the footer's reading/climbing status is read from a public, read-only
  Supabase table. No visitor data is sent or stored.
- **Spotify now-playing widget** — the footer polls a small proxy service to show what's
  currently playing. It doesn't collect or store visitor data.
- **Hosting** — this site is served by GitHub Pages, which logs standard web server access data
  under GitHub's own privacy statement.

If this changes (for example, a newsletter signup or analytics is added later), this page will
be updated to reflect it. Questions about this policy can go to the same address on the
[Contact](https://mattwhalley.com/contact) page.
`;

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
