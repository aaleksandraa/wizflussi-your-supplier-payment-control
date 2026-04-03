import { createContext, useContext, useMemo, useState, type Context, type ReactNode } from "react";
import { translations, Language, Translations } from "@/lib/translations";

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

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sr");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
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
