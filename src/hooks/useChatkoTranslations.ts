import { useLanguage } from '@/contexts/LanguageContext';
import { chatkoTranslations, ChatkoTranslations } from '@/lib/chatko-translations';

export const useChatkoTranslations = (): ChatkoTranslations => {
  const { language } = useLanguage();
  return chatkoTranslations[language];
};
