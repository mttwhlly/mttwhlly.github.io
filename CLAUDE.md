# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Dev server at http://127.0.0.1:4321
pnpm build      # Static build to dist/
pnpm preview    # Preview the build
pnpm format     # Prettier format
```

No test suite is configured.

## Architecture

Single-page portfolio site: **Astro 5 (static output) + React 19 + Tailwind CSS 4**.

Page rendering chain:

```
pages/index.astro → layouts/Layout.astro → components/Welcome.astro
```

`Layout.astro` provides the HTML shell (SEO, fonts, `<Header client:load />`, `<Footer client:load />`). `Welcome.astro` assembles all page sections by importing React components. All interactive React components use `client:load` hydration.

**Content is hard-coded in components** — no CMS, no Astro content collections. To update copy, projects, skills, or experiments, edit the relevant `.tsx` file directly.

Section components and what they own:

- `RecentProjects.tsx` — Experience and Projects cards (data arrays in the file)
- `Skills.tsx` — Skill categories grid (data array in the file)
- `Tools.tsx` — Infinite-scroll tech logo marquee (data array in the file)
- `Experiments.tsx` — Side-project link pills (data array in the file)
- `Testimonials.tsx`, `SelectedClients.tsx`, `Newsletter.tsx` — additional sections
- `Footer.tsx` — Spotify now-playing widget + social links
- `SpotifyNowPlaying.tsx` — polls an external Vercel proxy (`spotify-api-silk-nine.vercel.app`) every 30s; credentials live in `.env`

## Styling

Tailwind 4 is loaded via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`. All theme customisation is in `src/styles/global.css` under `@theme`:

- Custom `lemonlime` color scale; brand accent is `#D4FC52`
- Fonts: `Host Grotesk` (sans), `Geist Mono` (mono), `Instrument Serif` (serif) — all from Google Fonts
- Icons: `@phosphor-icons/react`

Path alias: `@/*` → `src/*`

Prettier: single quotes, trailing commas (ES5), 100-char line width, 2-space indent.

## Deployment

Static build deployed to GitHub Pages (CNAME → `mattwhalley.com`). The `dist/` directory contains the last build and a `CNAME` file — don't delete it.
