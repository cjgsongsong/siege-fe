import { createGlobalStyle } from "styled-components";

/** Component that injects global CSS on mount. @component */
export default createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    width: 100vw;
  }
`;
