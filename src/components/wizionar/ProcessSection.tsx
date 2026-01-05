import { motion } from "framer-motion";
import { Search, Monitor, Settings, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "Kratki discovery poziv – mapiramo procese i ciljeve."
  },
  {
    icon: Monitor,
    step: "02",
    title: "Demo i mapiranje",
    description: "Prezentacija proizvoda i identifikacija modula koje trebate."
  },
  {
    icon: Settings,
    step: "03",
    title: "Implementacija",
    description: "Postavljanje sistema i migracija podataka (po potrebi)."
  },
  {
    icon: TestTube,
    step: "04",
    title: "Testiranje",
    description: "Provjera sigurnosti, role/permissions i user acceptance."
  },
  {
    icon: Rocket,
    step: "05",
    title: "Produkcija",
    description: "Go-live, obuka korisnika i kontinuirana podrška."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Od demo-a do produkcije – jasno i kontrolisano.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Naš proces je transparentan. Znate šta očekivati u svakoj fazi.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className={`p-6 rounded-2xl bg-gradient-card border border-border ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
