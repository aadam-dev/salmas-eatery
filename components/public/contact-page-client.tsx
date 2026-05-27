"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { SITE, sitePhoneDisplay } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import CartNavButton from "@/components/public/cart-nav-button";

export default function ContactPageClient() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE.orderWhatsAppNumber,
    `Hello ${SITE.name}, I have a question about delivery.`
  );

  return (
    <>
      <section className="relative pt-32 pb-14 bg-warm-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-terracotta text-xs font-medium tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ivory mb-5 font-heading">Get in touch</h1>
          <p className="text-ivory/60 text-lg leading-relaxed max-w-2xl">
            We deliver across Accra. Add dishes to your order on the menu, then send everything on WhatsApp with
            your delivery details.
          </p>
        </div>
      </section>

      <section className="py-14 bg-warm-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="p-8 rounded-2xl bg-warm-card border border-terracotta/20 mb-10 text-center">
            <h2 className="text-2xl font-bold text-ivory font-heading mb-3">Order for delivery</h2>
            <p className="text-ivory/55 text-sm mb-6 max-w-md mx-auto">
              Browse the menu, add items to your order, and send everything on WhatsApp in one tap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/menu"
                className="px-8 py-4 bg-terracotta text-warm-black font-semibold rounded-full hover:bg-terracotta/90 transition-all"
              >
                Order from menu
              </Link>
              <CartNavButton className="px-8 py-4" />
            </div>
          </div>

          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Address", value: SITE.address, href: SITE.mapsUrl },
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, label: "Phone", value: sitePhoneDisplay(), href: SITE.phones[0]?.href },
            ].map((row) => (
              <a
                key={row.label}
                href={row.href}
                className="flex gap-4 p-5 rounded-xl bg-warm-card border border-white/5 hover:border-terracotta/20 transition-colors group"
              >
                <row.icon className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="text-ivory/40 text-xs uppercase tracking-widest mb-1">{row.label}</p>
                  <p className="text-ivory group-hover:text-terracotta transition-colors">{row.value}</p>
                </div>
              </a>
            ))}

            <div className="p-5 rounded-xl bg-warm-card border border-white/5">
              <div className="flex gap-4">
                <Clock className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="text-ivory/40 text-xs uppercase tracking-widest mb-3">Delivery hours</p>
                  <ul className="space-y-2">
                    {SITE.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4 text-sm">
                        <span className="text-ivory/70">{h.day}</span>
                        <span className="text-ivory">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 rounded-full hover:bg-[#25D366]/25 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
