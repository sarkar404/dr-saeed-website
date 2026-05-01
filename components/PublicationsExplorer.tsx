"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { publications, publicationYears, publicationTypes } from "@/data/publications";
import { researchThemes } from "@/data/researchThemes";
import type { PublicationType } from "@/data/types";
import { PublicationCard } from "./PublicationCard";

export function PublicationsExplorer() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [theme, setTheme] = useState("all");
  const [type, setType] = useState<PublicationType | "all">("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return publications.filter((publication) => {
      const matchesQuery =
        !normalized ||
        [
          publication.title,
          publication.authors,
          publication.venue,
          publication.year.toString(),
          publication.tags.join(" ")
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);

      const matchesYear = year === "all" || publication.year.toString() === year;
      const matchesTheme = theme === "all" || publication.themeIds.includes(theme);
      const matchesType = type === "all" || publication.type === type;

      return matchesQuery && matchesYear && matchesTheme && matchesType;
    });
  }, [query, theme, type, year]);

  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-line bg-white p-4 shadow-card">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_0.6fr_0.7fr_0.6fr]">
          <label className="relative block">
            <span className="sr-only">Search publications</span>
            <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              className="h-12 w-full rounded-md border border-line bg-paper pl-10 pr-3 text-sm text-ink outline-none transition focus:border-cyan focus:bg-white"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title, author, venue, year, or keyword"
              type="search"
              value={query}
            />
          </label>

          <label className="block">
            <span className="sr-only">Filter by year</span>
            <select
              className="h-12 w-full rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-cyan focus:bg-white"
              onChange={(event) => setYear(event.target.value)}
              value={year}
            >
              <option value="all">All years</option>
              {publicationYears.map((publicationYear) => (
                <option key={publicationYear} value={publicationYear}>
                  {publicationYear}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="sr-only">Filter by research theme</span>
            <select
              className="h-12 w-full rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-cyan focus:bg-white"
              onChange={(event) => setTheme(event.target.value)}
              value={theme}
            >
              <option value="all">All themes</option>
              {researchThemes.map((researchTheme) => (
                <option key={researchTheme.id} value={researchTheme.id}>
                  {researchTheme.shortTitle}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="sr-only">Filter by publication type</span>
            <select
              className="h-12 w-full rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none transition focus:border-cyan focus:bg-white"
              onChange={(event) => setType(event.target.value as PublicationType | "all")}
              value={type}
            >
              <option value="all">All types</option>
              {publicationTypes.map((publicationType) => (
                <option className="capitalize" key={publicationType} value={publicationType}>
                  {publicationType}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-700" aria-live="polite">
          Showing {filtered.length} of {publications.length} publications
        </p>
        <button
          className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan hover:text-blue"
          onClick={() => {
            setQuery("");
            setYear("all");
            setTheme("all");
            setType("all");
          }}
          type="button"
        >
          Reset filters
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
}

