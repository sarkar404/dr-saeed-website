import type { TimelineItem } from "@/data/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-line">
      {items.map((item) => (
        <article className="relative pl-12" key={`${item.title}-${item.period}`}>
          <span className="absolute left-[9px] top-2 h-3 w-3 rounded-full border-2 border-cyan bg-white" />
          <div className="rounded-lg border border-line bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-blue">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-700">
              {item.organization}
              {item.location ? ` | ${item.location}` : ""}
            </p>
            {item.description ? (
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            ) : null}
            {item.highlights?.length ? (
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                {item.highlights.map((highlight) => (
                  <li className="flex gap-2" key={highlight}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

