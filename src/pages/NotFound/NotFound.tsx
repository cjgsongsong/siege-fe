import { useTranslation } from "react-i18next";
import Page from "./styles";

/** Page displayed on an unknown route. @component */
export default function NotFound() {
  const { t } = useTranslation();

  return <Page>{t("pages.notFound.message")}</Page>;
}
