/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeDesign: "#EFB13A",
        blackDesign: "#1F1F1F",
        greyDesign: "#7B7B7B"
      }
    },
  },
  plugins: [],
}

