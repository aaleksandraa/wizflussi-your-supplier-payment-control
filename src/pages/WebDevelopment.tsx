import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  PenTool,
  BarChart3,
  Shield,
  Headphones,
  ArrowRight,
  Mail,
  CheckCircle2,
  Monitor,
  Layers,
  Zap,
  Code2,
  FileText,
  Users,
  Target,
  TrendingUp,
  Clock,
  ChevronDown,
  ExternalLink,
  Star,
  MessageSquare,
  Phone,
  CreditCard,
  Truck,
  Tag,
  Settings,
  ClipboardList,
  Filter,
  LayoutGrid,
  Languages,
  Image,
  Lock,
  Wrench,
} from "lucide-react";
import WizionarHeader from "@/components/wizionar/WizionarHeader";
import WizionarFooter from "@/components/wizionar/WizionarFooter";
import { useState } from "react";

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

/* ─── DATA ─── */

const siteTypes = [
  {
    icon: Monitor,
    title: "Prezentacione web stranice",
    desc: "Profesionalna online vizit-karta vašeg biznisa. Jasna struktura, moderan dizajn i sve informacije koje potencijalnom klijentu trebaju – na dohvat klika.",
  },
  {
    icon: Layers,
    title: "Korporativni sajtovi",
    desc: "Kompleksni višestranični sajtovi za veće kompanije. Interni portali, višejezičnost, napredne integracije i sadržaj koji gradi autoritet brenda.",
  },
  {
    icon: Target,
    title: "Landing page stranice",
    desc: "Fokusirane stranice dizajnirane za jednu stvar – konverziju. Idealne za kampanje, promocije, lansiranja proizvoda ili prikupljanje upita.",
  },
  {
    icon: FileText,
    title: "Kataloški sajtovi",
    desc: "Prikazujte proizvode ili usluge u elegantnom digitalnom katalogu – bez online plaćanja, ali sa svim informacijama koje klijent treba.",
  },
  {
    icon: ShoppingCart,
    title: "Web shopovi / E-commerce",
    desc: "Kompletna rješenja za online prodaju. Od pregleda proizvoda, korpe i checkout-a do integracije plaćanja i automatskog praćenja narudžbi.",
  },
];

const whatYouGet = [
  { icon: PenTool, label: "UI/UX dizajn" },
  { icon: Smartphone, label: "Responzivan izgled" },
  { icon: Search, label: "SEO osnova" },
  { icon: Zap, label: "Brzina & optimizacija" },
  { icon: MessageSquare, label: "Kontakt forme" },
  { icon: Code2, label: "Integracije" },
  { icon: FileText, label: "Blog" },
  { icon: Languages, label: "Višejezičnost" },
  { icon: CreditCard, label: "Online plaćanje" },
  { icon: Settings, label: "Upravljanje proizvodima" },
  { icon: BarChart3, label: "Analitika" },
  { icon: Lock, label: "Sigurnost" },
  { icon: Wrench, label: "Podrška & održavanje" },
  { icon: Image, label: "Optimizirane slike" },
];

const shopFeatures = [
  { icon: LayoutGrid, label: "Pregled proizvoda", desc: "Galerije, varijante, brz pregled" },
  { icon: Filter, label: "Kategorije & filteri", desc: "Navigacija koja olakšava kupovinu" },
  { icon: ShoppingCart, label: "Korpa & checkout", desc: "Jednostavan tok narudžbe" },
  { icon: CreditCard, label: "Načini plaćanja", desc: "Kartice, pouzeće, transfer" },
  { icon: Truck, label: "Dostava", desc: "Integracija kurirskih službi" },
  { icon: Tag, label: "Akcije & popusti", desc: "Kuponi, sezonske ponude" },
  { icon: Settings, label: "Administracija", desc: "Jednostavan backend panel" },
  { icon: ClipboardList, label: "Praćenje narudžbi", desc: "Status od narudžbe do isporuke" },
];

