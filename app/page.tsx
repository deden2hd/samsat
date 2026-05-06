import { BrandProofSection } from "@/src/components/sections/BrandProofSection";
import { ClosingSection } from "@/src/components/sections/ClosingSection";
import { DocumentChecklistSection } from "@/src/components/sections/DocumentChecklistSection";
import { FAQSection } from "@/src/components/sections/FAQSection";
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
        <ClosingSection />
      </main>
    </>
  );
}
