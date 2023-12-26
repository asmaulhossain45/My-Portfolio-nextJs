/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#3f3cbb",
        primary: "#121063",
        secondary: "#565584",
        success: "#3ab7bf",
        warning: "#ecebff",
        error: "#78dcca",
      },
    },
  },
  plugins: [],
};
