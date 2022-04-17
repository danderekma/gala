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
    extend: {},
  },
  plugins: [],
}
