import { Link } from "react-router-dom";
import wizionarLogo from "@/assets/wizionar-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const WizionarFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={wizionarLogo} alt="Wizionar" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.products}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/wizflussi" className="text-muted-foreground hover:text-primary transition-colors">
                  WizFlussi
                </Link>
              </li>
              <li><span className="text-muted-foreground/50">WizBank ({t.footer.soon})</span></li>
              <li><span className="text-muted-foreground/50">WizFin ({t.footer.soon})</span></li>
              <li><span className="text-muted-foreground/50">WizMedik ({t.footer.soon})</span></li>
              <li><span className="text-muted-foreground/50">Frizerino ({t.footer.soon})</span></li>
              <li><span className="text-muted-foreground/50">WizVet ({t.footer.soon})</span></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.links}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.products}
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-bold mb-2">{t.footer.contact}</h4>
              <a href="mailto:info@wizionar.com" className="text-primary hover:text-primary/80 transition-colors">
                info@wizionar.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WizionarFooter;
