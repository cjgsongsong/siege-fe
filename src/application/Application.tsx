import "./Internationalizer";
import GlobalStyles from "./Application.styles";
import Router from "./Router";

/** Component that renders the application. @component */
export default function Application() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}
