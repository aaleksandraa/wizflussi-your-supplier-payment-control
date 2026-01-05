import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Update document title
    document.title = "Wizionar – Poslovne aplikacije za automatizaciju i kontrolu | wizionar.app";
    
    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta("description", "Wizionar gradi specijalizovane B2B sisteme za finansije, zdravstvo i uslužne djelatnosti. WizFin, WizMedik, Frizerino, WizVet, WizBank, WizFlussi – automatizacija, kontrola, sigurnost.");
    updateMeta("keywords", "poslovne aplikacije, B2B softver, automatizacija, finansijski softver, zdravstveni softver, salon softver, veterinarski softver, ERP, BiH");
    updateMeta("author", "Wizionar");
    updateMeta("robots", "index, follow");
    
    // Open Graph
    updateMeta("og:title", "Wizionar – Poslovne aplikacije za automatizaciju i kontrolu", true);
    updateMeta("og:description", "Gradimo specijalizovane B2B sisteme za finansije, zdravstvo i uslužne djelatnosti.", true);
    updateMeta("og:type", "website", true);
    updateMeta("og:site_name", "Wizionar", true);
    updateMeta("og:url", "https://wizionar.app", true);
    
    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", "Wizionar – Poslovne aplikacije za automatizaciju i kontrolu");
    updateMeta("twitter:description", "Gradimo specijalizovane B2B sisteme za finansije, zdravstvo i uslužne djelatnosti.");

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://wizionar.app";

    // JSON-LD Schema
    const existingSchema = document.querySelector("script[type='application/ld+json']");
    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://wizionar.app/#organization",
          "name": "Wizionar",
          "url": "https://wizionar.app",
          "description": "Product studio koji gradi specijalizovane B2B aplikacije za automatizaciju poslovnih procesa.",
          "sameAs": []
        },
        {
          "@type": "WebSite",
          "@id": "https://wizionar.app/#website",
          "url": "https://wizionar.app",
          "name": "Wizionar",
          "publisher": { "@id": "https://wizionar.app/#organization" }
        },
        {
          "@type": "SoftwareApplication",
          "name": "WizFlussi",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Sistem za upravljanje plaćanjima dobavljačima sa RBAC kontrolom i audit logovima."
        },
        {
          "@type": "SoftwareApplication",
          "name": "WizFin",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "description": "Sistem za internu finansijsku evidenciju i izvještaje."
        },
        {
          "@type": "SoftwareApplication",
          "name": "WizMedik",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Web",
          "description": "Platforma za zdravstvene ustanove."
        },
        {
          "@type": "SoftwareApplication",
          "name": "Frizerino",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Alat za rezervacije i upravljanje salonima."
        },
        {
          "@type": "SoftwareApplication",
          "name": "WizVet",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Web",
          "description": "Sistem za veterinarske ambulante."
        },
        {
          "@type": "SoftwareApplication",
          "name": "WizBank",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "description": "Automatizacija bankovnih izvoda i sortiranje."
        }
      ]
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    return () => {
      const schemaEl = document.querySelector("script[type='application/ld+json']");
      if (schemaEl) schemaEl.remove();
    };
  }, []);

  return null;
};

export default SEOHead;
