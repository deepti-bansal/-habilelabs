import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/locale-en.json";
import translationRU from "../locales/locale-ru.json";

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en-US",
  lng: "en",
  keySeparator: false,
  debug: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
