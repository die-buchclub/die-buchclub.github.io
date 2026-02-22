import type {Config} from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/layerchart/**/*.{svelte,js}'
    ],

    theme: {
        extend: {}
    },

    daisyui: {
        themes: [
            {
              silk: {
                "color-scheme": "light",

                "base-100": "oklch(97% 0.0035 67.78)",
                "base-200": "oklch(95% 0.0081 61.42)",
                "base-300": "oklch(90% 0.0081 61.42)",
                "base-content": "oklch(44% 0.03 256.802)",

                "primary": "oklch(51% 0.222 16.935)",
                "primary-content": "oklch(94% 0.028 342.258)",

                "secondary": "oklch(83.92% 0.0901 136.87)",
                "secondary-content": "oklch(44% 0.119 151.328)",

                "accent": "oklch(44% 0.119 151.328)",
                "accent-content": "oklch(94% 0.028 342.258)",

                "neutral": "oklch(94% 0.03 12.58)",
                "neutral-content": "oklch(44% 0.03 256.802)",

                "info": "oklch(80.39% 0.1148 241.68)",
                "info-content": "oklch(30.39% 0.1148 241.68)",

                "success": "oklch(83.92% 0.0901 136.87)",
                "success-content": "oklch(23.92% 0.0901 136.87)",

                "warning": "oklch(83.92% 0.1085 80)",
                "warning-content": "oklch(43.92% 0.1085 80)",

                "error": "oklch(75.1% 0.1814 22.37)",
                "error-content": "oklch(35.1% 0.1814 22.37)",

                "--radius-selector": "2rem",
                "--radius-field": "0.5rem",
                "--radius-box": "1rem",

                "--size-selector": "0.25rem",
                "--size-field": "0.25rem",

                "--border": "2px",
                "--depth": "1",
                "--noise": "0"
              }
            }

        ]
    },
    plugins: [daisyui]
} as Config;
