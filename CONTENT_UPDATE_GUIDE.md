# Content Update Guide (Non-Technical)

This guide is for the person who maintains the **content** of Dr. Saeed
Ahmed Khan's academic website. You do **not** need to be a programmer.
You only need a code editor (VS Code is recommended, free download), a
little patience, and care to follow these instructions exactly.

> **Golden rule:** the website *content* lives inside the `data/` folder.
> Anything outside that folder is "machinery" — please do not touch it
> without help from a developer.

## 1. Before You Begin

1. Install **Visual Studio Code** (free): <https://code.visualstudio.com/>
2. Open the project folder in VS Code (File → Open Folder…).
3. Open the **Explorer** panel on the left and find the `data` folder.

That's it. Every example below tells you which file to open inside `data/`.

## 2. The Files You'll Edit

| If you want to update…              | Open this file              |
| ----------------------------------- | --------------------------- |
| Name, photo, title, bio, contact    | `data/profile.ts`           |
| Job history (Dean, QEC, Postdoc, …) | `data/experience.ts`        |
| Dean / QEC / governance bullets     | `data/service.ts`           |
| Honors and awards                   | `data/service.ts`           |
| Memberships (IEEE, PEC, HEC)        | `data/service.ts`           |
| Languages and skills                | `data/service.ts`           |
| Reviewer & editorial roles          | `data/service.ts`           |
| Courses taught                      | `data/teaching.ts`          |
| Supervision counts                  | `data/teaching.ts`          |
| Publications list                   | `data/publications.ts`      |
| Research themes / focus areas       | `data/researchThemes.ts`    |
| Grants / funded projects            | `data/grants.ts`            |
| News and updates                    | `data/news.ts`              |
| Photo gallery                       | `data/gallery.ts`           |

## 3. General Editing Rules

These rules apply to every file:

- Each item is wrapped in `{ ... }` (curly braces). Don't delete the braces.
- Each line inside the braces looks like `field: "some value",`.
- **Always keep the comma at the end of each line.**
- **Always keep the quotes around text.** Use straight `"`, not curly “ ”.
- If you are unsure, copy an existing entry and modify the copy.
- Save the file (Ctrl + S). The website will refresh automatically if
  the developer is running it (`npm run dev`).

## 4. Common Tasks

### 4.1 Update a Personal Detail

Open `data/profile.ts`. You'll see a block called `profile`:

```ts
export const profile = {
  name: "Saeed Ahmed Khan",
  honorific: "Prof.",
  currentTitle: "Dean, Faculty of Engineering and Technology",
  email: "saeed.abro@iba-suk.edu.pk",
  phone: "+92 333 7111 092",
  ...
};
```

Change the text **between the quotes**. Save the file.

### 4.2 Add a New Academic Role

Open `data/experience.ts`. Find the `roles` list. Copy the most recent
entry and paste it just below the `[` opening bracket so it appears at
the top of the page (newest first):

```ts
{
  title: "Your New Role Title",
  organization: "Sukkur IBA University",
  location: "Pakistan",
  period: "March 2026 - Present",
  type: "role",
  description: "One short sentence about the role.",
  highlights: [
    "First bullet about a responsibility or achievement.",
    "Second bullet."
  ]
},
```

Then save.

### 4.3 Remove an Outdated Role

Find the role block in `data/experience.ts`. Delete everything from `{`
to `},` (including the closing comma). Save.

### 4.4 Add or Remove a Course

Open `data/teaching.ts`. Find the `courseGroups` list. Each group is
an object with `title` and `courses`. Add a new course to its group:

```ts
{
  title: "Electronics and Circuits",
  courses: [
    "VLSI Technology",
    "Electronic Devices and Circuits",
    "Your New Course Here"
  ]
}
```

To remove a course, delete the line with the course name (and its trailing comma).

### 4.5 Add a New Publication

Open `data/publications.ts`. Copy any existing publication block and
change the fields:

