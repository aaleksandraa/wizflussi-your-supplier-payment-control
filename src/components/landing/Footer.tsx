const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold text-foreground">WizFlussi</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Rješenje
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Funkcionalnosti
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sigurnost
            </a>
            <a href="#audience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Za koga
            </a>
          </nav>

          <div className="text-sm text-muted-foreground">
            © 2025 WizFlussi. Sva prava zadržana.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
