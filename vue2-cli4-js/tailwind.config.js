module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cy-blue': '#4956e3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
