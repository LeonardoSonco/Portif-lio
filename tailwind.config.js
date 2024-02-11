/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes:{
        slideDown:{
          "0%" :{transform : "translateY(-30px)", opacity : "0"},
          "100%" :{transform : "translateY(0px)", opacity : "1"},
        }
      },
      animation:{
        "slide-down": "slideDown 1s linear",
        "slide-down-a": "slideDown 1.4s linear"
      },
      colors:{
        "cinza" : "rgb(25, 39, 51)",
        "verdeVibrante" : "#6EF3A5"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

