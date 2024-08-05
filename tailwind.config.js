import daisyui from "daisyui";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      orbitron: ["Orbitron"],
      aston: ["Anton"],
    },
  },
  plugins: [daisyui],
});