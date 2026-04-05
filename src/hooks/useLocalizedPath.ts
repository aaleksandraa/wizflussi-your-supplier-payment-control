import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback } from "react";

/**
 * Returns a function that prefixes a path with the current language.
 * Serbian (sr) is the default and uses no prefix.
 * Other languages get /{lang}/path prefix.
 */
export const useLocalizedPath = () => {
  const { language } = useLanguage();

  const localizedPath = useCallback(
    (path: string) => {
      // Handle hash-only links (anchors on same page)
      if (path.startsWith("#")) return path;

      // Handle absolute URLs
      if (path.startsWith("http") || path.startsWith("mailto:")) return path;

      // Ensure path starts with /
      const cleanPath = path.startsWith("/") ? path : `/${path}`;

      // Default language (sr) has no prefix
      if (language === "sr") return cleanPath;

      // Other languages get prefix
      // Handle root path
      if (cleanPath === "/") return `/${language}`;

      return `/${language}${cleanPath}`;
    },
    [language]
  );

  return localizedPath;
};

/**
 * Builds a localized path for a given language (used in hreflang, sitemap, etc.)
 */
export const buildLangPath = (path: string, lang: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (lang === "sr") return cleanPath;
  if (cleanPath === "/") return `/${lang}`;
  return `/${lang}${cleanPath}`;
};
