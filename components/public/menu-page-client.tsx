"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menuCategories, menuItems } from "@/lib/menu-data";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import AddToCartButton from "@/components/public/add-to-cart-button";

export default function MenuPageClient() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && menuCategories.some((c) => c.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const showcase = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <>
      <section className="relative pt-32 pb-14 bg-warm-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">{SITE.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ivory mb-5 font-heading leading-tight">Menu</h1>
          <p className="text-ivory/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Rice dishes, flame-cooked jollofs, and stone-ground banku — all prices in {SITE.currency}. Ask our
            team about portions and spice level.
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-warm-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0",
                  activeCategory === cat.id
                    ? "bg-terracotta text-warm-black"
                    : "bg-warm-card text-ivory/60 hover:text-ivory border border-white/10"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 bg-warm-black">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-ivory font-heading mb-2">Our dishes</h2>
            <p className="text-ivory/50 text-sm leading-relaxed">
              Every plate is prepared fresh. Ask our team about spice level and portion sizes.
            </p>
          </div>

          {showcase.length === 0 ? (
            <p className="text-ivory/40 text-center py-16">No dishes in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {showcase.map((item) => (
                <article
                  key={item.id}
                  className="group bg-warm-card rounded-2xl overflow-hidden border border-white/5 hover:border-terracotta/25 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-card/90 via-transparent to-transparent" />
                    {item.isPopular && (
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-saffron text-warm-black text-[10px] font-semibold uppercase tracking-wider rounded-sm">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-ivory text-lg md:text-xl font-semibold font-heading leading-snug group-hover:text-terracotta transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-terracotta font-semibold text-lg shrink-0 tabular-nums">
                        {item.priceDisplay}
                      </span>
                    </div>
                    <p className="text-ivory/50 text-sm leading-relaxed mb-4">{item.description}</p>
                    <AddToCartButton item={item} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#110D0B] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-ivory font-heading mb-4">Ready to order?</h2>
          <p className="text-ivory/50 mb-8 max-w-md mx-auto">
            Add your dishes to the cart and send your delivery order on WhatsApp.
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-terracotta text-warm-black font-semibold rounded-full hover:bg-terracotta/90 transition-all"
          >
            Keep browsing menu
          </Link>
        </div>
      </section>
    </>
  );
}
