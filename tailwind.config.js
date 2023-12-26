/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["emerald"],
  },
  theme: {
    extend: {
      colors: {
        'primary': "#b51ce3",
        'action': "",
      },
    },
  },
  plugins: [require("daisyui")],
}

