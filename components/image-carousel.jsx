"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  const activeImage = images[activeIndex];

  return (
    <div className="image-shell overflow-hidden bg-white/75">
      <div className="relative aspect-[4/5] overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className={
              index === activeIndex
                ? "object-cover opacity-100 transition-opacity duration-700"
                : "object-cover opacity-0 transition-opacity duration-700"
            }
            priority={index === 0}
          />
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 to-transparent px-5 py-5 text-white">
          <p className="text-sm font-medium">{activeImage.caption}</p>
          <a
            href={activeImage.creditUrl}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-100"
          >
            Unsplash photo by {activeImage.credit}
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              className={index === activeIndex ? "h-2.5 w-8 rounded-full bg-primary" : "h-2.5 w-2.5 rounded-full bg-primary/25"}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full border-primary/15 bg-white/80"
            onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full border-primary/15 bg-white/80"
            onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}