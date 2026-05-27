import { Suspense } from "react";
import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import MenuPageClient from "@/components/public/menu-page-client";
import StructuredData from "@/components/seo/structured-data";
import { breadcrumbJsonLd, menuJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Menu",
  description:
    "Rice dishes, jollofs, and banku at Worth It Eatery. Order for delivery in Accra and send on WhatsApp.",
  path: "/menu",
  keywords: ["Worth It Eatery menu", "jollof delivery Accra", "banku delivery", "fried rice Ghana"],
});

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-warm-black">
      <StructuredData
        data={[
          menuJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
          ]),
        ]}
      />
      <Navbar />
      <Suspense fallback={<div className="pt-32 pb-20 text-center text-ivory/40">Loading menu…</div>}>
        <MenuPageClient />
      </Suspense>
      <Footer />
    </main>
  );
}
