import { Navbar } from "@/components/shared/navbar";
import { HeroSection } from "@/components/landing/hero/hero-section";
import { ServicesSection } from "@/components/landing/features/services-section";
import { ProcessSection } from "@/components/landing/process/process-section";
import { FAQSection } from "@/components/landing/faq/faq-section";
import { TestimonialsSection } from "@/components/landing/testimonials/testimonials-section";
import { CtaSection } from "@/components/landing/cta/cta-section";
import { Footer } from "@/components/landing/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
    </main>
      <Footer />
    </>
  );
}
