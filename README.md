<div style="display: flex; justify-content: center;">
  <img src="/static/dekilte-ui-logo-bg.png" style="text-align: center;" alt="Dekilte UI" />
</div>

> Note: This project is under development. It has not yet implemented sufficient functionality. Please use with caution.

```shell
$ npm install -D dekilte-ui
```

# setting

`customElement` is `true`.

```js
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  // here line
  // compilerOptions: {
  //   customElement: true,
  // },

  kit: {
    adapter: adapter(),
  },
};

export default config;
```

# Author

Daiki Nakashima

# LISENCE

MIT