import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck, Eye, Key } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Kontrola pristupa",
    description: "Role-Based Access Control (RBAC) omogućava precizno definisanje ko može vidjeti, kreirati ili odobriti plaćanja."
  },
  {
    icon: FileCheck,
    title: "Audit trail",
    description: "Svaka akcija u sistemu se bilježi – ko, kada i šta. Potpuna transparentnost za interne i eksterne revizije."
  },
  {
    icon: Lock,
    title: "Enkripcija podataka",
    description: "Svi osjetljivi podaci su enkriptovani u mirovanju i tokom prijenosa. Industrijski standardi zaštite."
  },
  {
    icon: UserCheck,
    title: "Validacija unosa",
    description: "Automatska provjera podataka prilikom unosa. Sprječavanje grešaka prije nego što uđu u sistem."
  },
  {
    icon: Eye,
    title: "Aktivni monitoring",
    description: "Praćenje sumnjivih aktivnosti i neuobičajenih obrazaca. Proaktivna zaštita od anomalija."
  },
  {
    icon: Key,
    title: "Session management",
    description: "Sigurno upravljanje sesijama sa automatskim logout-om i ponovnom autentifikacijom za osjetljive akcije."
  }
];

const SecuritySection = () => {
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
          <span className="text-[hsl(var(--emerald))] text-sm font-medium uppercase tracking-wider">Sigurnost</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[hsl(var(--wf-foreground))]">
            Sigurnost i povjerenje na prvom mjestu
          </h2>
          <p className="text-[hsl(var(--wf-muted-foreground))] max-w-2xl mx-auto">
            Finansijski podaci zahtijevaju najviši nivo zaštite. 
            WizFlussi je dizajniran sa sigurnošću kao osnovnim principom.
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
                <h4 className="font-semibold text-lg text-[hsl(var(--wf-foreground))]">Enterprise-grade sigurnost</h4>
                <p className="text-[hsl(var(--wf-muted-foreground))] text-sm">Isti standardi koje koriste banke i finansijske institucije</p>
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
