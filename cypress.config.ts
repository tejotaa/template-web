import { defineConfig } from "cypress";

export default defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  e2e: {
    baseUrl: "http://localhost:5173/",
  },
});
