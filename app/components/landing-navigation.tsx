import Link from "next/link";
import { IconSparkles, IconArrowUpRight } from "@tabler/icons-react";

export const LandingNavigation = () => {
  const refs = [
    { title: "Feature", href: "/" },
    { title: "Pricing", href: "/" },
    { title: "Chat", href: "/chat" },
    { title: "API", href: "/" },
  ];

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-3 rounded-full bg-stone-100 px-4 py-2 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-[inset_0_-2px_6px_rgba(255,255,255,0.12),0_8px_16px_rgba(0,0,0,0.24)]">
          <IconSparkles size={18} />
        </span>
        <span className="text-lg font-semibold tracking-[-0.03em]">Comet</span>
      </Link>

      <div className="flex flex-wrap gap-6 md:flex-row md:gap-8">
        {refs.map((each) => (
          <div key={each.title} className="text-lg text-neutral-800 transition hover:text-black">
            <Link href={each.href}>{each.title}</Link>
          </div>
        ))}
      </div>

      <div>
        <Link href="/dashboard">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-medium text-neutral-100 shadow-[inset_0_-2px_8px_rgba(255,255,255,0.12),0_14px_30px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5">
            Dashboard
            <IconArrowUpRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};
