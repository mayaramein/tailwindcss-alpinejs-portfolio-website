/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./assets/js/*.js", "./assets/html/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primaryColor: '#5333ed',
        primaryLighterColor: '#826bf1',
        primaryDarkerColor: '#3c3465',
        secondaryColor: '#ffc53b',
        lighterColor: '#f1f6ff',
        whiteColor: '#fff',
        darkerColor: '#16161e',
        blackColor: '#000'
      },
      fontFamily: {
        'code': ['"Source Sans Pro"'],
      }
    },
  },
  plugins: [],
}
