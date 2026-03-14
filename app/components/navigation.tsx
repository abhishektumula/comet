"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconSparkles } from "@tabler/icons-react";

export const CometLogo = () => {
  return (
    <span className="inline-flex items-center gap-3 rounded-full bg-stone-100 px-4 py-2 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-[inset_0_-2px_6px_rgba(255,255,255,0.12),0_8px_16px_rgba(0,0,0,0.24)]">
        <IconSparkles size={18} />
      </span>
      <span className="text-lg font-semibold tracking-[-0.03em]">Comet</span>
    </span>
  );
};

const links = [
  { title: "Feature", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Builder", href: "/new-agent" },
  { title: "Chat", href: "/chat" },
];

const BaseNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center justify-between p-4">
      <Link href="/"><CometLogo /></Link>

      <div className="hidden flex-row gap-8 md:flex">
        {links.map((each) => (
          <div key={each.title} className={`text-lg ${pathname === each.href ? "text-black font-semibold" : "text-neutral-800"}`}>
            <Link href={each.href}>{each.title}</Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export const NavigationBar = () => <BaseNavigation />;
export const DashboardNavigationBar = () => <BaseNavigation />;
