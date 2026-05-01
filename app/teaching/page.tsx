import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { courseGroups, mentoringAreas, supervision } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching and Supervision",
  description:
    "Teaching, thesis supervision, mentoring areas, and course coverage for Prof. Saeed Ahmed Khan."
};

export default function TeachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Teaching and supervision"
        title="Engineering education across electronics, sensors, materials, controls, programming, and human-computer interaction."
        text="The teaching page presents supervision and course areas from the CV while avoiding unsupported student names or lab-member claims."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Supervision"
            title="Undergraduate and postgraduate research supervision"
            text="The CV lists undergraduate and Master of Engineering supervision, with a latest summary of nine theses across undergraduate, master, and Ph.D. levels."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supervision.map((item) => (
              <article className="rounded-lg border border-line bg-paper p-6" key={item.label}>
                <p className="text-3xl font-semibold text-blue">{item.value}</p>
                <h2 className="mt-2 text-lg font-semibold text-ink">{item.label}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Courses" title="Courses designed and delivered" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courseGroups.map((group) => (
              <article className="rounded-lg border border-line bg-white p-6 shadow-sm" key={group.title}>
                <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.courses.map((course) => (
                    <span className="rounded-full bg-paper px-3 py-1.5 text-sm text-slate-700" key={course}>
                      {course}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Mentoring focus"
            title="Research mentorship grounded in devices, materials, signals, and applications."
            text="Prospective students and collaborators should align inquiries with supported research themes and funded-project directions."
          />
          <div className="rounded-xl border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-ink">Project areas</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {mentoringAreas.map((area) => (
                <p className="rounded-md bg-white p-4 text-sm font-medium text-slate-700" key={area}>
                  {area}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              Inquiries are best framed around a concrete research problem, relevant technical background, and a
              clear fit with flexible sensors, self-powered devices, thermogalvanic systems, energy harvesting, or
              engineering education research.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

