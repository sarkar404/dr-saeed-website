"use client";

import Image from "next/image";
import { CalendarDays, Images, Maximize2 } from "lucide-react";
import type { GalleryEvent } from "@/data/gallery";

type GalleryEventCardProps = {
  event: GalleryEvent;
  isOpen: boolean;
  onToggle: () => void;
  onOpenImage: (index: number) => void;
};

export function GalleryEventCard({ event, isOpen, onToggle, onOpenImage }: GalleryEventCardProps) {
  const detailId = `gallery-event-${event.slug}`;

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-cyan hover:shadow-card">
      <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="relative aspect-[16/10] min-h-64 overflow-hidden bg-paper lg:aspect-auto">
          <Image
            alt={`${event.title} cover image`}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            src={event.coverImage}
          />
          <div className="absolute left-4 top-4 rounded-md bg-white/92 px-3 py-1.5 text-xs font-semibold text-blue shadow-sm backdrop-blur">
            {event.category}
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-slate-500">
            {event.displayDate ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays aria-hidden="true" size={15} />
                {event.displayDate}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Images aria-hidden="true" size={15} />
              {event.images.length} photos
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-ink">{event.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{event.summary}</p>
          <div className="mt-5">
            <button
              aria-controls={detailId}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy"
              onClick={onToggle}
              type="button"
            >
              <Maximize2 aria-hidden="true" size={16} />
              {isOpen ? "Hide photos" : "View photos"}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-paper p-4 sm:p-6" id={detailId}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {event.images.map((image, index) => (
              <button
                aria-label={`Open ${event.title} photo ${index + 1}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-white"
                key={image.src}
                onClick={() => onOpenImage(index)}
                type="button"
              >
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  src={image.src}
                />
                <span className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 text-left text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  Photo {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
