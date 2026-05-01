import { internationalExperience } from "@/data/experience";

export function CollaborationMap() {
  return (
    <div className="rounded-xl border border-line bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-5">
        {internationalExperience.map((item, index) => (
          <article className="relative rounded-lg bg-paper p-4" key={item.country}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-sm font-semibold text-aqua">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-ink">{item.country}</h3>
            </div>
            <p className="mt-3 text-sm font-semibold text-blue">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

