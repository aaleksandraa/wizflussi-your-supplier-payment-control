import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  FileText,
  Link2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Zap,
  Shield,
  Users,
  Eye,
  Settings,
  PenTool,
  MessageSquare,
} from "lucide-react";
import WizionarHeader from "@/components/wizionar/WizionarHeader";
import WizionarFooter from "@/components/wizionar/WizionarFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const seoMeaning = [
  { icon: Users, text: "Da vas pronalaze ljudi koji već imaju potrebu" },
  { icon: Target, text: "Da dobijate kvalitetnije upite" },
  { icon: TrendingUp, text: "Da smanjujete trošak oglašavanja" },
  { icon: Shield, text: "Da gradite autoritet i povjerenje" },
];

const approach = [
  {
    num: "01",
    icon: Search,
    title: "Dubinsko razumijevanje biznisa",
    desc: "Ne optimizujemo samo web — optimizujemo način na koji vas tržište pronalazi.",
    items: [
      "Vaše usluge ili proizvode",
      "Ciljne klijente",
      "Konkurenciju",
      "Tržišne prilike",
    ],
  },
  {
    num: "02",
    icon: Target,
    title: "Strategija ključnih riječi",
    desc: 'Ne ciljamo samo \u201Evelike\u201C keyworde. Fokusiramo se na pretrage koje donose rezultate.',
    items: [
      "Komercijalne pretrage (koje donose klijente)",
      "Long-tail keyworde (manja konkurencija, veća konverzija)",
      "Lokalne pretrage",
    ],
    examples: [
      '\u201Ezubna ordinacija Sarajevo cijene\u201C',
      '\u201Eizrada web shopa BiH\u201C',
      '\u201Eginekolog privatno Tuzla\u201C',
    ],
  },
  {
    num: "03",
    icon: FileText,
    title: "On-page optimizacija",
    desc: "Optimizujemo svaki element sajta da Google jasno razumije šta nudite — i kome.",
    items: [
      "Struktura sadržaja (H1, H2, H3)",
      "Meta tagovi",
      "URL struktura",
      "Interni linkovi",
      "SEO tekstovi",
    ],
  },
  {
    num: "04",
    icon: Settings,
    title: "Technical SEO",
    desc: "Bez tehnički ispravnog sajta nema ozbiljnog SEO-a.",
    items: [
      "Optimizacija brzine",
      "Mobile responsiveness",
      "Indexing i crawling",
      "Sitemap i robots konfiguracija",
      "Structured data (schema)",
    ],
  },
  {
    num: "05",
    icon: PenTool,
    title: "Sadržaj koji rangira i prodaje",
    desc: "SEO bez kvalitetnog sadržaja ne postoji. Kreiramo sadržaj za korisnike — ne samo za Google.",
    items: [
      "Landing stranice",
      "Blog članci",
      "Edukativni sadržaj",
      "SEO tekstovi za usluge",
    ],
  },
  {
    num: "06",
    icon: Link2,
    title: "Autoritet i link building",
    desc: "Google rangira povjerenje. Gradimo ga sistematski.",
    items: [
      "Kvalitetni backlinkovi",
      "Medijske objave",
      "Relevantni izvori",
    ],
  },
  {
    num: "07",
    icon: MapPin,
    title: "Local SEO",
    desc: "Posebno za klinike, salone i uslužne djelatnosti — ključ za lokalnu vidljivost.",
    items: [
      "Google Business profile",
      "Lokalni rezultati",
      "Map prikazi",
      "Recenzije",
    ],
  },
];

const process = [
  "Analiza trenutnog stanja",
  "SEO audit (tehnički + sadržajni)",
  "Definisanje strategije",
  "Implementacija optimizacije",
  "Kreiranje sadržaja",
  "Praćenje i izvještavanje",
  "Kontinuirano unapređenje",
];

const whyUs = [
  "Strateški pristup, ne generički SEO",
  "Kombinacija developmenta + marketinga",
  "Fokus na rezultate, ne metrike bez vrijednosti",
  "Iskustvo sa realnim projektima i tržištem",
  "Transparentna komunikacija",
];

const faqs = [
  {
    q: "Koliko traje SEO?",
    a: "SEO je dugoročan proces. Prvi rezultati se vide u 3–6 mjeseci, ali pravi efekti dolaze kroz kontinuitet. Svaka ozbiljna SEO strategija zahtijeva vrijeme, jer Google vrednuje kvalitet i doslednost.",
  },
  {
    q: "Da li garantujete prvo mjesto na Google-u?",
    a: "Ne — jer to niko ozbiljan ne može garantovati. Ali garantujemo profesionalan pristup, transparentnost i realan, mjerljiv rast vaše online vidljivosti.",
  },
  {
    q: "Da li je SEO potreban ako već radimo reklame?",
    a: "Da — SEO i reklame zajedno daju najbolje rezultate. SEO smanjuje dugoročne troškove oglašavanja i donosi organski saobraćaj koji ne prestaje kad isključite budžet.",
  },
  {
    q: "Koliko košta SEO optimizacija?",
    a: "Cijena zavisi od obima projekta, konkurencije u vašoj branši i ciljeva. Kontaktirajte nas za besplatnu procjenu i prilagođenu ponudu.",
  },
  {
    q: "Da li radite samo lokalni SEO?",
    a: "Ne — radimo i lokalni i regionalni i internacionalni SEO. Strategiju prilagođavamo vašem tržištu i ciljevima.",
  },
];

