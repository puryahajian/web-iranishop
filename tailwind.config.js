/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx}",
    "./src/components/**/*.{js,ts,jsx}",
    "./src/app/**/*.{js,ts,jsx}",
    "./src/db/**/*.{js,ts,jsx}",
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

