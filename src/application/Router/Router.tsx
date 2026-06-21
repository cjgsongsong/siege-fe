import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ROUTES } from "./routes";

/** Provider that handles routing. @component */
export default function Router() {
  return <RouterProvider router={createBrowserRouter(ROUTES)} />;
}
