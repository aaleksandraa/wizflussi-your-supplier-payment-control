import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import wizionarLogo from "@/assets/wizionar-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const WizionarHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [mobileMenuOpen]);

  const mobileNavItems = [
    { href: "#products", label: t.nav.products, isLink: false },
    { href: "/usluge", label: "Usluge", isLink: true },
    { href: "#contact", label: t.nav.contact, isLink: false },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={wizionarLogo} alt="Wizionar" className="h-11 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t.nav.products}
          </a>
          <Link to="/usluge" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Usluge
          </Link>
          <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            {t.nav.contact}
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Button size="lg" className="shadow-orange" asChild>
            <a href="#contact">{t.nav.requestDemo}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card transition-colors hover:bg-secondary"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_42%)]" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border/60 bg-background px-6 py-5">
                <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                  <img src={wizionarLogo} alt="Wizionar" className="h-10 w-auto" />
                </Link>
                <button
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card transition-colors hover:bg-secondary"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-6 pt-6">
                <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  Digital solutions za rast biznisa
                </div>

                <nav className="space-y-3">
                  {mobileNavItems.map((item, index) => {
                    const sharedClassName =
                      "group flex items-center justify-between rounded-[1.75rem] border border-border/60 bg-card px-5 py-5 transition-all duration-300 hover:border-primary/30 hover:bg-secondary";

                    const content = (
                      <>
                        <div>
                          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Meni</span>
                          <span className="mt-2 block text-3xl font-semibold tracking-tight text-foreground">
                            {item.label}
                          </span>
                        </div>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </>
                    );

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + index * 0.06 }}
                      >
                        {item.isLink ? (
                          <Link to={item.href} className={sharedClassName} onClick={closeMobileMenu}>
                            {content}
                          </Link>
                        ) : (
                          <a href={item.href} className={sharedClassName} onClick={closeMobileMenu}>
                            {content}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-auto pt-8">
                  <div className="rounded-[2rem] border border-border/60 bg-card p-5 shadow-lg">
                    <p className="text-sm leading-6 text-muted-foreground">
                      Trebate web stranicu, aplikaciju ili SEO podršku? Javite nam se i predložit ćemo najbolje rješenje.
                    </p>
                    <Button asChild className="mt-5 w-full shadow-orange" size="xl">
                      <a href="#contact" onClick={closeMobileMenu}>
                        {t.nav.requestDemo}
                      </a>
                    </Button>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default WizionarHeader;
