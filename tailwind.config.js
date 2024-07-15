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
        lightBlue: "#f3f3f3",
        cardGray: "#f0f0f0",
      },
      backgroundImage:{
        menu:"linear-gradient(rgba(35, 35, 35, 0.94), rgba(35, 35, 35, 0.94)),  url('../img/bg-image.jpg')",
        shop:"linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),   url('../img/shop_banner.jpg')",
        team:"linear-gradient(rgba(165, 184, 48,1),rgba(165, 184, 48,0.4)), url('../img/lawn-768316_1920.jpg')",
      },
      animation:{
        fadeUp: "fadeUp 0.5s linear",
        fadeDown: "fadeDown 0.5s linear",
        textFade: "textFade 1.5s ease-in-out"
      },

      keyframes:{
        fadeUp: {
          from: {opacity: 0, transform:'translateY(-20rem)' },
          to: {opacity: 100, transform:'translateY(-19rem)'},
        },
        fadeDown: {
          from: {opacity: 0},
          to: {opacity: 100},
        },
        textFade: {
          from: {opacity: 0, transform:'translateY(50%)'},
          to: {opacity: 100, transform:'translateY(0%)'},
        }
      }
    },
  },
  plugins: [],
}

