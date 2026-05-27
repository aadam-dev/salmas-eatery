"use client";

import { Flame, Heart, Truck } from "lucide-react";
import Reveal from "@/components/public/reveal";

const pillars = [
  {
    icon: Flame,
    title: "Flame-kissed jollof",
    description: "Every pot is stirred by hand and finished over fire. Smoky, layered, and worth the wait.",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
  },
  {
    icon: Truck,
    title: "Delivery-first",
    description: "Order from the menu, send on WhatsApp, and we bring rice, jollof, or banku to your door.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
  {
    icon: Heart,
    title: "Home-style portions",
    description: "Generous servings cooked the way a Ghanaian kitchen should. Full flavour, every time.",
    color: "text-ivory",
    bg: "bg-white/5",
  },
];

export default function WhyWorthItSection() {
  return (
    <section className="py-24 bg-warm-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-terracotta" />
          <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Why us</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading mb-14 max-w-xl">
          The <span className="text-terracotta italic">Worth It</span> difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="p-8 rounded-2xl border border-white/5 bg-warm-card h-full">
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6`}>
                  <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold text-ivory font-heading mb-3">{pillar.title}</h3>
                <p className="text-ivory/55 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
