"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconBolt,
  IconChartBar,
  IconLayoutDashboard,
  IconPhone,
  IconRobot,
  IconSettings,
} from "@tabler/icons-react";

const navItems = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: IconLayoutDashboard,
    activeMatch: (pathname: string) => pathname === "/dashboard",
  },
  {
    href: "/dashboard",
    label: "Agents",
    icon: IconRobot,
    activeMatch: (pathname: string) => pathname.startsWith("/dashboard"),
  },
  {
    href: "/dashboard",
    label: "Calls",
    icon: IconPhone,
    activeMatch: () => false,
  },
  {
    href: "/dashboard",
    label: "Analytics",
    icon: IconChartBar,
    activeMatch: () => false,
  },
  {
    href: "/dashboard",
    label: "Settings",
    icon: IconSettings,
    activeMatch: () => false,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:fixed md:inset-y-0 md:left-0 md:w-56 md:border-b-0 md:border-r md:px-5 md:py-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
          <IconBolt size={18} />
        </span>
        Comet
      </Link>

      <nav className="mt-8 grid gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.activeMatch(pathname);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`inline-flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                active
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
