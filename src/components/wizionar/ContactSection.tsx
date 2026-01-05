import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground mb-10">
            {t.contact.subtitle}
          </p>

          <div className="p-8 rounded-2xl bg-background border border-border">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">{t.contact.emailLabel}</p>
            <a 
              href="mailto:info@wizionar.com" 
              className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              {t.contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
