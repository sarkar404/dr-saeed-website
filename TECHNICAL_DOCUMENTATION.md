# Technical Documentation

This document explains the architecture, file layout, content data model,
styling, and maintenance conventions for the Dr. Saeed Ahmed Khan academic
website.

## 1. High-Level Architecture

```
        +------------------+
        |   Source CVs     |   PDF + DOCX in repo root
        +--------+---------+
                 | (manual extraction & reformatting)
                 v
        +------------------+
        |  /data/*.ts      |   Single source of truth for site content
        +--------+---------+
                 |  imported by
                 v
        +-------------------+        +--------------------------+
        |   /app/**/page.tsx|<-------+  /components/*.tsx        |
        +--------+----------+        +--------------------------+
                 |
                 v  Next.js App Router server-renders pages
        +------------------+
        |   Browser (HTML) |
        +------------------+
```

- The site has **no database, no CMS, no API**.
- Content is plain TypeScript objects in `/data`.
- Pages and components consume that data and render fully styled markup.
- Output works as a regular Next.js server build, and would also work as a
  static export with minor changes if needed.

## 2. Tech Stack

| Layer       | Technology                       |
| ----------- | -------------------------------- |
| Runtime     | Node.js 18.18+ / 20+             |
| Framework   | Next.js 16 (App Router)          |
| UI          | React 19, TypeScript 5.7         |
| Styling     | Tailwind CSS 3.4 + custom theme  |
| Icons       | lucide-react                     |
| Lint        | ESLint 9 + typescript-eslint     |
| A11y        | eslint-plugin-jsx-a11y           |
| Build tools | Next.js, PostCSS, Autoprefixer   |

## 3. Folder Tree (annotated)

```
.
├── app/                        # Next.js App Router pages (route = folder)
│   ├── about/page.tsx          # /about
│   ├── collaborations/page.tsx # /collaborations
│   ├── contact/page.tsx        # /contact
│   ├── leadership/page.tsx     # /leadership  ← Dean + QEC + governance
│   ├── news/page.tsx           # /news
│   ├── projects/page.tsx       # /projects
│   ├── publications/page.tsx   # /publications
│   ├── research/page.tsx       # /research
│   ├── teaching/page.tsx       # /teaching    ← Courses + supervision
│   ├── updates-gallery/page.tsx# /updates-gallery
│   ├── globals.css             # Tailwind layers + base resets
│   ├── layout.tsx              # Root layout: <Header />, <main>, <Footer />
│   ├── page.tsx                # Home page
│   ├── robots.ts               # robots.txt route
│   └── sitemap.ts              # sitemap.xml route
├── components/                 # Reusable UI primitives
│   ├── AcademicCTA.tsx
│   ├── CVDownloadButton.tsx
│   ├── CollaborationMap.tsx
│   ├── EventCategoryFilter.tsx
│   ├── Footer.tsx              # Site footer (contains © line)
│   ├── GalleryEventCard.tsx
│   ├── GalleryGrid.tsx
│   ├── GalleryLightbox.tsx
│   ├── Header.tsx              # Top navigation
│   ├── Hero.tsx                # Home hero section
│   ├── HomeGalleryPreview.tsx
│   ├── MetricCard.tsx
│   ├── PageHero.tsx
│   ├── PublicationCard.tsx
│   ├── PublicationsExplorer.tsx
│   ├── ResearchThemeCard.tsx
│   ├── SectionHeading.tsx
│   └── Timeline.tsx
├── data/                       # All site content (TypeScript)
│   ├── profile.ts
│   ├── experience.ts
│   ├── service.ts
│   ├── teaching.ts
│   ├── publications.ts
│   ├── researchThemes.ts
│   ├── grants.ts
│   ├── news.ts
│   ├── gallery.ts
│   └── types.ts
├── lib/utils.ts                # Small helpers (className merging, etc.)
├── public/
│   ├── documents/Saeed-Ahmed-Khan-CV.pdf
│   └── images/
│       ├── profile/
│       └── gallery/
├── photos/                     # Source images (input for gallery import script)
├── scripts/
│   ├── import-gallery-assets.mjs   # Imports photos/* into public/images/gallery
│   └── build_cv_final.py           # Builds Saeed_Ahmed_Khan_CV_Final.docx
├── docs/website-strategy/      # Strategy and content notes
├── eslint.config.mjs           # ESLint config
├── next.config.ts              # Next.js config
├── postcss.config.js
├── tailwind.config.ts          # Theme tokens (colors, etc.)
├── tsconfig.json
└── package.json
```

