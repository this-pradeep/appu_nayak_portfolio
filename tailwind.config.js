/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Montserrat", "sans-serif"],
      },
      animation: {
        text: "text 5s ease infinite",
        rotate: "rotate 3s linear infinite",
         "rotate-center": "rotate-center 7s linear  infinite "
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "rotate-center": {
          "0%": {
              transform: "rotate(0)"
          },
          to: {
              transform: "rotate(360deg)"
          }
      },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
