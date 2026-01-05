import { motion } from "framer-motion";
import { Server, Database, Shield, Gauge } from "lucide-react";

const TechSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Tehnologija</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Izgrađeno na provjerenim temeljima
            </h2>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-card border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Laravel Backend</h4>
                    <p className="text-muted-foreground text-sm">
                      Robustan PHP framework sa godinama dokazanom stabilnošću u enterprise okruženjima.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Stabilna arhitektura</h4>
                    <p className="text-muted-foreground text-sm">
                      Modularna struktura koja omogućava lako održavanje i proširenje funkcionalnosti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sigurnost ugrađena</h4>
                    <p className="text-muted-foreground text-sm">
                      OWASP smjernice, zaštita od SQL injection, CSRF i XSS napada iz temelja.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Gauge className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Skalabilnost</h4>
                    <p className="text-muted-foreground text-sm">
                      Arhitektura spremna za rast – od stotina do miliona transakcija.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground text-sm">
                Svi tehnički detalji su dostupni na zahtjev. Naš tim je spreman odgovoriti na pitanja 
                vaših IT stručnjaka tokom evaluacije.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
