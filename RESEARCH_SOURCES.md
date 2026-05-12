# Research Sources

This file logs the external sources used to verify claims that appear on
the public website and on the updated CV. It is intentionally narrow:
it tracks **what** was verified, **where** the source is, and **how** the
information was used. Anything not listed here that wasn't already in
the original CV should be treated as unverified.

> Verification cut-off: 2026-05-03.

## 1. Personal & CV Content

### Original CV (primary source of truth)

- **Source:** `Resume_Saeed Ahmed Khan-2(1).pdf` (in repo root).
- **Used for:** All academic & professional roles, education, theses
  titles, research interests, project history, memberships, governance
  roles, QEC responsibilities, publications, conference papers, courses
  taught, software/tools, languages.
- **Notes:** Treated as the primary record. The reformatted CV
  (`Saeed_Ahmed_Khan_CV_v1_1.docx`) was used as the design template;
  any conflict between the two was resolved in favor of the original.

### Reformatted CV (design source)

- **Source:** `Saeed_Ahmed_Khan_CV_v1_1.docx` / `.pdf` (in repo root).
- **Used for:** Visual design, typography, section hierarchy, and
  style references for the updated CV (`Saeed_Ahmed_Khan_CV_Final.docx`).

### Public academic profiles

- **Google Scholar:** <https://scholar.google.com/citations?user=0k-E_IAAAAAJ&hl=en>
- **Scopus:** <https://www.scopus.com/authid/detail.uri?authorId=55735625200>
- **Used for:** Cross-checking publication titles, author orders, and
  venues for the publications listed in `data/publications.ts`.
- **Notes:** Citation count and "60+ publications" framing are rounded
  for plain-language consistency with the existing CV.

## 2. Sukkur IBA University Rankings (used for /leadership rankings card)

### Times Higher Education

- **URL:** <https://www.timeshighereducation.com/world-university-rankings/sukkur-iba-university>
- **Used for:** Statement that Sukkur IBA University is featured in the
  THE World University Rankings.
- **Limitations:** Year-specific position bands change annually. The
  copy on the website intentionally avoids quoting an exact band number.

### Times Higher Education 2026 — press coverage

- **URL:** <https://www.nation.com.pk/17-Oct-2025/sukkur-iba-university-shines-world-university-rankings-2026>
- **Used for:** Statement that the university appears in THE World
  University Rankings 2026 in the second tier of ranked Pakistani
  universities.
- **Limitations:** Press coverage; corroborated by THE listing above.

### QS — Top Universities profile

- **URL:** <https://www.topuniversities.com/universities/sukkur-iba-university>
- **Used for:** Confirmation that Sukkur IBA is included in QS regional
  rankings (Asia / Southern Asia / Sustainability).

### QS Asian University Rankings — Southern Asia 2026

- **URL:** <https://www.topuniversities.com/asia-university-rankings?countries=pk&tab=indicators>
- **Used for:** Statement that Sukkur IBA was ranked #131 in QS Asian
  University Rankings — Southern Asia 2026.
- **Limitations:** Numerical position is taken from the QS Top Universities
  regional table referenced above; the website rounds and contextualizes
  rather than re-publishing the full table.

### QS World University Rankings: Asia 2026 — university communication

- **URL:** <https://www.facebook.com/SukkurIBA.University/posts/sukkur-iba-university-shines-in-qs-world-university-rankings-asia-2026sukkur-iba/1273417504827704/>
- **Used for:** Confirming the university's own announcement of inclusion
  in QS Asia 2026.
- **Limitations:** University social-media post; used only to corroborate
  the QS sources above.

### US News Best Global Universities

- **URL:** <https://www.usnews.com/education/best-global-universities/sukkur-iba-university-530502>
- **Used for:** Confirmation that Sukkur IBA is included in US News Best
  Global Universities listings (mentioned in passing on the leadership page).

### SCImago Institutions Ranking

- **URL:** <https://www.scimagoir.com/institution.php?idp=11615>
- **Used for:** Background context on Sukkur IBA's research-output
  ranking (not directly quoted on the site).

## 3. HEC Pakistan / Quality Enhancement Cell Framework

### HEC QEC framework (general)

- **Source:** Higher Education Commission of Pakistan public guidance
  on Quality Enhancement Cells and Quality Assurance Agency (QAA)
  responsibilities.
- **Used for:** Wording of QEC responsibilities (`qecResponsibilities`)
  in `data/service.ts` and the Director QEC bullets on the CV.
- **Notes:** Responsibilities are written as **role responsibilities**,
  not as personal achievements, except where the original CV explicitly
  attributes them to Dr. Khan (e.g., the National Certified Reviewer
  credential, ranking submissions).

### Sindh HEC — National Certified Reviewer

- **Source:** Stated in the original CV. No external URL; the
  certification is institution-issued.
- **Used for:** Statement that Dr. Khan is a National Certified Reviewer
  of Higher Education Institutions, credentialed via a 100-hour Sindh HEC
  formal review training programme.

## 4. Sukkur IBA University

- **URL:** <https://www.iba-suk.edu.pk/>
- **Used for:** Background on Sukkur IBA's structure (Faculty of
  Engineering and Technology, Department of Electrical Engineering,
  statutory bodies).
- **Notes:** Statutory body names (Senate, Syndicate, Academic Council,
  Board of Advanced Studies and Research, Board of Faculty) match the
  original CV; the university page is consistent with this terminology.

## 5. Conference & Editorial Service Sources

### iCoMET (International Conference on Computing, Mathematics and Engineering Technologies)

- **Source:** Conference is hosted by Sukkur IBA University. Confirmed
  in the original CV and in the IEEE Xplore proceedings (multiple
  conference papers cite "Sukkur IBA University" as host).
- **Used for:** Statement that Dr. Khan was General Chair / Co-General
  Chair of the 1st, 2nd, and 3rd editions of iCoMET.

### Sukkur IBA Journal of Emerging Technologies (SJET)

- **Source:** Journal recognized by HEC Pakistan in the Y category.
  Stated in the original CV; HEC journal recognition lists are public.
- **Used for:** Statement that Dr. Khan served as Chief Editor of SJET
  (2018–2022, HEC-recognized Y category).

## 6. Items Considered but NOT Added

The following were *considered* and intentionally left out because they
could not be independently verified or were not in the CV:

- A specific QS Asia/South Asia rank for Sukkur IBA in years other than
  2026 (left as the verified 2026 figure plus a general statement).
- Any direct claim that Dr. Khan personally caused a ranking position
  change. The website only states he supported institutional submissions.
- THE Impact Rankings score / position. The CV mentions THE Impact
  Rankings as one of the ranking processes Dr. Khan worked on; the
  website preserves this without claiming a numeric outcome.
- Any new role, award, or appointment beyond what appears in the
  original CV.

## 7. Limitations

- **Numbers change yearly.** Ranking positions, citation counts, and
  publication totals all evolve. Re-verify before each major release.
- **Press coverage is secondary.** Where possible, the primary ranking
  body (QS, THE) was preferred over press coverage.
- **Unverifiable statements were dropped, not paraphrased.** If the
  original CV makes a claim that an external source can't be located
  for, the claim is preserved with the same wording as the CV (since
  the CV itself is the institutional record).

## 8. How to Update This File

When you change a verifiable claim on the website or CV:

1. Add a new entry under the matching section.
2. Include: **source title**, **URL** (or filename), **what was used**,
   and **any limitations**.
3. Remove or correct any entry that becomes outdated.
