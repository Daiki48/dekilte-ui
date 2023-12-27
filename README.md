<div style="display: flex;">
  <img src="/static/dekilte-ui-logo-bg.png" style="justify-content: center;" alt="Dekilte UI" />
</div>

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