const SEOOptimizacija = () => {
  useEffect(() => {
    document.title =
      "SEO optimizacija | Wizionar – Više klijenata sa Google-a";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Profesionalna SEO optimizacija za dugoročan rast. Više posjeta, više upita i više klijenata. Wizionar pristup SEO-u."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WizionarHeader />
      <main>
        {/* ─── HERO ─── */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <Search className="w-4 h-4" />
              SEO Optimizacija
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              SEO optimizacija koja pretvara{" "}
              <span className="text-gradient">pretragu u klijente</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
            >
              Vaši potencijalni klijenti već traže vaše usluge na Google Search
              — pitanje je samo da li će pronaći vas ili konkurenciju.
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="text-xl md:text-2xl font-semibold text-foreground mb-8"
            >
              Mi osiguravamo da pronađu vas.
            </motion.p>

            <motion.a
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              href="mailto:info@wizionar.com?subject=SEO%20analiza"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Zatražite SEO analizu
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </section>

        {/* ─── STRATEŠKI KONTEKST ─── */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-5 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                U digitalnom okruženju, pozicija na pretraživačima direktno
                utiče na <strong className="text-foreground">prihod, reputaciju i rast</strong> biznisa.
              </p>
              <p>
                Većina korisnika nikada ne ide dalje od prve stranice rezultata.
                Ako vaš web sajt nije tamo —{" "}
                <strong className="text-foreground">praktično ne postojite</strong>.
              </p>
              <p>
                SEO optimizacija nije samo tehnički proces. To je kombinacija{" "}
                <strong className="text-foreground">
                  strategije, sadržaja, tehnologije i razumijevanja ponašanja
                  korisnika
                </strong>
                .
              </p>
              <p className="text-foreground font-medium text-xl border-l-4 border-primary pl-5">
                U Wizionaru SEO posmatramo kao dugoročan sistem rasta, a ne kao
                kratkoročnu taktiku.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── ŠTA SEO ZNAČI ─── */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Šta SEO zaista znači za vaš biznis
              </h2>
              <p className="text-muted-foreground text-lg">
                SEO nije samo „bolja pozicija na Google-u". To je sistem koji
                dovodi klijente koji su već spremni na akciju.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {seoMeaning.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NAŠ PRISTUP ─── */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Naš pristup SEO-u
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Za razliku od generičkih pristupa, mi ne radimo SEO po šablonu.
                Svaki projekat tretiramo kao poseban sistem.
              </p>
            </motion.div>

            <div className="space-y-8">
              {approach.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i * 0.5}
                  className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {step.examples && (
                        <div className="mt-4 p-4 rounded-xl bg-secondary/50">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            Primjeri pretraga
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.examples.map((ex) => (
                              <span
                                key={ex}
                                className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                              >
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NE RADIMO SEO RADI SEO-A ─── */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ne radimo SEO radi SEO-a
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl border border-destructive/20 bg-destructive/5">
                  <p className="font-semibold text-destructive mb-3">
                    Naš fokus NIJE
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>❌ „Više keyworda"</li>
                    <li>❌ „Više posjeta"</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                  <p className="font-semibold text-primary mb-3">
                    Naš fokus JESTE
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>✔ Više upita</li>
                    <li>✔ Više poziva</li>
                    <li>✔ Više prodaje</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-muted-foreground font-medium">
                SEO je sredstvo —{" "}
                <span className="text-foreground">rezultat je cilj.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── PROCES ─── */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proces saradnje
              </h2>
              <p className="text-muted-foreground text-lg">
                SEO nije jednokratan posao — već kontinuiran proces koji donosi
                rastuće rezultate.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-6">
                {process.map((step, i) => (
                  <motion.div
                    key={step}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-center gap-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 text-primary font-bold text-sm relative z-10">
                      {i + 1}
                    </div>
                    <p className="text-foreground font-medium text-lg">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── ZAŠTO WIZIONAR ─── */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Zašto Wizionar
              </h2>
            </motion.div>

            <div className="space-y-4">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Česta pitanja
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-xl text-muted-foreground mb-2">
                Vaš sajt postoji.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Vrijeme je da počne{" "}
                <span className="text-gradient">donositi rezultate.</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@wizionar.com?subject=SEO%20analiza"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
                >
                  <Mail className="w-5 h-5" />
                  Zatražite SEO analizu
                </a>
                <Link
                  to="/usluge"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Sve usluge
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <WizionarFooter />
    </div>
  );
};

export default SEOOptimizacija;
