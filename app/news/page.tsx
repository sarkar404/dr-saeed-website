import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { newsItems } from "@/data/news";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News",
  description:
    "Recent updates for Prof. Saeed Ahmed Khan based on CV-supported roles, grants, publications, and institutional leadership milestones."
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and updates"
        title="A maintainable update stream for verified academic milestones."
        text="Initial updates are limited to CV-supported appointments, grants, leadership periods, and publication activity."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {newsItems.map((item) => (
              <article className="rounded-lg border border-line bg-paper p-6 shadow-sm" key={item.title}>
                <p className="text-sm font-semibold uppercase text-blue">
                  {item.tag} | {formatDate(item.date)}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.summary}</p>
                {item.href ? (
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue" href={item.href}>
                    Read related page
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

