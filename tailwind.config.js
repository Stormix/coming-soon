module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
