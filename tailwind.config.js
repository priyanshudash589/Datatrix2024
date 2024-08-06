
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'patter-data': "url('/src/assets/databg.gif')",
      }
    },
    fontFamily:{
      orbitron:["Orbitron"],
      aston:["Anton"],
    }
  },
  plugins: [],
});