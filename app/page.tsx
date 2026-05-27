import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import HeroSection from "@/components/public/hero-section";
import StorySection from "@/components/public/story-section";
import FeaturedMenuSection from "@/components/public/featured-menu-section";
import CategoryGrid from "@/components/public/category-grid";
import RiceTraditionsSection from "@/components/public/rice-traditions-section";
import WhyWorthItSection from "@/components/public/why-worth-it-section";
import TestimonialsSection from "@/components/public/testimonials-section";
import GallerySection from "@/components/public/gallery-section";
import ContactCTA from "@/components/public/contact-cta";
import StructuredData from "@/components/seo/structured-data";
import { pageMetadata, restaurantJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Worth It Eatery | Rice, Jollof & Banku Delivery in Accra",
  description:
    "Worth It Eatery: home-style Ghanaian rice, flame-cooked jollof, and stone-ground banku delivered in Accra. Order from the menu and send your cart on WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-black">
      <StructuredData data={[restaurantJsonLd(), websiteJsonLd()]} />
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturedMenuSection />
      <CategoryGrid />
      <RiceTraditionsSection />
      <WhyWorthItSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
