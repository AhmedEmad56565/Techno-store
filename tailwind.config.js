/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#0B4A72',
      secondary: '#E98316',
      'text-color': '#3F3F3F',
      gray: '#ECECEC',
      zinc: '#F3F3F3',
      white: '#fff',
      black: '#000',
    },

    screens: {
      xs: '475px',
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '34px',
        xs: '56px',
        sm: '68px',
        md: '114px',
        lg: '164px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
