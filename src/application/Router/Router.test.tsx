import { render } from "@testing-library/react";
import {
  createBrowserRouter,
  createMemoryRouter,
  RouterProvider,
  type InitialEntry,
} from "react-router";
import { describe, expect, it, vi } from "vitest";
import Router from "./Router";
import { ROUTES } from "./routes";

vi.mock("react-router", { spy: true });

/**
 * Render test router.
 *
 * @function
 * @param [initialEntry] Route path to test.
 * @returns Render result.
 */
function renderRouter(initialEntry: InitialEntry | undefined = undefined) {
  return render(
    initialEntry ? (
      <RouterProvider
        router={createMemoryRouter(ROUTES, { initialEntries: [initialEntry] })}
      />
    ) : (
      <Router />
    ),
  );
}

describe("Router", () => {
  it("should initialize with configured routes", () => {
    renderRouter();

    expect(createBrowserRouter).toHaveBeenCalledExactlyOnceWith(ROUTES);
  });

  describe("routing", () => {
    it("should render nothing by default", () => {
      const { container } = renderRouter("/");

      expect(container.children).toHaveLength(0);
    });

    it("should render nothing on unknown route", () => {
      const { container } = renderRouter("/unknown");

      expect(container.children).toHaveLength(0);
    });
  });
});
