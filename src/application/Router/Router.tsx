import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RoutePath from "./Router.constants";

/** Component that handles routing. @component */
export default function Router() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <></>,
          errorElement: <></>,
          path: RoutePath.DEFAULT,
        },
      ])}
    />
  );
}
