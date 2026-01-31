import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Tag } from "lucide-react";
import { useWizflussiTranslations } from "@/hooks/useWizflussiTranslations";

const CTASection = () => {
  const t = useWizflussiTranslations();

  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(var(--wf-background))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--wf-background))] via-[hsl(var(--emerald)/0.05)] to-[hsl(var(--wf-background))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[hsl(var(--emerald)/0.1)] rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[hsl(var(--wf-foreground))]">
            {t.cta.title}
          </h2>
          <p className="text-lg text-[hsl(var(--wf-muted-foreground))] mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://flussi.wizionar.app/login" target="_blank" rel="noopener noreferrer">
                {t.cta.testApp}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:info@wizionar.com">
                <Mail className="w-5 h-5" />
                {t.cta.contact}
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-[hsl(var(--wf-card))] border border-[hsl(var(--wf-border))]">
              <Tag className="w-6 h-6 text-[hsl(var(--emerald))] mx-auto mb-3" />
              <div className="text-sm text-[hsl(var(--wf-muted-foreground))] mb-2">{t.cta.pricing.oneTime}</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-bold text-[hsl(var(--emerald))]">{t.cta.pricing.salePrice}</span>
                <span className="text-lg text-[hsl(var(--wf-muted-foreground))] line-through">{t.cta.pricing.regularPrice}</span>
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[hsl(var(--wf-card))] border border-[hsl(var(--wf-border))]">
              <div className="text-2xl font-bold text-[hsl(var(--wf-foreground))] mb-1">50%</div>
              <div className="text-sm text-[hsl(var(--wf-muted-foreground))]">Popust</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[hsl(var(--wf-card))] border border-[hsl(var(--wf-border))]">
              <div className="text-lg font-bold text-[hsl(var(--wf-foreground))] mb-1">{t.cta.pricing.customization}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
