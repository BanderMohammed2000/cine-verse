import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/cine-verse/",
  build: {
    outDir: "build",
    minify: "esbuild",
  },
  server: {
    port: 3000,
    host: "127.0.0.1",
  },
});
