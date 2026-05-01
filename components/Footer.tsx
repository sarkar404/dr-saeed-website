import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, profile, profileLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan/40 bg-white/[0.08] text-sm font-bold text-aqua">
            SAK
          </div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
            {profile.currentTitle}, {profile.institution}. Research in flexible electronics, self-powered sensors,
            thermogalvanic hydrogels, nanogenerators, and engineering education leadership.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase text-aqua">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/[0.72]">
            <a className="flex gap-2 transition hover:text-aqua" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={16} />
              {profile.email}
            </a>
            <a className="flex gap-2 transition hover:text-aqua" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" size={16} />
              {profile.phone}
            </a>
            <p className="flex gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={16} />
              <span>{profile.address}</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase text-aqua">Academic Links</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profileLinks.map((link) => (
              <a
                className="rounded-md border border-white/[0.12] px-3 py-2 text-sm text-white/[0.76] transition hover:border-cyan hover:text-aqua"
                href={link.href}
                key={link.label}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/[0.56]">
            {navItems.slice(1).map((item) => (
              <Link className="hover:text-aqua" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/[0.55]">
        {"\u00a9"} {new Date().getFullYear()} {profile.name}. Academic website generated from CV-sourced data.
      </div>
    </footer>
  );
}
