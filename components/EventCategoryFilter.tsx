"use client";

import type { GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

type EventCategoryFilterProps = {
  categories: Array<GalleryCategory | "All">;
  activeCategory: GalleryCategory | "All";
  onChange: (category: GalleryCategory | "All") => void;
};

export function EventCategoryFilter({ categories, activeCategory, onChange }: EventCategoryFilterProps) {
  return (
    <div aria-label="Filter gallery events" className="flex flex-wrap gap-2" role="group">
      {categories.map((category) => (
        <button
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-semibold transition",
            activeCategory === category
              ? "border-blue bg-blue text-white shadow-sm"
              : "border-line bg-white text-slate-700 hover:border-cyan hover:text-blue"
          )}
          key={category}
          onClick={() => onChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