const processSteps = [
  { num: "01", title: "Upoznavanje", desc: "Razgovaramo o vašim ciljevima, ciljnoj publici, konkurenciji i viziji. Razumijemo vaš biznis prije nego uopšte krenemo." },
  { num: "02", title: "Analiza & prijedlog", desc: "Na osnovu vaših potreba kreiramo detaljan prijedlog – strukturu, funkcionalnosti, tehnologiju i okvirni budžet." },
  { num: "03", title: "Dizajn & struktura", desc: "Kreiramo wireframe i vizualni dizajn. Vi vidite kako će sajt izgledati prije nego se napiše i jedna linija koda." },
  { num: "04", title: "Razvoj & implementacija", desc: "Pretvaramo dizajn u funkcionalan sajt. Svaka stranica, svaka animacija, svaka integracija – precizno i po planu." },
  { num: "05", title: "Testiranje", desc: "Testiramo na svim uređajima i browserima. Provjeravamo brzinu, sigurnost, SEO i korisničko iskustvo." },
  { num: "06", title: "Lansiranje", desc: "Postavljamo sajt na server, konfigurišemo domenu, SSL i sve tehničke detalje. Vaš sajt je live." },
  { num: "07", title: "Podrška & razvoj", desc: "Ne ostavljamo vas nakon lansiranja. Nudimo tehničku podršku, update-e, nove funkcionalnosti i savjete za rast." },
];

const advantages = [
  { icon: Star, title: "Iskustvo u različitim industrijama", desc: "Zdravstvo, finansije, usluge, e-commerce – razumijemo specifičnosti svake branše." },
  { icon: Target, title: "Fokus na rezultate", desc: "Ne pravimo sajtove radi sajtova. Svaki projekat je osmišljen da donosi upite, pozive i prodaju." },
  { icon: Users, title: "Direktna komunikacija", desc: "Radite sa timom, ne sa automatskim email-ovima. Brzi odgovori, jasna komunikacija, transparentan proces." },
  { icon: TrendingUp, title: "Skalabilna rješenja", desc: "Gradimo sisteme koji rastu sa vašim biznisom – od jednostavnog sajta do kompleksne platforme." },
  { icon: Clock, title: "Poštovanje rokova", desc: "Jasne faze, realni rokovi i redovna izvještavanja o napretku projekta." },
  { icon: Shield, title: "Sigurnost & pouzdanost", desc: "HTTPS, backup, zaštita od napada i redovno održavanje – vaši podaci su sigurni." },
];

const faqData = [
  {
    q: "Koliko košta izrada web stranice?",
    a: "Cijena zavisi od kompleksnosti, broja stranica, funkcionalnosti i dizajna. Prezentacioni sajt kreće od 500 KM, dok kompleksni web shopovi mogu koštati više. Kontaktirajte nas za besplatnu procjenu.",
  },
  {
    q: "Koliko traje izrada sajta?",
    a: "Jednostavna prezentaciona stranica može biti gotova za 2-3 sedmice. Kompleksniji projekti i web shopovi obično traju 4-8 sedmica. Tačan rok dogovaramo nakon analize zahtjeva.",
  },
  {
    q: "Da li mogu sam upravljati sadržajem nakon izrade?",
    a: "Apsolutno. Svaki sajt dolazi sa admin panelom (CMS) putem kojeg možete sami uređivati tekstove, slike, proizvode i ostali sadržaj – bez tehničkog znanja.",
  },
  {
    q: "Šta je razlika između CMS i custom rješenja?",
    a: "CMS (npr. WordPress) je brže i jeftinije za standardne potrebe. Custom rješenje se gradi od nule, potpuno prilagođeno vašim procesima – idealno kada trebate nešto što gotovi sistemi ne nude.",
  },
  {
    q: "Da li pružate podršku nakon izrade?",
    a: "Da. Nudimo pakete tehničke podrške koji uključuju ažuriranja, backup, sigurnosne zakrpe, nove funkcionalnosti i savjetovanje za dalji digitalni rast.",
  },
  {
    q: "Da li sajt uključuje SEO optimizaciju?",
    a: "Da. Svaki projekat uključuje tehničku SEO osnovu – brzina, meta tagovi, strukturirani podaci, mobile-friendly dizajn. Za napredne SEO kampanje nudimo posebnu uslugu.",
  },
  {
    q: "Da li radite i redizajn postojećih sajtova?",
    a: "Da. Analiziramo vaš trenutni sajt, identificiramo slabosti i predlažemo moderna rješenja – od vizualnog osvježenja do kompletne rekonstrukcije.",
  },
];

