import { themeById } from "@/data/researchThemes";
import type { Publication } from "@/data/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

export function getThemeNames(themeIds: string[]) {
  return themeIds
    .map((id) => themeById[id]?.shortTitle ?? id)
    .filter(Boolean)
    .join(", ");
}

export function publicationCitation(publication: Publication) {
  const details = [publication.venue, publication.volume, publication.pages]
    .filter(Boolean)
    .join(", ");
  return `${publication.authors}. "${publication.title}." ${details}, ${publication.year}.${
    publication.doi ? ` https://doi.org/${publication.doi}` : publication.url ? ` ${publication.url}` : ""
  }`;
}

export function publicationBibtex(publication: Publication) {
  const key = `${publication.authors.split(",")[0].replace(/[^a-zA-Z]/g, "")}${publication.year}${publication.id
    .split("-")
    .slice(-2)
    .join("")}`;
  const entryType =
    publication.type === "conference"
      ? "inproceedings"
      : publication.type === "book"
        ? "incollection"
        : "article";

  const fields = [
    `  title = {${publication.title}}`,
    `  author = {${publication.authors}}`,
    `  year = {${publication.year}}`,
    publication.type === "conference"
      ? `  booktitle = {${publication.venue}}`
      : `  journal = {${publication.venue}}`,
    publication.volume ? `  volume = {${publication.volume}}` : undefined,
    publication.pages ? `  pages = {${publication.pages}}` : undefined,
    publication.doi ? `  doi = {${publication.doi}}` : undefined,
    publication.url ? `  url = {${publication.url}}` : undefined
  ].filter(Boolean);

  return `@${entryType}{${key},\n${fields.join(",\n")}\n}`;
}

