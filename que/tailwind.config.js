/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('/src/images/background.png')"
      }, 
     colors: {
      "blue" : "#05046A"
     }
    },

  },
  plugins: [],
}