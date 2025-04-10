/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2342",
          light: "#12356A",
        },
        accent: {
          DEFAULT: "#2CA6A4",
          hover: "#25918F",
        },
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFDE33",
        },
        gray: {
          light: "#F5F7FA",
          medium: "#E2E8F0",
          dark: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-montserrat)"],
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}; 