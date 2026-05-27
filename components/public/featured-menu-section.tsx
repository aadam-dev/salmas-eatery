"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredItems } from "@/lib/menu-data";
import AddToCartButton from "@/components/public/add-to-cart-button";
import Reveal from "@/components/public/reveal";

export default function FeaturedMenuSection() {
  return (
    <section className="py-24 bg-[#110D0B]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Signatures</span>
            <div className="h-px w-12 bg-terracotta" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading mb-4">
            Plates people <span className="text-terracotta italic">come back for</span>
          </h2>
          <p className="text-ivory/50 leading-relaxed">
            Six favourites from our rice, jollof, and banku menus. Add to cart and send your order on
            WhatsApp for delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.slice(0, 6).map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <article className="group h-full bg-warm-card rounded-2xl overflow-hidden border border-white/5 hover:border-terracotta/25 transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-card/90 via-transparent to-transparent" />
                  {item.isPopular && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-saffron text-warm-black text-[10px] font-semibold uppercase tracking-wider rounded-sm">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between gap-3 mb-2">
                    <h3 className="text-ivory font-heading font-semibold text-lg group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-terracotta font-semibold shrink-0 tabular-nums">{item.priceDisplay}</span>
                  </div>
                  <p className="text-ivory/50 text-sm leading-relaxed line-clamp-2 mb-4">{item.description}</p>
                  <AddToCartButton item={item} variant="default" className="w-full sm:w-auto" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-8 py-4 border border-terracotta/40 text-terracotta rounded-full font-medium hover:bg-terracotta/10 transition-colors"
          >
            See full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
