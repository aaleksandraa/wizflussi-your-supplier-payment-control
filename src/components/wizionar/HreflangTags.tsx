import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildLangPath, stripAllLangPrefixes } from "@/lib/localized-paths";

const LANGUAGES = ["sr", "en", "de", "it"] as const;
const BASE_URL = "https://wizionar.app";

const HreflangTags = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    document.querySelectorAll("link[hreflang]").forEach((el) => el.remove());

    const basePath = stripAllLangPrefixes(location.pathname);

    LANGUAGES.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang === "sr" ? "bs" : lang;
      link.href = `${BASE_URL}${buildLangPath(basePath, lang)}`;
      document.head.appendChild(link);
    });

    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = `${BASE_URL}${basePath}`;
    document.head.appendChild(xDefault);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${BASE_URL}${buildLangPath(basePath, language)}`;

    const langMap: Record<string, string> = { sr: "bs", en: "en", de: "de", it: "it" };
    document.documentElement.lang = langMap[language] || "bs";

    return () => {
      document.querySelectorAll("link[hreflang]").forEach((el) => el.remove());
    };
  }, [language, location.pathname]);

  return null;
};

export default HreflangTags;
