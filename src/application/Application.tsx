import Router from "./Router";
import { internationalize } from "./internationalization";
import { GlobalStyles, MainContentContainer } from "./styles";
import LanguageToggle from "../components/LanguageToggle";

/** Component that renders the application. @component */
export default function Application() {
  internationalize();

  return (
    <>
      <GlobalStyles />
      <LanguageToggle />
      <MainContentContainer data-testid="application-main">
        <Router />
      </MainContentContainer>
    </>
  );
}
