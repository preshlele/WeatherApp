/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        'backround-img': "url('../public/background.jpg')",
      },
      colors: {
        'greenish': 'rgb(46,51,17)',
      },
    },
  },
  plugins: [],
}
