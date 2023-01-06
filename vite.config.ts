/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      reportsDirectory: "../test_coverage",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "VueComponentText",
      formats: ["es", "cjs"],
      fileName: (format) => {
        if (format === "es") return "vue-component-text.es.js";
        if (format === "cjs") return "vue-component-text.cjs";
        return "";
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "dist",
  },
});
