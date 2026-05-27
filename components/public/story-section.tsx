"use client";

import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/site-images";
import Reveal from "@/components/public/reveal";

export default function StorySection() {
  return (
    <section className="py-24 bg-warm-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={siteImages.story}
                alt="Banku and tilapia at Worth It Eatery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/50 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Our story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-ivory leading-tight mb-6 font-heading">
              Food worth <span className="text-terracotta italic">every cedi</span>
            </h2>

            <p className="text-ivory/60 leading-relaxed mb-5">
              Worth It Eatery started with a simple promise: Ghanaian rice, jollof, and banku should taste
              like home, and arrive hot at your door. No shortcuts, no compromise on flavour.
            </p>
            <p className="text-ivory/60 leading-relaxed mb-8">
              We built our menu around three traditions you can order for delivery any day of the week. Add
              to cart, send on WhatsApp, and let us bring the kitchen to you.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-terracotta font-medium hover:gap-3 transition-all"
            >
              Read our full story
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
