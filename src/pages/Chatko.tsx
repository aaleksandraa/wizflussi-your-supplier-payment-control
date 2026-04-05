import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LocalizedLink from "@/components/LocalizedLink";
import {
  ArrowRight, MessageCircle, ShoppingCart, Truck, CreditCard,
  FileText, ShieldCheck, BarChart3, Plug, Settings, Rocket,
  CheckCircle, Lock, Eye, MessageSquare, Sparkles
} from "lucide-react";
import LanguageSwitcher from "@/components/wizionar/LanguageSwitcher";
import { useChatkoTranslations } from "@/hooks/useChatkoTranslations";

const Chatko = () => {
  const t = useChatkoTranslations();

  return (
    <div className="chatko-theme min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[hsl(var(--ck-border))] bg-[hsl(var(--ck-background)/0.8)] backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <LocalizedLink to="/chatko" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--violet))] flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-[hsl(var(--ck-foreground))]">Chatko</span>
          </LocalizedLink>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[hsl(var(--ck-muted-foreground))] hover:text-[hsl(var(--ck-foreground))] transition-colors">
              {t.header.features}
            </a>
            <a href="#integration" className="text-sm text-[hsl(var(--ck-muted-foreground))] hover:text-[hsl(var(--ck-foreground))] transition-colors">
              {t.header.integration}
            </a>
            <a href="#examples" className="text-sm text-[hsl(var(--ck-muted-foreground))] hover:text-[hsl(var(--ck-foreground))] transition-colors">
              {t.header.examples}
            </a>
            <LocalizedLink to="/" className="text-sm text-[hsl(var(--violet))] hover:text-[hsl(var(--violet-glow))] transition-colors">
              {t.header.backToWizionar}
            </LocalizedLink>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button size="sm" className="hidden sm:flex bg-[hsl(var(--violet))] hover:bg-[hsl(var(--violet-glow))] text-white" asChild>
              <a href="mailto:info@wizionar.com">{t.header.contact}</a>
            </Button>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[hsl(var(--ck-background))]">
          <div className="absolute inset-0 bg-gradient-violet-hero" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[hsl(var(--violet)/0.1)] rounded-full blur-[120px] animate-pulse" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--ck-border))] bg-[hsl(var(--ck-secondary)/0.5)] mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--violet))] animate-pulse" />
                <span className="text-sm text-[hsl(var(--ck-muted-foreground))]">{t.hero.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[hsl(var(--ck-foreground))]"
              >
                {t.hero.title}{" "}
                <span className="text-gradient-violet">{t.hero.titleHighlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-[hsl(var(--ck-muted-foreground))] max-w-2xl mx-auto mb-10"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <Button size="xl" className="group bg-[hsl(var(--violet))] hover:bg-[hsl(var(--violet-glow))] text-white" asChild>
                  <a href="mailto:info@wizionar.com">
                    {t.hero.cta1}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-[hsl(var(--ck-border))] text-[hsl(var(--ck-foreground))] hover:bg-[hsl(var(--ck-secondary))]" asChild>
                  <a href="#integration">{t.hero.cta2}</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[hsl(var(--ck-secondary)/0.3)] border border-[hsl(var(--ck-border)/0.5)]">
                  <Sparkles className="w-5 h-5 text-[hsl(var(--violet))]" />
                  <span className="text-sm text-[hsl(var(--ck-muted-foreground))]">{t.hero.trust.ai}</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[hsl(var(--ck-secondary)/0.3)] border border-[hsl(var(--ck-border)/0.5)]">
                  <ShieldCheck className="w-5 h-5 text-[hsl(var(--violet))]" />
                  <span className="text-sm text-[hsl(var(--ck-muted-foreground))]">{t.hero.trust.control}</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[hsl(var(--ck-secondary)/0.3)] border border-[hsl(var(--ck-border)/0.5)]">
                  <Plug className="w-5 h-5 text-[hsl(var(--violet))]" />
                  <span className="text-sm text-[hsl(var(--ck-muted-foreground))]">{t.hero.trust.integration}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-[hsl(var(--ck-card))]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[hsl(var(--violet))] text-sm font-semibold uppercase tracking-wider mb-4">{t.features.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--ck-foreground))]">{t.features.title}</h2>
              <p className="text-[hsl(var(--ck-muted-foreground))] max-w-2xl mx-auto">{t.features.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: ShoppingCart, ...t.features.items.products },
                { icon: Truck, ...t.features.items.delivery },
                { icon: CreditCard, ...t.features.items.payment },
                { icon: FileText, ...t.features.items.custom },
                { icon: Eye, ...t.features.items.restrictions },
                { icon: BarChart3, ...t.features.items.analytics }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[hsl(var(--ck-background))] border border-[hsl(var(--ck-border))] hover:border-[hsl(var(--violet)/0.5)] transition-colors"
                >
                  <item.icon className="w-8 h-8 text-[hsl(var(--violet))] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--ck-foreground))]">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--ck-muted-foreground))] mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-[hsl(var(--ck-muted-foreground))]">
                        <CheckCircle className="w-4 h-4 text-[hsl(var(--violet))] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" className="py-24 bg-[hsl(var(--ck-background))]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[hsl(var(--violet))] text-sm font-semibold uppercase tracking-wider mb-4">{t.integration.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--ck-foreground))]">{t.integration.title}</h2>
              <p className="text-[hsl(var(--ck-muted-foreground))] max-w-2xl mx-auto">{t.integration.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Plug, ...t.integration.steps.connect },
                { icon: Settings, ...t.integration.steps.configure },
                { icon: Rocket, ...t.integration.steps.launch }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative p-8 rounded-2xl bg-[hsl(var(--ck-card))] border border-[hsl(var(--ck-border))] text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--violet)/0.15)] flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-[hsl(var(--violet))]">{item.step}</span>
                  </div>
                  <item.icon className="w-8 h-8 text-[hsl(var(--violet))] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--ck-foreground))]">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--ck-muted-foreground))]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="py-24 bg-[hsl(var(--ck-card))]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[hsl(var(--violet))] text-sm font-semibold uppercase tracking-wider mb-4">{t.examples.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--ck-foreground))]">{t.examples.title}</h2>
              <p className="text-[hsl(var(--ck-muted-foreground))] max-w-2xl mx-auto">{t.examples.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[t.examples.items.fashion, t.examples.items.electronics, t.examples.items.food].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[hsl(var(--ck-background))] border border-[hsl(var(--ck-border))]"
                >
                  <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--ck-foreground))]">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--ck-muted-foreground))] mb-6">{item.description}</p>

                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-[hsl(var(--ck-secondary)/0.5)] border border-[hsl(var(--ck-border)/0.5)]">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-4 h-4 text-[hsl(var(--ck-muted-foreground))] mt-0.5 shrink-0" />
                        <p className="text-sm italic text-[hsl(var(--ck-muted-foreground))]">{item.question}</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[hsl(var(--violet)/0.1)] border border-[hsl(var(--violet)/0.2)]">
                      <div className="flex items-start gap-2">
                        <MessageCircle className="w-4 h-4 text-[hsl(var(--violet))] mt-0.5 shrink-0" />
                        <p className="text-sm text-[hsl(var(--ck-foreground))]">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-24 bg-[hsl(var(--ck-background))]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-[hsl(var(--violet))] text-sm font-semibold uppercase tracking-wider mb-4">{t.security.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--ck-foreground))]">{t.security.title}</h2>
              <p className="text-[hsl(var(--ck-muted-foreground))] max-w-2xl mx-auto">{t.security.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Lock, ...t.security.items.encryption },
                { icon: ShieldCheck, ...t.security.items.gdpr },
                { icon: Eye, ...t.security.items.control }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[hsl(var(--ck-card))] border border-[hsl(var(--ck-border))]"
                >
                  <item.icon className="w-8 h-8 text-[hsl(var(--violet))] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--ck-foreground))]">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--ck-muted-foreground))]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[hsl(var(--ck-card))]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--ck-foreground))]">{t.cta.title}</h2>
              <p className="text-[hsl(var(--ck-muted-foreground))] mb-8">{t.cta.subtitle}</p>
              <Button size="xl" className="group bg-[hsl(var(--violet))] hover:bg-[hsl(var(--violet-glow))] text-white" asChild>
                <a href="mailto:info@wizionar.com">
                  {t.cta.contact}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--ck-border))] py-8 bg-[hsl(var(--ck-background))]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(var(--ck-muted-foreground))]">© 2025 Chatko by Wizionar</p>
          <LocalizedLink to="/" className="text-sm text-[hsl(var(--violet))] hover:text-[hsl(var(--violet-glow))] transition-colors">
            {t.footer.wizionar}
          </LocalizedLink>
        </div>
      </footer>
    </div>
  );
};

export default Chatko;
