'use client';
import React from 'react';
import { Bird, Cat, Dog, Rabbit, Squirrel } from 'lucide-react';
import { useTheme } from "next-themes";

const AnimalPattern = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  
  const animals = [
    { icon: Bird },
    { icon: Cat },
    { icon: Dog },
    { icon: Rabbit },
    { icon: Squirrel }
  ];

  const horizontalSpacing = 50; // Ajuste o espaçamento entre colunas
  const verticalSpacing = 30;   // Ajuste o espaçamento entre linhas
  const rows = 5;               // Aumente para mais linhas

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="animal-pattern"
          x="0"
          y="0"
          width={animals.length * horizontalSpacing}
          height={rows * verticalSpacing}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          {Array.from({ length: rows }).map((_, row) => (
            animals.map(({ icon: Icon }, col) => (
              <g
                key={`${row}-${col}`}
                transform={`translate(${(col * horizontalSpacing) + (row * horizontalSpacing / 2)} ${row * verticalSpacing})`}
              >
                <Icon
                  size={20} // Tamanho do ícone ajustado
                  className={isDark ? "text-neutral-400" : "text-neutral-300"}
                />
              </g>
            ))
          ))}
        </pattern>
        <rect width="100%" height="100%" fill="url(#animal-pattern)" />
      </svg>
    </div>
  );
};

export default AnimalPattern;
