import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { education, roles } from "@/data/experience";
import { profile } from "@/data/profile";
import { languages, memberships, technicalSkills } from "@/data/service";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional biography, academic appointments, education, international experience, memberships, skills, and languages for Prof. Saeed Ahmed Khan."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An engineering academic spanning research, teaching, institutional leadership, and applied engineering practice."
        text={profile.shortBio}
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Professional profile"
              title="Research-intensive, leadership-facing, and internationally trained."
              text="The CV positions Prof. Khan as a senior academic whose work connects flexible electronics and self-powered sensing with engineering education systems, accreditation, and quality enhancement."
            />
          </div>
          <div className="rounded-xl border border-line bg-paper p-6">
            <p className="text-lg leading-8 text-slate-700">
              Prof. Khan currently serves as Dean of the Faculty of Engineering and Technology at Sukkur IBA University.
              His research portfolio includes flexible and wearable electronics, nanomaterial-based sensors,
              thermogalvanic hydrogels, triboelectric nanogenerators, energy harvesting, printed and soft electronics,
              and health-monitoring applications. His academic leadership includes quality-assurance systems,
              OBE and accreditation work, HEC and international ranking evidence portfolios, journal editorship,
              conference leadership, and thesis supervision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Career timeline" title="Academic and professional experience" />
          <div className="mt-10">
            <Timeline items={roles} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Education" title="Doctoral, master, and undergraduate training" />
          <div className="mt-10">
            <Timeline items={education} />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">Memberships</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-line bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold text-ink">Technical capabilities</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-slate-700" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-line bg-white p-6 shadow-sm lg:col-span-3">
            <h2 className="text-xl font-semibold text-ink">Languages</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {languages.map((language) => (
                <p className="rounded-md bg-paper p-4 text-sm text-slate-700" key={language}>
                  {language}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

