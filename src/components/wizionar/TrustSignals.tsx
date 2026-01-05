import { motion } from "framer-motion";
import { Database, Zap, Shield, FileDown, Layers } from "lucide-react";

const signals = [
  { icon: Database, label: "Centralizacija podataka" },
  { icon: Zap, label: "Automatizacija ručnih koraka" },
  { icon: Shield, label: "RBAC dozvole i audit logovi" },
  { icon: FileDown, label: "Exporti i izvještaji (Excel/PDF/CSV)" },
  { icon: Layers, label: "Modularno i skalabilno" },
];

const TrustSignals = () => {
  return (
    <section id="trust" className="py-16 border-b border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {signals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background border border-border"
            >
              <signal.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{signal.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
