import { Navbar } from "@/components/shared/navbar";
import { HeroSection } from "@/components/landing/hero/hero-section";
import { ServicesSection } from "@/components/landing/features/services-section";
import { FAQSection } from "@/components/landing/faq/faq-section";
import { TestimonialsSection } from "@/components/landing/testimonials/testimonials-section";
import { Footer } from "@/components/landing/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FAQSection />
        <TestimonialsSection />
    </main>
      <Footer />
    </>
  );
}
