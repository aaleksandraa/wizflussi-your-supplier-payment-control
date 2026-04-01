import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  PenTool,
  BarChart3,
  Server,
  Headphones,
  ArrowRight,
  Mail,
  CheckCircle2,
} from "lucide-react";
import WizionarHeader from "@/components/wizionar/WizionarHeader";
import WizionarFooter from "@/components/wizionar/WizionarFooter";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Globe,
    title: "Izrada web stranica & web shopova",
    description:
      "Moderan dizajn, brze performanse i potpuna responzivnost. Od prezentacijskih sajtova i landing stranica do kompletnih e-commerce rješenja.",
    features: ["Responzivan dizajn", "CMS & custom razvoj", "SEO optimizacija", "E-commerce"],
    link: "/usluge/izrada-web-stranica",
  },
  {
    icon: ShoppingCart,
    title: "Web shopovi",
    description:
      "Kompletna e-commerce rješenja sa upravljanjem proizvodima, narudžbama, plaćanjima i dostavom. Sve što vam treba za online prodaju.",
    features: ["Upravljanje proizvodima", "Online plaćanje", "Praćenje narudžbi", "Integracija dostave"],
    link: "/usluge/izrada-web-stranica",
  },
  {
    icon: Search,
    title: "SEO optimizacija",
    description:
      "Tehnička i sadržajna optimizacija za pretraživače. Povećajte vidljivost i privucite više organskog saobraćaja na vaš sajt.",
    features: ["Tehnički SEO", "On-page optimizacija", "Analitika", "Izvještavanje"],
    link: "/usluge/seo-optimizacija",
  },
  {
    icon: Smartphone,
    title: "Mobilne aplikacije",
    description:
      "Razvoj mobilnih aplikacija za iOS i Android. Intuitivno korisničko iskustvo prilagođeno vašim poslovnim potrebama.",
    features: ["iOS & Android", "Push notifikacije", "Offline pristup", "App Store objava"],
  },
  {
    icon: PenTool,
    title: "UI/UX dizajn",
    description:
      "Kreiranje korisničkog interfejsa koji je lijep i funkcionalan. Od wireframe-a do finalnog dizajna sa fokusom na korisničko iskustvo.",
    features: ["Wireframing", "Prototipovi", "Korisnički testovi", "Dizajn sistemi"],
  },
  {
    icon: Palette,
    title: "Grafički dizajn",
    description:
      "Kompletna grafička rješenja za vaš brend – od logotipa i vizuelnog identiteta do štampanih materijala, social media grafika i pakovanja.",
    features: ["Logo & branding", "Vizitke & flajeri", "Social media grafike", "Packaging dizajn"],
    link: "/usluge/graficki-dizajn",
  },
  {
    icon: BarChart3,
    title: "Digitalni marketing",
    description:
      "Strategije digitalnog marketinga prilagođene vašem biznisu. Google Ads, društvene mreže i content marketing.",
    features: ["Google Ads", "Social media", "Email marketing", "Content strategija"],
  },
  {
    icon: Server,
    title: "Hosting i održavanje",
    description:
      "Pouzdano hostovanje i redovno održavanje vaših web aplikacija. Sigurnosni update-i, backup i monitoring.",
    features: ["Cloud hosting", "SSL certifikati", "Backup sistema", "24/7 monitoring"],
  },
  {
    icon: Headphones,
    title: "IT konsalting",
    description:
      "Savjetovanje i planiranje IT infrastrukture. Pomažemo vam da donesete prave tehnološke odluke za vaš biznis.",
    features: ["Analiza potreba", "Tehnološki plan", "Odabir alata", "Implementacija"],
  },
];

const Usluge = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WizionarHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Naše usluge
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Kompletna digitalna <br />
              <span className="text-gradient">rješenja za vaš biznis</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Od ideje do realizacije – nudimo širok spektar digitalnih usluga
              koje pomažu vašem biznisu da raste i uspijeva u digitalnom svijetu.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="mailto:info@wizionar.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <Mail className="w-5 h-5" />
              Kontaktirajte nas za ponudu
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* Services grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all mt-auto"
                    >
                      Saznajte više <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Imate projekat na umu? Javite nam se za besplatnu konsultaciju.
              </p>
              <a
                href="mailto:info@wizionar.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                info@wizionar.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <WizionarFooter />
    </div>
  );
};

export default Usluge;
