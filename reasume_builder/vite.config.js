import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react"; // or vue, svelte, etc.

// export default defineConfig({
//   plugins: [react()], // Use the appropriate plugin for your framework
//   css: {
//     postcss: "./postcss.config.js", // Ensure this points to your PostCSS config
//   },
// });
