import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  Building2, 
  CalendarClock, 
  Globe, 
  FileDown, 
  ShieldCheck 
} from "lucide-react";
import { useWizflussiTranslations } from "@/hooks/useWizflussiTranslations";

const FeaturesSection = () => {
  const t = useWizflussiTranslations();

  const features = [
    { icon: LayoutDashboard, ...t.features.items.dashboard, highlight: true },
    { icon: CreditCard, ...t.features.items.payments, highlight: false },
    { icon: Users, ...t.features.items.suppliers, highlight: false },
    { icon: Building2, ...t.features.items.branches, highlight: false },
    { icon: CalendarClock, ...t.features.items.plans, highlight: true },
    { icon: Globe, ...t.features.items.currency, highlight: false },
    { icon: FileDown, ...t.features.items.reports, highlight: false },
    { icon: ShieldCheck, ...t.features.items.rbac, highlight: true }
  ];

  return (
    <section id="features" className="py-24 relative bg-[hsl(var(--wf-background))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--wf-background))] via-[hsl(var(--wf-secondary)/0.1)] to-[hsl(var(--wf-background))]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--emerald))] text-sm font-medium uppercase tracking-wider">{t.features.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[hsl(var(--wf-foreground))]">
            {t.features.title}
          </h2>
          <p className="text-[hsl(var(--wf-muted-foreground))] max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 ${
                feature.highlight 
                  ? 'bg-gradient-dark-card border-[hsl(var(--emerald)/0.3)] hover:border-[hsl(var(--emerald)/0.5)] shadow-emerald-glow' 
                  : 'bg-[hsl(var(--wf-card))] border-[hsl(var(--wf-border))] hover:border-[hsl(var(--wf-muted-foreground)/0.3)]'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                feature.highlight 
                  ? 'bg-[hsl(var(--emerald)/0.2)] group-hover:bg-[hsl(var(--emerald)/0.3)]' 
                  : 'bg-[hsl(var(--wf-secondary))] group-hover:bg-[hsl(var(--wf-secondary)/0.8)]'
              }`}>
                <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-[hsl(var(--emerald))]' : 'text-[hsl(217,91%,60%)]'}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--wf-foreground))]">{feature.title}</h3>
              <p className="text-[hsl(var(--wf-muted-foreground))] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
