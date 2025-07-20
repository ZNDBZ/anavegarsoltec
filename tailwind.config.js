/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/swiper/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        textShadow: {
          sm: "0 1px 2px var(--tw-shadow-color)",
          DEFAULT: "0 2px 4px var(--tw-shadow-color)",
          md: "0 4px 6px var(--tw-shadow-color)",
          lg: "0 8px 12px var(--tw-shadow-color)",
          xl: "0 10px 20px var(--tw-shadow-color)",
        },
        inconsolata:[ "Inconsolata", "sans-serif"],
        rubik:[ "Rubik", "sans-serif" ],
        huninn:[ "Huninn" ],
        oxygen:["Oxygen", "sans-serif" ],
        fjalla:["Fjalla","sans-serif"]
      },
      screens:{
          "xs":"420px",
      }
    },
  },
  plugins: [],
};
