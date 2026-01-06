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
    <>
      {/* Desktop: show all flags inline */}
      <div className="hidden lg:flex items-center gap-1">
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

      {/* Tablet/Mobile: dropdown */}
      <div className="lg:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-lg flex items-center justify-center gap-1 transition-all hover:bg-secondary border border-border/50"
          aria-label="Change language"
        >
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-lg">{currentFlag?.flag}</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[140px] z-50">
            {availableFlags.map((item) => (
              <button
                key={item.code}
                onClick={() => handleLanguageChange(item.code)}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-secondary transition-colors text-left"
              >
                <span className="text-lg">{item.flag}</span>
                <span className="text-sm text-foreground">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
