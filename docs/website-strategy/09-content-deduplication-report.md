# Content Deduplication Report

## Simplified Visible Navigation

The visible navigation has been reduced to:

- Home
- Research
- Publications
- Leadership
- Teaching
- Updates & Gallery
- Contact

## Pages Merged Into Stronger Destinations

- `About` content is no longer a visible navigation destination. The identity summary remains on the homepage hero, with contact/profile details on the Contact page.
- `Projects` content has been consolidated into `Research` through a funded projects and grants section.
- `Collaborations` content has been consolidated into `Research` through collaboration directions tied to international experience and research entry points.
- `News` content has been consolidated into `Updates & Gallery`, where verified update cards now sit beside the event/photo archive.
- `Gallery` is represented by the new `Updates & Gallery` route.
- `Service` is represented by the `Leadership` route.

## Redirects Added

Configured in `next.config.ts`:

- `/about` -> `/`
- `/projects` -> `/research`
- `/collaborations` -> `/research`
- `/news` -> `/updates-gallery`
- `/gallery` -> `/updates-gallery`
- `/service` -> `/leadership`

Redirects are temporary (`permanent: false`) so the client can review the simplified structure before final publication decisions.

## Duplicate Content Reduced

- Removed the standalone news preview section from the homepage and replaced it with a concise professional gallery preview.
- Removed visible navigation pressure from About, Projects, Collaborations, and News.
- Re-pointed collaborator CTA links from `/collaborations` to `/research`.
- Re-pointed the SRSP grant update from `/projects` to `/research`.
- Consolidated grant cards and collaboration directions inside `/research` so research context, funding, applications, and collaboration pathways are presented together.
- Kept the homepage as a preview surface: hero/profile, key metrics, research themes preview, selected publications, leadership preview, collaboration/student/institution CTA, gallery preview, and contact CTA.

## Where Important Information Now Lives

- Biography and identity summary: `/` and `/contact`
- Research themes: `/research`
- Funded projects and grants: `/research`
- Collaboration directions: `/research`
- Publications and publication tools: `/publications`
- Dean/QEC/accreditation/governance/editorial/reviewer service: `/leadership`
- Courses, supervision, and mentoring areas: `/teaching`
- News/update cards and event gallery: `/updates-gallery`
- Official contact details, public academic links, and CV download: `/contact`

## Routes Kept for Compatibility

The physical routes for the older pages may still exist in the source tree, but the user-facing navigation and configured redirects send visitors to the consolidated destinations. This keeps the refactor low-risk while making the visible site simpler for client review.

## Residual Duplication Notes

- The same core research themes appear on the homepage and Research page by design; the homepage uses them as a preview, while Research provides detail and related outputs.
- Contact details appear in the footer and Contact page by design; the footer is compact, and Contact provides the complete official profile card.
- Leadership appears on the homepage and Leadership page by design; the homepage preview is short, while Leadership remains the executive institutional page.
