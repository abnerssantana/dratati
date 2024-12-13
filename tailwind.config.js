/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#E8B4BC",        // Rosa suave
        background: {
          light: "#2D1F20",        // Background escuro rosado
          dark: "#1A1415",         // Versão ainda mais escura com tom rosado
        },
        surface: {
          light: "#F4D9DD",        // Rosa claro para superfícies
          dark: "#3D2A2B",         // Superfície escura rosada
        },
        border: {
          light: "#4A3435",        // Borda escura rosada
          dark: "#1A1415",         // Borda mais escura
        },
      },
      fontFamily: {
        sans: ["var(--font-sfpro)"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      }
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};