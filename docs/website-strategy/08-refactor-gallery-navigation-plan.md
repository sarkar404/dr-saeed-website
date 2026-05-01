# Refactor, Gallery, and Navigation Plan

## 1. Current Routes and Pages

The current App Router site exposes these page routes:

- `/` - homepage with hero, metrics, research preview, publication preview, leadership preview, collaboration map, CTA, and latest updates.
- `/about` - biography, professional profile, career timeline, education, memberships, skills, and languages.
- `/research` - research themes with related publications.
- `/publications` - searchable publication page with featured publications and full explorer.
- `/projects` - funded projects and grant-linked outputs.
- `/teaching` - teaching, supervision, courses, and mentoring focus.
- `/leadership` - leadership, governance, editorial service, review service, conference leadership, and honors.
- `/collaborations` - international experience, collaboration areas, and representative co-authored publications.
- `/news` - CV-supported news/update cards.
- `/contact` - contact details, profile links, CV download, and inquiry routing.
- `/sitemap.xml` and `/robots.txt` are generated from App Router metadata routes.

## 2. Current Visible Navigation

The visible navigation is defined in `data/profile.ts` as:

- Home
- About
- Research
- Publications
- Projects
- Teaching
- Leadership
- Collaborations
- News
- Contact

This is too broad for the client-facing version because several links point to pages that repeat content already shown elsewhere.

## 3. Pages With Duplicated Information

- `About` repeats the homepage biography, role summary, research positioning, leadership scope, and parts of the career narrative.
- `Projects` overlaps with `Research` because grant themes and selected outputs are research-context material.
- `Collaborations` overlaps with the homepage collaboration map and research collaboration positioning.
- `News` is a standalone update feed but can be merged into a richer `Updates & Gallery` page.
- Contact cards and CTA language recur on `Home`, `Contact`, and `AcademicCTA`; these should remain short and contextual.
- Research themes appear on `Home`, `Research`, `Projects`, and `Collaborations`; the homepage should preview them and `Research` should be the deeper location.

## 4. Proposed Simplified Sitemap

Final visible navigation:

- `/` - Home
- `/research` - Research
- `/publications` - Publications
- `/leadership` - Leadership
- `/teaching` - Teaching
- `/updates-gallery` - Updates & Gallery
- `/contact` - Contact

Compatibility routes can remain physically present if needed, but removed/merged routes should redirect:

- `/about` -> `/`
- `/projects` -> `/research`
- `/collaborations` -> `/research`
- `/news` -> `/updates-gallery`
- `/gallery` -> `/updates-gallery`
- `/service` -> `/leadership`

## 5. Photo Folder Analysis

Source folder: `D:\Dr_Saeed\photos`

Profile image:

- `Main_Profile_Photo.jpg` - 303 x 314 JPG, professional portrait, low resolution but suitable at restrained display sizes.

Event folders:

- `01_Board_oF_Meeting` - 4 JPG images, includes `details.txt`. The requested name was `01_Board_of_Meeting`; actual filesystem casing differs.
- `02_Generative_AI_Workshop` - 4 JPG images, includes `details.txt`.
- `03_Quality Enhancement Cell (QEC)` - 4 JPG images, includes `details.txt`.
- `04_21st Meeting of the Board of Advanced Studies and Research (BASR)` - 4 JPG images, includes `details.txt`.
- `05_The Industrial Advisory Board (IAB)` - 5 JPG images, includes `details.txt`.
- `06_23rd Syndicate Meeting of Sukkur IBA University` - 5 JPG images, includes `details.txt`.
- `07_16th Meeting of the Senate of Sukkur IBA University` - 4 JPG images, includes `details.txt`.
- `08_Training_&_Conferences` - 9 JPG images, no `details.txt`.
- `09_personal_life_photos` - 8 JPG images, no `details.txt`.

## 6. Folders Containing `details.txt`

- Board Meeting
- Generative AI Workshop
- Quality Enhancement Cell (QEC)
- 21st Meeting of the Board of Advanced Studies and Research (BASR)
- The Industrial Advisory Board (IAB)
- 23rd Syndicate Meeting of Sukkur IBA University
- 16th Meeting of the Senate of Sukkur IBA University

## 7. Folders Without `details.txt`

- Training & Conferences
- Personal Moments

For these folders, summaries will be cautious and based on the folder title only.

## 8. Image Import Strategy

Create `scripts/import-gallery-assets.mjs` and add `npm run import:gallery`.

The script will:

- Read `D:\Dr_Saeed\photos`.
- Copy `Main_Profile_Photo.jpg` to `public/images/profile/main-profile.jpg`.
- Copy event images to `public/images/gallery/<slug>/`.
- Normalize public filenames to lowercase, hyphenated, safe names.
- Preserve source extensions where possible.
- Ignore `details.txt`, other `.txt` files, `desktop.ini`, thumbnail files, temporary files, and unsupported extensions.
- Avoid deleting original source photos.
- Avoid placing raw notes in `public`.
- Log processed folders, image counts, folders with details, and folders without details.

## 9. Gallery Data Model

Create `data/gallery.ts` with:

- `GalleryCategory`
- `GalleryImage`
- `GalleryEvent`
- `galleryEvents`
- helper exports for categories, featured events, homepage preview events, and total imported images.

Each event will include:

- `id`
- `title`
- `slug`
- optional `displayDate`
- optional `sortDate`
- `category`
- polished `summary`
- `sourceFolder`
- `coverImage`
- `images`
- optional `featured`
- optional `homepagePreview`

## 10. Image Optimization Approach

Use Next.js `Image` for gallery covers, grids, lightbox images, homepage preview images, and the profile image.

Initial pass will copy images without compression to avoid adding dependency risk. The source images are moderate in size and Next.js can optimize served image variants during rendering. If future hosting has strict image quotas, `sharp`-based resizing can be added after confirming dependency compatibility.

Performance rules:

- Use fixed aspect ratios to avoid layout shift.
- Use `sizes` on responsive images.
- Keep homepage gallery preview to 3-4 professional events.
- Use lazy-loading defaults for non-priority images.
- Do not use personal photos in homepage previews.

## 11. Redirect Strategy

Use `next.config.ts` redirects:

- `/about` -> `/`
- `/projects` -> `/research`
- `/collaborations` -> `/research`
- `/news` -> `/updates-gallery`
- `/gallery` -> `/updates-gallery`
- `/service` -> `/leadership`

These redirects preserve compatibility while keeping the visible sitemap simple.

## 12. Final Implementation Checklist

- Add gallery import script and package script.
- Run `npm run import:gallery`.
- Add `data/gallery.ts` with polished summaries and safe image references.
- Add gallery UI components with filters, cards, grid, and lightbox.
- Add `/updates-gallery` page combining news and gallery.
- Simplify `navItems`.
- Update homepage to use main profile photo and gallery preview.
- Merge project/grant/collaboration context into `/research`.
- Keep publications dedicated and searchable.
- Refine leadership, teaching, contact, footer, and active navigation consistency where needed.
- Add redirects for merged routes.
- Update sitemap generation to use simplified visible navigation.
- Add `docs/website-strategy/09-content-deduplication-report.md`.
- Add `docs/website-strategy/10-gallery-source-notes.md`.
- Add `docs/website-strategy/11-temporary-hosting-guide.md`.
- Run `npm run import:gallery`.
- Run `npm run build`.
- Run `npm run lint`.
- Run `npm run typecheck`.
- Manually verify the simplified routes and redirects.
