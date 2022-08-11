/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#53B175',
      },
      fontFamily: {
        dongle: ['Dongle', 'sans-serif'],
        montserrat: ['Montserrat','sans-serif' ],
      },
      fontSize: {
        lg: ['58px', '58px'],
      },
      animation:{
        "ping-slow": " ping 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};

