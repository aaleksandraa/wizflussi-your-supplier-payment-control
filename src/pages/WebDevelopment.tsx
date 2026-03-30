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
import { useEffect, useState } from "react";
import { useWebdevTranslations } from "@/hooks/useWebdevTranslations";
import { useLanguage } from "@/contexts/LanguageContext";

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

const siteTypeIcons = [Monitor, Layers, Target, FileText, ShoppingCart];
const whyNeededIcons = [Globe, Star, TrendingUp];
const whatYouGetIcons = [PenTool, Smartphone, Search, Zap, MessageSquare, Code2, FileText, Languages, CreditCard, Settings, BarChart3, Lock, Wrench, Image];
const shopIcons = [LayoutGrid, Filter, ShoppingCart, CreditCard, Truck, Tag, Settings, ClipboardList];
const resultIcons = [Phone, MessageSquare, ShoppingCart, Star, Users, TrendingUp];
const advantageIcons = [Star, Target, Users, TrendingUp, Clock, Shield];

const portfolioData = [
  { image: portfolioCorporate, title: "TechFlow Dashboard", link: "/portfolio/techflow-dashboard", descKey: 0 },
  { image: portfolioEshop, title: "StyleOut Fashion Shop", link: "/portfolio/styleout-fashion-shop", descKey: 1 },
  { image: portfolioMedical, title: "MediConnect Klinika", link: "/portfolio/mediconnect-klinika", descKey: 2 },
  { image: portfolioRestaurant, title: "GastroPress Restoran", link: "#", descKey: 3 },
  { image: portfolioSalon, title: "BeautyGlow Salon", link: "#", descKey: 4 },
  { image: portfolioRealestate, title: "PropertyVista Nekretnine", link: "#", descKey: 5 },
];

const portfolioDescs = {
  sr: [
    "Korporativni dashboard sa analitikom i izvještavanjem za finansijsku kompaniju.",
    "Moderan fashion web shop sa naprednim filterima i online plaćanjem.",
    "Platforma za medicinsku ustanovu sa online zakazivanjem termina.",
    "Web sajt za restoran sa digitalnim menijem i online narudžbama.",
    "Elegantna prezentacija kozmetičkog salona sa sistemom rezervacija.",
    "Portal za nekretnine sa mapom, filterima i detaljnim listinzima.",
  ],
  en: [
    "Corporate dashboard with analytics and reporting for a financial company.",
    "Modern fashion web shop with advanced filters and online payment.",
    "Platform for a medical institution with online appointment scheduling.",
    "Restaurant website with digital menu and online orders.",
    "Elegant cosmetic salon presentation with a booking system.",
    "Real estate portal with map, filters and detailed listings.",
  ],
  de: [
    "Unternehmens-Dashboard mit Analytik und Reporting für ein Finanzunternehmen.",
    "Moderner Fashion-Webshop mit erweiterten Filtern und Online-Zahlung.",
    "Plattform für eine medizinische Einrichtung mit Online-Terminbuchung.",
    "Restaurant-Website mit digitalem Menü und Online-Bestellungen.",
    "Elegante Präsentation eines Kosmetiksalons mit Buchungssystem.",
    "Immobilienportal mit Karte, Filtern und detaillierten Inseraten.",
  ],
  it: [
    "Dashboard aziendale con analisi e reportistica per una società finanziaria.",
    "Web shop di moda moderno con filtri avanzati e pagamento online.",
    "Piattaforma per un istituto medico con prenotazione appuntamenti online.",
    "Sito web per ristorante con menù digitale e ordini online.",
    "Elegante presentazione di un salone di bellezza con sistema di prenotazione.",
    "Portale immobiliare con mappa, filtri e inserzioni dettagliate.",
  ],
};

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
  const t = useWebdevTranslations();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t]);

  const descs = portfolioDescs[language as keyof typeof portfolioDescs] || portfolioDescs.sr;

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
                {t.hero.badge}
              </motion.span>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {t.hero.title1}{" "}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {t.hero.subtitle}
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
                  {t.hero.cta1}
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors"
                >
                  {t.hero.cta2}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-muted-foreground mt-6"
              >
                {t.hero.microcopy}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══════ ZAŠTO JE WEB SAJT NEOPHODAN ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.whyNeeded.title} <span className="text-gradient">{t.whyNeeded.titleHighlight}</span> {t.whyNeeded.titleEnd}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.whyNeeded.subtitle}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t.whyNeeded.items.map((item, i) => {
                const Icon = whyNeededIcons[i];
                return (
                  <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ TIPOVI SAJTOVA ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t.siteTypes.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.siteTypes.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t.siteTypes.subtitle}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {t.siteTypes.items.map((item, i) => {
                const Icon = siteTypeIcons[i];
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ CMS vs CUSTOM ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cmsVsCustom.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t.cmsVsCustom.subtitle}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t.cmsVsCustom.cms.title}</h3>
                </div>
                <p className="text-sm text-primary font-medium mb-4">{t.cmsVsCustom.cms.badge}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.cmsVsCustom.cms.desc}</p>
                <ul className="space-y-2">
                  {t.cmsVsCustom.cms.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="p-8 rounded-2xl border border-primary/30 bg-card relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{t.cmsVsCustom.custom.label}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t.cmsVsCustom.custom.title}</h3>
                </div>
                <p className="text-sm text-primary font-medium mb-4">{t.cmsVsCustom.custom.badge}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.cmsVsCustom.custom.desc}</p>
                <ul className="space-y-2">
                  {t.cmsVsCustom.custom.features.map((f) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whatYouGet.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.whatYouGet.subtitle}</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {t.whatYouGet.items.map((label, i) => {
                const Icon = whatYouGetIcons[i];
                return (
                  <motion.div
                    key={label}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ WEB SHOP SEKCIJA ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t.shop.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.shop.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.shop.subtitle}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {t.shop.items.map((item, i) => {
                const Icon = shopIcons[i];
                return (
                  <motion.div
                    key={item.label}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="p-5 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ REZULTATI ══════ */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t.results.title1} <br />
                  {t.results.title2} <span className="text-gradient">{t.results.titleHighlight}</span>
                </h2>
              </motion.div>
              <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-6">
                {t.results.items.map((text, i) => {
                  const Icon = resultIcons[i];
                  return (
                    <motion.div
                      key={text}
                      {...fadeUp}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════ PROCES ══════ */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t.process.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.process.subtitle}</p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-6">
              {t.process.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.advantages.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.advantages.subtitle}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {t.advantages.items.map((item, i) => {
                const Icon = advantageIcons[i];
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════ PORTFOLIO ══════ */}
        <section id="portfolio" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t.portfolio.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.portfolio.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolioData.map((item, i) => (
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
                    <p className="text-sm text-muted-foreground mb-3">{descs[item.descKey]}</p>
                    {item.link !== "#" && (
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        {t.portfolio.visitSite} <ExternalLink className="w-3 h-3" />
                      </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.title}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.faq.subtitle}</p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-3">
              {t.faq.items.map((item, i) => (
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
                {t.cta.title} <span className="text-gradient">{t.cta.titleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="mailto:info@wizionar.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                  {t.cta.email}
                </a>
                <a
                  href="tel:+38762000000"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t.cta.phone}
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{t.cta.microcopy}</p>
            </motion.div>
          </div>
        </section>
      </main>
      <WizionarFooter />
    </div>
  );
};

export default WebDevelopment;
