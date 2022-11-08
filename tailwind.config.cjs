/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'darkBlue': '#373A50',
      'blue': '#9297CB',
      'orange': '#EE7036',
      'dust': '#F7CB9A',
      'salmon': '#F6C1A7',
      'green': '#B6C796',
      'white': '#FFFFFF',
      'gray': '#CACACA',
      'black': '#191919',
    
    },
    fontFamily: {
      'saoTorpes': 'SaoTorpes',
      'poppins': 'Poppins',
      'body': 'Proxima Nova',
    },
    extend: {
      boxShadow: {
        'solidBox': '0.5rem 0.5rem',
      }
    },
  },
  plugins: [],
}