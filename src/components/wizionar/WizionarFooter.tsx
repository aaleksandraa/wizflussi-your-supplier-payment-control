import { Link } from "react-router-dom";
import wizionarLogo from "@/assets/wizionar-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";

const WizionarFooter = () => {
  const { t } = useLanguage();

  const products = [
    { name: "WizFlussi", to: "/wizflussi" },
    { name: "wizMedik", to: "/wizmedik" },
    { name: "Frizerino", to: "/frizerino" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-10 md:py-14">
        {/* Top: Logo + Email */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <Link to="/" className="inline-block">
            <img src={wizionarLogo} alt="Wizionar" className="h-9 w-auto" />
          </Link>
          <a
            href="mailto:info@wizionar.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@wizionar.com
          </a>
        </div>

        {/* Products row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {products.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="text-sm px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              {p.name}
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {t.footer.copyright}
          </p>
          <Link
            to="/privacy"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {t.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default WizionarFooter;
