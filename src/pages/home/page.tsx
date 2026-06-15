import Seo from "@/components/Seo";
import { seoForPath } from "@/seo/resolve";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeStrip from "./components/MarqueeStrip";
import JourneySection from "./components/JourneySection";
import ImpactSection from "./components/ImpactSection";
import AwardsSection from "./components/AwardsSection";
import PressSection from "./components/PressSection";
import GlobalPresenceSection from "./components/GlobalPresenceSection";
import SkillsSection from "./components/SkillsSection";
import SchoolsSection from "./components/SchoolsSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const seo = seoForPath("/");
  return (
    <div className="bg-background-50 font-sans">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <JourneySection />
      <ImpactSection />
      <AwardsSection />
      <PressSection />
      <GlobalPresenceSection />
      <SkillsSection />
      <SchoolsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}