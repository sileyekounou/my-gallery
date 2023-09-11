/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

