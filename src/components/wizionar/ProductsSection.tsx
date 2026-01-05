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
  ArrowRight
} from "lucide-react";

const products = [
  {
    id: "wizfin",
    name: "WizFin",
    icon: Wallet,
    tagline: "Finansijska evidencija i izvještaji",
    description: "WizFin je sistem za internu finansijsku evidenciju – prihodi, rashodi, fakture i osnovni izvještaji, pripremljeni tako da tim i računovodstvo imaju jasan pregled bez Excel improvizacija.",
    features: [
      "Pregled po periodima i kategorijama",
      "Brza pretraga i filtriranje",
      "Izvještaji i export za računovodstvo"
    ],
    link: "/wizfin",
    available: false
  },
  {
    id: "wizmedik",
    name: "WizMedik",
    icon: Stethoscope,
    tagline: "Platforma za zdravstvene ustanove",
    description: "WizMedik organizuje podatke o ustanovama, uslugama i lokacijama te priprema osnovu za digitalno zakazivanje i rast vidljivosti.",
    features: [
      "Struktura po lokacijama i specijalizacijama",
      "Kontrolisan unos i ažuriranje podataka",
      "Spremno za module zakazivanja i CRM-a"
    ],
    link: "/wizmedik",
    available: false
  },
  {
    id: "frizerino",
    name: "Frizerino",
    icon: Scissors,
    tagline: "Rezervacije i upravljanje salonima",
    description: "Frizerino je alat za salone koji žele uredno zakazivanje, manje propuštenih termina i bolju organizaciju osoblja i usluga.",
    features: [
      "Online rezervacije i raspored",
      "Podsjetnici i evidencija termina",
      "Upravljanje uslugama i timom"
    ],
    link: "/frizerino",
    available: false
  },
  {
    id: "wizvet",
    name: "WizVet",
    icon: Cat,
    tagline: "Sistem za veterinarske ambulante",
    description: "WizVet digitalizuje rad veterinarskih ambulanti: kartoni, pregledi, terapije i istorija posjeta uz brz pristup podacima.",
    features: [
      "Evidencija pacijenata i vlasnika",
      "Pregledi, terapije, napomene",
      "Izvještaji i administrativna organizacija"
    ],
    link: "/wizvet",
    available: false
  },
  {
    id: "wizbank",
    name: "WizBank",
    icon: Building2,
    tagline: "Automatizacija bankovnih izvoda",
    description: "WizBank automatizuje preuzimanje i obradu bankovnih izvoda/fajlova, te ih sortira i priprema za dalju obradu, kontrolu i knjigovodstvo.",
    features: [
      "Automatizacija preuzimanja i organizacije",
      "Strukturisani izlaz (sortiranje/klasifikacija)",
      "Ušteda vremena i manje manuelnih grešaka"
    ],
    link: "/wizbank",
    available: false
  },
  {
    id: "wizflussi",
    name: "WizFlussi",
    icon: CreditCard,
    tagline: "Upravljanje plaćanjima dobavljačima",
    description: "WizFlussi centralizuje plaćanja dobavljačima: rokovi, statusi, valute, planovi plaćanja i izvještaji – sve na jednom mjestu, uz jasne dozvole i audit.",
    features: [
      "Planiranje i pregled obaveza po danima/periodima",
      "Multi-valuta (KM/EUR/USD) i izvještaji",
      "RBAC + audit logovi za kontrolu"
    ],
    link: "/wizflussi",
    available: true
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proizvodi iz Wizionar ekosistema
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Svaki proizvod rješava specifične probleme u svom domenu – 
            bez generičkih rješenja koja pokušavaju sve.
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
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-primary">{product.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 mt-auto">
                {product.available ? (
                  <Button variant="outline" size="sm" asChild className="flex-1 group">
                    <Link to={product.link}>
                      Saznaj više
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled className="flex-1">
                    Uskoro
                  </Button>
                )}
                <Button size="sm" asChild className="flex-1">
                  <a href="#contact">Demo</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
