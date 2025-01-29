/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/app/**/*.ts'],
  safelist: [],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      primary: {
        800: '#304761',
        900: '#263037',
      },
      gray: {
        50: '#F8F8FA',
        200: '#fafafa',
        300: '#E4E4E4',
        600: '#707070',
        700: '#BEBEBE',
      },
      green: {
        500: '#4AB100',
      },
      red: {
        500: '#C43D14',
      },
    },
    extend: {},
  },
};
