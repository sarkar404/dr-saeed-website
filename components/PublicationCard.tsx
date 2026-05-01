"use client";

import { useMemo, useState } from "react";
import { Check, Clipboard, ExternalLink, FileText } from "lucide-react";
import type { Publication } from "@/data/types";
import { getThemeNames, publicationBibtex, publicationCitation } from "@/lib/utils";

type PublicationCardProps = {
  publication: Publication;
  compact?: boolean;
};

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  }
}

export function PublicationCard({ publication, compact = false }: PublicationCardProps) {
  const [copied, setCopied] = useState<"citation" | "bibtex" | null>(null);
  const citation = useMemo(() => publicationCitation(publication), [publication]);
  const bibtex = useMemo(() => publicationBibtex(publication), [publication]);
  const link = publication.doi ? `https://doi.org/${publication.doi}` : publication.url;

  async function handleCopy(value: "citation" | "bibtex") {
    await copyText(value === "citation" ? citation : bibtex);
    setCopied(value);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-sm transition hover:border-cyan hover:shadow-card">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase text-aqua">
          {publication.year}
        </span>
        <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold capitalize text-slate-700">
          {publication.type}
        </span>
        {publication.selected ? (
          <span className="rounded-full bg-amber/[0.14] px-3 py-1 text-xs font-semibold text-amber">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className={compact ? "mt-4 text-base font-semibold leading-6 text-ink" : "mt-4 text-lg font-semibold leading-7 text-ink"}>
        {publication.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{publication.authors}</p>
      <p className="mt-3 text-sm font-semibold text-blue">
        {publication.venue}
        {publication.volume ? `, ${publication.volume}` : ""}
        {publication.pages ? `, ${publication.pages}` : ""}
      </p>
      {publication.summary && !compact ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{publication.summary}</p>
      ) : null}
      <p className="mt-3 text-xs font-semibold uppercase text-slate-500">
        {getThemeNames(publication.themeIds)}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {publication.tags.slice(0, compact ? 2 : 4).map((tag) => (
          <span className="rounded-full border border-line px-2.5 py-1 text-xs text-slate-600" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {link ? (
          <a
            className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-blue transition hover:border-cyan hover:text-ink"
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            DOI / link
            <ExternalLink aria-hidden="true" size={15} />
          </a>
        ) : null}
        <button
          className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan hover:text-blue"
          onClick={() => void handleCopy("citation")}
          type="button"
        >
          {copied === "citation" ? <Check aria-hidden="true" size={15} /> : <Clipboard aria-hidden="true" size={15} />}
          Citation
        </button>
        <button
          className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan hover:text-blue"
          onClick={() => void handleCopy("bibtex")}
          type="button"
        >
          {copied === "bibtex" ? <Check aria-hidden="true" size={15} /> : <FileText aria-hidden="true" size={15} />}
          BibTeX
        </button>
      </div>
    </article>
  );
}
