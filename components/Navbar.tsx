import Link from "next/link";
import { IconBolt } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-all duration-200 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
            <IconBolt size={18} />
          </span>
          Comet
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-500 dark:text-zinc-400 md:flex">
          <Link
            href="/#features"
            className="transition-all duration-200 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Features
          </Link>
          <Link
            href="/dashboard"
            className="transition-all duration-200 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Dashboard
          </Link>
          <Link
            href="/new-agent"
            className="transition-all duration-200 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Agent
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-zinc-500 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:inline-flex"
          >
            Log in
          </Link>
          <ThemeToggle />
          <Link
            href="/signup"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
