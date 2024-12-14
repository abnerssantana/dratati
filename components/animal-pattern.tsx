'use client';
import React from 'react';
import { Bird, Cat, Dog, Rabbit, Squirrel } from 'lucide-react';
import { useTheme } from "next-themes";

const AnimalPattern = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const animals = [Bird, Cat, Dog, Rabbit, Squirrel];
  const rows = 5;
  const spacing = 40;

  // Função para embaralhar array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Gera linhas com animais em ordem aleatória
  const generateRandomRows = () => {
    return Array.from({ length: rows }).map(() => shuffleArray(animals));
  };

  const randomRows = generateRandomRows();

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="animal-pattern"
          x="0"
          y="0"
          width={animals.length * spacing}
          height={rows * spacing}
          patternUnits="userSpaceOnUse"
        >
          {randomRows.map((rowAnimals, rowIndex) => (
            <g key={rowIndex}>
              {rowAnimals.map((Animal, colIndex) => (
                <g
                  key={`${rowIndex}-${colIndex}`}
                  transform={`translate(${colIndex * spacing} ${rowIndex * spacing})`}
                >
                  <Animal
                    size={18}
                    className={isDark ? "text-neutral-500" : "text-neutral-300"}
                  />
                </g>
              ))}
            </g>
          ))}
        </pattern>
        <rect width="100%" height="100%" fill="url(#animal-pattern)" />
      </svg>
    </div>
  );
};

export default AnimalPattern;