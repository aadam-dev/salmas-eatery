import type { Metadata } from "next";
import { menuItems } from "@/lib/menu-data";
import { SITE } from "@/lib/site";

const DEFAULT_OG = "/images/dishes/hero.jpg";
const PRODUCTION_URL = "https://worthiteatery.vercel.app";

export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    PRODUCTION_URL;
  return url.replace(/\/$/, "");
}

export const SEO = {
  siteName: "Worth It Eatery",
  defaultTitle: "Worth It Eatery | Rice, Jollof & Banku Delivery in Accra",
  titleTemplate: "%s | Worth It Eatery",
  defaultDescription:
    "Worth It Eatery: home-style Ghanaian rice, flame-cooked jollof, and stone-ground banku delivered in Accra. Order online and send your cart on WhatsApp.",
  keywords: [
    "Worth It Eatery",
    "food delivery Accra",
    "Ghanaian restaurant Accra",
    "jollof delivery Accra",
    "banku delivery",
    "fried rice Ghana",
    "rice dishes Accra",
  ],
  locale: "en_GH",
} as const;

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = DEFAULT_OG,
  noIndex = false,
}: PageMeta): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes("Worth It") ? title : `${title} | Worth It Eatery`;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO.keywords, ...keywords],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url,
      siteName: SEO.siteName,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Worth It Eatery, Ghanaian rice, jollof and banku" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function restaurantJsonLd() {
  const siteUrl = getSiteUrl();
  const phone = SITE.phones[0]?.display;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: SITE.name,
    description: SEO.defaultDescription,
    url: siteUrl,
    image: `${siteUrl}${DEFAULT_OG}`,
    ...(phone ? { telephone: phone } : {}),
    email: SITE.email,
    priceRange: "$$",
    servesCuisine: ["Ghanaian", "West African"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "21:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    ],
    hasMenu: `${siteUrl}/menu`,
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: SEO.siteName,
    description: SEO.defaultDescription,
    publisher: { "@id": `${siteUrl}/#restaurant` },
    inLanguage: "en-GH",
  };
}

export function menuJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Worth It Eatery Menu",
    description: "Rice dishes, jollofs, and banku for delivery in Accra.",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Rice, Jollofs & Banku",
        hasMenuItem: menuItems.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          image: `${siteUrl}${item.image}`,
        })),
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
