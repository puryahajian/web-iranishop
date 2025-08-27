/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BorderBlue: "#f15923",
        BgBlue: "#f15923",
        BgFooter: "#454545",
        BorderGray: "#BCBCBC",
        Gray1: "#E6E6E6",
      },
      fontFamily: {
        sans: ["sans"],
        sahelBold: ["sahelBold"],
      },
    },
  },
  plugins: [],
}