## 4. Frontend Structure

### Pages

Pages live under `app/`. Each folder with a `page.tsx` becomes a route.
The root `app/layout.tsx` wraps every page with the `<Header />`,
`<main>`, and `<Footer />` shell, and emits global metadata + JSON-LD.

### Components

Reusable UI primitives are in `components/`. They are unstyled "data in,
markup out" components that pull tokens from Tailwind classes.

Key primitives:

| Component             | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `Header`              | Top navigation                                |
| `Footer`              | Footer with contact, links, © line            |
| `Hero`                | Home page hero                                |
| `PageHero`            | Per-page hero                                 |
| `SectionHeading`      | Eyebrow + title + optional supporting text    |
| `MetricCard`          | "At a glance" stat tile                       |
| `Timeline`            | Career / education timeline                   |
| `ResearchThemeCard`   | Research-theme card                           |
| `PublicationCard`     | Publication tile                              |
| `PublicationsExplorer`| Search + filter table for publications        |
| `CollaborationMap`    | Country / collaboration listing               |
| `GalleryGrid` etc.    | Photo gallery primitives                      |
| `CVDownloadButton`    | Button to fetch the PDF CV                    |
| `AcademicCTA`         | Reusable contact CTA banner                   |

## 5. Backend Structure

There is **no backend**. The site is fully server-rendered by Next.js
from static TypeScript data. The only "server" pieces are the Next.js
route handlers `robots.ts` and `sitemap.ts`, both of which are pure
functions.

If a contact form or analytics ingestion is added later, the natural
home would be `app/api/<name>/route.ts`.

## 6. Data / Content Structure

`data/` is the single source of truth. Editing these files updates the
site without touching layout or styles.

### `data/profile.ts`

```ts
export const profile = {
  name, honorific, credentials, currentTitle,
  department, institution, location,
  email, phone, address,
  tagline, imagePath, positioning, shortBio,
  cvPath
};
export const profileLinks: LinkItem[];   // Scholar, Scopus, email
export const metrics: Metric[];          // "At a glance" tiles
export const audienceCards;              // 3 home-page cards
export const jsonLd;                     // Schema.org Person
```

### `data/experience.ts`

```ts
export const roles: TimelineItem[];                   // Career timeline
export const education: TimelineItem[];               // Degrees
export const internationalExperience;                 // Country cards
export const supervision;                             // (legacy export)
export const courseGroups;                            // (legacy export)
export const mentoringAreas;                          // (legacy export)
```

### `data/service.ts`

```ts
export const leadershipHighlights;       // Dean / QEC / Editor / etc.
export const qecResponsibilities;        // Bullets shown on /leadership
export const deanResponsibilities;       // Bullets shown on /leadership
export const universityRankingsContext;  // Verified ranking statements
export const governanceRoles;            // Statutory bodies / committees
export const reviewerGroups;             // Journals + conferences
export const conferenceLeadership;       // iCoMET etc.
export const honors;                     // Awards & grants
export const memberships;                // IEEE, PEC, HEC reviewer
export const technicalSkills;            // Software / lab tools
export const languages;                  // Language proficiency
```

### `data/teaching.ts`

```ts
export const supervision;
export const courseGroups;     // ← grouped course catalogue
export const mentoringAreas;
```

### `data/publications.ts`

```ts
export const publications: Publication[];
export const featuredPublications;        // selected: true
```

### `data/researchThemes.ts`, `data/grants.ts`, `data/news.ts`, `data/gallery.ts`

Each exports a typed array consumed by a matching page or component.

## 7. Styling Approach

- **Tailwind CSS** drives all styling.
- Custom palette is defined in `tailwind.config.ts` (look for `theme.extend.colors`).
- Common color tokens used throughout the site:

  | Token   | Use                                      |
  | ------- | ---------------------------------------- |
  | `ink`   | Headings, dark text                      |
  | `navy`  | Dark hero backgrounds                    |
  | `blue`  | Eyebrow / link color                     |
  | `cyan`  | Accent borders, bullets                  |
  | `aqua`  | Lighter accent on dark backgrounds       |
  | `paper` | Off-white card / section background      |
  | `line`  | Card and divider borders                 |

