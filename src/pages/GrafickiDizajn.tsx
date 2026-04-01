import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  PenTool,
  Image,
  Layers,
  FileText,
  Share2,
  Package,
  BookOpen,
  ArrowRight,
  Mail,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import WizionarHeader from "@/components/wizionar/WizionarHeader";
import WizionarFooter from "@/components/wizionar/WizionarFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useCallback } from "react";

// Image imports
import logo1 from "@/assets/design/logo-1.jpg";
import logo2 from "@/assets/design/logo-2.jpg";
import print1 from "@/assets/design/print-1.jpg";
import print2 from "@/assets/design/print-2.jpg";
import social1 from "@/assets/design/social-1.jpg";
import social2 from "@/assets/design/social-2.jpg";
import packaging1 from "@/assets/design/packaging-1.jpg";
import packaging2 from "@/assets/design/packaging-2.jpg";
import presentation1 from "@/assets/design/presentation-1.jpg";
import presentation2 from "@/assets/design/presentation-2.jpg";
import illustration1 from "@/assets/design/illustration-1.jpg";
import illustration2 from "@/assets/design/illustration-2.jpg";
import webgraphic1 from "@/assets/design/webgraphic-1.jpg";
import branding1 from "@/assets/design/branding-1.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Palette,
    title: "Logo & vizuelni identitet",
    description: "Kreiranje jedinstvenog logotipa i kompletnog vizuelnog identiteta koji predstavlja vaš brend.",
    examples: ["Logotip dizajn", "Brand book", "Paleta boja", "Tipografija", "Ikone & grafički elementi"],
    images: [logo1, logo2],
  },
  {
    icon: FileText,
    title: "Štampani materijali",
    description: "Profesionalni dizajn za sve vrste štampanih materijala – od vizitki do velikih formata.",
    examples: ["Vizitke", "Flajeri & brošure", "Plakati", "Katalozi", "Roll-up baneri"],
    images: [print1, print2],
  },
  {
    icon: Share2,
    title: "Social media grafike",
    description: "Vizualno privlačne grafike za društvene mreže koje povećavaju engagement i prepoznatljivost.",
    examples: ["Instagram postovi & stories", "Facebook coveri & oglasi", "LinkedIn grafike", "YouTube thumbnails", "TikTok vizuali"],
    images: [social1, social2],
  },
  {
    icon: Package,
    title: "Packaging dizajn",
    description: "Atraktivan dizajn pakovanja koji privlači pažnju kupaca i ističe vaš proizvod na polici.",
    examples: ["Kutije & ambalaža", "Etikete", "Vrećice & kese", "Gift packaging", "Eco pakovanja"],
    images: [packaging1, packaging2],
  },
  {
    icon: BookOpen,
    title: "Prezentacije & dokumenti",
    description: "Profesionalne prezentacije i poslovni dokumenti koji ostavljaju snažan utisak.",
    examples: ["PowerPoint/Keynote prezentacije", "Ponude & prijedlozi", "Godišnji izvještaji", "E-knjige", "Infografike"],
    images: [presentation1, presentation2],
  },
  {
    icon: Image,
    title: "Ilustracije & grafike",
    description: "Originalne ilustracije i grafički elementi prilagođeni vašem brendu i komunikaciji.",
    examples: ["Brendirane ilustracije", "Ikonice setovi", "Maskote", "Infografike", "Digitalne ilustracije"],
    images: [illustration1, illustration2],
  },
  {
    icon: PenTool,
    title: "UI elementi & web grafike",
    description: "Grafički elementi za web stranice, aplikacije i digitalne platforme.",
    examples: ["Web baneri", "Newsletter dizajn", "App grafike", "Landing page vizuali", "Animirane grafike"],
    images: [webgraphic1],
  },
  {
    icon: Layers,
    title: "Brendiranje prostora",
    description: "Vizuelni identitet primijenjen na fizičke prostore – od kancelarija do maloprodajnih objekata.",
    examples: ["Signalizacija & natpisi", "Brendiranje vozila", "Uniforma dizajn", "Izlozi", "Sajamski štandovi"],
    images: [branding1],
  },
];