```ts
{
  id: "pub-2026-some-unique-id",
  title: "Title of the Paper",
  authors: "A. Author, S.A. Khan, B. Author",
  year: 2026,
  venue: "Journal Name",
  type: "journal",         // or "conference" or "book"
  doi: "10.xxxx/xxxxx",
  url: "https://doi.org/10.xxxx/xxxxx",
  themeIds: ["thermogalvanic"],   // pick existing theme IDs
  tags: ["keyword1", "keyword2"],
  selected: true           // set to true to feature on the home page
},
```

### 4.6 Add an Award or Honor

Open `data/service.ts`. Find the `honors` list. Each item is one line:

```ts
"2026: Some New Award, awarded by Some Institution.",
```

Add a new line in the same format and save.

### 4.7 Add a Membership or Committee

Same file (`data/service.ts`):

- Membership → add a line to `memberships`.
- Statutory body or committee → add a line to `governanceRoles`.

### 4.8 Update the Dean or QEC Responsibility Bullets

Same file (`data/service.ts`):

- `deanResponsibilities` — bullets shown under "Dean — Faculty of Engineering and Technology" on the Leadership page.
- `qecResponsibilities` — bullets shown under "Director — Quality Enhancement Cell" on the Leadership page.

Each item is one line in quotes, ending with a comma.

### 4.9 Update the Footer Copyright

Open `components/Footer.tsx`. Near the bottom, find:

```tsx
© 2026 Dr. Saeed Ahmed Khan.
```

Change the year or text. Save.

### 4.10 Add a New News Item

Open `data/news.ts`. Copy an existing entry and update:

```ts
{
  date: "2026-05-15",
  title: "Short headline",
  summary: "One-sentence description.",
  href: "/leadership",      // optional — page to link to
  tag: "Leadership"          // category label
},
```

Use the date format `YYYY-MM-DD`.

### 4.11 Update the CV Download

1. Save the new CV file as a PDF named exactly `Saeed-Ahmed-Khan-CV.pdf`.
2. Replace the existing file at `public/documents/Saeed-Ahmed-Khan-CV.pdf`.
3. The download link on the website will automatically serve the new file.

## 5. Adding a New Section to the Site

This is **technical work**. Please ask the developer. A new section
usually means a new component or a new page, which requires programming.

## 6. What You Should NOT Change Without a Developer

These files contain "wiring" that makes the site work. Touching them by
mistake can break the whole site:

- `app/layout.tsx`
- `app/**/page.tsx` (page templates)
- `components/*.tsx`
- `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, `package.json`
- `eslint.config.mjs`, `postcss.config.js`
- Anything in `lib/` or `scripts/`

If you need a structural change (a new page, a new visual section, a
different layout), ask a developer.

## 7. Verifying Your Changes

If you can run commands in a terminal:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser. The page reloads
automatically when you save a `data/*.ts` file.

If you can't run commands, ask the developer to deploy after your
edits. They will run:

```bash
npm run typecheck
npm run lint
npm run build
```

If any of these fail, the developer can help you fix it.

## 8. Common Mistakes (and Fixes)

| Symptom                                    | Likely cause                                         | Fix                                       |
| ------------------------------------------ | ---------------------------------------------------- | ----------------------------------------- |
| Site won't load / page is white            | Missing comma, missing quote, or stray character     | Undo last change (Ctrl + Z) and re-save   |
| New publication doesn't appear             | Missing `id` field, or duplicated `id`               | Make sure each `id` is unique             |
| Course doesn't show up                     | Wrong group name, or extra `,` after the last item   | Match the format of an existing entry     |
| Footer year unchanged                      | Edited the wrong file                                | Edit `components/Footer.tsx`              |

## 9. Don't Add Things You Can't Verify

- **Don't add awards, rankings, publications, or roles** unless they
  are in the CV or you have a credible source.
- If you're unsure, ask Dr. Khan or the developer first.
- For ranking and HEC-related claims, log the source (URL + date) in
  `RESEARCH_SOURCES.md`.

## 10. Asking for Help

If something doesn't look right, contact your developer with:

1. Which file you edited.
2. What you changed.
3. A screenshot of the problem.

Saving frequently and changing one thing at a time makes it much easier
to find the issue.
