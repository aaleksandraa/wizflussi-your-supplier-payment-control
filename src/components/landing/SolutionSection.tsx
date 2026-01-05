import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Layers, Zap } from "lucide-react";
import { useWizflussiTranslations } from "@/hooks/useWizflussiTranslations";

const SolutionSection = () => {
  const t = useWizflussiTranslations();

  const solutions = [
    { icon: Layers, ...t.solution.items.centralized },
    { icon: CheckCircle2, ...t.solution.items.errors },
    { icon: TrendingUp, ...t.solution.items.cashflow },
    { icon: Zap, ...t.solution.items.automation }
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-[hsl(var(--wf-background))]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--emerald)/0.05)] rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[hsl(var(--emerald))] text-sm font-medium uppercase tracking-wider">{t.solution.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[hsl(var(--wf-foreground))]">
              {t.solution.title}
            </h2>
            <p className="text-[hsl(var(--wf-muted-foreground))] mb-8">
              {t.solution.subtitle}
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
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--emerald)/0.1)] flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-[hsl(var(--emerald))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[hsl(var(--wf-foreground))]">{solution.title}</h3>
                    <p className="text-[hsl(var(--wf-muted-foreground))] text-sm">{solution.description}</p>
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
            <div className="aspect-[4/3] rounded-2xl bg-gradient-dark-card border border-[hsl(var(--wf-border))] overflow-hidden shadow-lg">
              <div className="p-6 h-full flex flex-col">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--destructive))]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold))]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--emerald))]" />
                  </div>
                  <div className="text-xs text-[hsl(var(--wf-muted-foreground))]">{t.solution.dashboard.title}</div>
                </div>

                {/* Mock dashboard content */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-[hsl(var(--wf-secondary)/0.5)] border border-[hsl(var(--wf-border))]">
                    <div className="text-xs text-[hsl(var(--wf-muted-foreground))] mb-1">{t.solution.dashboard.totalObligations}</div>
                    <div className="text-lg font-bold text-[hsl(var(--wf-foreground))]">€124,580</div>
                    <div className="text-xs text-[hsl(var(--emerald))] mt-1">+12%</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[hsl(var(--wf-secondary)/0.5)] border border-[hsl(var(--wf-border))]">
                    <div className="text-xs text-[hsl(var(--wf-muted-foreground))] mb-1">{t.solution.dashboard.dueToday}</div>
                    <div className="text-lg font-bold text-[hsl(var(--wf-foreground))]">€8,420</div>
                    <div className="text-xs text-[hsl(var(--gold))] mt-1">3 {t.solution.dashboard.payments}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[hsl(var(--wf-secondary)/0.5)] border border-[hsl(var(--wf-border))]">
                    <div className="text-xs text-[hsl(var(--wf-muted-foreground))] mb-1">{t.solution.dashboard.suppliers}</div>
                    <div className="text-lg font-bold text-[hsl(var(--wf-foreground))]">47</div>
                    <div className="text-xs text-[hsl(var(--wf-muted-foreground))] mt-1">{t.solution.dashboard.active}</div>
                  </div>
                </div>

                {/* Mock table */}
                <div className="flex-1 rounded-lg bg-[hsl(var(--wf-secondary)/0.3)] border border-[hsl(var(--wf-border))] p-4">
                  <div className="text-xs text-[hsl(var(--wf-muted-foreground))] mb-3">{t.solution.dashboard.upcomingPayments}</div>
                  <div className="space-y-2">
                    {[
                      { supplier: "TechCorp d.o.o.", amount: "€2,450", date: "15.01.", status: "pending" },
                      { supplier: "Office Supplies", amount: "€890", date: "16.01.", status: "approved" },
                      { supplier: "Logistics Partner", amount: "€5,200", date: "18.01.", status: "pending" },
                    ].map((payment, i) => (
                      <div key={i} className="flex items-center justify-between text-xs p-2 rounded bg-[hsl(var(--wf-background)/0.5)]">
                        <span className="text-[hsl(var(--wf-foreground))]">{payment.supplier}</span>
                        <span className="text-[hsl(var(--wf-muted-foreground))]">{payment.date}</span>
                        <span className="font-medium text-[hsl(var(--wf-foreground))]">{payment.amount}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] ${payment.status === 'approved' ? 'bg-[hsl(var(--emerald)/0.2)] text-[hsl(var(--emerald))]' : 'bg-[hsl(var(--gold)/0.2)] text-[hsl(var(--gold))]'}`}>
                          {payment.status === 'approved' ? t.solution.dashboard.approved : t.solution.dashboard.pending}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--emerald)/0.1)] rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[hsl(var(--primary)/0.1)] rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
