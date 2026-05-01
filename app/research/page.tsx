import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { internationalExperience } from "@/data/experience";
import { grants } from "@/data/grants";
import { publications } from "@/data/publications";
import { researchThemes, themeById } from "@/data/researchThemes";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes for Prof. Saeed Ahmed Khan across flexible sensors, thermogalvanic hydrogels, nanogenerators, printed soft electronics, wearable health, HMI, and sustainable engineering systems."
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Flexible, self-powered, thermogalvanic, and wearable sensing systems."
        text="Research themes, funded projects, selected outputs, application areas, and collaboration directions are consolidated here so the site reads as a focused academic research profile rather than a fragmented CV."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {researchThemes.map((theme) => {
            const related = publications
              .filter((publication) => publication.themeIds.includes(theme.id))
              .slice(0, 3);
            const Icon = theme.icon;

            return (
              <article className="scroll-mt-28 rounded-xl border border-line bg-paper p-6 shadow-sm" id={theme.id} key={theme.id}>
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <div className="grid h-14 w-14 place-items-center rounded-lg bg-cyan/10 text-blue">
                      <Icon aria-hidden="true" size={28} />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-ink">{theme.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-700">{theme.summary}</p>
                    <div className="mt-5">
                      <h3 className="text-sm font-semibold uppercase text-blue">Technical keywords</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {theme.keywords.map((keyword) => (
                          <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-700" key={keyword}>
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="text-sm font-semibold uppercase text-blue">Applications</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{theme.applications.join(", ")}.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase text-blue">Related publications</h3>
                    <div className="mt-4 grid gap-4">
                      {related.map((publication) => (
                        <PublicationCard compact key={publication.id} publication={publication} />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Funded projects and grants"
            title="Research support across advanced sensors, signal processing, and sustainable energy."
            text="Grant descriptions are based on CV-listed roles, agencies, and project summaries. Amounts are shown only where listed in the CV."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {grants.map((grant) => (
              <article className="rounded-lg border border-line bg-white p-6 shadow-sm" key={`${grant.year}-${grant.title}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-aqua">{grant.year}</span>
                  <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-slate-700">{grant.role}</span>
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
                    <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-slate-700" key={themeId}>
                      {themeById[themeId]?.shortTitle ?? themeId}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration directions"
            title="International experience translated into research entry points."
            text="The strongest supported collaboration directions connect thermogalvanic hydrogels, flexible sensing, EHD-printed devices, nanogenerators, health-monitoring interfaces, and sustainable engineering systems."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {internationalExperience.map((item) => (
              <article className="rounded-lg border border-line bg-paper p-5 shadow-sm" key={item.country}>
                <p className="text-sm font-semibold uppercase text-blue">{item.country}</p>
                <h2 className="mt-3 text-lg font-semibold text-ink">{item.label}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Research posture"
            title="The technical work is presented through application contexts, not inflated claims."
            text="The site avoids unsupported patent, lab-size, h-index, and media claims. Research scope is drawn from CV-listed publications, grants, thesis topics, and stated research interests."
          />
        </div>
      </section>
    </>
  );
}
