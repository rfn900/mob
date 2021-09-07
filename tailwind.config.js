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
      screens: {
        xs: "360px",
      },
      spacing: {
        phone: "780px",
      },
      height: {
        100: "28rem",
        104: "32rem",
      },
      width: {
        xlfull: "200%",
      },
      maxWidth: {
        "7xl": "76rem",
        "8xl": "80rem",
        "9xl": "84rem",
        "10xl": "88rem",
      },
      maxHeight: {
        phone: "840px",
      },
      minHeight: {
        phone: "840px",
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
