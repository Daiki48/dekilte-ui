// import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    customElement: true,
  },
  kit: {
    alias: {
      dekilteui: "./src/lib",
      "dekilteui/*": "./src/lib/*",
      $components: "./src/components",
      "$components/*": "./src/components/*",
    },
    // adapter: adapter(),
  },
};

export default config;
