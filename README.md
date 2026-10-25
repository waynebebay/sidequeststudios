# Side Quest Studios — Developer Blog

A custom Astro website inspired by the Airo mockup, but independently owned and deployable.

## Run locally

1. Install Node.js (a currently supported LTS release).
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address Astro prints (typically http://localhost:4321).

## Build for production

Run `npm run build`. Static files appear in `dist/`.

## Publishing

Push the project to a GitHub repository and connect it to Cloudflare Pages.
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Connect the domain only after previewing the live deployment. Preserve existing Zoho MX/TXT email DNS records when changing web-related DNS records.

## Editing

- Homepage: `src/pages/index.astro`
- Sitewide styles: `src/styles/global.css`
- Blog articles: `src/content/blog/*.md`
- Navigation: `src/components/Header.astro`
- Project pages: `src/pages/projects/`
- Original SQ artwork (reference only): `public/images/sq-original.png`

## Before launching

- Replace CSS-generated placeholder artwork with actual Project Meridian screenshots.
- Review and expand sample blog drafts; they are not final factual development histories.
- Add real contact and social links.
- Test on mobile and check accessibility.
- Add a real newsletter service only if needed.

No subscription, API keys, or database required for the site itself.
