/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/src/images/background.jpg')",
      },
      colors: {
        blue: "#05046A",
        aqumarine: "#73FBD3",
        cyan: "#73FBD3",
        skyBlue: "#59D2FE",
        chefBlue: "#4A8FE7",
        crayola: "#4A8FE7"
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "2560px",
      },  
    },
  },
  plugins: [],
};
