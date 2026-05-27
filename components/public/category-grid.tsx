"use client";

import Image from "next/image";
import Link from "next/link";
import { categoryShowcase } from "@/lib/menu-data";
import Reveal from "@/components/public/reveal";

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-warm-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-terracotta" />
          <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Three traditions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading mb-14 max-w-xl">
          Rice, jollof & <span className="text-terracotta italic">banku</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryShowcase.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.08}>
              <Link
                href={cat.href}
                className="group block relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 hover:border-terracotta/30 transition-colors"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-saffron text-xs uppercase tracking-widest mb-1">{cat.subtitle}</p>
                  <h3 className="text-2xl font-bold text-ivory font-heading mb-2">{cat.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <span className="text-terracotta text-sm font-medium group-hover:underline">
                    Explore →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
