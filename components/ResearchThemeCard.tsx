import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ResearchTheme } from "@/data/types";

export function ResearchThemeCard({ theme }: { theme: ResearchTheme }) {
  const Icon = theme.icon;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-md bg-cyan/10 text-blue">
          <Icon aria-hidden="true" size={24} />
        </div>
        <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-slate-600">
          {theme.keywords[0]}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{theme.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{theme.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {theme.applications.slice(0, 3).map((application) => (
          <span className="rounded-full bg-paper px-3 py-1 text-xs text-slate-700" key={application}>
            {application}
          </span>
        ))}
      </div>
      <Link
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue transition group-hover:text-cyan"
        href={`/research#${theme.id}`}
      >
        Explore theme
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </article>
  );
}

