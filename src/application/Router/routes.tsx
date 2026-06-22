import type { RouteObject } from "react-router";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

/** Route paths. @enum */
const ROUTE_PATHS = { DEFAULT: "/" } as const;

/** Application routes. @constant */
export const ROUTES: RouteObject[] = [
  {
    element: <Home />,
    errorElement: <NotFound />,
    path: ROUTE_PATHS.DEFAULT,
  },
];
