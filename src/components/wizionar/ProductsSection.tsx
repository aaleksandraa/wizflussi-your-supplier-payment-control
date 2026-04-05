import { motion } from "framer-motion";
import LocalizedLink from "@/components/LocalizedLink";
import { 
  Wallet, 
  Stethoscope, 
  Scissors, 
  Cat, 
  Building2, 
  CreditCard,
  MessageCircle,
  Mail
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: "wizflussi",
      name: "WizFlussi",
      icon: CreditCard,
      tagline: t.products.items.wizflussi.tagline,
      description: t.products.items.wizflussi.description,
      features: t.products.items.wizflussi.features,
      link: "/wizflussi",
      available: true,
      featured: true
    },
    {
      id: "wizmedik-reports",
      name: "WizMedikReports",
      icon: Stethoscope,
      tagline: "Izvještavanje za medicinske ustanove",
      description: "Dnevni, sedmični i mjesečni izvještaji. Praćenje zarade, osoblja, radnih sati i normativa – sve na jednom mjestu.",
      features: ["Praćenje zarade", "Upravljanje osobljem", "Automatski izvještaji"],
      link: "/wizmedik-reports",
      available: true,
      featured: true
    },
    {
      id: "wizfin",
      name: "WizFin",
      icon: Wallet,
      tagline: t.products.items.wizfin.tagline,
      description: t.products.items.wizfin.description,
      features: t.products.items.wizfin.features,
      link: "/wizfin",
      available: false,
      featured: false
    },
    {
      id: "wizbank",
      name: "WizBank",
      icon: Building2,
      tagline: t.products.items.wizbank.tagline,
      description: t.products.items.wizbank.description,
      features: t.products.items.wizbank.features,
      link: "/wizbank",
      available: false,
      featured: false
    },
    {
      id: "wizmedik",
      name: "wizMedik",
      icon: Stethoscope,
      tagline: "Zdravstvo na jednom mjestu u BiH",
      description: "Platforma koja povezuje doktore, klinike, laboratorije, banje i domove za njegu. Online zakazivanje, stručni blog i anonimna pitanja.",
      features: ["Pretraga doktora", "Online zakazivanje", "Stručni blog"],
      link: "/wizmedik",
      available: true,
      featured: true
    },
    {
      id: "frizerino",
      name: "Frizerino",
      icon: Scissors,
      tagline: "Platforma za online zakazivanje salona",
      description: "Pronađite i rezervišite frizerski ili kozmetički salon. Pretraga po gradu, usluzi i slobodnim terminima – bez poziva i čekanja.",
      features: ["Pametna pretraga", "Online rezervacija", "Sistem za salone"],
      link: "/frizerino",
      available: true,
      featured: true
    },
    {
      id: "chatko",
      name: "Chatko",
      icon: MessageCircle,
      tagline: t.products.items.chatko.tagline,
      description: t.products.items.chatko.description,
      features: t.products.items.chatko.features,
      link: "/chatko",
      available: true,
      featured: true
    },
    {
      id: "wizvet",
      name: "WizVet",
      icon: Cat,
      tagline: t.products.items.wizvet.tagline,
      description: t.products.items.wizvet.description,
      features: t.products.items.wizvet.features,
      link: "/wizvet",
      available: false,
      featured: false
    }
  ];

  return (
    <section id="products" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t.products.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.products.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border bg-card border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col"
            >

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-sm text-primary font-medium">{product.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                <a 
                  href="mailto:info@wizionar.com" 
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t.products.contactUs}
                </a>
                {product.available && product.link !== "#" && (
                  <Link
                    to={product.link}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pogledaj →
                  </LocalizedLink>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
