"use client";

import { Quote } from "lucide-react";
import Reveal from "@/components/public/reveal";

const testimonials = [
  {
    quote:
      "The jollof tastes like Sunday lunch at my grandmother's: smoky, rich, and generous. I bring every visitor from abroad here first.",
    author: "Ama",
    location: "East Legon",
  },
  {
    quote:
      "Banku and tilapia done properly is hard to find. Worth It gets the texture right every time, and the pepper doesn't hold back.",
    author: "Kwesi",
    location: "Osu",
  },
  {
    quote:
      "We ordered party jollof for a family gathering and it disappeared in minutes. Already booked our next celebration here.",
    author: "Efua",
    location: "Tema",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#110D0B]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Guest voices</span>
            <div className="h-px w-12 bg-terracotta" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading">
            Loved around <span className="text-terracotta italic">Accra</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <blockquote className="relative p-8 rounded-2xl bg-warm-card border border-white/5 h-full">
                <Quote className="h-8 w-8 text-terracotta/30 mb-4" />
                <p className="text-ivory/70 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-ivory font-medium">
                  {t.author}, <span className="text-ivory/40">{t.location}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
