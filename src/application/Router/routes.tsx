import type { RouteObject } from "react-router";

/** Route paths. @enum */
const ROUTE_PATHS = { DEFAULT: "/" } as const;

/** Application routes. @constant */
export const ROUTES: RouteObject[] = [
  {
    element: <></>,
    errorElement: <></>,
    path: ROUTE_PATHS.DEFAULT,
  },
];
