import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nlTranslations from './locales/nl.json';
import arTranslations from './locales/ar.json';
import psTranslations from './locales/ps.json';
import tiTranslations from './locales/ti.json';

i18n
  .use(initReactI18next)
  .init({
   resources: {
  nl: { translation: nlTranslations },
  ar: { translation: arTranslations },
  ps: { translation: psTranslations },
  ti: { translation: tiTranslations },
},
    lng: 'nl',
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
