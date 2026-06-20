import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Application from "./Application";

describe("Application", () => {
  it("should render its main content", () => {
    const { getByTestId } = render(<Application />);

    const mainContent = getByTestId("application-main");

    expect(mainContent).toBeInTheDocument();
  });
});
