"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";
import { AgentRow } from "@/components/AgentRow";
import { Sidebar } from "@/components/Sidebar";

const agents = [
  {
    id: "atlas-sdr",
    name: "Atlas SDR",
    description: "Qualifies inbound demo requests from paid campaigns.",
    status: "active",
    runtime: "12h 34m",
    callsMade: "1,204",
    leadScore: "91%",
  },
  {
    id: "night-shift",
    name: "Night Shift",
    description: "Covers after-hours lead follow-up for North America.",
    status: "active",
    runtime: "8h 12m",
    callsMade: "842",
    leadScore: "88%",
  },
  {
    id: "revive-q2",
    name: "Revive Q2",
    description: "Re-engages stalled pipeline opportunities from the last quarter.",
    status: "paused",
    runtime: "2h 06m",
    callsMade: "317",
    leadScore: "74%",
  },
  {
    id: "midmarket-eu",
    name: "Mid-Market EU",
    description: "Handles discovery calls for expansion accounts in EMEA.",
    status: "active",
    runtime: "15h 48m",
    callsMade: "1,486",
    leadScore: "93%",
  },
  {
    id: "handoff-pro",
    name: "Handoff Pro",
    description: "Transfers high-intent prospects directly to live reps.",
    status: "active",
    runtime: "6h 41m",
    callsMade: "566",
    leadScore: "95%",
  },
  {
    id: "renewals-watch",
    name: "Renewals Watch",
    description: "Flags at-risk customers and routes renewal objections.",
    status: "paused",
    runtime: "4h 19m",
    callsMade: "294",
    leadScore: "79%",
  },
  {
    id: "launch-week",
    name: "Launch Week",
    description: "Works new signup lists generated from webinar campaigns.",
    status: "active",
    runtime: "10h 03m",
    callsMade: "973",
    leadScore: "86%",
  },
];

const filters = ["all", "active", "paused"] as const;

export default function DashboardPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const filteredAgents = useMemo(() => {
    if (filter === "all") {
      return agents;
    }

    return agents.filter((agent) => agent.status === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Sidebar />
      <main className="min-h-screen px-6 pb-16 pt-8 md:ml-56 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Agents
              </h1>
            </div>
            <Link
              href="/new-agent"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <IconPlus size={18} />
              New Agent
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-6 border-b border-zinc-200 dark:border-zinc-800">
            {filters.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`border-b-2 pb-3 text-sm font-medium capitalize transition-all duration-200 ${
                  filter === tab
                    ? "border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
                    : "border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            {filteredAgents.map((agent) => (
              <AgentRow key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
