import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { grants } from "@/data/grants";
import { publications } from "@/data/publications";
import { themeById } from "@/data/researchThemes";

export const metadata: Metadata = {
  title: "Projects and Grants",
  description:
    "Funded projects and grant roles for Prof. Saeed Ahmed Khan, including SRSP, HEC Start-up Research Grants, and ICT R&D sustainable energy work."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects and grants"
        title="Funded research across advanced sensors, BCI signal processing, nanomaterial-based flexible devices, and sustainable energy."
        text="Grant descriptions are based on CV-listed roles, agencies, and project summaries. Amounts are shown only where listed in the CV."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Funded work"
            title="Research grants and applied engineering projects"
            text="The funded portfolio combines materials/sensor research with biomedical signal processing and sustainable energy systems."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {grants.map((grant) => (
              <article className="rounded-lg border border-line bg-paper p-6 shadow-sm" key={`${grant.year}-${grant.title}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-aqua">{grant.year}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">{grant.role}</span>
                  {grant.amount ? (
                    <span className="rounded-full bg-amber/[0.14] px-3 py-1 text-xs font-semibold text-amber">
                      {grant.amount}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">{grant.title}</h2>
                <p className="mt-2 text-sm font-semibold text-blue">{grant.agency}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{grant.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {grant.themeIds.map((themeId) => (
                    <span className="rounded-full border border-line bg-white px-3 py-1 text-xs text-slate-700" key={themeId}>
                      {themeById[themeId]?.shortTitle ?? themeId}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Grant-linked outputs"
            title="Representative publications connected to project themes"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {publications
              .filter((publication) =>
                publication.themeIds.some((themeId) =>
                  ["flexible-sensors", "energy-harvesting", "health-hmi", "systems"].includes(themeId)
                )
              )
              .slice(0, 6)
              .map((publication) => (
                <PublicationCard compact key={publication.id} publication={publication} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

