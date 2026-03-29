import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
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
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
              aria-label="Close menu overlay"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col border-l border-border bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-5">
                <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
                  <img src={wizionarLogo} alt="Wizionar" className="h-10 w-auto" />
                </Link>

                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card transition-colors hover:bg-secondary"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 px-5 py-6">
                <div className="space-y-2">
                  {mobileNavItems.map((item, index) => {
                    const linkClassName =
                      "flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary";

                    const content = (
                      <>
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </>
                    );

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 12 }}
                        transition={{ delay: 0.05 + index * 0.05, duration: 0.2 }}
                      >
                        {item.isLink ? (
                          <Link to={item.href} className={linkClassName} onClick={closeMobileMenu}>
                            {content}
                          </Link>
                        ) : (
                          <a href={item.href} className={linkClassName} onClick={closeMobileMenu}>
                            {content}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              <div className="border-t border-border/60 px-5 py-5">
                <Button asChild size="lg" className="mb-4 w-full shadow-orange">
                  <a href="#contact" onClick={closeMobileMenu}>
                    {t.nav.requestDemo}
                  </a>
                </Button>

                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default WizionarHeader;
