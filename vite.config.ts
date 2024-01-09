import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@App": path.resolve(__dirname, "./src/app"),
      "@Models": path.resolve(__dirname, "./src/models"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
