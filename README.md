# Green Lawn Solutions website concept

Independent concept for Green Lawn Solutions Inc., Harrison, Maine. React, TypeScript, Vite, Tailwind CSS, shadcn/ui and Lucide, using the shared prospect starter. Business facts, source notes, functionality audit and asset mapping are in BRIEF.md.

## Local work

Use Node.js 22.12 or newer. Run `npm ci`, then `npm run dev`. Run `npm run check`, `npm test`, `npm run build` and `npm run test:browser` before publishing changes. Browser tests require Playwright Chromium or a compatible `PLAYWRIGHT_CHROMIUM_EXECUTABLE`.

## Cloudflare Workers with Git

Connect `NickRoyOfficial/green-lawn-solutions`, branch `main`, repository root `/`.

- Worker name: `green-lawn-solutions` (matches wrangler.jsonc).
- Build command: leave empty.
- Deploy command: `npm run deploy`.

The deploy script builds the site and Wrangler serves `dist/`. Do not use `public/` as the built site directory. Cloudflare handles the deployment authentication through the connected project. Do not commit secrets.

The site is noindex and includes a concept disclosure. The inquiry form prepares an email draft for the visitor to review and send, rather than claiming backend delivery. Service links retain the company's existing Wix booking pages. Customer payments point to the current site; the existing $1 checkout is not recreated. Application PDF links to the original public file.

## Assets and content

Company-supplied and current-site photos are optimized as WebP. Logo is a transparent vector trace with no embedded raster or font dependencies. Fonts are self-hosted Manrope and DM Serif Display under SIL Open Font License 1.1; see the *-OFL.txt files in public/assets/fonts/. Customer feedback is presented as attributed summaries, not fabricated quotations or ratings. Gallery provenance is documented in BRIEF.md without claiming specific project authorship.

The `components/` catalog and development-only `/?ui=1` controls preview are inherited reference tools, not production sections. Original shared foundation: https://github.com/NickRoyOfficial/prospect-starter .
