import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  Building2, 
  CalendarClock, 
  Globe, 
  FileDown, 
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard analitika",
    description: "Pregled svih ključnih metrika na jednom mjestu. Grafički prikazi obaveza po dobavljačima, valutama i periodima. Trend analiza i projekcije cash flow-a.",
    highlight: true
  },
  {
    icon: CreditCard,
    title: "Upravljanje plaćanjima",
    description: "Kreiranje, praćenje i odobravanje plaćanja kroz definisane workflow-e. Status tracking od kreiranja do izvršenja. Batch obrada za efikasnost."
  },
  {
    icon: Users,
    title: "Dobavljači",
    description: "Centralni registar svih dobavljača sa kontakt podacima, ugovorima i historijom plaćanja. Kategorizacija i ocjenjivanje dobavljača."
  },
  {
    icon: Building2,
    title: "Poslovnice",
    description: "Multi-lokacijska podrška za kompanije sa više poslovnica. Konsolidovani izvještaji i individualno praćenje po lokaciji."
  },
  {
    icon: CalendarClock,
    title: "Planovi plaćanja",
    description: "Definisanje planova plaćanja za rate, pretplate i periodična plaćanja. Automatsko generisanje obaveza prema planu.",
    highlight: true
  },
  {
    icon: Globe,
    title: "Više valuta",
    description: "Podrška za KM, EUR, USD i druge valute. Automatska konverzija po definisanim kursevima. Izvještaji u osnovnoj i stranim valutama."
  },
  {
    icon: FileDown,
    title: "Izvještaji i export",
    description: "Generisanje izvještaja u CSV, Excel i PDF formatima. Prilagodljivi izvještaji prema potrebama revizije i menadžmenta."
  },
  {
    icon: ShieldCheck,
    title: "RBAC i audit logovi",
    description: "Granularna kontrola pristupa po ulogama. Kompletna evidencija svih akcija u sistemu. Usklađenost sa regulatornim zahtjevima.",
    highlight: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative bg-[hsl(var(--wf-background))]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--wf-background))] via-[hsl(var(--wf-secondary)/0.1)] to-[hsl(var(--wf-background))]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--emerald))] text-sm font-medium uppercase tracking-wider">Funkcionalnosti</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[hsl(var(--wf-foreground))]">
            Sve što trebate za profesionalno upravljanje plaćanjima
          </h2>
          <p className="text-[hsl(var(--wf-muted-foreground))] max-w-2xl mx-auto">
            WizFlussi pokriva cijeli životni ciklus upravljanja obavezama prema dobavljačima – 
            od unosa do izvještavanja i revizije.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 ${
                feature.highlight 
                  ? 'bg-gradient-dark-card border-[hsl(var(--emerald)/0.3)] hover:border-[hsl(var(--emerald)/0.5)] shadow-emerald-glow' 
                  : 'bg-[hsl(var(--wf-card))] border-[hsl(var(--wf-border))] hover:border-[hsl(var(--wf-muted-foreground)/0.3)]'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                feature.highlight 
                  ? 'bg-[hsl(var(--emerald)/0.2)] group-hover:bg-[hsl(var(--emerald)/0.3)]' 
                  : 'bg-[hsl(var(--wf-secondary))] group-hover:bg-[hsl(var(--wf-secondary)/0.8)]'
              }`}>
                <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-[hsl(var(--emerald))]' : 'text-[hsl(217,91%,60%)]'}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--wf-foreground))]">{feature.title}</h3>
              <p className="text-[hsl(var(--wf-muted-foreground))] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
