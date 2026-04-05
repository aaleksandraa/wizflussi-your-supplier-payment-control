import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LANGUAGES = ["sr", "en", "de", "it"] as const;
const BASE_URL = "https://wizionar.app";

/**
 * Strips the language prefix from the current pathname to get the base path.
 */
const getBasePath = (pathname: string): string => {
  for (const lang of LANGUAGES) {
    if (lang === "sr") continue;
    if (pathname === `/${lang}`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname;
};

const HreflangTags = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Remove existing hreflang links
    document.querySelectorAll("link[hreflang]").forEach((el) => el.remove());

    const basePath = getBasePath(location.pathname);

    // Add hreflang for each language
    LANGUAGES.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang === "sr" ? "bs" : lang; // Use 'bs' for Bosnian/Serbian
      const langPath = lang === "sr" ? basePath : basePath === "/" ? `/${lang}` : `/${lang}${basePath}`;
      link.href = `${BASE_URL}${langPath}`;
      document.head.appendChild(link);
    });

    // Add x-default (points to default language - sr)
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = `${BASE_URL}${basePath}`;
    document.head.appendChild(xDefault);

    // Update canonical
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const currentLangPath = language === "sr" ? basePath : basePath === "/" ? `/${language}` : `/${language}${basePath}`;
    canonical.href = `${BASE_URL}${currentLangPath}`;

    // Update html lang attribute
    const langMap: Record<string, string> = { sr: "bs", en: "en", de: "de", it: "it" };
    document.documentElement.lang = langMap[language] || "bs";

    return () => {
      document.querySelectorAll("link[hreflang]").forEach((el) => el.remove());
    };
  }, [location.pathname, language]);

  return null;
};

export default HreflangTags;
