# Temporary Hosting Guide

This project is a Next.js App Router site. Vercel is the recommended temporary preview host because it is the native deployment target for Next.js and requires the least configuration for this project.

Official references checked on May 1, 2026:

- Vercel CLI: https://vercel.com/docs/cli
- Vercel deploy command: https://vercel.com/docs/cli/deploy
- Netlify Next.js docs: https://docs.netlify.com/frameworks/next-js/overview/
- Netlify Next.js build settings: https://docs.netlify.com/snippets/frameworks/nextjs-config-values/
- Netlify CLI deploy command: https://cli.netlify.com/commands/deploy/
- Cloudflare Pages Next.js guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/
- Cloudflare Pages build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/

## Before Any Preview Deployment

Run local checks:

```bash
npm install
npm run import:gallery
npm run build
npm run lint
npm run typecheck
```

Review public files:

```bash
dir public /s
```

Only files inside `public/` are directly public in a standard Next.js app. Do not put raw `details.txt`, `.env`, internal strategy notes, private references, or unapproved documents into `public/`.

## Option 1: Vercel

Recommended for this project.

Install the CLI:

```bash
npm i -g vercel
```

Log in:

```bash
vercel login
```

Deploy from the project root:

```bash
vercel
```

The Vercel CLI prints the deployment URL to stdout. That preview URL can be shared with the client.

For a production-style deployment without assigning a custom domain:

```bash
vercel --prod --skip-domain
```

To remove the deployment later:

1. Open the Vercel dashboard.
2. Go to the project.
3. Open Deployments.
4. Remove the preview deployment or delete the project if it was created only for review.

Notes:

- Do not use `vercel --public` unless you intentionally want source code exposed at `/_src`.
- Free preview links are not truly private. Use Vercel team/project access controls or password protection if confidentiality is required.

## Option 2: Netlify

Netlify can host Next.js projects, but it may require Netlify's Next.js runtime/plugin behavior depending on how the site is connected.

Suggested project settings for a Git-based deploy:

- Build command: `npm run build`
- Publish directory: `.next`
- Framework preset: Next.js, if detected

Install Netlify CLI if using local CLI deploys:

```bash
npm install -g netlify-cli
```

Log in:

```bash
netlify login
```

Create a draft deploy:

```bash
netlify deploy --build
```

Deploy to the live Netlify site:

```bash
netlify deploy --build --prod
```

Notes:

- For a client preview, use the draft URL first.
- If Netlify asks for build settings, use `npm run build` and `.next`.
- If the site uses advanced Next.js features later, confirm Netlify's Next.js runtime support before relying on it for final hosting.

## Option 3: Cloudflare Pages

Cloudflare Pages is possible but less direct for a standard Next.js App Router project than Vercel.

Cloudflare's Pages build configuration lists:

- Next.js build command: `npx @cloudflare/next-on-pages@1`
- Build directory: `.vercel/output/static`
- Static HTML export build command: `npx next build`
- Static export build directory: `out`

For this project, do not switch to static export unless you first test redirects, image behavior, and metadata output. Cloudflare's current Next.js guidance also points full-stack/SSR Next.js applications toward Cloudflare Workers/OpenNext.

Suggested Cloudflare preview approach:

1. Push the project to a private Git repository.
2. In Cloudflare, go to Workers & Pages.
3. Create a Pages project from the Git repository.
4. Use the Next.js preset if available.
5. If manually configuring, test `npx @cloudflare/next-on-pages@1` with `.vercel/output/static`.
6. Review the generated `*.pages.dev` URL.

Notes:

- Cloudflare Pages preview URLs are public unless access controls are configured.
- This project has Next.js redirects in `next.config.ts`; verify them after deployment.
- Vercel remains the lower-risk temporary preview path.

## Security and Privacy Checklist

Before sharing a preview link, verify:

- `public/images/gallery/personal-moments/` contains only approved personal images.
- Personal photos are not featured on the homepage.
- Raw `details.txt` files are not inside `public/`.
- `.env` files are not committed or uploaded.
- `docs/website-strategy/` is not exposed publicly through `public/`.
- Root-level CV/source files are not in `public/` unless intentionally shared.
- `public/documents/Saeed-Ahmed-Khan-CV.pdf` is intentionally public before sharing.
- Phone number display is approved for public preview.
- Google Scholar and Scopus links open correctly.
- The temporary hosting provider is configured with authentication/password protection if the preview should be private.

Free preview hosting is usually not truly private. Treat any preview URL as shareable unless the platform has explicit access control enabled.
