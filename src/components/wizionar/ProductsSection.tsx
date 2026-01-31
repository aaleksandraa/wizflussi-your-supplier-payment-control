import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  Stethoscope, 
  Scissors, 
  Cat, 
  Building2, 
  CreditCard,
  ArrowUpRight,
  Sparkles
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
              className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                product.featured 
                  ? 'bg-card border-primary/30 shadow-lg hover:shadow-orange' 
                  : 'bg-card border-border hover:border-primary/20 hover:shadow-md'
              }`}
            >
              {product.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {t.products.available}
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  product.featured 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                }`}>
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

              <div className="flex gap-3 mt-auto">
                {product.available ? (
                  <>
                    <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                      <Link to={product.link}>
                        {t.products.learnMore}
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href="#contact">{t.products.demo}</a>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" disabled className="flex-1 opacity-50">
                      {t.products.soon}
                    </Button>
                    <Button size="sm" variant="secondary" asChild className="flex-1">
                      <a href="#contact">{t.products.interested}</a>
                    </Button>
                  </>
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
