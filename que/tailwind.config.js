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
     },
     screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      }
    },

  },
  plugins: [],
}