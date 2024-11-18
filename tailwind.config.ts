import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/layerchart/**/*.{svelte,js}'
  ],

  theme: {
    extend: {}
  },

  daisyui: {
    themes: ['valentine', 'light']
  },

  plugins: [daisyui]
} as Config;
