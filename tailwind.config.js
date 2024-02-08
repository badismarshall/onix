/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      background:{
        hero: "url('/src/assets/heroimages.png')",
        "foterImage": "url('/src/assets/foterimage.svg')",
      },
      screens: {
        xs: "375px",
        sm: "768px",
        ss: "1024px",
        md: "1200px",
        lg: "1440px",
        xl: "1600px",
      }
    },
  },
  plugins: [],
};