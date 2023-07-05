/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/src/images/background.jpg')",
      },
      colors: {
        jet: "#3C3744",
        blue: "#090C9B",
        Byzantine: "#3D52D5",
        powderBlue: "#B4C5E4",
        Ivory: "#FBFFF1",
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
