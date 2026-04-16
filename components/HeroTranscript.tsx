"use client";

import { useEffect, useState } from "react";

const lines = [
  "[Agent] Hi, is this Sarah?",
  "[Lead] Yes, who's this?",
  "[Agent] I'm calling about your request for pricing details.",
  "[Lead] Perfect timing. We're evaluating vendors this week.",
  "[AI Score] Lead quality: 87% →",
];

export function HeroTranscript() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    const timers = lines.map((line, index) =>
      window.setTimeout(() => {
        setVisibleLines((current) => [...current, line]);
      }, index * 700),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div className="rounded-2xl bg-zinc-950 p-4 text-left font-mono text-sm text-zinc-300 shadow-sm dark:bg-zinc-900">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="space-y-3">
        {visibleLines.map((line) => (
          <div key={line} className="text-zinc-300 transition-opacity duration-300">
            {line}
          </div>
        ))}
        <div className="inline-flex h-4 w-2 animate-pulse rounded-sm bg-zinc-500/60" />
      </div>
    </div>
  );
}
