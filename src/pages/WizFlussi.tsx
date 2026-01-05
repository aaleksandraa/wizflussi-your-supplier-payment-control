import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SecuritySection from "@/components/landing/SecuritySection";
import AudienceSection from "@/components/landing/AudienceSection";
import TechSection from "@/components/landing/TechSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const WizFlussi = () => {
  return (
    <div className="wizflussi-theme min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <SecuritySection />
        <AudienceSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default WizFlussi;
