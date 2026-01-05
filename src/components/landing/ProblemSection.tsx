import { motion } from "framer-motion";
import { FileSpreadsheet, AlertTriangle, Clock, Eye, Lock } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Rasuta dokumentacija",
    description: "Plaćanja, fakture i rokovi razbacani po Excel tabelama, emailovima i različitim sistemima. Nema jednog izvora istine."
  },
  {
    icon: AlertTriangle,
    title: "Greške i duplikati",
    description: "Ručni unos podataka dovodi do grešaka. Dupla plaćanja, pogrešni iznosi i propušteni popusti postaju svakodnevica."
  },
  {
    icon: Clock,
    title: "Propušteni rokovi",
    description: "Bez automatizovanih podsjetnika, rokovi plaćanja se propuštaju. Kamate, penali i narušeni odnosi sa dobavljačima."
  },
  {
    icon: Eye,
    title: "Nevidljiv cash flow",
    description: "Menadžment nema jasan pregled nadolazećih obaveza. Odluke se donose naslijepo, bez pouzdanih finansijskih projekcija."
  },
  {
    icon: Lock,
    title: "Nedostatak kontrole",
    description: "Ko je odobrio plaćanje? Kada? Zašto? Bez audit traga, teško je osigurati usklađenost i unutrašnju kontrolu."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Izazovi koje finansijski timovi poznaju predobro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upravljanje plaćanjima dobavljačima nije trivijalan zadatak. 
            Ovo su stvarni problemi koje svakodnevno viđamo u srednjim i velikim kompanijama.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
