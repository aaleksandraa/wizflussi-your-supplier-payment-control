import { motion } from "framer-motion";
import { Zap, Eye, TrendingUp } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Manje haosa, više kontrole.
          </h2>
          <p className="text-lg text-muted-foreground">
            U većini firmi ključni procesi i dalje zavise od Excel tabela, mailova i ručnog praćenja. 
            Wizionar proizvodi uvode red: centralizuju podatke, automatizuju ponavljajuće korake 
            i omogućavaju jasan pregled obaveza, termina i izvještaja.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-8 rounded-2xl bg-gradient-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automatizacija</h3>
            <p className="text-muted-foreground">
              Smanjujemo ručni unos i greške.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-8 rounded-2xl bg-gradient-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kontrola</h3>
            <p className="text-muted-foreground">
              Uvodi se pregled stanja i odgovornosti.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-8 rounded-2xl bg-gradient-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Skalabilnost</h3>
            <p className="text-muted-foreground">
              Rješenja rastu kako raste firma.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
