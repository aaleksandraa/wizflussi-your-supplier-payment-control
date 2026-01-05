import { motion } from "framer-motion";
import { Calculator, Stethoscope, Scissors, Building2, Cat, ArrowRight } from "lucide-react";

const audiences = [
  { icon: Calculator, label: "Finansije i računovodstvo", description: "Agencije i interne službe" },
  { icon: Stethoscope, label: "Zdravstvene ustanove", description: "Klinike i poliklinike" },
  { icon: Scissors, label: "Uslužne djelatnosti", description: "Saloni i studiji" },
  { icon: Cat, label: "Veterinarske ambulante", description: "Ambulante i klinike" },
  { icon: Building2, label: "Srednje i velike kompanije", description: "50+ zaposlenih" },
];

const ForWhoSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">Za koga</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kome donosimo vrijednost
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naši proizvodi su za organizacije koje trebaju više od generičkih alata.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{audience.label}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Razgovarajmo o vašim potrebama
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;
