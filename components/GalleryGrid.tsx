"use client";

import { useCallback, useMemo, useState } from "react";
import { EventCategoryFilter } from "@/components/EventCategoryFilter";
import { GalleryEventCard } from "@/components/GalleryEventCard";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import type { GalleryCategory, GalleryEvent } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";

type GalleryGridProps = {
  events: GalleryEvent[];
};

type SelectedImage = {
  event: GalleryEvent;
  index: number;
};

export function GalleryGrid({ events }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const filteredEvents = useMemo(
    () =>
      activeCategory === "All"
        ? events
        : events.filter((event) => event.category === activeCategory),
    [activeCategory, events]
  );

  const handleCategoryChange = (category: GalleryCategory | "All") => {
    setActiveCategory(category);
    setOpenSlug(null);
    setSelectedImage(null);
  };

  const handlePrevious = useCallback(() => {
    setSelectedImage((current) => {
      if (!current) {
        return null;
      }

      return {
        event: current.event,
        index: (current.index - 1 + current.event.images.length) % current.event.images.length
      };
    });
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImage((current) => {
      if (!current) {
        return null;
      }

      return {
        event: current.event,
        index: (current.index + 1) % current.event.images.length
      };
    });
  }, []);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-blue">Gallery archive</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Academic governance, workshops, quality assurance, advisory activity, training, conferences, and selected
            personal moments.
          </p>
        </div>
        <EventCategoryFilter
          activeCategory={activeCategory}
          categories={galleryCategories}
          onChange={handleCategoryChange}
        />
      </div>

      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <GalleryEventCard
            event={event}
            isOpen={openSlug === event.slug}
            key={event.id}
            onOpenImage={(index) => setSelectedImage({ event, index })}
            onToggle={() => setOpenSlug((current) => (current === event.slug ? null : event.slug))}
          />
        ))}
      </div>

      {filteredEvents.length === 0 ? (
        <div className="rounded-lg border border-line bg-white p-6 text-sm text-slate-600">
          No gallery events match this filter.
        </div>
      ) : null}

      {selectedImage ? (
        <GalleryLightbox
          currentIndex={selectedImage.index}
          eventTitle={selectedImage.event.title}
          images={selectedImage.event.images}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ) : null}
    </div>
  );
}
