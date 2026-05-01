import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { CVDownloadButton } from "@/components/CVDownloadButton";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, profileLinks } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Official academic contact details and public profile links for Prof. Saeed Ahmed Khan at Sukkur IBA University."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Academic contact and public research profiles."
        text="Use official academic channels for collaboration, supervision, editorial, conference, and institutional inquiries."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="rounded-xl border border-line bg-paper p-6 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg border border-line bg-white">
                  <Image
                    alt="Prof. Dr. Saeed Ahmed Khan"
                    className="object-cover"
                    fill
                    sizes="128px"
                    src={profile.imagePath}
                  />
                </div>
                <SectionHeading
                  eyebrow="Official contact"
                  title={`${profile.name}`}
                  text={`${profile.currentTitle}, ${profile.institution}.`}
                />
              </div>
              <div className="mt-6">
                <CVDownloadButton />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-paper p-6 shadow-card">
            <div className="space-y-4">
              <a className="flex gap-4 rounded-lg bg-white p-4 transition hover:text-blue" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" className="mt-1 shrink-0 text-blue" size={22} />
                <span>
                  <span className="block text-sm font-semibold uppercase text-slate-500">Email</span>
                  <span className="block text-base font-semibold">{profile.email}</span>
                </span>
              </a>
              <a className="flex gap-4 rounded-lg bg-white p-4 transition hover:text-blue" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone aria-hidden="true" className="mt-1 shrink-0 text-blue" size={22} />
                <span>
                  <span className="block text-sm font-semibold uppercase text-slate-500">Phone</span>
                  <span className="block text-base font-semibold">{profile.phone}</span>
                </span>
              </a>
              <div className="flex gap-4 rounded-lg bg-white p-4">
                <MapPin aria-hidden="true" className="mt-1 shrink-0 text-blue" size={22} />
                <span>
                  <span className="block text-sm font-semibold uppercase text-slate-500">Address</span>
                  <span className="block text-base font-semibold">{profile.address}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {profileLinks
                .filter((link) => link.external)
                .map((link) => (
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-blue transition hover:border-cyan"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ExternalLink aria-hidden="true" size={16} />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Inquiry routing" title="Helpful context for first contact" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Research collaboration",
                text: "Include the research theme, proposed contribution, target venue or project context, and relevant recent work."
              },
              {
                title: "Student supervision",
                text: "Share a focused research question, transcript/CV, skills, and fit with flexible sensors, hydrogels, energy harvesting, or signal processing."
              },
              {
                title: "Editorial or service",
                text: "Mention the journal, conference, review timeline, role requested, and topic alignment."
              }
            ].map((item) => (
              <article className="rounded-lg border border-line bg-white p-6 shadow-sm" key={item.title}>
                <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
