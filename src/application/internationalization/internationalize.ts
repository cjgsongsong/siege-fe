import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { INTERNATIONALIZATION } from "./constants";

/** Initializes internationalization. @function */
export default function internationalize() {
  i18n.use(initReactI18next).init({
    fallbackLng: INTERNATIONALIZATION.FALLBACK_LANGUAGE,
    debug: true,
  });
}
