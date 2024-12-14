'use client';

import React from 'react';
import { Bird, Cat, Dog, Rabbit, Squirrel } from 'lucide-react';
import { useTheme } from "next-themes";

const AnimalPattern = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const animals = [
    { icon: Bird, offset: '0,0' },
    { icon: Cat, offset: '32,32' },
    { icon: Dog, offset: '64,0' },
    { icon: Rabbit, offset: '0,64' },
    { icon: Squirrel, offset: '64,64' }
  ];

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="animal-pattern"
          x="0"
          y="0"
          width="96"
          height="96"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          {animals.map(({ icon: Icon, offset }, index) => {
            const [x, y] = offset.split(',');
            return (
              <g key={index} transform={`translate(${x} ${y})`}>
                <Icon
                  size={16}
                  className={isDark ? "text-neutral-800" : "text-neutral-300"}
                />
              </g>
            );
          })}
        </pattern>
        <rect width="100%" height="100%" fill="url(#animal-pattern)" />
      </svg>
    </div>
  );
};

export default AnimalPattern;