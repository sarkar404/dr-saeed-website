import type { Metric } from "@/data/types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="glass rounded-lg p-5 shadow-card">
      <p className="text-3xl font-semibold text-blue">{metric.value}</p>
      <h3 className="mt-2 text-sm font-semibold uppercase text-ink">{metric.label}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{metric.note}</p>
    </article>
  );
}

