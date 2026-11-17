import ProgramsHero from "../components/ProgramsHero";
import PricingSection from "../components/PricingSection";
import HowItWorks from "../components/HowItWorks";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";

export default function ProgramsPage() {
  return (
    <main className="w-full overflow-x-clip bg-[#171514] text-[#F3E5D9]">
      <ProgramsHero />
      <PricingSection />
      <HowItWorks />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
