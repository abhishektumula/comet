"use client";

import Link from "next/link";
import { useState } from "react";
import { IconDotsVertical } from "@tabler/icons-react";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  runtime: string;
  callsMade: string;
  leadScore: string;
};

export function AgentRow({ agent }: { agent: Agent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 md:grid-cols-[auto_1fr_auto_auto_auto_auto] md:items-center md:gap-6">
      <div
        className={`h-2 w-2 rounded-full ${
          agent.status === "active" ? "bg-emerald-500" : "bg-zinc-400"
        }`}
      />
      <div className="min-w-0">
        <Link
          href={`/dashboard/${agent.id}`}
          className="font-medium text-zinc-900 transition-all duration-200 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          {agent.name}
        </Link>
        <p className="mt-1 truncate text-sm text-zinc-500 dark:text-zinc-400">
          {agent.description}
        </p>
      </div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">{agent.runtime}</div>
      <div className="text-sm text-zinc-900 dark:text-zinc-100">{agent.callsMade}</div>
      <div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          {agent.leadScore}
        </span>
      </div>
      <div className="relative">
        <button
          aria-label="Open agent actions"
          className="rounded-full p-2 text-zinc-500 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <IconDotsVertical size={18} />
        </button>
        {open ? (
          <div className="absolute right-0 top-11 z-10 min-w-32 rounded-xl border border-zinc-200 bg-white p-1 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {["Edit", "Pause", "Delete"].map((action) => (
              <button
                key={action}
                className="block w-full rounded-lg px-3 py-2 text-left text-zinc-600 transition-all duration-200 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                onClick={() => setOpen(false)}
                type="button"
              >
                {action}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
