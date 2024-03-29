/** @type {import('tailwindcss').Config} */

export const colors = {
  primary: "#0052fe",
  blueIcon: "#0082ff",
  highlight: "#0141cf",
  blueBg: "#e8f4fd",
  blueBgHero: "#e2ecfe",
  gradBlue: "linear-gradient(81.62deg, #2870ea 8.72%, #1b4aef 85.01%)",
  blueIconMenu: "#0B182F",

  bg: "#EFF2F5",
  heading: "#0f1629",
  text: "#44475b",
  textDark: "#111827",
  textLight: "#788f9b",
  subH: "#768396",
  infoIcon: "#7c7e8c",
  infoIconLight: "#abb9bf",
  grey: "#c7c8ce",
  headingSenti: "#191c1f",
  textSenti: "#3e5765",
  headingToken: "#202020",
  textToken: "#3e424a",
  subHHero: "#5d667b",
  textHero: "#0B1426",
  border: "#dee1e6",
  borderBtnRow: "#D3E0E6",
  borderCard: "#e3e3e3",

  green: "#0fba83",
  textGreen: "#14b079",
  greenIcon: "#0fba83",
  textGreenLike: "#32be88",
  bgGreenLike: "#0ab27d0f",
  greenBg: "#ebf9f4",
  gradGreen: "linear-gradient(135deg, #79f1a4 0%, #0e5cad 100%)",

  red: "#f7324c",
  textRed: "#e96975",
  bgRed: "#ee68551a",

  gradOrange: "linear-gradient(135.73deg, #ff9865 0%, #ef3031 110.55%)",
  orange: "#faa002",
};

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
