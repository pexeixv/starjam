/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: "#988AD6",
      },
    },
  },
  plugins: [],
};
