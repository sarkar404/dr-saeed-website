# Dr. Saeed Ahmed Khan - Academic Website

The official academic profile site for **Dr. Saeed Ahmed Khan**, Dean of the
Faculty of Engineering and Technology at Sukkur IBA University. The site
presents his research portfolio, publications, leadership, teaching, and
contact information, sourced from his curriculum vitae and verified
academic profiles (Google Scholar, Scopus, university and ranking sources).

## Project Overview

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 3.4 with a custom academic palette (navy, blue, cyan, aqua, paper, ink, line)
- **Icons:** lucide-react
- **Content storage:** TypeScript data files in `/data` (no CMS, no database)
- **Deployment:** Runs on any Node 18.18+ host (Vercel, Cloudflare Pages, Netlify, self-hosted)

## Main Features

- Dean / leadership profile with HEC- and QEC-aligned content
- Research themes (flexible electronics, thermogalvanic hydrogels, triboelectric nanogenerators, energy harvesting, printed/soft electronics, health/HMI)
- Searchable & filterable publications explorer (60+ entries from CV)
- Teaching & supervision page including grouped course catalogue
- News / updates feed and photo gallery (Senate, Syndicate, BASR, Industrial Advisory Board, QEC, training events)
- International collaboration map (Pakistan, China, South Korea, Croatia/EU)
- Downloadable CV (PDF and DOCX)
- Mobile-responsive, accessibility-conscious, SEO + Schema.org Person JSON-LD

## Folder Structure

```
.
├── app/                        # Next.js App Router pages
│   ├── about/                  # Biography, education, memberships
│   ├── collaborations/         # International collaboration page
│   ├── contact/                # Contact details and form
│   ├── leadership/             # Dean + QEC + governance + honors
│   ├── news/                   # News feed
│   ├── projects/               # Research projects / grants
│   ├── publications/           # Publications explorer
│   ├── research/               # Research themes
│   ├── teaching/               # Teaching, supervision, courses
│   ├── updates-gallery/        # Photo gallery
│   ├── globals.css             # Tailwind layer + base styles
│   ├── layout.tsx              # Root layout (header, footer, metadata)
│   ├── page.tsx                # Home page
│   └── robots.ts | sitemap.ts  # SEO
├── components/                 # Reusable React components
├── data/                       # All CV-sourced content (edit here)
│   ├── profile.ts              # Name, title, contact, metrics, JSON-LD
│   ├── experience.ts           # Roles, education, international stays
│   ├── service.ts              # Dean, QEC, governance, reviewer, honors
│   ├── teaching.ts             # Courses, supervision, mentoring
│   ├── publications.ts         # Publications list
│   ├── researchThemes.ts       # Research themes
│   ├── grants.ts               # Funded projects / grants
│   ├── news.ts                 # News and updates
│   ├── gallery.ts              # Gallery events and assets
│   └── types.ts                # Shared TypeScript types
├── lib/                        # Small utilities
├── public/                     # Static assets
│   ├── documents/              # Downloadable CV (PDF)
│   └── images/                 # Profile and gallery images
├── photos/                     # Source photos imported by scripts
├── scripts/                    # Build / import scripts
│   ├── import-gallery-assets.mjs
│   └── build_cv_final.py       # Builds the final CV DOCX
├── docs/                       # Strategy notes, research sources, etc.
├── Saeed_Ahmed_Khan_CV_v1_1.docx        # Reformatted CV (source for design)
├── Saeed_Ahmed_Khan_CV_v1_1.pdf         # Reformatted CV (PDF)
├── Resume_Saeed Ahmed Khan-2(1).pdf     # Original CV (source of truth for content)
├── Saeed_Ahmed_Khan_CV_Final.docx       # Final updated CV (DOCX)
├── README.md                            # This file
├── TECHNICAL_DOCUMENTATION.md           # Architecture and engineering docs
├── CONTENT_UPDATE_GUIDE.md              # Non-technical content guide
└── RESEARCH_SOURCES.md                  # Verified research sources
```

## Run the Website Locally

You need Node.js 18.18+ (or 20+) and npm.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To bind to a different host/port:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

## Build, Type-Check, and Lint

```bash
npm run typecheck   # TypeScript strict check
npm run lint        # ESLint
npm run build       # Production build
npm start           # Serve the production build locally
```

Run all three before deploying any content change.

## How to Update Content

Almost all content lives in `/data` as plain TypeScript objects. Editing
these files is the safest way to update the site.

| What you want to change            | File to edit              |
| ---------------------------------- | ------------------------- |
| Name, title, bio, contact, metrics | `data/profile.ts`         |
| Roles & education timeline         | `data/experience.ts`      |
| Dean / QEC / governance / honors   | `data/service.ts`         |
| Courses & supervision              | `data/teaching.ts`        |
| Publications                       | `data/publications.ts`    |
| Research themes                    | `data/researchThemes.ts`  |
| Grants & funded projects           | `data/grants.ts`          |
| News and updates                   | `data/news.ts`            |
| Gallery                            | `data/gallery.ts`         |

For a non-technical walkthrough of common edits, see
[CONTENT_UPDATE_GUIDE.md](CONTENT_UPDATE_GUIDE.md).

### Updating the Downloadable CV

1. Replace `public/documents/Saeed-Ahmed-Khan-CV.pdf` with the new PDF (keep the same filename).
2. If you also want to change the linked filename, update `profile.cvPath` in `data/profile.ts`.
3. To rebuild the canonical DOCX from the latest reformatted source, run:

   ```bash
   pip install python-docx
   python scripts/build_cv_final.py
   ```

   This regenerates `Saeed_Ahmed_Khan_CV_Final.docx` in the repo root.

### Updating the Footer

The footer is in `components/Footer.tsx`. The copyright line reads:

```
© 2026 Dr. Saeed Ahmed Khan.
```

Change the string in that file if needed.

## Deploy

Any host that runs Next.js works. Recommended:

- **Vercel:** import the repo and accept the defaults; Next.js is auto-detected.
- **Cloudflare Pages / Netlify:** build command `npm run build`, output `.next/`.
- **Self-hosted Node:** `npm run build && npm start`.

## Notes for Future Maintainers

- **Do not invent facts.** Only add roles, awards, rankings, or publications
  that are verified from the CV or a credible source. Uncertain items go in
  `docs/website-strategy/07-fact-check-notes.md` or `RESEARCH_SOURCES.md`,
  not in the public site.
- **Preserve the design language.** Section spacing, color palette, and
  card styles convey the academic-leadership tone; change the data, not
  the structure, unless a redesign is explicitly requested.
- **Keep the CV (DOCX & PDF) in sync** with the website data. The PDF in
  `public/documents/` is what visitors download.
- **Run `npm run typecheck && npm run lint && npm run build`** before
  committing any content change.

## Documentation Index

- [TECHNICAL_DOCUMENTATION.md](TECHNICAL_DOCUMENTATION.md) — architecture and engineering details
- [CONTENT_UPDATE_GUIDE.md](CONTENT_UPDATE_GUIDE.md) — non-technical content edits
- [RESEARCH_SOURCES.md](RESEARCH_SOURCES.md) — verified external sources used
- `docs/website-strategy/` — design and IA planning notes
