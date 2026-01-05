import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ime mora imati najmanje 2 karaktera").max(100, "Ime je predugačko"),
  email: z.string().trim().email("Unesite validnu email adresu").max(255, "Email je predugačak"),
  company: z.string().trim().min(2, "Naziv firme mora imati najmanje 2 karaktera").max(100, "Naziv firme je predugačak"),
  role: z.string().min(1, "Odaberite ulogu"),
  products: z.array(z.string()).min(1, "Odaberite barem jedan proizvod"),
  message: z.string().trim().max(1000, "Poruka je predugačka").optional(),
  employees: z.string().optional(),
  phone: z.string().trim().max(20, "Broj telefona je predugačak").optional(),
  contactMethod: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const products = [
  { id: "wizflussi", label: "WizFlussi" },
  { id: "wizbank", label: "WizBank" },
  { id: "frizerino", label: "Frizerino" },
  { id: "wizfin", label: "WizFin" },
  { id: "wizmedik", label: "WizMedik" },
  { id: "wizvet", label: "WizVet" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    email: "",
    company: "",
    role: "",
    products: [],
    message: "",
    employees: "",
    phone: "",
    contactMethod: "",
  });

  const handleProductToggle = (productId: string) => {
    const currentProducts = formData.products || [];
    if (currentProducts.includes(productId)) {
      setFormData({
        ...formData,
        products: currentProducts.filter((p) => p !== productId),
      });
    } else {
      setFormData({
        ...formData,
        products: [...currentProducts, productId],
      });
    }
    // Clear product error when user selects
    if (errors.products) {
      setErrors({ ...errors, products: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Greška u formi",
        description: "Molimo provjerite unesene podatke.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Upit poslat",
      description: "Hvala. Javićemo se u roku 24h.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center p-12 rounded-2xl bg-background border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Hvala na upitu!</h3>
            <p className="text-muted-foreground">
              Javićemo se u roku 24h. Ako imate dodatnih pitanja, slobodno nas kontaktirajte.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zatražite demo ili pošaljite upit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Popunite formu i javićemo vam se u roku 24h sa prijedlogom termina za demo.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 rounded-2xl bg-background border border-border"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Ime i prezime *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Marko Marković"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="marko@firma.ba"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company">Naziv firme *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Moja Firma d.o.o."
                className={errors.company ? "border-destructive" : ""}
              />
              {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role">Uloga *</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                <SelectTrigger className={errors.role ? "border-destructive" : ""}>
                  <SelectValue placeholder="Odaberite ulogu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vlasnik">Vlasnik</SelectItem>
                  <SelectItem value="direktor">Direktor</SelectItem>
                  <SelectItem value="finansije">Finansije</SelectItem>
                  <SelectItem value="racunovodstvo">Računovodstvo</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="ostalo">Ostalo</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-sm text-destructive">{errors.role}</p>}
            </div>

            {/* Employees (optional) */}
            <div className="space-y-2">
              <Label htmlFor="employees">Broj zaposlenih</Label>
              <Select
                value={formData.employees}
                onValueChange={(value) => setFormData({ ...formData, employees: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Odaberite" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone (optional) */}
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+387 61 123 456"
              />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3 mb-6">
            <Label className={errors.products ? "text-destructive" : ""}>
              Zainteresovan/a za *
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {products.map((product) => (
                <div key={product.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={product.id}
                    checked={formData.products?.includes(product.id)}
                    onCheckedChange={() => handleProductToggle(product.id)}
                  />
                  <label
                    htmlFor={product.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {product.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.products && <p className="text-sm text-destructive">{errors.products}</p>}
          </div>

          {/* Preferred contact method */}
          <div className="space-y-2 mb-6">
            <Label htmlFor="contactMethod">Preferirani način kontakta</Label>
            <Select
              value={formData.contactMethod}
              onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Odaberite" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="telefon">Telefon</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="viber">Viber</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2 mb-6">
            <Label htmlFor="message">Poruka</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Opišite vaše potrebe ili pitanja..."
              rows={4}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Šaljem..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Pošalji upit
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Slanjem forme pristajete da vas kontaktiramo u vezi demo-a. Ne šaljemo spam.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
