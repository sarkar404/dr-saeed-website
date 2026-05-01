# Design System

## Visual Direction

The visual identity should feel like a senior engineering professor's academic site redesigned by a scientific communications studio. It should combine the institutional weight of a dean profile with research cues from flexible electronics, hydrogel sensing, conductive traces, and nanoscale materials.

## Design Principles

- Academic first: authoritative, restrained, and readable.
- Research-forward: technical themes visible in the first viewport.
- Structured: pages should feel like a knowledge system, not a resume dump.
- Maintainable: data files drive publications, grants, themes, news, and experience.
- Accessible: semantic structure, keyboard navigation, contrast, responsive layout, reduced motion support.

## Palette

| Token | Color | Use |
| --- | --- | --- |
| `ink` | `#07111f` | Primary text and deep academic sections |
| `navy` | `#0b1f3a` | Header, hero, footer |
| `blue` | `#0b5ea8` | Institutional accent |
| `cyan` | `#11b8d8` | Scientific trace accent |
| `aqua` | `#7be3ee` | Hydrogel highlight |
| `emerald` | `#2e9d76` | Sustainability and energy notes |
| `amber` | `#c98722` | Grants, leadership, selected badges |
| `paper` | `#f6f9fc` | Page background |
| `white` | `#ffffff` | Cards and content surfaces |
| `line` | `#d7e2ee` | Borders and dividers |

This palette avoids a one-note blue site by adding amber, emerald, paper, and soft aqua accents.

## Typography

- Use modern system fonts for speed and reliability.
- Headings: confident, compact, no negative letter spacing.
- Body: 16-18 px on content pages, high line height.
- Technical metadata: smaller but never tiny; minimum practical text size around 13 px.

## Layout

- Sticky top navigation with clear active affordance.
- Mobile-first responsive grid.
- Constrained reading widths for biography and service pages.
- Full-width bands for major page sections, not nested cards.
- Cards only for individual repeated entities: metrics, research themes, publications, grants, timeline items.
- Stable card heights where hover states or badges could otherwise shift layout.

## Motifs

- Thin conductive traces.
- Soft data-grid backgrounds.
- Layered translucent material surfaces.
- Energy-flow line accents.
- Journal badges.
- Timeline rails.

No random particles, stock visuals, decorative blobs, or excessive motion.

## Component System

- `Header`: sticky responsive navigation.
- `Footer`: contact, links, copyright, quick routes.
- `PageHero`: compact hero for internal pages.
- `Hero`: premium homepage hero with portrait slot and research cues.
- `MetricCard`: CV-supported metrics.
- `SectionHeading`: consistent heading and eyebrow pattern.
- `ResearchThemeCard`: title, summary, keywords, applications.
- `PublicationCard`: metadata, DOI/link, citation actions.
- `PublicationsExplorer`: client-side search and filters.
- `Timeline`: career and education chronology.
- `LeadershipCard`: QEC, dean, service, editorial roles.
- `CVDownloadButton`: accessible CV download link.
- `AcademicCTA`: audience routing.

## Accessibility

- Semantic landmarks: header, nav, main, section, footer.
- Keyboard-operable mobile menu and publication controls.
- Visible focus states.
- Sufficient contrast on dark and light backgrounds.
- Alt text for portrait placeholder and visual assets.
- `prefers-reduced-motion` disables non-essential transitions.
- Buttons and links have clear labels.