const process = [
  { step: "01", title: "Brifing", description: "Razumijevanje vaših potreba, ciljne grupe i vizije brenda." },
  { step: "02", title: "Istraživanje", description: "Analiza tržišta, konkurencije i aktuelnih trendova u dizajnu." },
  { step: "03", title: "Koncepti", description: "Kreiranje više konceptualnih rješenja za odabir pravca." },
  { step: "04", title: "Razrada", description: "Detaljna razrada odabranog koncepta sa svim varijacijama." },
  { step: "05", title: "Revizije", description: "Prilagodbe na osnovu vaših povratnih informacija." },
  { step: "06", title: "Finalizacija", description: "Priprema finalnih datoteka u svim potrebnim formatima." },
];

const faqs = [
  { q: "Koliko traje izrada logotipa?", a: "Izrada logotipa obično traje 5-10 radnih dana, uključujući inicijalne koncepte i do 3 runde revizija." },
  { q: "Koje formate datoteka dobijam?", a: "Dobijate sve potrebne formate: AI, EPS, SVG, PDF za vektorske, te PNG i JPG u različitim rezolucijama za digitalne potrebe." },
  { q: "Da li radite kompletne brand bookove?", a: "Da, kreiramo kompletne brand bookove koji definišu pravila korištenja logotipa, boja, tipografije i vizuelnog stila." },
  { q: "Mogu li naručiti samo jednu grafiku za social media?", a: "Naravno! Radimo i pojedinačne grafike, ali nudimo i mjesečne pakete za redovnu produkciju social media sadržaja." },
  { q: "Radite li dizajn za štampu i digitalne medije?", a: "Da, pokrivamo oba područja – od vizitki i plakata za štampu do web banera i social media grafika za digitalni marketing." },
];

/* ── Mini Carousel ─────────────────────────────────────────── */
const MiniCarousel = ({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (images: string[], index: number) => void;
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="mt-4 relative group/carousel">
      <div className="overflow-hidden rounded-xl">
        <img
          src={images[current]}
          alt="Primjer dizajna"
          loading="lazy"
          width={640}
          height={512}
          className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => onImageClick(images, current)}
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-primary w-3" : "bg-background/70"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ── Lightbox ──────────────────────────────────────────────── */
const Lightbox = ({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(index);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10">
        <X className="w-5 h-5 text-white" />
      </button>

      <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[current]}
          alt="Dizajn primjer"
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

/* ── FAQ Item ──────────────────────────────────────────────── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors">
        <span className="font-semibold pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

/* ── Main Page ─────────────────────────────────────────────── */
const GrafickiDizajn = () => {
  const { language } = useLanguage();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightbox({ images, index });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WizionarHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span {...fadeUp} className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Grafički dizajn
            </motion.span>
            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vizuelna rješenja koja <br />
              <span className="text-gradient">ostavljaju utisak</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Od logotipa i brendinga do štampanih materijala i digitalnih grafika –
              kreiramo vizuelni identitet koji komunicira vašu priču i privlači pažnju.
            </motion.p>
            <motion.a
              {...fadeUp}
              transition={{ delay: 0.3 }}
              href="mailto:info@wizionar.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <Mail className="w-5 h-5" />
              Zatražite ponudu
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* Services with carousel galleries */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Šta sve <span className="text-gradient">radimo</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Pokrivamo sve aspekte grafičkog dizajna – od identiteta brenda do štampanih i digitalnih materijala.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    {service.examples.map((ex) => (
                      <span key={ex} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>

                  {/* Mini carousel gallery */}
                  <MiniCarousel images={service.images} onImageClick={openLightbox} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Naš <span className="text-gradient">proces</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Strukturiran pristup koji garantuje kvalitetan rezultat u svakom koraku.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <span className="text-3xl font-bold text-primary/20 mb-2 block">{step.step}</span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Često postavljana <span className="text-gradient">pitanja</span>
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Spremni za novi vizuelni identitet?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Kontaktirajte nas i zajedno ćemo kreirati dizajn koji će vaš brend učiniti prepoznatljivim.
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

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox images={lightbox.images} index={lightbox.index} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GrafickiDizajn;
