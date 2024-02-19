/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#141414",
        textHover: "#0b1925",
        redAccent: "rgb(164, 250, 249)",
        blueAccent: "rgb(246, 250, 164)",
        greenAccent: "rgb(250, 164, 164)",
      }
    },
  },
  plugins: [],
}

