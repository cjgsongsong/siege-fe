import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Internationalization from "./Internationalizer.constants";

/** Component that handles internationalization. @component */
export default i18n.use(initReactI18next).init({
  fallbackLng: Internationalization.FALLBACK_LANGUAGE,
  debug: true,
});
