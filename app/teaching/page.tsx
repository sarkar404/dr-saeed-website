import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  academicSystems,
  courseGroups,
  inquiryGuidance,
  mentoringAreas,
  supervision,
  supervisionPractice,
  teachingPhilosophy
} from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching and Supervision",
  description:
    "Teaching philosophy, courses designed and delivered, academic-operations platforms, supervision practice, and mentoring focus for Prof. Saeed Ahmed Khan."
};

export default function TeachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Teaching and supervision"
        title="Engineering education across electronics, sensors, materials, controls, programming, and human-computer interaction."
        text="A teaching practice anchored in fundamentals, hands-on devices, and research literacy - and a supervision practice that takes students from a literature notebook to a published outcome."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Teaching philosophy"
            title={teachingPhilosophy.headline}
            text="The classroom is closed-loop. Attainment data shapes delivery, assessments, and labs term-over-term."
          />
          <div className="rounded-xl border border-line bg-paper p-6 space-y-4">
            {teachingPhilosophy.body.map((para, i) => (
              <p key={i} className="text-base leading-7 text-slate-700">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Supervision"
            title="Undergraduate and postgraduate research supervision"
            text="The CV records six undergraduate and three Master of Engineering theses supervised, plus a latest summary of nine theses across undergraduate, master, and Ph.D. levels via the Sukkur IBA - SKKU - UESTC - TYUT research network."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supervision.map((item) => (
              <article className="rounded-lg border border-line bg-white p-6 shadow-sm" key={item.label}>
                <p className="text-3xl font-semibold text-blue">{item.value}</p>
                <h2 className="mt-2 text-lg font-semibold text-ink">{item.label}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-ink">Supervision practice</h3>
            <p className="mt-2 text-sm text-slate-600">
              How a student goes from a literature notebook to a defensible publication.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {supervisionPractice.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Courses"
            title="Courses designed and delivered"
            text="Specialized core and elective courses across four areas, taught and refined over more than a decade at Sukkur IBA and ISRA, with continuous OBE-aligned revision."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courseGroups.map((group) => (
              <article className="rounded-lg border border-line bg-paper p-6 shadow-sm" key={group.title}>
                <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.courses.map((course) => (
                    <span className="rounded-full bg-white px-3 py-1.5 text-sm text-slate-700" key={course}>
                      {course}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Academic-operations platforms"
            title="LMS, CMS, and ERP - the digital backbone of teaching at scale"
            text="Three platforms turn course delivery, student records, and faculty operations into evidence usable for OBE and accreditation."
          />
          <div className="rounded-xl border border-line bg-white p-6">
            <p className="text-sm leading-6 text-slate-700">{academicSystems.intro}</p>
            <ul className="mt-5 space-y-4 text-sm text-slate-700">
              {academicSystems.systems.map((s) => (
                <li className="rounded-md bg-paper p-4" key={s.name}>
                  <p className="font-semibold text-ink">{s.name}</p>
                  <p className="mt-1 leading-6 text-slate-600">{s.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-600">{academicSystems.closing}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="Mentoring focus"
            title="Project areas open to supervision and collaboration"
            text="Prospective students and collaborators should align inquiries with funded-project directions and supported research themes."
          />
          <div>
            <div className="rounded-xl border border-line bg-paper p-6">
              <h2 className="text-xl font-semibold text-ink">Project areas</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {mentoringAreas.map((area) => (
                  <p className="rounded-md bg-white p-4 text-sm font-medium text-slate-700" key={area}>
                    {area}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-line bg-paper p-6">
              <h2 className="text-xl font-semibold text-ink">How to write a strong inquiry</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {inquiryGuidance.map((g) => (
                  <li className="flex gap-3" key={g}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
