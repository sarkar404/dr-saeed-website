import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { audienceCards } from "@/data/profile";

export function AcademicCTA() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-aqua">Academic pathways</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Find the right entry point.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/[0.72]">
              The site is organized for research collaborators, prospective students, institutional partners,
              editors, reviewers, and accreditation audiences.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {audienceCards.map((card) => (
              <Link
                className="rounded-lg border border-white/10 bg-white/[0.06] p-5 transition hover:border-cyan hover:bg-white/[0.1]"
                href={card.href}
                key={card.title}
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.68]">{card.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-aqua">
                  Continue
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
