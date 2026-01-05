import { motion } from "framer-motion";
import { Shield, FileCheck, Lock, CheckCircle, Activity, Database } from "lucide-react";

const securityFeatures = [
  { icon: Shield, label: "Role-based access control (RBAC)" },
  { icon: FileCheck, label: "Audit trail (ko je šta uradio i kada)" },
  { icon: Lock, label: "Validacija unosa i zaštita od web napada" },
  { icon: Database, label: "Backup strategije i monitoring" },
  { icon: Activity, label: "GDPR-friendly pristup" },
  { icon: CheckCircle, label: "Enkripcija podataka" },
];

const SecurityTrust = () => {
  return (
    <section id="security" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sigurnost i pouzdanost kao standard.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Svaki Wizionar proizvod gradi se sa sigurnošću kao osnovnim principom, ne kao naknadnom mišlju.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
