const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins Regular", ...defaultTheme.fontFamily.sans],
      serif: ["Made Dillan", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        magenta: "#FC19A3",
        purple: "#9515E5",
        "sky-blue": "#F4FAFF",
        "light-purple": "#F1D2FB",
        yellow: "#F9E067",
        gray: "#7A6B6B",
      },
    },
  },
  plugins: [],
}
