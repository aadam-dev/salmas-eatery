"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteImages } from "@/lib/site-images";
import { SITE } from "@/lib/site";
import { heroFeaturedDish, menuCategories } from "@/lib/menu-data";
import AddToCartButton from "@/components/public/add-to-cart-button";
import { useCart } from "@/lib/cart-context";

const categoryPills = menuCategories.filter((c) => c.id !== "all");

export default function HeroSection() {
  const { openCart } = useCart();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.05)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dish = heroFeaturedDish;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={siteImages.hero}
            alt="Signature jollof at Worth It Eatery"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-warm-black/70 via-warm-black/40 to-warm-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-warm-black/80 via-warm-black/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.62_0.14_35/0.15),transparent_55%)]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-terracotta/30 bg-terracotta/10 backdrop-blur-sm"
              style={{ animation: "heroFadeUp 0.6s ease-out 0.1s both" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span className="text-terracotta text-xs font-medium tracking-widest uppercase">
                {SITE.tagline}
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-[1.05] mb-6 font-heading"
              style={{ animation: "heroFadeUp 0.8s ease-out 0.25s both" }}
            >
              Worth It
              <br />
              <span className="text-terracotta italic">Eatery</span>
            </h1>

            <p
              className="text-ivory/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ animation: "heroFadeUp 0.8s ease-out 0.4s both" }}
            >
              Ghanaian rice, jollof, and banku — cooked with heart and delivered to your door. Add to
              cart, send on WhatsApp, and we handle the rest.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
              style={{ animation: "heroFadeUp 0.8s ease-out 0.55s both" }}
            >
              <Link
                href="/menu"
                className="px-8 py-4 bg-terracotta text-warm-black font-semibold rounded-full text-base hover:bg-terracotta/90 transition-all hover:scale-105 active:scale-95"
              >
                View Menu
              </Link>
              <button
                type="button"
                onClick={openCart}
                className="px-8 py-4 border border-ivory/30 text-ivory font-medium rounded-full text-base hover:bg-ivory/10 hover:border-ivory/50 transition-all backdrop-blur-sm"
              >
                View cart
              </button>
            </div>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
              style={{ animation: "heroFadeUp 0.8s ease-out 0.65s both" }}
            >
              {categoryPills.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/menu?category=${cat.id}`}
                  className="px-4 py-2 rounded-full text-xs font-medium border border-white/15 text-ivory/80 hover:border-terracotta/50 hover:text-terracotta bg-warm-black/40 backdrop-blur-sm transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-ivory/40 text-xs tracking-wide"
              style={{ animation: "heroFadeIn 1s ease-out 0.9s both" }}
            >
              <span>Delivery across Accra</span>
              <span className="hidden sm:inline text-terracotta/40">·</span>
              <span>Fire-cooked jollof</span>
              <span className="hidden sm:inline text-terracotta/40">·</span>
              <span>Order via WhatsApp</span>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ animation: "heroFadeUp 1s ease-out 0.5s both" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-warm-card shadow-2xl shadow-black/50">
              <div className="relative aspect-[4/5]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-1 mb-3 text-[10px] font-semibold uppercase tracking-wider rounded-sm bg-saffron text-warm-black">
                  Signature
                </span>
                <h2 className="text-ivory text-xl font-heading font-semibold mb-1">{dish.name}</h2>
                <p className="text-terracotta font-semibold text-lg mb-4">From {dish.priceDisplay}</p>
                <AddToCartButton item={dish} />
              </div>
            </div>
            <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full rounded-2xl border border-terracotta/20" />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40 z-10"
        style={{ animation: "heroFadeIn 1s ease-out 1.2s both" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
