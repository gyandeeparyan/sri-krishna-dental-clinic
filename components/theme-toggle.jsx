"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check current theme
    const isDarkMode = !document.documentElement.classList.contains("light");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;

    if (newIsDark) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    setIsDark(newIsDark);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-(--hairline-strong) bg-secondary text-(--ink) transition-colors hover:bg-(--surface-elevated)"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
