/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#53B175',
        'light-gray': '#F2F3F2',
      },
      fontFamily: {
        dongle: ['Dongle', 'sans-serif'],
        montserrat: ['Montserrat','sans-serif' ],
      },
      fontSize: {
        lg: ['3.75rem', '3.75rem'],
      },
      animation:{
        "ping-slow": " ping 3s "
      },
      keyframes: {
        ping:{
          opacity: 1,
        }
      },
    },
  },
  plugins: [],
};

