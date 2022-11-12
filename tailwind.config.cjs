/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      },
      colors: {
        'pry-clr-0': 'rgb(241, 245, 248)',
        'pry-clr-1': 'rgb(6, 50, 81)',
        'pry-clr-2': 'rgb(97, 125, 152)',
        'pry-clr-3': 'rgb(104,182,238)',
        'pry-clr-4': 'rgb(73, 166, 233)',
        // 'pry-clr-5': '#e66b6b',
        'pry-clr-6': '#e66b6b',
        'pry-clr-7': '#bb2525',
        'pry-clr-8': '#6be675',
        'pry-clr-9': '#25bb32',
      },
      screens: {
        sm: "600px",
        md: "800px",
        lg: "1200px",
        xl: "1440px"
      }
    },
  },
  plugins: [],
}