import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import ContactPageClient from "@/components/public/contact-page-client";
import StructuredData from "@/components/seo/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Delivery",
  description:
    "Contact Worth It Eatery in Accra — delivery hours, phone, and WhatsApp ordering.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-warm-black">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Navbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
