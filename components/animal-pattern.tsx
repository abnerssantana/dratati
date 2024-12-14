'use client';
import React from 'react';
import { Bird, Cat, Dog, Rabbit, Squirrel, LucideIcon } from 'lucide-react';
import { useTheme } from "next-themes";

const AnimalPattern = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  
  const animals: LucideIcon[] = [Bird, Cat, Dog, Rabbit, Squirrel];
  const rows = 5;
  const cols = animals.length;
  const spacing = 40;

  // Função para verificar se um animal pode ser colocado em uma posição
  const canPlaceAnimal = (
    grid: (LucideIcon | undefined)[][],
    row: number,
    col: number,
    animal: LucideIcon
  ): boolean => {
    // Verifica horizontal (esquerda)
    if (col > 0 && grid[row][col - 1] === animal) return false;
    
    // Verifica horizontal (direita)
    if (col < cols - 1 && grid[row][col + 1] === animal) return false;
    
    // Verifica vertical (cima)
    if (row > 0 && grid[row - 1][col] === animal) return false;
    
    // Verifica vertical (baixo)
    if (row < rows - 1 && grid[row + 1][col] === animal) return false;
    
    // Verifica diagonal (superior esquerda)
    if (row > 0 && col > 0 && grid[row - 1][col - 1] === animal) return false;
    
    // Verifica diagonal (superior direita)
    if (row > 0 && col < cols - 1 && grid[row - 1][col + 1] === animal) return false;
    
    // Verifica diagonal (inferior esquerda)
    if (row < rows - 1 && col > 0 && grid[row + 1][col - 1] === animal) return false;
    
    // Verifica diagonal (inferior direita)
    if (row < rows - 1 && col < cols - 1 && grid[row + 1][col + 1] === animal) return false;

    return true;
  };

  // Função para gerar grid com animais sem repetição
  const generateNonRepeatingGrid = (): LucideIcon[][] => {
    const grid: (LucideIcon | undefined)[][] = Array(rows)
      .fill(undefined)
      .map(() => Array(cols).fill(undefined));
    
    const fillGrid = (row: number, col: number): boolean => {
      if (col >= cols) {
        col = 0;
        row++;
      }
      if (row >= rows) {
        return true;
      }
      
      // Embaralha os animais para cada posição
      const shuffledAnimals = [...animals].sort(() => Math.random() - 0.5);
      
      for (const animal of shuffledAnimals) {
        if (canPlaceAnimal(grid, row, col, animal)) {
          grid[row][col] = animal;
          if (fillGrid(row, col + 1)) {
            return true;
          }
          grid[row][col] = undefined;
        }
      }
      
      return false;
    };
    
    fillGrid(0, 0);
    return grid as LucideIcon[][];  // Safe cast since we know the grid is fully populated
  };

  const animalGrid = generateNonRepeatingGrid();

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="animal-pattern"
          x="0"
          y="0"
          width={cols * spacing}
          height={rows * spacing}
          patternUnits="userSpaceOnUse"
        >
          {animalGrid.map((rowAnimals, rowIndex) => (
            <g key={rowIndex}>
              {rowAnimals.map((Animal, colIndex) => (
                <g
                  key={`${rowIndex}-${colIndex}`}
                  transform={`translate(${colIndex * spacing} ${rowIndex * spacing})`}
                >
                  <Animal
                    size={16}
                    className={isDark ? "text-neutral-600" : "text-neutral-300"}
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