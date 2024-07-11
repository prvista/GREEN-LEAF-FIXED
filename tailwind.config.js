/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:"Poppins",
        roboto: "Roboto Slab",
      },

      colors:{
        primary: "#9fba1a",
        secondary: "#232323",
        tertiary: "#8ba216",
        light: "#ffffff",
        pGray: "#9c9c9c;",
      },
      backgroundImage:{
        menu:"linear-gradient(rgba(35, 35, 35, 0.94), rgba(35, 35, 35, 0.94)),  url('../img/bg-image.jpg')",
      }
    },
  },
  plugins: [],
}

