"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all duration-200 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      <IconMoon size={18} className="dark:hidden" />
      <IconSun size={18} className="hidden dark:block" />
    </button>
  );
}
