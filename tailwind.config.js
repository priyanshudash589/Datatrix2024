const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "patter-data": "url('/src/assets/databg.gif')",
        "patt-grid": "url('/src/assets/grid.svg')",
        "bg2": "url('/src/assets/technical.gif')",
        "event": "url('/src/assets/Desktop - 1.svg')",
        "event2": "url('/src/assets/Desktop - 2.svg')",
        "patdata": "url('/src/assets/techno3.gif')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
    fontFamily: {
      orbitron: ["Orbitron"],
      aston: ["Anton"],
    },
  },
  plugins: [],
});
