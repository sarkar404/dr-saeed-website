import type { Metadata } from "next";
import { CollaborationMap } from "@/components/CollaborationMap";
import { PageHero } from "@/components/PageHero";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { internationalExperience } from "@/data/experience";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "International experience and collaboration context for Prof. Saeed Ahmed Khan across Pakistan, China, South Korea, Croatia/EU, and thermogalvanic hydrogel research networks."
};

export default function CollaborationsPage() {
  const collaborativePublications = publications
    .filter((publication) =>
      publication.authors.includes("H. Zhang") ||
      publication.authors.includes("D. Byun") ||
      publication.authors.includes("Y. Lin")
    )
    .slice(0, 8);

  return (
    <>
      <PageHero
        eyebrow="Collaborations"
        title="International research mobility and publication networks across flexible electronics, nanogenerators, and hydrogels."
        text="Collaboration content is drawn from CV-listed appointments, education, references, and co-authored publications. No unsupported lab membership or formal partnership claims are added."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="International map"
            title="Countries and institutions represented in the CV"
          />
          <div className="mt-10">
            <CollaborationMap />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Research interface"
            title="Collaboration areas"
            text="The strongest supported collaboration themes include thermogalvanic hydrogels, flexible sensing, EHD-printed devices, triboelectric nanogenerators, and energy-harvesting electronics."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {internationalExperience.map((item) => (
              <article className="rounded-lg border border-line bg-white p-5 shadow-sm" key={item.country}>
                <p className="text-sm font-semibold uppercase text-blue">{item.country}</p>
                <h2 className="mt-3 text-lg font-semibold text-ink">{item.label}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Co-authored work"
            title="Representative internationally co-authored publications"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {collaborativePublications.map((publication) => (
              <PublicationCard compact key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

