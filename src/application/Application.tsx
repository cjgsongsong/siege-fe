import Router from "./Router";
import { GlobalStyles, MainContentContainer } from "./styles";

/** Component that renders the application. @component */
export default function Application() {
  return (
    <>
      <GlobalStyles />
      <MainContentContainer data-testid="application-main">
        <Router />
      </MainContentContainer>
    </>
  );
}
