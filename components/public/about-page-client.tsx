"use client";

import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/site-images";
import { SITE } from "@/lib/site";
import Reveal from "@/components/public/reveal";

const values = [
  {
    title: "Patience at the pot",
    body: "Jollof cannot be hurried. We layer flavours and let the rice absorb each stage before the next.",
  },
  {
    title: "Honest ingredients",
    body: "Fresh fish, ripe tomatoes, and fermented dough prepared daily. Nothing frozen, no shortcuts.",
  },
  {
    title: "Delivery done right",
    body: "Your order is packed with care so rice, jollof, and banku arrive ready to eat.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={siteImages.aboutHero}
            alt="Classic jollof at Worth It Eatery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/60 to-warm-black/30" />
        </div>
        <div className="relative container mx-auto px-6 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">About</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-ivory font-heading max-w-2xl">
            Cooked with <span className="text-terracotta italic">heart</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-warm-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <h2 className="text-3xl font-bold text-ivory font-heading mb-6">Why &ldquo;Worth It&rdquo;</h2>
              <p className="text-ivory/60 leading-relaxed mb-5">
                Worth It Eatery is built on a simple idea: when you order Ghanaian food for delivery, it
                should taste as good as eating at someone&apos;s table, and feel fairly priced for what you
                get.
              </p>
              <p className="text-ivory/60 leading-relaxed mb-5">
                We focus on rice, jollof, and banku because doing fewer dishes well beats doing everything
                halfway. Every plate is cooked to order and sent out for delivery across Accra.
              </p>
              <p className="text-ivory/40 text-sm italic">
                Founder details and photos can be added here when provided.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              {siteImages.aboutGrid.map((img, i) => (
                <Reveal key={img.alt} delay={i * 0.08} className={i === 0 ? "col-span-2" : ""}>
                  <div className={`relative rounded-xl overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-square"}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#110D0B]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-ivory font-heading mb-12 text-center">
            What we <span className="text-terracotta italic">stand for</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-warm-card border border-white/5 text-center h-full">
                  <h3 className="text-xl font-bold text-ivory font-heading mb-3">{v.title}</h3>
                  <p className="text-ivory/55 text-sm leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-black border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-ivory/50 mb-6">{SITE.tagline}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="px-8 py-4 bg-terracotta text-warm-black font-semibold rounded-full hover:bg-terracotta/90 transition-all"
            >
              Order for delivery
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-ivory/30 text-ivory rounded-full hover:bg-ivory/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
