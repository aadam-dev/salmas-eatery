import Link from "next/link";
import Image from "next/image";
import { SITE, sitePhoneDisplay, siteSocialLinks } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warm-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.svg" alt={SITE.name} fill className="object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold text-ivory font-heading block">Worth It</span>
                <span className="text-xs uppercase tracking-widest text-terracotta/70">Eatery</span>
              </div>
            </Link>
            <p className="text-ivory/50 text-sm leading-relaxed max-w-sm">
              Home-style Ghanaian rice, flame-cooked jollof, and stone-ground banku, delivered across
              Accra. Order on the menu and send via WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="text-ivory text-sm font-semibold uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { href: "/menu", label: "Menu & order" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/menu?category=jollofs", label: "Jollofs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/50 text-sm hover:text-terracotta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ivory text-sm font-semibold uppercase tracking-widest mb-4">Visit</h3>
            <ul className="space-y-2 text-ivory/50 text-sm">
              <li>{SITE.address}</li>
              <li>{sitePhoneDisplay()}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-terracotta transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="text-ivory/40 pt-1">{SITE.hoursSummary}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-ivory/30 text-xs">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {siteSocialLinks().map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-ivory/40 text-xs hover:text-terracotta transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
