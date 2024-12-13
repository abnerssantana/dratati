"use client";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const variants = cva(
  "rounded-xl border flex flex-col justify-center @container transition-all duration-300",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "1x6": "md:col-span-1 col-span-2 row-span-6 relative overflow-hidden",
        "2x1": "md:col-span-2 col-span-full p-6",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x4": "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
        "2x7": "md:col-span-2 col-span-full row-span-7 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = {
  children: React.ReactNode;
  backgroundColor?: {
    light: string;
    dark: string;
  };
} & VariantProps<typeof variants>;

const GridItem = ({ size, children, backgroundColor }: GridItemProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  if (!mounted) {
    return null;
  }

  const bgColor = backgroundColor
    ? (isDark ? backgroundColor.dark : backgroundColor.light)
    : (isDark ? "#1A1A19" : "#859F3D");

  return (
    <div
      className={cn(
        variants({ size }),
        "border-border-light dark:border-border-dark hover:scale-[1.02] hover:shadow-lg",
        isDark ? "hover:bg-surface-dark/80" : "hover:bg-surface-light/80"
      )}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <motion.div
        initial={{ scale: 0.2, y: 120, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        style={{ height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GridItem;