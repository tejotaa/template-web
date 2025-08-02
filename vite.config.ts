import { defineConfig } from "vite";
import type { UserConfigExport } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(() => {
  const config: UserConfigExport = {
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: "jsdom",
    },
    server: {
      port: 5173,
    },
  };
  return config;
});
