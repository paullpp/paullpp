/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4b5563",
          "secondary": "#57534e",
          "accent": "#374151",
          "neutral": "#374151",
          "base-100": "#fffbe5",
          "info": "#1e40af",
          "success": "#00cb65",
          "warning": "#ffae00",
          "error": "#d7003a",
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [require('daisyui')],
}

