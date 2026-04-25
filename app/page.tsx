import { BrandProofSection } from "@/src/components/sections/BrandProofSection";
import { DocumentChecklistSection } from "@/src/components/sections/DocumentChecklistSection";
import { FAQSection } from "@/src/components/sections/FAQSection";
import { FinalCTA } from "@/src/components/sections/FinalCTA";
import { Footer } from "@/src/components/sections/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { HowItWorksSection } from "@/src/components/sections/HowItWorksSection";
import { Navbar } from "@/src/components/sections/Navbar";
import { PaymentOptionsSection } from "@/src/components/sections/PaymentOptionsSection";
import { QuickCheckSection } from "@/src/components/sections/QuickCheckSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <BrandProofSection />
        <QuickCheckSection />
        <HowItWorksSection />
        <DocumentChecklistSection />
        <PaymentOptionsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
