import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import wizionarLogo from "@/assets/wizionar-logo.png";

const WizionarHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={wizionarLogo} alt="Wizionar" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Proizvodi
          </a>
          <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Proces
          </a>
          <a href="#security" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sigurnost
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </a>
        </nav>

        <div className="hidden md:block">
          <Button size="lg" className="shadow-orange" asChild>
            <a href="#contact">Zatraži demo</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a href="#products" className="text-base font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Proizvodi
            </a>
            <a href="#process" className="text-base font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Proces
            </a>
            <a href="#security" className="text-base font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Sigurnost
            </a>
            <a href="#contact" className="text-base font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Kontakt
            </a>
            <Button asChild className="w-full mt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Zatraži demo</a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default WizionarHeader;
