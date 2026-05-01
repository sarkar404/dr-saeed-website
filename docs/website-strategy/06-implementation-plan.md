# Implementation Plan

## Stack

Use a static, TypeScript-based Next.js App Router site:

- Next.js App Router.
- React and TypeScript.
- Tailwind CSS.
- Static data files in `/data`.
- Client-side publication explorer for search, filtering, copy citation, and BibTeX.
- No backend or database.

## Project Structure

```text
/app
  /page.tsx
  /about/page.tsx
  /research/page.tsx
  /publications/page.tsx
  /projects/page.tsx
  /teaching/page.tsx
  /leadership/page.tsx
  /collaborations/page.tsx
  /news/page.tsx
  /contact/page.tsx
  /layout.tsx
  /globals.css
/components
/data
/lib
/public
  /documents/Saeed-Ahmed-Khan-CV.pdf
  /images/professor-placeholder.svg
```

## Data Files

- `profile.ts`: identity, metrics, contact, links, SEO.
- `publications.ts`: full publication list and featured flags.
- `researchThemes.ts`: research clusters and theme metadata.
- `experience.ts`: career, education, international timeline.
- `grants.ts`: funded projects.
- `teaching.ts`: courses and supervision.
- `service.ts`: leadership, committees, reviewer roles.
- `news.ts`: maintainable updates.

## Build Features

- Responsive multi-page site.
- Sticky navigation.
- Homepage hero and metrics dashboard.
- Research theme to publication mapping.
- Searchable/filterable publication explorer.
- Copy citation and BibTeX actions.
- CV download.
- International collaboration timeline.
- SEO metadata, robots, sitemap, JSON-LD Person schema.
- Accessible focus states and reduced-motion support.

## Verification

Run:

- `npm install`
- `npm run build`
- `npm run lint` if lint script exists.
- `npm run typecheck` if typecheck script exists.

Manual checks:

- Desktop and mobile navigation.
- Publication search/filter behavior.
- CV download link.
- No public unsupported facts.
- No layout overlap at common breakpoints.

