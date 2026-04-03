import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

const flags: { code: Language; label: string; flag: string }[] = [
  { code: 'sr', label: 'Srpski', flag: '🇷🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availableFlags = flags.filter((item) => item.code !== language);
  const currentFlag = flags.find((item) => item.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-1">
      {availableFlags.map((item) => (
        <button
          key={item.code}
          onClick={() => setLanguage(item.code)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-all hover:bg-secondary"
          title={item.label}
          aria-label={`Switch to ${item.label}`}
        >
          {item.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
