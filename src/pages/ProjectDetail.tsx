import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2, Globe, Smartphone, Search, Zap, Code2, ShoppingCart, BarChart3, Shield, PenTool } from "lucide-react";
import WizionarHeader from "@/components/wizionar/WizionarHeader";
import WizionarFooter from "@/components/wizionar/WizionarFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioEshop from "@/assets/portfolio-eshop.jpg";
import portfolioMedical from "@/assets/portfolio-medical.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioSalon from "@/assets/portfolio-salon.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

type Lang = "sr" | "en" | "de" | "it";

interface ProjectData {
  slug: string;
  title: string;
  image: string;
  client: Record<Lang, string>;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  challenge: Record<Lang, string>;
  solution: Record<Lang, string>;
  features: Record<Lang, string[]>;
  technologies: string[];
  results: Record<Lang, string[]>;
  liveUrl?: string;
}

const projects: ProjectData[] = [
  {
    slug: "techflow-dashboard",
    title: "TechFlow Dashboard",
    image: portfolioCorporate,
    client: { sr: "TechFlow Solutions", en: "TechFlow Solutions", de: "TechFlow Solutions", it: "TechFlow Solutions" },
    category: { sr: "Korporativni web sajt", en: "Corporate website", de: "Unternehmenswebsite", it: "Sito web aziendale" },
    description: {
      sr: "Korporativni dashboard sa analitikom i izvještavanjem za finansijsku kompaniju. Kompleksan projekat koji je zahtijevao integraciju višestrukih izvora podataka i real-time prikaz.",
      en: "Corporate dashboard with analytics and reporting for a financial company. A complex project requiring integration of multiple data sources and real-time display.",
      de: "Unternehmens-Dashboard mit Analytik und Reporting für ein Finanzunternehmen. Ein komplexes Projekt mit Integration mehrerer Datenquellen und Echtzeitanzeige.",
      it: "Dashboard aziendale con analisi e reportistica per una società finanziaria. Un progetto complesso che richiedeva l'integrazione di più fonti di dati e la visualizzazione in tempo reale.",
    },
    challenge: {
      sr: "Klijent je trebao centralizovanu platformu za praćenje svih finansijskih metrika u realnom vremenu, sa mogućnošću generisanja izvještaja i vizuelnog prikaza podataka za različite odjele.",
      en: "The client needed a centralized platform to track all financial metrics in real-time, with the ability to generate reports and visually display data for different departments.",
      de: "Der Kunde benötigte eine zentrale Plattform zur Echtzeit-Verfolgung aller Finanzkennzahlen mit der Möglichkeit, Berichte zu erstellen und Daten für verschiedene Abteilungen visuell darzustellen.",
      it: "Il cliente aveva bisogno di una piattaforma centralizzata per monitorare tutte le metriche finanziarie in tempo reale, con la possibilità di generare report e visualizzare i dati per diversi dipartimenti.",
    },
    solution: {
      sr: "Razvili smo custom dashboard sa interaktivnim grafikonima, automatizovanim izvještajima i role-based pristupom. Platforma se integriše sa postojećim ERP sistemom klijenta.",
      en: "We developed a custom dashboard with interactive charts, automated reports and role-based access. The platform integrates with the client's existing ERP system.",
      de: "Wir entwickelten ein maßgeschneidertes Dashboard mit interaktiven Diagrammen, automatisierten Berichten und rollenbasiertem Zugriff. Die Plattform integriert sich in das bestehende ERP-System des Kunden.",
      it: "Abbiamo sviluppato una dashboard personalizzata con grafici interattivi, report automatizzati e accesso basato sui ruoli. La piattaforma si integra con il sistema ERP esistente del cliente.",
    },
    features: {
      sr: ["Real-time analitika", "Automatski izvještaji", "Role-based pristup", "ERP integracija", "Responsive dizajn", "Dark/Light mode"],
      en: ["Real-time analytics", "Automated reports", "Role-based access", "ERP integration", "Responsive design", "Dark/Light mode"],
      de: ["Echtzeit-Analytik", "Automatisierte Berichte", "Rollenbasierter Zugriff", "ERP-Integration", "Responsives Design", "Dark/Light-Modus"],
      it: ["Analisi in tempo reale", "Report automatizzati", "Accesso basato sui ruoli", "Integrazione ERP", "Design responsive", "Modalità Dark/Light"],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase", "Framer Motion"],
    results: {
      sr: ["40% brže donošenje odluka", "Ušteda 15h sedmično na izvještavanju", "98% uptime platforme"],
      en: ["40% faster decision making", "Saving 15h weekly on reporting", "98% platform uptime"],
      de: ["40% schnellere Entscheidungsfindung", "15h wöchentliche Einsparung bei Berichten", "98% Plattform-Uptime"],
      it: ["40% più veloce nel processo decisionale", "Risparmio di 15h settimanali nei report", "98% uptime della piattaforma"],
    },
  },
  {
    slug: "styleout-fashion-shop",
    title: "StyleOut Fashion Shop",
    image: portfolioEshop,
    client: { sr: "StyleOut d.o.o.", en: "StyleOut Ltd.", de: "StyleOut GmbH", it: "StyleOut Srl" },
    category: { sr: "Web shop", en: "E-commerce", de: "Webshop", it: "E-commerce" },
    description: {
      sr: "Moderan fashion web shop sa naprednim filterima, wishlist-om i online plaćanjem. Kompletan e-commerce sistem prilagođen modnoj industriji.",
      en: "Modern fashion web shop with advanced filters, wishlist and online payment. A complete e-commerce system tailored for the fashion industry.",
      de: "Moderner Fashion-Webshop mit erweiterten Filtern, Wunschliste und Online-Zahlung. Ein komplettes E-Commerce-System für die Modebranche.",
      it: "Web shop di moda moderno con filtri avanzati, wishlist e pagamento online. Un sistema e-commerce completo per l'industria della moda.",
    },
    challenge: {
      sr: "Klijent je želio premium online iskustvo kupovine sa brzim pretraživanjem, pametnim filterima i besprijekornim checkout procesom.",
      en: "The client wanted a premium online shopping experience with fast search, smart filters and a seamless checkout process.",
      de: "Der Kunde wollte ein Premium-Online-Einkaufserlebnis mit schneller Suche, intelligenten Filtern und einem nahtlosen Checkout-Prozess.",
      it: "Il cliente desiderava un'esperienza di acquisto online premium con ricerca veloce, filtri intelligenti e un processo di checkout impeccabile.",
    },
    solution: {
      sr: "Kreirali smo custom web shop sa intuitivnim UX dizajnom, naprednim filterima po kategorijama, veličinama i bojama, te integrisanim payment gateway-om.",
      en: "We created a custom web shop with intuitive UX design, advanced filters by category, size and color, and an integrated payment gateway.",
      de: "Wir erstellten einen maßgeschneiderten Webshop mit intuitivem UX-Design, erweiterten Filtern nach Kategorie, Größe und Farbe sowie einem integrierten Payment-Gateway.",
      it: "Abbiamo creato un web shop personalizzato con design UX intuitivo, filtri avanzati per categoria, taglia e colore, e un gateway di pagamento integrato.",
    },
    features: {
      sr: ["Napredni filteri", "Wishlist", "Online plaćanje", "Praćenje narudžbi", "Responsive dizajn", "SEO optimizacija"],
      en: ["Advanced filters", "Wishlist", "Online payment", "Order tracking", "Responsive design", "SEO optimization"],
      de: ["Erweiterte Filter", "Wunschliste", "Online-Zahlung", "Auftragsverfolgung", "Responsives Design", "SEO-Optimierung"],
      it: ["Filtri avanzati", "Wishlist", "Pagamento online", "Tracciamento ordini", "Design responsive", "Ottimizzazione SEO"],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Supabase", "Framer Motion"],
    results: {
      sr: ["250% rast online prodaje", "35% veća prosječna košarica", "4.8/5 korisničko iskustvo"],
      en: ["250% growth in online sales", "35% higher average cart", "4.8/5 user experience"],
      de: ["250% Wachstum im Online-Umsatz", "35% höherer durchschnittlicher Warenkorb", "4.8/5 Nutzererfahrung"],
      it: ["250% crescita nelle vendite online", "35% carrello medio più alto", "4.8/5 esperienza utente"],
    },
  },
  {
    slug: "mediconnect-klinika",
    title: "MediConnect Klinika",
    image: portfolioMedical,
    client: { sr: "MediConnect Klinika", en: "MediConnect Clinic", de: "MediConnect Klinik", it: "Clinica MediConnect" },
    category: { sr: "Medicinska platforma", en: "Medical platform", de: "Medizinische Plattform", it: "Piattaforma medica" },
    description: {
      sr: "Platforma za medicinsku ustanovu sa online zakazivanjem termina, profilima doktora i informacijama o uslugama.",
      en: "Platform for a medical institution with online appointment scheduling, doctor profiles and service information.",
      de: "Plattform für eine medizinische Einrichtung mit Online-Terminbuchung, Arztprofilen und Serviceinformationen.",
      it: "Piattaforma per un istituto medico con prenotazione appuntamenti online, profili dei medici e informazioni sui servizi.",
    },
    challenge: {
      sr: "Klinika je trebala modernu web platformu koja će smanjiti broj telefonskih poziva i omogućiti pacijentima jednostavno zakazivanje termina.",
      en: "The clinic needed a modern web platform to reduce phone calls and allow patients to easily schedule appointments.",
      de: "Die Klinik benötigte eine moderne Web-Plattform, um Telefonanrufe zu reduzieren und Patienten eine einfache Terminbuchung zu ermöglichen.",
      it: "La clinica aveva bisogno di una piattaforma web moderna per ridurre le telefonate e permettere ai pazienti di prenotare facilmente gli appuntamenti.",
    },
    solution: {
      sr: "Razvili smo platformu sa online zakazivanjem, profilima doktora, sekcijom za usluge i blog sa medicinskim savjetima.",
      en: "We developed a platform with online booking, doctor profiles, services section and a blog with medical advice.",
      de: "Wir entwickelten eine Plattform mit Online-Buchung, Arztprofilen, Servicebereich und einem Blog mit medizinischen Ratschlägen.",
      it: "Abbiamo sviluppato una piattaforma con prenotazione online, profili dei medici, sezione servizi e un blog con consigli medici.",
    },
    features: {
      sr: ["Online zakazivanje", "Profili doktora", "Blog sekcija", "Kontakt forme", "Responsive dizajn", "GDPR usklađenost"],
      en: ["Online booking", "Doctor profiles", "Blog section", "Contact forms", "Responsive design", "GDPR compliance"],
      de: ["Online-Buchung", "Arztprofile", "Blog-Bereich", "Kontaktformulare", "Responsives Design", "DSGVO-Konformität"],
      it: ["Prenotazione online", "Profili medici", "Sezione blog", "Moduli di contatto", "Design responsive", "Conformità GDPR"],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "React Hook Form"],
    results: {
      sr: ["60% manje telefonskih poziva", "3x više online zakazivanja", "92% zadovoljstvo pacijenata"],
      en: ["60% fewer phone calls", "3x more online bookings", "92% patient satisfaction"],
      de: ["60% weniger Telefonanrufe", "3x mehr Online-Buchungen", "92% Patientenzufriedenheit"],
      it: ["60% meno telefonate", "3x più prenotazioni online", "92% soddisfazione dei pazienti"],
    },
  },
];

const labels = {
  sr: { back: "Nazad na portfolio", client: "Klijent", category: "Kategorija", challenge: "Izazov", solution: "Naše rješenje", features: "Funkcionalnosti", tech: "Tehnologije", results: "Rezultati", cta: "Želite sličan projekat?", ctaDesc: "Kontaktirajte nas i razgovarajmo o vašem projektu.", ctaBtn: "Kontaktirajte nas", visitSite: "Posjetite sajt" },
  en: { back: "Back to portfolio", client: "Client", category: "Category", challenge: "Challenge", solution: "Our solution", features: "Features", tech: "Technologies", results: "Results", cta: "Want a similar project?", ctaDesc: "Contact us and let's discuss your project.", ctaBtn: "Contact us", visitSite: "Visit site" },
  de: { back: "Zurück zum Portfolio", client: "Kunde", category: "Kategorie", challenge: "Herausforderung", solution: "Unsere Lösung", features: "Funktionen", tech: "Technologien", results: "Ergebnisse", cta: "Möchten Sie ein ähnliches Projekt?", ctaDesc: "Kontaktieren Sie uns und lassen Sie uns über Ihr Projekt sprechen.", ctaBtn: "Kontaktieren Sie uns", visitSite: "Seite besuchen" },
  it: { back: "Torna al portfolio", client: "Cliente", category: "Categoria", challenge: "Sfida", solution: "La nostra soluzione", features: "Funzionalità", tech: "Tecnologie", results: "Risultati", cta: "Vuoi un progetto simile?", ctaDesc: "Contattaci e discutiamo del tuo progetto.", ctaBtn: "Contattaci", visitSite: "Visita il sito" },
};

const featureIcons = [Globe, Smartphone, Search, Zap, Code2, ShoppingCart];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const lang = language as Lang;
  const l = labels[lang];

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Wizionar Portfolio`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/usluge/izrada-web-stranica#portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WizionarHeader />

      {/* Hero */}
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-6">
          <Link
            to="/usluge/izrada-web-stranica#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {l.back}
          </Link>

          <motion.div {...fadeUp}>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                {project.category[lang]}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{project.description[lang]}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="p-5 rounded-xl border border-border bg-card">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{l.client}</span>
              <p className="font-semibold mt-1">{project.client[lang]}</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{l.category}</span>
              <p className="font-semibold mt-1">{project.category[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div {...fadeUp} className="p-8 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> {l.challenge}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge[lang]}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" /> {l.solution}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution[lang]}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{l.features}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {project.features[lang].map((feat, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={feat}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">{feat}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{l.tech}</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">{l.results}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {project.results[lang].map((result, i) => (
              <motion.div
                key={result}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border bg-card"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{l.cta}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{l.ctaDesc}</p>
            <a
              href="mailto:info@wizionar.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md"
            >
              {l.ctaBtn} <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </motion.div>
        </div>
      </section>

      <WizionarFooter />
    </div>
  );
};

export default ProjectDetail;
