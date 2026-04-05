import { createContext, useContext, useMemo, useState, useEffect, type Context, type ReactNode } from "react";
import { translations, Language, Translations } from "@/lib/translations";
import { useParams, useNavigate, useLocation } from "react-router-dom";

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

/**
 * Strips the language prefix from the current pathname.
 */
const stripLangPrefix = (pathname: string): string => {
  for (const lang of SUPPORTED_LANGUAGES) {
    if (lang === "sr") continue;
    if (pathname === `/${lang}`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine language from URL param
  const urlLanguage: Language = lang && SUPPORTED_LANGUAGES.includes(lang as Language)
    ? (lang as Language)
    : "sr";

  const [language, setLanguageState] = useState<Language>(urlLanguage);

  // Sync language state with URL param changes
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
