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
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Sigurnost</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Sigurnost i povjerenje na prvom mjestu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Enterprise-grade sigurnost</h4>
                <p className="text-muted-foreground text-sm">Isti standardi koje koriste banke i finansijske institucije</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground">
                HTTPS/TLS
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground">
                AES-256
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground">
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
