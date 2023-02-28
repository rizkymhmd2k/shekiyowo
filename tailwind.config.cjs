/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        // 
        dimPrimary: "rgb(32,32,32)",

        green: "rgba(35,160,148,255)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimYellow:"rgb(251,251,203)",
        yellow:"rgba(255,201,0,255)",
        pink:"rgba(255,192,203)",
        pink1:"#e75480"


      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    // extend: {
    //   padding: ['last'],
    //   margin: ['last'],

    // },
    
  },
  plugins: [],
};
