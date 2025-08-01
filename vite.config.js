import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/",
  build: {
    outDir: "build",
    minify: "esbuild",
  },
  server: {
    port: 3000,
    host: "127.0.0.1",
  },
});
