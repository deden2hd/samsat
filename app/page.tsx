import { DecisionSection } from "@/src/components/sections/DecisionSection";
import { DocumentChecklistSection } from "@/src/components/sections/DocumentChecklistSection";
import { FAQSection } from "@/src/components/sections/FAQSection";
import { FinalCTA } from "@/src/components/sections/FinalCTA";
import { Footer } from "@/src/components/sections/Footer";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { HowItWorksSection } from "@/src/components/sections/HowItWorksSection";
import { Navbar } from "@/src/components/sections/Navbar";
import { PaymentOptionsSection } from "@/src/components/sections/PaymentOptionsSection";
import { ProblemSection } from "@/src/components/sections/ProblemSection";
import { TrustStrip } from "@/src/components/sections/TrustStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <DecisionSection />
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
