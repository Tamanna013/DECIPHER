import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // Allows loading files

i18n
  .use(Backend) // Load translation files
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Pass to React
  .init({
    fallbackLng: 'en', // Fallback language
    debug: true, // Debugging enabled for development
    interpolation: {
      escapeValue: false, // React handles escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'], // Language detection order
      caches: ['cookie'], // Cache the language in cookies
    },
  });

export default i18n;
