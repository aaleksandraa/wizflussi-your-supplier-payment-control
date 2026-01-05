import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Spremni da preuzmete kontrolu nad plaćanjima?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Zakažite demo bez obaveze i pogledajte kako WizFlussi može transformisati 
            način na koji vaša organizacija upravlja obavezama prema dobavljačima.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Zakaži demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <MessageSquare className="w-5 h-5" />
              Razgovaraj sa timom
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">30 min</div>
              <div className="text-sm text-muted-foreground">Demo prezentacija</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">0 €</div>
              <div className="text-sm text-muted-foreground">Bez obaveze</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Odgovor na upit</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
