/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern':
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('/images/bg.webp')",
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        mouseCircleAnimation: {
          '0%': {
            width: '2rem',
            height: '2rem',
          },
          '25%': {
            width: '3rem',
            height: '3rem',
          },
          '35%': {
            width: '1rem',
            height: '1rem',
          },
          '70%': {
            width: '3rem',
            height: '3rem',
          },
          '100%': {
            width: '2rem',
            height: '2rem',
          },
        },
        mouseDotAnimation: {
          '0%': {
            width: '0.1rem',
            height: '0.1rem',
          },
          '55%': {
            width: '0.3rem',
            height: '0.3rem',
          },
          '100%': {
            width: '0.1rem',
            height: '0.1rem',
          },
        },
      },
      animation: {
        mouseCircleAnimation: 'mouseCircleAnimation 10s linear infinite',
        mouseDotAnimation: 'mouseDotAnimation 10s linear infinite',
        bounce: 'bounce 4s infinite',
        rubber: 'rubberBand 1s ease-out',
        tilt: 'tilt 10s infinite linear',
      },
      fontFamily: {
        lora: "'Lora',serif",
        poppins: "'Poppins'",
      },
      transitionTimingFunction: {
        'nav-transition': 'cubic-bezier(0.9, 0, 0.33, 1)',
      },
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        blue: colors.blue,
        amber: colors.amber,
        lime: colors.lime,
        yellow: colors.yellow,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        indigo: colors.indigo,
        purple: colors.purple,
        rose: colors.rose,
        pink: colors.pink,
        slate: colors.slate,
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
};
