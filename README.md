# Prof. Saeed Ahmed Khan Website Guide

## Start The Website

Open PowerShell in this folder:

```powershell
cd D:\Dr_Saeed
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Then open:

```text
http://127.0.0.1:3000
```

For a production check, run:

```powershell
npm run build
npm run lint
npm run typecheck
```

## Where To Modify Content

Most website content is stored in `/data`:

- `data/profile.ts` - name, title, bio, contact, metrics, links.
- `data/publications.ts` - publication list, DOI links, tags, featured papers.
- `data/researchThemes.ts` - research clusters and keywords.
- `data/experience.ts` - career, education, international experience.
- `data/grants.ts` - projects and funded grants.
- `data/teaching.ts` - courses, supervision, mentoring areas.
- `data/service.ts` - leadership, committees, reviewer roles, honors.
- `data/news.ts` - news and updates.

Pages are in `/app`, and reusable layout pieces are in `/components`.

## Common Updates

To update the CV download file:

1. Replace `public/documents/Saeed-Ahmed-Khan-CV.pdf`.
2. Keep the same filename unless you also update `profile.cvPath` in `data/profile.ts`.

To add a new publication:

1. Open `data/publications.ts`.
2. Copy an existing publication object.
3. Change `id`, `title`, `authors`, `year`, `venue`, `type`, `doi` or `url`, `themeIds`, and `tags`.
4. Set `selected: true` only for highlighted papers.

To update the portrait:

1. Add the new image in `public/images`.
2. Update the image path in `components/Hero.tsx`.

## Maintenance Checklist

After edits, run:

```powershell
npm run typecheck
npm run lint
npm run build
```

Also check:

- Homepage loads correctly.
- Navigation works on desktop and mobile.
- Publications search/filter still works.
- CV download opens.
- No unsupported facts were added publicly.
- Uncertain details go into `docs/website-strategy/07-fact-check-notes.md`.

## Strategy Documents

Planning and source-traceability notes are in:

```text
docs/website-strategy/
```

Use these files before making major content or design changes.

