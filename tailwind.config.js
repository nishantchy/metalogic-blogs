/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeRed: "#CB3534",
      },
      fontFamily: {
        rokkit: ["Rokkitt", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