- Layout containers use `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Cards use `rounded-lg border border-line bg-white p-6 shadow-sm` (or `bg-paper`).

If you need to change the palette, edit `tailwind.config.ts` only — do
not redefine colors inline.

## 8. CV ↔ Website Connection

| CV section                      | Website surface                                 |
| ------------------------------- | ----------------------------------------------- |
| Header (name, contact, email)   | `data/profile.ts` → home, header, footer        |
| Academic & Professional Experience | `data/experience.ts` (`roles`)               |
| Education                       | `data/experience.ts` (`education`)              |
| Research Interests / Themes     | `data/researchThemes.ts`                        |
| Research Grants                 | `data/grants.ts`                                |
| Publications                    | `data/publications.ts`                          |
| Memberships                     | `data/service.ts` (`memberships`)               |
| QEC / Dean responsibilities     | `data/service.ts` + `app/leadership/page.tsx`   |
| Governance / Committees         | `data/service.ts` (`governanceRoles`)           |
| Reviewer / editorial service    | `data/service.ts` (`reviewerGroups`, `conferenceLeadership`) |
| Honors & Awards                 | `data/service.ts` (`honors`)                    |
| Courses Taught                  | `data/teaching.ts` (`courseGroups`)             |
| Supervision                     | `data/teaching.ts` (`supervision`)              |
| Software & Tools                | `data/service.ts` (`technicalSkills`)           |
| Languages                       | `data/service.ts` (`languages`)                 |
| References                      | (intentionally not surfaced publicly)           |

## 9. How to Modify Layout, Sections, and Visual Design

- **Reorder sections on a page**: edit the `<section>` blocks in the
  relevant `app/<route>/page.tsx`. They render top-to-bottom in source
  order.
- **Change the spacing**: most sections use `py-16` (vertical padding).
  Adjust at the section level rather than per-component.
- **Change the look of a card**: edit `components/<Component>.tsx`
  directly. Avoid copy-pasting class strings into pages — keep visual
  language inside components.
- **Add a new page**: create `app/<slug>/page.tsx` with a default-export
  React component, and add a `navItems` entry in `data/profile.ts`.

## 10. Maintenance & Build Commands

```bash
npm install
npm run dev          # Local dev at http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint over the repo
npm run build        # Production build (.next/)
npm start            # Serve the production build
npm run import:gallery   # Import photos/* into public/images/gallery
```

Run typecheck + lint + build before any content release.

## 11. Build the Final CV (DOCX)

The reformatted CV (`Saeed_Ahmed_Khan_CV_v1_1.docx`) is the design
template. The original CV (`Resume_Saeed Ahmed Khan-2(1).pdf`) is the
source of truth for content. The script `scripts/build_cv_final.py`
augments the reformatted CV with content restored from the original and
emits `Saeed_Ahmed_Khan_CV_Final.docx`.

```bash
pip install python-docx
python scripts/build_cv_final.py
```

If the source `Saeed_Ahmed_Khan_CV_v1_1.docx` design is updated, the
script's anchor strings (`Drive internationalization`,
`Established faculty/staff training`, etc.) must still appear in the
template — otherwise the script will fail with a clear `LookupError`.

## 12. Quality Checks Before Deploy

1. `npm run typecheck` — no TypeScript errors.
2. `npm run lint` — no lint errors.
3. `npm run build` — succeeds end-to-end.
4. Manually open: `/`, `/about`, `/research`, `/publications`,
   `/leadership`, `/teaching`, `/contact`, `/updates-gallery`.
5. Verify CV download link works (`/documents/Saeed-Ahmed-Khan-CV.pdf`).
6. Verify footer reads `© 2026 Dr. Saeed Ahmed Khan.`
7. Verify no unsupported claim (ranking, role, award) was added.

## 13. Future Maintenance Notes

- **Add a new role**: append a `TimelineItem` to `roles` in
  `data/experience.ts`, then mirror it into the printed CV via
  `scripts/build_cv_final.py` if it should appear on the DOCX.
- **Add a new publication**: append a `Publication` object to
  `publications` in `data/publications.ts`. Set `selected: true` to
  feature it on the home page.
- **Update rankings**: change strings in `universityRankingsContext`
  in `data/service.ts`. Always cite the new source in
  `RESEARCH_SOURCES.md`.
- **Add a new gallery event**: place images under `photos/<event>/`,
  add an entry in `data/gallery.ts`, and run `npm run import:gallery`.
- **Change the brand colors**: `tailwind.config.ts` only; never inline
  hex values in components.
