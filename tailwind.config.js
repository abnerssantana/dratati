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
        primary: "#E8B4BC",  // Tom principal rosa suave
        background: {
          light: "#FFF5F6",  // Fundo claro rosado
          dark: "rgba(51, 12, 48, 1)",   // Versão escura mais suave
        },
        surface: {
          light: "#F4D9DD",  // Rosa mais claro para superfícies
          dark: "#F4D9DD",   // Mantido igual para consistência
        },
        border: {
          light: "#FFE4E8",  // Borda rosa claro
          dark: "#2D2D2D",   // Versão escura
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