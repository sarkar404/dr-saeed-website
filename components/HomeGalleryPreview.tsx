import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { homepageGalleryEvents } from "@/data/gallery";

export function HomeGalleryPreview() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-blue">Updates & Gallery</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">
              Selected academic events, governance moments, and quality initiatives.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              A curated preview of recent professional events, with the full visual archive available on the
              Updates & Gallery page.
            </p>
          </div>
          <Link
            className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-sm font-semibold text-blue transition hover:border-cyan"
            href="/updates-gallery"
          >
            Open gallery
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homepageGalleryEvents.map((event) => (
            <Link
              className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-cyan hover:shadow-card"
              href="/updates-gallery"
              key={event.id}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  alt={`${event.title} preview image`}
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
                  src={event.coverImage}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-blue">{event.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{event.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{event.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue">
                  <Images aria-hidden="true" size={16} />
                  {event.images.length} photos
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
