import styled, { createGlobalStyle } from "styled-components";

/** Component that groups the main content. @component */
export const MainContentContainer = styled.main``;

/** Component that injects global CSS on mount. @component */
export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    width: 100vw;
  }
`;
