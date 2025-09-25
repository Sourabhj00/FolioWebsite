/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        brand: {
          bg: "#0f0f16",        // page background
          card: "#141422",      // cards
          ring: "#8b5cf6",      // violet-500
          grad1: "#8b5cf6",     // purple
          grad2: "#22d3ee",     // cyan
        }
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(139,92,246,.4)",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        moderndark: {
          "primary": "#8b5cf6",
          "primary-content": "#ffffff",
          "secondary": "#22d3ee",
          "accent": "#a78bfa",
          "neutral": "#1f1f2e",
          "base-100": "#0f0f16",
          "base-200": "#141422",
          "base-300": "#1b1b2b",
          "info": "#22d3ee",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "moderndark",
  },
}
