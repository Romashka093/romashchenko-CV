import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsENG from './languages/eng';
import translationsUA from './languages/ua';
import { options } from './languageDetection';

const resources = {
  en: {
    translation: translationsENG,
  },
  ua: {
    translation: translationsUA,
  },
};

export const initI18n = () => {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      resources,
      detection: options,
      fallbackLng: ['ua', 'en'], // default language
      supportedLngs: ['ua', 'en'],
      keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
};
export default i18n;
