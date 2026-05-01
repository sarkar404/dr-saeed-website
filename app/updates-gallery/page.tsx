import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Images } from "lucide-react";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryEvents, galleryImageCount } from "@/data/gallery";
import { newsItems } from "@/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Updates & Gallery",
  description:
    "A visual archive of academic leadership, governance, workshops, quality-enhancement activities, conferences, and selected professional moments for Prof. Saeed Ahmed Khan."
};

export default function UpdatesGalleryPage() {
  const datedEvents = galleryEvents.filter((event) => event.displayDate).length;

  return (
    <>
      <PageHero
        eyebrow="Updates & Gallery"
        title="Updates & Gallery"
        text="A visual archive of academic leadership, governance, workshops, quality-enhancement activities, conferences, and selected professional moments."
      />

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <article className="rounded-lg border border-line bg-paper p-5">
            <p className="text-3xl font-semibold text-blue">{galleryEvents.length}</p>
            <p className="mt-1 text-sm font-semibold uppercase text-slate-700">Event folders</p>
          </article>
          <article className="rounded-lg border border-line bg-paper p-5">
            <p className="text-3xl font-semibold text-blue">{galleryImageCount}</p>
            <p className="mt-1 text-sm font-semibold uppercase text-slate-700">Imported images</p>
          </article>
          <article className="rounded-lg border border-line bg-paper p-5">
            <p className="text-3xl font-semibold text-blue">{datedEvents}</p>
            <p className="mt-1 text-sm font-semibold uppercase text-slate-700">Dated events</p>
          </article>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid events={galleryEvents} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Verified updates"
              title="Recent academic milestones"
              text="Short update cards remain limited to CV-supported roles, grants, publications, and leadership activities."
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article className="rounded-lg border border-line bg-paper p-6 shadow-sm" key={item.title}>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase text-blue">
                  <CalendarDays aria-hidden="true" size={15} />
                  {item.tag} | {formatDate(item.date)}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                {item.href ? (
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue" href={item.href}>
                    Related page
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-aqua">Institutional record</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A focused archive for academic review and collaboration.</h2>
            </div>
            <p className="text-base leading-7 text-white/[0.72]">
              This page brings together verified updates and selected event photography so visitors can understand
              Prof. Khan's research-facing academic work, university governance role, quality-enhancement activity,
              and professional engagement in one place.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-aqua">
            <Images aria-hidden="true" size={16} />
            {galleryImageCount} imported gallery images across {galleryEvents.length} event categories.
          </div>
        </div>
      </section>
    </>
  );
}
