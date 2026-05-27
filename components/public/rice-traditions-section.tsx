"use client";

import { Flame, Wheat, Soup } from "lucide-react";
import Reveal from "@/components/public/reveal";

const traditions = [
  {
    icon: Flame,
    title: "Layered jollof",
    body: "Tomato, onion, and spice are built in stages, not dumped in at once. We cook over open flame so the rice picks up a gentle smokiness that defines real Ghanaian jollof.",
  },
  {
    icon: Wheat,
    title: "Stone-ground banku",
    body: "Corn and cassava dough fermented just long enough, then stirred until silky. Banku takes patience. We serve it with tilapia, crab, or okro stew the way coastal kitchens always have.",
  },
  {
    icon: Soup,
    title: "Rice as canvas",
    body: "Steamed white rice, wok-fried plates, and hand-rolled omo tuo each have their place. Plain rice is never boring when the stew beside it has been simmering for hours.",
  },
];

export default function RiceTraditionsSection() {
  return (
    <section className="py-24 bg-[#110D0B] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Rice traditions</span>
            <div className="h-px w-12 bg-terracotta" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading">
            How we <span className="text-terracotta italic">honour the grain</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {traditions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="relative p-8 rounded-2xl bg-warm-card border border-white/5 h-full">
                <div className="w-12 h-12 rounded-full bg-terracotta/15 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-xl font-bold text-ivory font-heading mb-3">{item.title}</h3>
                <p className="text-ivory/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
