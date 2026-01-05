import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck, Eye, Key } from "lucide-react";
import { useWizflussiTranslations } from "@/hooks/useWizflussiTranslations";

const SecuritySection = () => {
  const t = useWizflussiTranslations();

  const securityFeatures = [
    { icon: Shield, ...t.security.items.access },
    { icon: FileCheck, ...t.security.items.audit },
    { icon: Lock, ...t.security.items.encryption },
    { icon: UserCheck, ...t.security.items.validation },
    { icon: Eye, ...t.security.items.monitoring },
    { icon: Key, ...t.security.items.session }
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-[hsl(var(--wf-background))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--wf-background))] to-[hsl(var(--wf-secondary)/0.2)]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[hsl(var(--emerald)/0.05)] rounded-full blur-[100px] translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--emerald))] text-sm font-medium uppercase tracking-wider">{t.security.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[hsl(var(--wf-foreground))]">
            {t.security.title}
          </h2>
          <p className="text-[hsl(var(--wf-muted-foreground))] max-w-2xl mx-auto">
            {t.security.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[hsl(var(--wf-card))] border border-[hsl(var(--wf-border))] hover:border-[hsl(var(--emerald)/0.3)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--emerald)/0.1)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--emerald)/0.2)] transition-colors">
                <feature.icon className="w-6 h-6 text-[hsl(var(--emerald))]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--wf-foreground))]">{feature.title}</h3>
              <p className="text-[hsl(var(--wf-muted-foreground))] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-dark-card border border-[hsl(var(--wf-border))] max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--emerald)/0.1)] flex items-center justify-center">
                <Shield className="w-8 h-8 text-[hsl(var(--emerald))]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[hsl(var(--wf-foreground))]">{t.security.enterprise.title}</h4>
                <p className="text-[hsl(var(--wf-muted-foreground))] text-sm">{t.security.enterprise.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-[hsl(var(--wf-secondary)/0.5)] border border-[hsl(var(--wf-border))] text-sm text-[hsl(var(--wf-muted-foreground))]">
                HTTPS/TLS
              </div>
              <div className="px-4 py-2 rounded-lg bg-[hsl(var(--wf-secondary)/0.5)] border border-[hsl(var(--wf-border))] text-sm text-[hsl(var(--wf-muted-foreground))]">
                AES-256
              </div>
              <div className="px-4 py-2 rounded-lg bg-[hsl(var(--wf-secondary)/0.5)] border border-[hsl(var(--wf-border))] text-sm text-[hsl(var(--wf-muted-foreground))]">
                GDPR Ready
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
