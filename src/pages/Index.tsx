import WizionarHeader from "@/components/wizionar/WizionarHeader";
import WizionarHero from "@/components/wizionar/WizionarHero";
import TrustSignals from "@/components/wizionar/TrustSignals";
import WhatWeDo from "@/components/wizionar/WhatWeDo";
import ProductsSection from "@/components/wizionar/ProductsSection";
import ProcessSection from "@/components/wizionar/ProcessSection";
import SecurityTrust from "@/components/wizionar/SecurityTrust";
import ForWhoSection from "@/components/wizionar/ForWhoSection";
import ContactSection from "@/components/wizionar/ContactSection";
import WizionarFooter from "@/components/wizionar/WizionarFooter";
import SEOHead from "@/components/wizionar/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background text-foreground">
        <WizionarHeader />
        <main>
          <WizionarHero />
          <TrustSignals />
          <WhatWeDo />
          <ProductsSection />
          <ProcessSection />
          <SecurityTrust />
          <ForWhoSection />
          <ContactSection />
        </main>
        <WizionarFooter />
      </div>
    </>
  );
};

export default Index;
