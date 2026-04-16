"use client";

import {
  IconChartBar,
  IconDatabase,
  IconFileText,
  IconPhoneCall,
  IconRobot,
  IconSparkles,
} from "@tabler/icons-react";

const icons = {
  phone: IconPhoneCall,
  sparkles: IconSparkles,
  database: IconDatabase,
  file: IconFileText,
  robot: IconRobot,
  chart: IconChartBar,
};

export function FeatureBlock({
  title,
  description,
  icon,
  points = [],
  large = false,
}: {
  title: string;
  description: string;
  icon: keyof typeof icons;
  points?: string[];
  large?: boolean;
}) {
  const Icon = icons[icon];

  return (
    <div className="rounded-3xl bg-zinc-50 p-6 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
          <Icon size={20} />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Comet
        </span>
      </div>

      <div className={large ? "mt-10" : "mt-8"}>
        <h3
          className={`font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 ${
            large ? "text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 max-w-2xl text-zinc-500 dark:text-zinc-400 ${
            large ? "text-base leading-8" : "text-sm leading-7"
          }`}
        >
          {description}
        </p>
      </div>

      {points.length > 0 ? (
        <div
          className={`mt-8 grid gap-3 ${
            large ? "md:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {points.map((point, index) => (
            <div
              key={point}
              className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300"
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                0{index + 1}
              </div>
              <div className="mt-2">{point}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
