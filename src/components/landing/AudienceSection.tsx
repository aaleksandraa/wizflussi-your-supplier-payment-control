import { motion } from "framer-motion";
import { Building2, Factory, Calculator, Truck } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Srednje kompanije",
    description: "Organizacije sa 50-500 zaposlenih koje su prerasle Excel tabele ali ne žele kompleksne ERP sisteme. WizFlussi nudi pravu mjeru funkcionalnosti.",
    features: ["Brza implementacija", "Intuitivno korištenje", "Skalabilnost"]
  },
  {
    icon: Factory,
    title: "Velike kompanije",
    description: "Korporacije sa višestrukim poslovnicama, složenim lancima nabavke i strogim zahtjevima za usklađenost i kontrolu.",
    features: ["Multi-lokacijska podrška", "Napredni RBAC", "Integracije"]
  },
  {
    icon: Calculator,
    title: "Računovodstvene agencije",
    description: "Agencije koje vode finansije za više klijenata. Odvojeni prostori za svakog klijenta sa centralizovanim upravljanjem.",
    features: ["Multi-tenant arhitektura", "Klijentski portali", "Batch operacije"]
  },
  {
    icon: Truck,
    title: "Logistika i distribucija",
    description: "Kompanije sa velikim brojem dobavljača i čestim plaćanjima. Kritična potreba za tačnim praćenjem rokova i cash flow-a.",
    features: ["Masovni import", "Automatizacija", "Izvještaji po vozilima"]
  }
];

const AudienceSection = () => {
  return (
    <section id="audience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Za koga</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Dizajnirano za profesionalce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            WizFlussi nije za svakoga. Kreiran je za organizacije koje shvataju 
            važnost kontrole nad finansijskim obavezama i koje traže pouzdano rješenje.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{audience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {audience.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
