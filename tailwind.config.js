/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        btnGradient: "linear-gradient(180deg, #EF9B11 0%, #405558 100%)",
        heroGuy: "url('../src/assets/banner.svg')",
      },
      colors:{
        primary:"#12082D",
      },
      boxShadow:{
        moneyShadow:"0px 4px 4px 0px #00000040"
      }

    },
  },
  plugins: [],
};
