module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary : "#F15D2A"
      },
      fontFamily: {
        primary : "Montserrat"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
