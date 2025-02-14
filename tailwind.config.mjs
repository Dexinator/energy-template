/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Updated color palette to match SISTEQ Control's brand colors
        base: {
          50: "#ffffff", // White
          100: "#f9f9f9",
          200: "#e6e6e6",
          300: "#dbdbdb",
          400: "#d1d1d1",
          500: "#c7c7c7",
          600: "#bdbdbd",
          700: "#b3b3b3",
          800: "#a8a8a8",
          900: "#9e9e9e",
          950: "#949494",
          DEFAULT: "#ffffff", // White as the default base color
        },
        "base-dark": {
          50: "#808080",
          100: "#757575",
          200: "#6b6b6b",
          300: "#616161",
          400: "#575757",
          500: "#4d4d4d",
          600: "#424242",
          700: "#383838",
          800: "#2e2e2e",
          900: "#242424",
          950: "#1a1a1a",
          DEFAULT: "#1a1a1a", // Dark base color
        },
        accent: {
          50: "#ffffff", // White
          100: "#c7c7c7",
          200: "#b3b3b3",
          300: "#949494",
          400: "#707070",
          500: "#545454",
          600: "#3d3d3d",
          700: "#292929",
          800: "#1c1c1c",
          900: "#141414",
          950: "#000000", // Black
          DEFAULT: "#000000", // Black as the default accent color
          light: "#ffffff", // White
          dark: "#000000", // Black
        },
        primary: {
          50: "#ffe6e6", // Light red
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0033", // SISTEQ Red (Primary brand color)
          DEFAULT: "#ff0033", // SISTEQ Red
          600: "#cc0029",
          700: "#99001f",
          800: "#660014",
          900: "#33000a",
          950: "#1a0005",
        },
        secondary: {
          50: "#f9f9f9", // Light gray
          100: "#efefef",
          200: "#e6e6e6",
          300: "#dbdbdb",
          400: "#d1d1d1",
          500: "#c7c7c7",
          DEFAULT: "#c7c7c7", // Gray as the secondary color
          600: "#bdbdbd",
          700: "#b3b3b3",
          800: "#a8a8a8",
          900: "#9e9e9e",
          950: "#949494",
        },
        cta: {
          50: "#ffe6e6", // Light red
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0033", // SISTEQ Red for CTA
          DEFAULT: "#ff0033", // SISTEQ Red
          600: "#cc0029",
          700: "#99001f",
          800: "#660014",
          900: "#33000a",
          950: "#1a0005",
        },
      },
      screens: {
        midmd: "880px", // Custom breakpoint
      },
      boxShadow: {
        aesthetic: "0 3px 10px rgb(0,0,0,0.2)", // Light shadow
        dark: "inset 0 1px 0 0 #ffffff0d", // Dark shadow
      },
      fontFamily: {
        sans: ['Acumin Variable Concept', ...defaultTheme.fontFamily.sans], // Primary font for body text
        'sf-pro-text': ['SF Pro Text', ...defaultTheme.fontFamily.sans], // SF Pro Text for medium weight
        'sf-pro-display': ['SF Pro Display', ...defaultTheme.fontFamily.sans], // SF Pro Display for bold headings
      },
    },
  },
  plugins: [],
};