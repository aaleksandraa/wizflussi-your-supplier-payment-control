import { createContext, useContext, useMemo, useState, useEffect, type Context, type ReactNode } from "react";
import { translations, Language, Translations } from "@/lib/translations";
import { useNavigate, useLocation } from "react-router-dom";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const globalLanguageContext = globalThis as typeof globalThis & {
  __wizionarLanguageContext__?: Context<LanguageContextType | undefined>;
};

const LanguageContext =
  globalLanguageContext.__wizionarLanguageContext__ ??
  createContext<LanguageContextType | undefined>(undefined);

globalLanguageContext.__wizionarLanguageContext__ = LanguageContext;

const SUPPORTED_LANGUAGES: Language[] = ["sr", "en", "de", "it"];
const NON_DEFAULT_LANGUAGES: string[] = ["en", "de", "it"];

/**
 * Detect the language from the pathname by checking the first segment.
 */
const detectLanguage = (pathname: string): Language => {
  const firstSeg = pathname.split("/")[1]; // e.g. "en" from "/en/usluge"
  if (firstSeg && NON_DEFAULT_LANGUAGES.includes(firstSeg as Language)) {
    return firstSeg as Language;
  }
  return "sr";
};

/**
 * Strips the language prefix from the pathname.
 */
const stripLangPrefix = (pathname: string): string => {
  const lang = detectLanguage(pathname);
  if (lang === "sr") return pathname;
  // Remove /{lang} from the start
  const rest = pathname.slice(lang.length + 1); // remove "/en"
  return rest || "/";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const urlLanguage = detectLanguage(location.pathname);
  const [language, setLanguageState] = useState<Language>(urlLanguage);

  // Sync when URL changes (e.g. browser back/forward)
  useEffect(() => {
    setLanguageState(urlLanguage);
  }, [urlLanguage]);

  const setLanguage = (newLang: Language) => {
    const basePath = stripLangPrefix(location.pathname);
    const hash = location.hash;

    let newPath: string;
    if (newLang === "sr") {
      newPath = basePath;
    } else {
      newPath = basePath === "/" ? `/${newLang}` : `/${newLang}${basePath}`;
    }

    navigate(newPath + hash, { replace: true });
    setLanguageState(newLang);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language, location.pathname],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
