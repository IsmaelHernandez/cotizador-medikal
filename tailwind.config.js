/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
      colors: {
        'blue': {
          100: '#B2EBEE',
          200: '#EEF9F9',
          300: '#111D39',
          500: '#13395F',
          600: '#121D39'
        },
        'white': {
          200: '#FFFFFF'
        },
        'aqua': {
          100: '#EEF9F9',
          200: '#89E3E7',
          300: '#00ABB3',
          400: '#CBEEF0',
          500: '#107E83'
        },
        'yellow': {
          100: '#FFFCF0',
          200: '#A69E00',
          300: '#BEB500',
          400: '#FAF2CB',
          500: '#999207'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'lg': '1024px',
        'md': '993px',
        'sm': {'min': '640px', 'max': '767px'},
        'sd': {'min': '440px', 'max': '640px'},
        'sx': {'min': '440px', 'max': '604px'},
        'ss': {'min': '340px', 'max': '430px'}
      },
    },
  },
  plugins: [],
}

