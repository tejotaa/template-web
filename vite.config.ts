import { defineConfig } from "vite";
import type { UserConfigExport } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  const config: UserConfigExport = {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./__tests__/setup.ts",
    },
    server: {
      port: 5173,
    },
  };
  return config;
});
