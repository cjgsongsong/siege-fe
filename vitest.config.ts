import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    coverage: { include: ["src/"], provider: "istanbul" },
    environment: "jsdom",
    globals: true,
    mockReset: true,
    restoreMocks: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
