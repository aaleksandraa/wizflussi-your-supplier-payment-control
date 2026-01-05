import { Link } from "react-router-dom";

const WizionarFooter = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-foreground">Wizionar</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Product studio koji gradi specijalizovane B2B aplikacije za automatizaciju 
              poslovnih procesa u finansijama, zdravstvu i uslužnim djelatnostima.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Proizvodi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/wizflussi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  WizFlussi
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">WizBank (uskoro)</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">WizFin (uskoro)</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">WizMedik (uskoro)</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Frizerino (uskoro)</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">WizVet (uskoro)</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Linkovi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Proizvodi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privatnost
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-sm">Kontakt</h4>
              <a href="mailto:info@wizionar.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                info@wizionar.app
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Wizionar. Sva prava zadržana.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Politika privatnosti
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WizionarFooter;
