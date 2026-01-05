import { Link } from "react-router-dom";
import { useWizflussiTranslations } from "@/hooks/useWizflussiTranslations";

const Footer = () => {
  const t = useWizflussiTranslations();

  return (
    <footer className="py-12 border-t border-[hsl(var(--wf-border))]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--emerald))] flex items-center justify-center">
              <span className="text-[hsl(var(--wf-background))] font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold text-[hsl(var(--wf-foreground))]">WizFlussi</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#problem" className="text-sm text-[hsl(var(--wf-muted-foreground))] hover:text-[hsl(var(--wf-foreground))] transition-colors">
              {t.header.problem}
            </a>
            <a href="#solution" className="text-sm text-[hsl(var(--wf-muted-foreground))] hover:text-[hsl(var(--wf-foreground))] transition-colors">
              {t.header.solution}
            </a>
            <a href="#features" className="text-sm text-[hsl(var(--wf-muted-foreground))] hover:text-[hsl(var(--wf-foreground))] transition-colors">
              {t.header.features}
            </a>
            <a href="#security" className="text-sm text-[hsl(var(--wf-muted-foreground))] hover:text-[hsl(var(--wf-foreground))] transition-colors">
              {t.header.security}
            </a>
            <Link to="/" className="text-sm text-[hsl(var(--emerald))] hover:text-[hsl(var(--emerald-glow))] transition-colors">
              {t.footer.wizionar}
            </Link>
          </nav>

          <div className="text-sm text-[hsl(var(--wf-muted-foreground))]">
            © 2025 WizFlussi by Wizionar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
