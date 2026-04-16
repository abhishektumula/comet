import Link from "next/link";
import { IconBolt } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
          <IconBolt size={18} />
          Comet
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="transition-all duration-200 hover:text-zinc-900 dark:hover:text-zinc-100">
            Privacy
          </Link>
          <Link href="/" className="transition-all duration-200 hover:text-zinc-900 dark:hover:text-zinc-100">
            Terms
          </Link>
          <Link href="/" className="transition-all duration-200 hover:text-zinc-900 dark:hover:text-zinc-100">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
