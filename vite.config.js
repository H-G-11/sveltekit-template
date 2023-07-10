import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  optimizeDeps: {
    exclude: ["svelte-routing"],
  },
  plugins: [sveltekit()],
});
