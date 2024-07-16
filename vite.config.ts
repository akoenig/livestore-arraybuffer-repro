import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProdBuild = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Service-Worker-Allowed", "/");

          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "path-browserify": path.resolve(__dirname, "empty.js"),
      "find-my-way-ts": path.resolve(__dirname, "empty.js"),
    },
  },
  worker: isProdBuild ? { format: "es" } : undefined,
  optimizeDeps: {
    // TODO remove once fixed https://github.com/vitejs/vite/issues/8427
    exclude: [
      "@livestore/sqlite-wasm",
      "@livestore/web",
      "@effect/schema",
      "effect",
    ],
  },
});
