"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { siteImages } from "@/lib/site-images";
import { SITE } from "@/lib/site";
import CartNavButton from "@/components/public/cart-nav-button";

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteImages.contact}
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-black/90" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Delivery</span>
            <div className="h-px w-12 bg-terracotta" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-ivory font-heading mb-6">
            Hungry? <span className="text-terracotta italic">Order now</span>
          </h2>
          <p className="text-ivory/60 mb-10 leading-relaxed">
            Build your order from the menu, open your cart, and send everything on WhatsApp with your
            delivery address.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left max-w-lg mx-auto">
            <div className="flex gap-3 p-4 rounded-xl bg-warm-card/80 border border-white/5">
              <MapPin className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <p className="text-ivory text-sm font-medium mb-1">Delivery area</p>
                <p className="text-ivory/50 text-sm">{SITE.address}</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-warm-card/80 border border-white/5">
              <Clock className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <p className="text-ivory text-sm font-medium mb-1">Hours</p>
                <p className="text-ivory/50 text-sm">{SITE.hoursSummary}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="px-8 py-4 bg-terracotta text-warm-black font-semibold rounded-full hover:bg-terracotta/90 transition-all"
            >
              Order from menu
            </Link>
            <CartNavButton className="px-8 py-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
