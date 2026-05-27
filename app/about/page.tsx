import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import AboutPageClient from "@/components/public/about-page-client";
import StructuredData from "@/components/seo/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The story behind Worth It Eatery: Ghanaian rice, jollof, and banku delivered across Accra.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-black">
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Navbar />
      <AboutPageClient />
      <Footer />
    </main>
  );
}
