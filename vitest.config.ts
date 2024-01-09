import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  // },
  resolve: {
    alias: {
      "@App": path.resolve(__dirname, "./src/app"),
      "@Models": path.resolve(__dirname, "./src/models"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
