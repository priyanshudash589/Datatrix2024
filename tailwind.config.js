
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'patter-data': "url('/src/assets/databg.gif')",
        'patt-grid': "url('/src/assets/grid.svg')",
        'bg2': "url('/src/assets/technical.gif')"
      }
    },
    fontFamily:{
      orbitron:["Orbitron"],
      aston:["Anton"],
    }
  },
  plugins: [],
});