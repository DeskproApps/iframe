import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "",
  plugins: [
    deno(),
    react(),
    // deno-lint-ignore no-explicit-any
    (copy as any)({
      hook: "writeBundle",
      targets: [
        { src: "./manifest.json", dest: "./dist/" },
        { src: "./DESCRIPTION.md", dest: "./dist/" },
        { src: "./SETUP.md", dest: "./dist/" },
        { src: "./icon.svg", dest: "./dist/" },
      ],
    }),
  ],
});
