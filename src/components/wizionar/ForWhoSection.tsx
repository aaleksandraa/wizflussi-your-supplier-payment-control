import { motion } from "framer-motion";
import { Calculator, Stethoscope, Scissors, Building2, Cat } from "lucide-react";

const audiences = [
  { icon: Calculator, label: "Finansije i računovodstvo" },
  { icon: Stethoscope, label: "Zdravstvene ustanove" },
  { icon: Scissors, label: "Uslužne djelatnosti (saloni)" },
  { icon: Cat, label: "Veterinarske ambulante" },
  { icon: Building2, label: "Kompanije sa više poslovnica i dobavljača" },
];

const ForWhoSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kome Wizionar donosi najveću vrijednost
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Naši proizvodi su napravljeni za organizacije koje trebaju više od generičkih alata.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-card border border-border hover:border-primary/30 transition-colors"
            >
              <audience.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{audience.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
