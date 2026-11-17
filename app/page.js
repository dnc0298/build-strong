import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ProgramFeaturesSection from "./components/ProgramFeaturesSection";
import DurationSection from "./components/DurationSection";
import TransformationSection from "./components/TransformationSection";

export default function Home() {
  return (
    <main className="bg-[#171514]">
      <HeroSection />
      <WelcomeSection />
      <ProgramFeaturesSection />
      <DurationSection />
      <TransformationSection />
    </main>
  );
}
