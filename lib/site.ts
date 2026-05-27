// TODO: Replace before launch (placeholder business details)
export type SitePhone = {
  display: string;
  href: string;
};

export const SITE = {
  name: "Worth It Eatery",
  tagline: "Rice, jollof & banku, delivered with care",
  email: "hello@worthiteatery.com",
  phones: [{ display: "+233 XX XXX XXXX", href: "tel:+233000000000" }] as SitePhone[],
  address: "[Street address], Accra, Ghana",
  mapsUrl: "#",
  hours: [
    { day: "Monday to Friday", hours: "8:00 AM to 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM to 10:00 PM" },
    { day: "Sunday", hours: "10:00 AM to 8:00 PM" },
  ],
  hoursSummary: "Mon-Fri 8AM-9PM · Sat 9AM-10PM · Sun 10AM-8PM",
  currency: "GHS",
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
  /** WhatsApp number for delivery orders (digits only, e.g. 233XXXXXXXXX). */
  orderWhatsAppNumber: "233000000000",
  poweredBy: {
    name: "aadam",
    url: "https://aadamdev.vercel.app",
  },
} as const;

export function sitePhones(): SitePhone[] {
  return SITE.phones;
}

export function sitePhoneDisplay(): string {
  return SITE.phones.map((p) => p.display).join(" · ");
}

export function siteSocialLinks() {
  return [
    { label: "Instagram", href: SITE.social.instagram },
    { label: "Facebook", href: SITE.social.facebook },
    { label: "TikTok", href: SITE.social.tiktok },
  ] as const;
}
