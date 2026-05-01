import Link from "next/link";
import { ArrowRight, Award, Building2, CheckCircle2, Mail } from "lucide-react";
import { AcademicCTA } from "@/components/AcademicCTA";
import { CollaborationMap } from "@/components/CollaborationMap";
import { Hero } from "@/components/Hero";
import { HomeGalleryPreview } from "@/components/HomeGalleryPreview";
import { MetricCard } from "@/components/MetricCard";
import { PublicationCard } from "@/components/PublicationCard";
import { ResearchThemeCard } from "@/components/ResearchThemeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { metrics } from "@/data/profile";
import { featuredPublications } from "@/data/publications";
import { researchThemes } from "@/data/researchThemes";
import { leadershipHighlights } from "@/data/service";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-6 lg:px-8">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Research architecture"
            title="Materials, devices, energy conversion, and institutional leadership in one coherent profile."
            text="The research program connects flexible sensors, thermogalvanic hydrogels, triboelectric nanogenerators, printed soft electronics, health-monitoring applications, and engineering systems."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {researchThemes.slice(0, 6).map((theme) => (
              <ResearchThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected publications"
              title="Recent and foundational work in self-powered sensing systems."
              text="Featured papers are selected from CV-listed publications in venues including ACS Sensors, Nano Energy, Chemical Engineering Journal, Journal of Power Sources, Journal of Materials Chemistry C, and Advanced Engineering Materials."
            />
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-sm font-semibold text-blue transition hover:border-cyan"
              href="/publications"
            >
              Full publication list
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredPublications.slice(0, 6).map((publication) => (
              <PublicationCard compact key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-aqua">Leadership and quality systems</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A research profile with dean-level institutional responsibility.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/[0.74]">
              The CV shows a rare combined profile: flexible electronics research, international postdoctoral
              experience, funded projects, editorial service, engineering teaching, accreditation work, and quality
              assurance leadership.
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-aqua"
              href="/leadership"
            >
              View leadership profile
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {leadershipHighlights.map((item, index) => {
              const icons = [Building2, CheckCircle2, Award, Building2];
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <article className="rounded-lg border border-white/10 bg-white/[0.07] p-5" key={item.title}>
                  <Icon aria-hidden="true" className="text-aqua" size={24} />
                  <p className="mt-4 text-xs font-semibold uppercase text-aqua">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/[0.7]">{item.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="International experience"
            title="Research practice across Pakistan, China, South Korea, Croatia/EU, and trans-regional collaborations."
            text="This map-style timeline is built from CV-listed education, research appointments, postdoctoral work, industrial grounding, and publication collaboration context."
          />
          <div className="mt-10">
            <CollaborationMap />
          </div>
        </div>
      </section>

      <AcademicCTA />

      <HomeGalleryPreview />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-line bg-navy p-6 text-white shadow-card sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-sm font-semibold uppercase text-aqua">Contact</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
                Connect through official academic channels.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.72]">
                Collaboration, supervision, editorial, conference, and institutional inquiries are best routed through
                the contact page with a focused academic context.
              </p>
            </div>
            <Link
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-cyan px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-aqua lg:mt-0"
              href="/contact"
            >
              <Mail aria-hidden="true" size={16} />
              Contact Prof. Khan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
