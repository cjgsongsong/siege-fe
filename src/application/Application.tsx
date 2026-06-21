import Router from "./Router";
import internationalize from "./internationalization";
import { GlobalStyles, MainContentContainer } from "./styles";

/** Component that renders the application. @component */
export default function Application() {
  internationalize();

  return (
    <>
      <GlobalStyles />
      <MainContentContainer data-testid="application-main">
        <Router />
      </MainContentContainer>
    </>
  );
}
