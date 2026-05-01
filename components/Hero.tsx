import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { CVDownloadButton } from "./CVDownloadButton";
import { profile, profileLinks } from "@/data/profile";

export function Hero() {
  const scholar = profileLinks.find((link) => link.label === "Google Scholar");

  return (
    <section className="trace-panel overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-aqua/30 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-aqua">
            {profile.credentials}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl leading-8 text-aqua/[0.92]">{profile.currentTitle}</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.76]">{profile.positioning}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan px-4 py-2.5 text-sm font-semibold text-ink shadow-glow transition hover:bg-aqua"
              href="/publications"
            >
              View Publications
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <CVDownloadButton variant="secondary" />
            {scholar ? (
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.18] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-aqua hover:text-aqua"
                href={scholar.href}
                rel="noreferrer"
                target="_blank"
              >
                Google Scholar
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ) : null}
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.18] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-aqua hover:text-aqua"
              href="/contact"
            >
              <Mail aria-hidden="true" size={16} />
              Contact
            </Link>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {["Flexible electronics", "Thermogalvanic hydrogels", "Quality assurance"].map((item) => (
              <div className="dark-glass rounded-lg p-4" key={item}>
                <p className="text-sm font-semibold text-aqua">{item}</p>
                <div className="flow-line mt-3" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-sm lg:max-w-md">
          <div className="glass relative overflow-hidden rounded-xl p-4 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-navy/20">
              <Image
                alt="Prof. Dr. Saeed Ahmed Khan"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 360px, 82vw"
                src={profile.imagePath}
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/50 bg-white/[0.88] p-4 text-ink backdrop-blur">
              <p className="text-xs font-semibold uppercase text-blue">{profile.institution}</p>
              <p className="mt-1 text-sm font-semibold">{profile.department}</p>
              <p className="mt-1 text-xs text-slate-600">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
