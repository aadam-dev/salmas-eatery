"use client";

import Image from "next/image";
import { siteImages } from "@/lib/site-images";
import Reveal from "@/components/public/reveal";

export default function GallerySection() {
  return (
    <section className="py-24 bg-warm-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-terracotta" />
          <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Gallery</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading mb-14">
          From our <span className="text-terracotta italic">kitchen</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {siteImages.gallery.map((img, i) => (
            <Reveal key={img.id} delay={i * 0.05} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
