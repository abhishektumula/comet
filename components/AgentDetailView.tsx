"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  IconCheck,
  IconCopy,
  IconPencil,
  IconPlayerPause,
} from "@tabler/icons-react";
import { Sidebar } from "@/components/Sidebar";
import { StatBlock } from "@/components/StatBlock";
import { WidgetScript } from "@/app/components/widget-script";

type AgentDetail = {
  id: string;
  name: string;
  status: string;
  totalCalls: string;
  avgLeadScore: string;
  conversionRate: string;
  avgCallDuration: string;
  scriptId: string;
  description: string;
  recentCalls: ReadonlyArray<readonly [string, string, string, string, string]>;
  buckets: ReadonlyArray<readonly [string, number]>;
};

export function AgentDetailView({ agent }: { agent: AgentDetail }) {
  const [copied, setCopied] = useState(false);
  const [displayAgent, setDisplayAgent] = useState(agent);
  const [createdConfig, setCreatedConfig] = useState<null | {
    organizationName: string;
    agentName: string;
    greetingLine: string;
    fallbackLine: string;
    knowledge: string;
    endUnqualified: boolean;
    transferQualified: boolean;
  }>(null);
  const embedCode = `<script src="https://www.calldock.co/widget.js" data-agentid="${displayAgent.scriptId}" data-logo-width="24" data-logo-height="24"></script>`;

  useEffect(() => {
    if (agent.id !== "demo-agent") {
      return;
    }

    const rawAgent = window.localStorage.getItem("comet-demo-agent");

    if (!rawAgent) {
      return;
    }

    const createdAgent = JSON.parse(rawAgent) as {
      organizationName: string;
      agentName: string;
      greetingLine: string;
      fallbackLine: string;
      knowledge: string;
      endUnqualified: boolean;
      transferQualified: boolean;
    };

    const frame = window.requestAnimationFrame(() => {
      setCreatedConfig(createdAgent);
      setDisplayAgent({
        ...agent,
        name: createdAgent.agentName || createdAgent.organizationName || agent.name,
        description:
          createdAgent.knowledge ||
          createdAgent.greetingLine ||
          agent.description,
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [agent]);

  const copyCode = async () => {
    await navigator.clipboard.writeText(embedCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const maxBucket = Math.max(...displayAgent.buckets.map(([, count]) => count), 1);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Sidebar />
      <WidgetScript agentId={displayAgent.scriptId} />
      <main className="min-h-screen px-6 pb-16 pt-8 md:ml-56 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {displayAgent.name}
                </h1>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    displayAgent.status === "Active"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  {displayAgent.status}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
                {displayAgent.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/new-agent"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                <IconPencil size={18} />
                Edit Agent
              </Link>
              <button
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                type="button"
              >
                <IconPlayerPause size={18} />
                Pause
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-8 border-b border-zinc-200 pb-8 dark:border-zinc-800 md:grid-cols-4">
            <StatBlock label="Total Calls" value={displayAgent.totalCalls} bordered />
            <StatBlock label="Avg Lead Score" value={displayAgent.avgLeadScore} bordered />
            <StatBlock label="Conversion Rate" value={displayAgent.conversionRate} bordered />
            <StatBlock label="Avg Call Duration" value={displayAgent.avgCallDuration} />
          </div>

          {createdConfig ? (
            <div className="mt-8 grid gap-4 border-b border-zinc-200 pb-8 dark:border-zinc-800 lg:grid-cols-3">
              <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Organization
                </p>
                <p className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">
                  {createdConfig.organizationName || "Custom organization"}
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Greeting Line
                </p>
                <p className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">
                  {createdConfig.greetingLine || "No greeting provided"}
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Fallback Line
                </p>
                <p className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">
                  {createdConfig.fallbackLine || "No fallback provided"}
                </p>
              </div>
            </div>
          ) : null}

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Recent Calls
              </h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70">
                <div className="grid grid-cols-5 gap-4 bg-zinc-50 px-4 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  <span>Time</span>
                  <span>Lead Name</span>
                  <span>Duration</span>
                  <span>Score</span>
                  <span>Outcome</span>
                </div>
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {displayAgent.recentCalls.map((call) => (
                    <div
                      key={`${call[0]}-${call[1]}`}
                      className="grid grid-cols-5 gap-4 px-4 py-4 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    >
                      <span className="text-zinc-500 dark:text-zinc-400">{call[0]}</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{call[1]}</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{call[2]}</span>
                      <span>
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {call[3]}
                        </span>
                      </span>
                      <span
                        className={
                          call[4] === "Qualified"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : call[4] === "Transferred"
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-zinc-500 dark:text-zinc-400"
                        }
                      >
                        {call[4]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Score Distribution
              </h2>
              <div className="mt-6 space-y-4">
                {displayAgent.buckets.map(([label, count]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                      <span>{label}</span>
                      <span>{count}</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-700">
                      <div
                        className="h-2 rounded-full bg-zinc-900 dark:bg-zinc-100"
                        style={{ width: `${(count / maxBucket) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-10">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Embed this agent
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  Add this script to your site to activate the Comet voice widget.
            </p>
            <div className="relative mt-4 rounded-xl bg-zinc-950 p-4 font-mono text-sm text-zinc-100">
              <button
                aria-label="Copy embed code"
                className="absolute right-3 top-3 rounded-full bg-zinc-900/80 p-2 text-zinc-300 transition-all duration-200 hover:bg-zinc-800 hover:text-white"
                onClick={copyCode}
                type="button"
              >
                {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
              </button>
              <pre className="overflow-x-auto pr-12">{embedCode}</pre>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Live Preview
              </p>
              <div className="mt-3 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="rounded-2xl bg-white p-6 dark:bg-zinc-950">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    The Comet widget script is loaded for agent{" "}
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">
                      {displayAgent.scriptId}
                    </span>
                    . Open this page in the browser to interact with the live widget overlay.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
