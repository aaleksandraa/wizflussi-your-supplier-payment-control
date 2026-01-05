import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Layers, Zap } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Centralizovana kontrola",
    description: "Sva plaćanja, dobavljači i fakture na jednom mjestu. Jedan izvor istine za cijelu organizaciju."
  },
  {
    icon: CheckCircle2,
    title: "Eliminacija grešaka",
    description: "Validacija unosa, automatska detekcija duplikata i kontrola odobrenja smanjuju ljudske greške na minimum."
  },
  {
    icon: TrendingUp,
    title: "Jasan cash flow",
    description: "Real-time pregled svih nadolazećih plaćanja po datumima, valutama i statusima. Precizne finansijske projekcije."
  },
  {
    icon: Zap,
    title: "Automatizacija rokova",
    description: "Sistem prati rokove i automatski obavještava odgovorne osobe. Nikad više propuštenih plaćanja."
  }
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Rješenje</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              WizFlussi donosi red u vaše finansije
            </h2>
            <p className="text-muted-foreground mb-8">
              WizFlussi nije još jedan alat za praćenje računa. To je profesionalna platforma 
              dizajnirana za organizacije koje zahtijevaju potpunu kontrolu, transparentnost 
              i sigurnost u upravljanju obavezama prema dobavljačima.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-lg">
              <div className="p-6 h-full flex flex-col">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div className="text-xs text-muted-foreground">WizFlussi Dashboard</div>
                </div>

                {/* Mock dashboard content */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Ukupne obaveze</div>
                    <div className="text-lg font-bold text-foreground">€124,580</div>
                    <div className="text-xs text-accent mt-1">+12% ovaj mjesec</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Dospijeva danas</div>
                    <div className="text-lg font-bold text-foreground">€8,420</div>
                    <div className="text-xs text-gold mt-1">3 plaćanja</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Dobavljači</div>
                    <div className="text-lg font-bold text-foreground">47</div>
                    <div className="text-xs text-muted-foreground mt-1">Aktivnih</div>
                  </div>
                </div>

                {/* Mock table */}
                <div className="flex-1 rounded-lg bg-secondary/30 border border-border p-4">
                  <div className="text-xs text-muted-foreground mb-3">Nadolazeća plaćanja</div>
                  <div className="space-y-2">
                    {[
                      { supplier: "TechCorp d.o.o.", amount: "€2,450", date: "15.01.", status: "pending" },
                      { supplier: "Office Supplies", amount: "€890", date: "16.01.", status: "approved" },
                      { supplier: "Logistics Partner", amount: "€5,200", date: "18.01.", status: "pending" },
                    ].map((payment, i) => (
                      <div key={i} className="flex items-center justify-between text-xs p-2 rounded bg-background/50">
                        <span className="text-foreground">{payment.supplier}</span>
                        <span className="text-muted-foreground">{payment.date}</span>
                        <span className="font-medium text-foreground">{payment.amount}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] ${payment.status === 'approved' ? 'bg-accent/20 text-accent' : 'bg-gold/20 text-gold'}`}>
                          {payment.status === 'approved' ? 'Odobreno' : 'Na čekanju'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
