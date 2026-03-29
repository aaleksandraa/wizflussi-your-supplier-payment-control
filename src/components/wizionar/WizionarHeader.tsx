import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import wizionarLogo from "@/assets/wizionar-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const WizionarHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={wizionarLogo} alt="Wizionar" className="h-11 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.products}
          </a>
          <Link to="/usluge" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Usluge
          </Link>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button size="lg" className="shadow-orange" asChild>
            <a href="#contact">{t.nav.requestDemo}</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-background border-l border-border/50 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Close button */}
                <div className="flex items-center justify-between p-6 border-b border-border/30">
                  <img src={wizionarLogo} alt="Wizionar" className="h-9 w-auto" />
                  <button
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 px-6 py-8 flex flex-col gap-2">
                  {[
                    { href: "#products", label: t.nav.products, isLink: false },
                    { href: "/usluge", label: "Usluge", isLink: true },
                    { href: "#contact", label: t.nav.contact, isLink: false },
                  ].map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                    >
                      {item.isLink ? (
                        <Link
                          to={item.href}
                          className="flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-foreground hover:bg-secondary/80 transition-colors group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-200" />
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-foreground hover:bg-secondary/80 transition-colors group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-200" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-border/30 space-y-4">
                  <Button asChild className="w-full shadow-orange" size="lg">
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      {t.nav.requestDemo}
                    </a>
                  </Button>
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default WizionarHeader;
