/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeDesing: "#EFB13A",
        blackDesing: "#1F1F1F",
        greyDesing: "#7B7B7B"
      }
    },
  },
  plugins: [],
}

