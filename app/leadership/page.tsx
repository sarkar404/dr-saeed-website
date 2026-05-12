import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  conferenceLeadership,
  governanceRoles,
  honors,
  leadershipHighlights,
  qualityEnhancementResponsibilities,
  reviewerGroups
} from "@/data/service";

export const metadata: Metadata = {
  title: "Leadership and Service",
  description:
    "Academic leadership, quality enhancement, accreditation, rankings, governance, editorial service, conference leadership, and reviewer roles for Prof. Saeed Ahmed Khan."
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership and service"
        title="Dean-level engineering faculty leadership backed by national quality-assurance credentials, editorial service, and conference leadership."
        text="Institutional responsibility presented alongside research credibility - every role grounded in the CV record."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive academic profile"
            title="Engineering faculty leadership and quality-enhancement systems"
            text="From statutory leadership of an engineering faculty to the institutional quality-assurance system and a national testing wing."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {leadershipHighlights.map((item) => (
              <article className="rounded-lg border border-line bg-paper p-6 shadow-sm" key={item.title}>
                <p className="text-sm font-semibold uppercase text-blue">{item.period}</p>
                <h2 className="mt-3 text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality enhancement - in detail"
            title="What Director QEC actually meant - day to day"
            text="A National Certified Reviewer of Higher Education Institutions (Sindh HEC, 100-hour formal review training), responsible for the full quality cycle of programs, services, and institutional performance."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {qualityEnhancementResponsibilities.map((item) => (
              <div className="rounded-lg border border-line bg-white p-4 text-sm leading-6 text-slate-700" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeading
            eyebrow="Governance"
            title="Committees, accreditation, and university statutory bodies"
            text="Sustained involvement in university governance, outcome-based education, program review, plagiarism review, faculty councils, and academic selection processes."
          />
          <div className="rounded-xl border border-line bg-paper p-6 shadow-sm">
            <ul className="space-y-3 text-sm leading-6 text-slate-700">
              {governanceRoles.map((role) => (
                <li className="flex gap-3" key={role}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Editorial and review service"
            title="Journal, conference, and fellowship review roles"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {reviewerGroups.map((group) => (
              <article className="rounded-lg border border-line bg-white p-6" key={group.title}>
                <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="rounded-full bg-paper px-3 py-1.5 text-sm text-slate-700" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-line bg-white p-6">
            <h2 className="text-xl font-semibold text-ink">Conference leadership</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {conferenceLeadership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-aqua">Honors and awards</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Scholarships, grants, and funded recognition
            </h2>
            <p className="mt-4 text-base leading-7 text-white/[0.74]">
              Honors are limited to those recorded in the CV.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {honors.map((honor) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.07] p-5 text-sm leading-6 text-white/[0.78]" key={honor}>
                {honor}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
