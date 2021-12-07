const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
      },
      fontFamily: {
        sans: ['Open Sans'],
        serif: ['Roboto Slab'],
        mono: ['Ubuntu Mono'],
        display: ['Bebas Neue'],
        body: ['Ubuntu Mono'],
      },
      screens: {
        xs: '360px',
      },
      spacing: {
        phone: '780px',
        100: '28rem',
        104: '32rem',
        fuller: '120%',
      },
      height: {
        100: '28rem',
        104: '32rem',
        108: '36rem',
      },
      width: {
        slider: '114rem',
      },
      maxWidth: {
        '7xl': '76rem',
        '8xl': '80rem',
        '9xl': '84rem',
        '10xl': '88rem',
      },
      maxHeight: {
        phone: '840px',
      },
      minHeight: {
        phone: '840px',
      },
      borderRadius: {
        half: '360px',
        big: '100px',
        medium: '50px',
      },
      translate: {
        '10px': '10px',
        '-10px': '-10px',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      rotate: {
        '-37': '-35deg',
        37: '35deg',
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['focus'],
      scale: ['hover', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
