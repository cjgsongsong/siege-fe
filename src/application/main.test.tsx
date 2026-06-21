import { waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Entry point", () => {
  it("should render the application in root", async () => {
    const rootElement = document.createElement("div");
    rootElement.id = "root";

    document.body.appendChild(rootElement);

    await import("./main");

    await waitFor(() => {
      const application = document.querySelector(
        '[data-testid="application-main"]',
      );

      expect(application?.parentElement).toBe(rootElement);
    });
  });
});
