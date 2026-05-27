import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SEO, getSiteUrl } from "@/lib/seo";
import Providers from "@/components/public/providers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.keywords],
  authors: [{ name: "Worth It Eatery" }],
  creator: "Worth It Eatery",
  category: "restaurant",
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: getSiteUrl(),
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: "/images/dishes/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Jollof rice at Worth It Eatery, Accra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: ["/images/dishes/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground grain">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
