import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesShowcase } from "@/components/landing/FeaturesShowcase";
import { CtaSection } from "@/components/landing/CtaSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesShowcase />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
