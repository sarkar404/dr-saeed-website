import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PublicationCard } from "@/components/PublicationCard";
import { PublicationsExplorer } from "@/components/PublicationsExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredPublications, publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Searchable publications for Prof. Saeed Ahmed Khan with year, theme, type, DOI links, copy citation, and BibTeX export."
};

export default function PublicationsPage() {
  const journalCount = publications.filter((publication) => publication.type === "journal").length;
  const conferenceCount = publications.filter((publication) => publication.type === "conference").length;

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="A searchable record across flexible sensors, hydrogels, nanogenerators, electronics, and systems."
        text="Publication metadata is structured from the CV and older full resume list. Use the filters to search by year, research theme, publication type, author, title, or venue."
      />

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <article className="rounded-lg border border-line bg-paper p-5">
            <p className="text-3xl font-semibold text-blue">{publications.length}</p>
            <p className="mt-1 text-sm font-semibold uppercase text-slate-700">Structured records</p>
          </article>
          <article className="rounded-lg border border-line bg-paper p-5">
            <p className="text-3xl font-semibold text-blue">{journalCount}</p>
            <p className="mt-1 text-sm font-semibold uppercase text-slate-700">Journal papers</p>
          </article>
          <article className="rounded-lg border border-line bg-paper p-5">
            <p className="text-3xl font-semibold text-blue">{conferenceCount}</p>
            <p className="mt-1 text-sm font-semibold uppercase text-slate-700">Conference papers</p>
          </article>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured"
            title="Selected publication highlights"
            text="A curated subset from recent and foundational CV-listed publications."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredPublications.slice(0, 9).map((publication) => (
              <PublicationCard compact key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Full list" title="Search and filter publications" />
          <div className="mt-8">
            <PublicationsExplorer />
          </div>
        </div>
      </section>
    </>
  );
}

