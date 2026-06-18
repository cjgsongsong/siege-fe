import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./styles";
import { INTERNATIONALIZATION } from "../../application/internationalization";

/** Toggle that triggers language switch on click. @component */
export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const {
    changeLanguage,
    options: { supportedLngs },
  } = i18n;

  const languages = (supportedLngs || []).filter(
    (language) => language !== INTERNATIONALIZATION.DEVELOPMENT_LANGUAGE_CODE,
  );
  const [languageIndex, setLanguageIndex] = useState(
    languages.indexOf(i18n.language),
  );

  function handleClick() {
    const nextLanguageIndex =
      languageIndex === languages.length - 1 ? 0 : languageIndex + 1;

    changeLanguage(languages[nextLanguageIndex]);
    setLanguageIndex(nextLanguageIndex);
  }

  return (
    <Button onClick={handleClick}>{t("components.languageToggle")}</Button>
  );
}
