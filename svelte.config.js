import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    adapter: adapter({
      fallback: 'index.html' // enables SPA routing support
    }),
    paths: {
      relative: false
    }
  },
};

export default config;
