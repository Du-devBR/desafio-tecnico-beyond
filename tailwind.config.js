/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#2D5FFF",
        red: "#BF3B44",
        BaseGray100: "#F9F0F0",
        BaseGray300: "#DEDEDE",
        BaseGray700: "#4E4E4E",
        BaseGray900: "#151515",
        BaseGray1000: "#000000",
        white: "#ffffff",
      }
    },
  },
  plugins: [],
}
