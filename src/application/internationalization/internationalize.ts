import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { INTERNATIONALIZATION, LANGUAGE_CODES } from "./constants";
import TRANSLATIONS_EN from "./locales/en/translation.json";
import TRANSLATIONS_FIL from "./locales/fil/translation.json";

/** Initializes internationalization. @function */
export default function internationalize() {
  i18n.use(initReactI18next).init({
    fallbackLng: INTERNATIONALIZATION.FALLBACK_LANGUAGE,
    debug: true,
    resources: {
      [LANGUAGE_CODES.ENGLISH]: { translation: TRANSLATIONS_EN },
      [LANGUAGE_CODES.FILIPINO]: { translation: TRANSLATIONS_FIL },
    },
    supportedLngs: Object.values(LANGUAGE_CODES),
  });
}
