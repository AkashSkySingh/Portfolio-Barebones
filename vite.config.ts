import { defineConfig, lazyPlugins } from "vite-plus";
import stylex from "@stylexjs/unplugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Remove base path for now - add it back when deploying to subdirectory
  base: "/",

  build: {
    minify: "esbuild",
    sourcemap: false,
    chunkFileNames: "assets/js/[name]-[hash].js",
    entryFileNames: "assets/js/[name]-[hash].js",
    assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
  },

  fmt: {},
  lint: {
    plugins: ["oxc", "typescript", "unicorn"],
    jsPlugins: [
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
      "@stylexjs/eslint-plugin",
    ],
    categories: {
      correctness: "warn",
    },
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "@stylexjs/valid-styles": "error",
      "@stylexjs/no-unused": "error",
      "@stylexjs/valid-shorthands": "warn",
      "@stylexjs/sort-keys": "warn",
    },
    options: { typeAware: true, typeCheck: true },
  },

  plugins: lazyPlugins(() => [
    stylex.vite({ externalPackages: ["@stylexjs/shared-ui"] } as any),
    react({}),
  ]),
});
