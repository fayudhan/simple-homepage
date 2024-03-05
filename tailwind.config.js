/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customBlue: "#2A4DD0",
        customGreen: "#4CA154",
        customGray: "#68748A",
        customDarkBlue: "#111729",
        customDarkGray: "#223344",
        customGrayBlue: "#677389",
        customGray: "#909193",
        customLightBlue: "#F2F9FE",
        customWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