const portfolio = [
  {
    image: portfolioCorporate,
    title: "TechFlow Dashboard",
    link: "#",
    desc: "Korporativni dashboard sa analitikom i izvještavanjem za finansijsku kompaniju.",
  },
  {
    image: portfolioEshop,
    title: "StyleOut Fashion Shop",
    link: "#",
    desc: "Moderan fashion web shop sa naprednim filterima i online plaćanjem.",
  },
  {
    image: portfolioMedical,
    title: "MediConnect Klinika",
    link: "#",
    desc: "Platforma za medicinsku ustanovu sa online zakazivanjem termina.",
  },
  {
    image: portfolioRestaurant,
    title: "GastroPress Restoran",
    link: "#",
    desc: "Web sajt za restoran sa digitalnim menijem i online narudžbama.",
  },
  {
    image: portfolioSalon,
    title: "BeautyGlow Salon",
    link: "#",
    desc: "Elegantna prezentacija kozmetičkog salona sa sistemom rezervacija.",
  },
  {
    image: portfolioRealestate,
    title: "PropertyVista Nekretnine",
    link: "#",
    desc: "Portal za nekretnine sa mapom, filterima i detaljnim listinzima.",
  },
];

/* ─── FAQ Accordion ─── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-semibold pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
};

/* ─── PAGE ─── */
const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WizionarHeader />
      <main>
        {/* ══════ HERO ══════ */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span {...fadeUp} className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Izrada web stranica & web shopova
              </motion.span>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Vaš biznis zaslužuje web prisustvo koje{" "}
                <span className="text-gradient">donosi rezultate</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Ne pravimo „samo sajtove". Gradimo digitalna rješenja koja privlače klijente, 
                grade povjerenje i pretvaraju posjetioce u kupce – bilo da vam treba prezentacioni sajt, 
                landing stranica ili kompletan web shop.
              </motion.p>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="mailto:info@wizionar.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                  Zatražite besplatnu ponudu
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors"
                >
                  Pogledajte naše radove
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-muted-foreground mt-6"
              >
                Odgovaramo u roku 24h · Besplatna konsultacija · Bez skrivenih troškova
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══════ ZAŠTO JE WEB SAJT NEOPHODAN ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zašto je profesionalan web sajt <span className="text-gradient">neophodan</span> za ozbiljan biznis?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                U digitalnom dobu, vaš web sajt je često prvi kontakt koji potencijalni klijent ima sa vašim brendom. 
                Loš ili zastarjeo sajt ne samo da odbija posjetioce – on aktivno šteti vašem poslovanju. 
                Profesionalna web prezentacija gradi kredibilitet, privlači nove klijente i radi za vas 24/7.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Globe, title: "Vidljivost", text: "93% kupovnih odluka počinje online pretragom. Ako vas nema na internetu – za vaše klijente, vi ne postojite." },
                { icon: Star, title: "Kredibilitet", text: "75% korisnika procjenjuje pouzdanost firme na osnovu dizajna njenog web sajta. Prvi utisak se stvara za 0.05 sekundi." },
                { icon: TrendingUp, title: "Rast", text: "Profesionalan sajt je najisplativija investicija u marketing. Radi za vas non-stop, generiše upite i gradi brend." },
              ].map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ TIPOVI SAJTOVA ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">Šta radimo</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tipovi web rješenja koja nudimo
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Svaki projekat pristupamo individualno – od jednostavnih prezentacija do kompleksnih e-commerce platformi.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {siteTypes.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ CMS vs CUSTOM ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CMS ili Custom razvoj?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nema univerzalnog odgovora. Pravo rješenje zavisi od vaših potreba, budžeta i faze razvoja biznisa.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl border border-border bg-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">CMS rješenja</h3>
                <p className="text-sm text-primary font-medium mb-4">WordPress, Shopify i slični sistemi</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Idealna opcija kada vam treba brzo, provjereno i ekonomično rješenje. CMS platforme nude bogat ekosistem 
                  dodataka, lako upravljanje sadržajem i brži time-to-market. Savršeno za prezentacione sajtove, blogove i 
                  standardne web shopove.
                </p>
                <ul className="space-y-2">
                  {["Brža realizacija", "Niži početni troškovi", "Lako upravljanje sadržajem", "Hiljade gotovih dodataka", "Dobro za standardne potrebe"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="p-8 rounded-2xl border border-primary/30 bg-card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Premium</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Custom razvoj</h3>
                <p className="text-sm text-primary font-medium mb-4">Potpuno prilagođena rješenja</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Kada vam treba nešto što gotovi sistemi ne mogu ponuditi. Custom razvoj znači potpunu kontrolu nad 
                  dizajnom, funkcionalnošću i performansama. Idealno za kompleksne poslovne platforme, specifične integracije 
                  i projekte koji trebaju rasti bez ograničenja.
                </p>
                <ul className="space-y-2">
                  {["Potpuna prilagodba vašim procesima", "Neograničena skalabilnost", "Maksimalne performanse", "Jedinstveno korisničko iskustvo", "Dugoročna investicija"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════ ŠTA UKLJUČUJE ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Šta sve dobijate?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Svaki projekat uključuje komplet profesionalnih usluga – od dizajna i razvoja do optimizacije i podrške.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {whatYouGet.map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ WEB SHOP SEKCIJA ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">E-commerce</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sve što vaš web shop treba
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Gradimo online prodavnice koje ne samo da izgledaju profesionalno, 
                već su optimizirane za konverziju i jednostavno upravljanje.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {shopFeatures.map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="p-5 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ REZULTATI, NE SAMO DIZAJN ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ne pravimo samo „lijep sajt". <br />
                  Pravimo <span className="text-gradient">digitalni alat za rast.</span>
                </h2>
              </motion.div>
              <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Phone, text: "Više telefonskih upita i kontakata" },
                  { icon: MessageSquare, text: "Više poruka i zahtjeva za ponudu" },
                  { icon: ShoppingCart, text: "Više online prodaje i narudžbi" },
                  { icon: Star, text: "Jače povjerenje i kredibilitet brenda" },
                  { icon: Users, text: "Bolja prezentacija pred klijentima" },
                  { icon: TrendingUp, text: "Mjerljivi rezultati i ROI" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    {...fadeUp}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════ PROCES ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">Proces</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kako izgleda proces saradnje?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Svaki projekat prolazi kroz jasno definisane faze – od prvog razgovora do lansiranja i podrške.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ PREDNOSTI ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Zašto baš mi?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Prednosti saradnje sa Wizionar timom.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ PORTFOLIO ══════ */}
        <section id="portfolio" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Neki od naših radova</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pogledajte primjere projekata koje smo realizovali za naše klijente.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolio.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                    {item.link !== "#" && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Posjeti sajt <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ FAQ ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Česta pitanja</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Odgovori na najčešća pitanja naših klijenata.
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqData.map((item, i) => (
                <motion.div key={item.q} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <FaqItem q={item.q} a={item.a} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Spremni da pokrenete svoj <span className="text-gradient">digitalni projekat?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bez obzira da li vam treba jednostavan prezentacioni sajt ili kompleksan web shop – 
                tu smo da pretvorimo vašu ideju u profesionalno digitalno rješenje koje donosi rezultate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="mailto:info@wizionar.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                  info@wizionar.com
                </a>
                <a
                  href="tel:+38762000000"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Pozovite nas
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Besplatna konsultacija · Odgovaramo u roku 24h · Ponuda bez obaveze
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <WizionarFooter />
    </div>
  );
};

export default WebDevelopment;
