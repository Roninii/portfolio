/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "ronini-purple": {
          50: "hsl(252, 100%, 97%)",
          100: "hsl(256, 100%, 95%)",
          200: "hsl(253, 100%, 90%)",
          300: "hsl(256, 100%, 83%)",
          400: "hsl(258, 100%, 73%)",
          500: "hsl(262, 100%, 62%)",
          600: "hsl(265, 100%, 54%)",
          700: "hsl(265, 100%, 47%)",
          800: "hsl(265, 99%, 42%)",
          900: "hsl(265, 97%, 35%)",
          950: "hsl(262, 100%, 23%)",
        },

        "primary-light": "hsl(265, 70%, 95%)",
      },
    },
    plugins: [],
  },
};
