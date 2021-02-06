module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-blue": "#3CB7E7",
        "footer-blue": "#D3EEF9",
        "orange": "#ED6731",
        "card-blue": "#F1F7F9",
      },
      letterSpacing: {
        widest: '.5em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
