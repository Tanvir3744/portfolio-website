/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d287e5",
          "secondary": "#e798f2",
          "accent": "#58f24f",
          "neutral": "#1C1C26",
          "base-100": "#2D2B55",
          "info": "#4FA7C9",
          "success": "#166F67",
          "warning": "#EEB43F",
          "error": "#F54263",
        },
      },
    ],
  },
}
