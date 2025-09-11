/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BorderCustom: "#f15923",
        BgCustom: "#f15923",
        BgTimer: "#fdede7",
        BgFooter: "#454545",
        BorderGray: "#BCBCBC",
        Gray1: "#f7f7f7",
      },
      fontFamily: {
        sans: ["sans"],
        sahelBold: ["sahelBold"],
      },
    },
  },
  plugins: [],
}

