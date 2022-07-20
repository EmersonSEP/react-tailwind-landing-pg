/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand':['Quicksand'],
      'nunito': ['Nunito'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
      'gradient-to-tr':
        'linear-gradient(to top right, var(--gradient-color-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
      'gradient-to-br':
        'linear-gradient(to bottom right, var(--gradient-color-stops))',
      'gradient-to-b':
        'linear-gradient(to bottom, var(--gradient-color-stops))',
      'gradient-to-bl':
        'linear-gradient(to bottom left, var(--gradient-color-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
      'gradient-to-tl':
        'linear-gradient(to top left, var(--gradient-color-stops))',
    },
    gradientColorStops: (theme) => theme('colors'),
    backgroundOpacity: (theme) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    extend: {
      backgroundImage: {
        'imgFood': "url('./src/assets/food.svg)",
      },
  },
},
  plugins: [],
}
