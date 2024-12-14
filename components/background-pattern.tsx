import { CircleDot } from "lucide-react";
import { useTheme } from "next-themes";

const BackgroundPattern = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="fixed inset-0 z-0 w-full h-full">
      <svg width="100%" height="100%" className="opacity-40">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <CircleDot
            size={8}
            className={
              isDark ? "text-neutral-800/50" : "text-neutral-300/50"
            }
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pattern-circles)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
