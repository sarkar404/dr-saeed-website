"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import type { GalleryImage } from "@/data/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  currentIndex: number;
  eventTitle: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function GalleryLightbox({
  images,
  currentIndex,
  eventTitle,
  onClose,
  onNext,
  onPrevious
}: GalleryLightboxProps) {
  const image = images[currentIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  if (!image) {
    return null;
  }

  return (
    <div
      aria-label={`${eventTitle} image viewer`}
      aria-modal="true"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-3 text-white backdrop-blur-sm sm:p-6"
      role="dialog"
    >
      <button
        aria-label="Close image viewer"
        className="absolute right-4 top-4 rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
        onClick={onClose}
        type="button"
      >
        <X aria-hidden="true" size={22} />
      </button>

      <button
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
        onClick={onPrevious}
        type="button"
      >
        <ChevronLeft aria-hidden="true" size={26} />
      </button>

      <figure className="w-full max-w-6xl">
        <div className="relative mx-auto aspect-[4/3] max-h-[78vh] overflow-hidden rounded-lg border border-white/15 bg-black/30">
          <Image
            alt={image.alt}
            className="object-contain"
            fill
            sizes="100vw"
            src={image.src}
          />
        </div>
        <figcaption className="mt-4 flex flex-col gap-1 text-sm text-white/78 sm:flex-row sm:items-center sm:justify-between">
          <span>{image.caption ?? eventTitle}</span>
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
        onClick={onNext}
        type="button"
      >
        <ChevronRight aria-hidden="true" size={26} />
      </button>
    </div>
  );
}
