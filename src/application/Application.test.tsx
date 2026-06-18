import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Application from "./Application";
import { internationalize } from "./internationalization";

vi.mock("./internationalization", { spy: true });

describe("Application", () => {
  it("should internationalize text", () => {
    render(<Application />);

    expect(internationalize).toHaveBeenCalledOnce();
  });

  it("should render its main content", () => {
    const { getByTestId } = render(<Application />);

    const mainContent = getByTestId("application-main");

    expect(mainContent).toBeInTheDocument();
  });
});
