/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        btnGradient: "linear-gradient(180deg, #EF9B11 0%, #405558 100%)",
        heroGuy: "url('../src/assets/banner.svg')",
        buildGradient:
          "linear-gradient(180deg, rgba(239, 155, 17, 0.5) 0%, rgba(64, 85, 88, 0.5) 100%)",
        bgApp: "url('../src/assets/bgapp.svg')",
        bgAppmobile: "url('../src/assets/bgappmob.svg')",
        aboutBanner: "url('../src/assets/aboutbg.svg')",
      },
      colors: {
        primary: "#12082D",
        bannerColor: "#405558",
        yello: "#EF9B11",
      },
      boxShadow: {
        moneyShadow: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
