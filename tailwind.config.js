module.exports = {
  //mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        serif: ["Roboto Slab"],
        mono: ["Ubuntu Mono"],
        display: ["Bebas Neue"],
        body: ["Ubuntu Mono"],
      },
      spacing: {
        phone: "780px",
      },
      height: {
        100: "28rem",
        104: "32rem",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
