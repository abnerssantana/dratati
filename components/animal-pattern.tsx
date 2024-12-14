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

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="animal-pattern"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <g>
            {/* Top Row */}
            <Bird size={16} className={isDark ? "text-neutral-600" : "text-neutral-300"} transform="translate(32, 0)" />
            
            {/* Middle Row */}
            <Dog size={16} className={isDark ? "text-neutral-600" : "text-neutral-300"} transform="translate(0, 32)" />
            <Cat size={16} className={isDark ? "text-neutral-600" : "text-neutral-300"} transform="translate(64, 32)" />
            
            {/* Bottom Row */}
            <Rabbit size={16} className={isDark ? "text-neutral-600" : "text-neutral-300"} transform="translate(32, 64)" />
          </g>
        </pattern>
        <rect width="100%" height="100%" fill="url(#animal-pattern)" />
      </svg>
    </div>
  );
};

export default AnimalPattern;