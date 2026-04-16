"use client";

import {
  IconBolt,
  IconCheck,
  IconPhoneCall,
  IconRoute,
  IconStars,
} from "@tabler/icons-react";

export function FeatureShowcase() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-24 dark:bg-zinc-950"
      id="features"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.9),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(39,39,42,0.32),_transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            Features
          </div>
          <h2 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
            Everything your team needs to
            <span className="block text-zinc-400 dark:text-zinc-500">
              automate the pipeline
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            Comet handles first-touch outreach, scores live conversations, and
            routes your best leads to the right rep without slowing down the team.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <FeatureCard
            accent="emerald"
            description="Launch voice agents that qualify leads in real time and keep outreach moving after hours."
            title="AI Voice Calls"
          >
            <VoiceCallsVisual accent="emerald" />
          </FeatureCard>

          <FeatureCard
            accent="amber"
            description="Turn every conversation into an instant qualification score so reps know who to call next."
            title="Lead Scoring"
          >
            <LeadScoringVisual accent="amber" />
          </FeatureCard>

          <FeatureCard
            accent="sky"
            description="Keep transcripts, ownership, and next steps synced the moment a call ends."
            title="CRM Sync and Transcripts"
          >
            <CrmSyncVisual accent="sky" />
          </FeatureCard>

          <FeatureCard
            accent="violet"
            description="Adjust routing, transfer logic, and agent behavior without waiting on engineering."
            title="Agent Builder and Routing"
          >
            <RoutingVisual accent="violet" />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  children,
  accent,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  accent: "emerald" | "amber" | "sky" | "violet";
}) {
  const accentClasses = {
    emerald:
      "group-hover:text-emerald-600 dark:group-hover:text-emerald-300 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10",
    amber:
      "group-hover:text-amber-600 dark:group-hover:text-amber-300 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10",
    sky:
      "group-hover:text-sky-600 dark:group-hover:text-sky-300 group-hover:bg-sky-50 dark:group-hover:bg-sky-500/10",
    violet:
      "group-hover:text-violet-600 dark:group-hover:text-violet-300 group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10",
  } as const;

  return (
    <div className="group rounded-[2rem] bg-zinc-50 p-7 transition-all duration-200 dark:bg-zinc-900">
      <div className="overflow-hidden rounded-[1.6rem] bg-white/90 px-6 py-6 dark:bg-zinc-950/90">
        {children}
      </div>
      <div className="mt-8">
        <h3 className="text-[28px] font-semibold tracking-tight text-zinc-900 transition-colors duration-200 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-4 text-base leading-8 text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-5">
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-500 transition-all duration-200 dark:bg-zinc-950 dark:text-zinc-400 ${accentClasses[accent]}`}
          >
            {accent === "emerald" ? (
              <IconPhoneCall size={18} />
            ) : accent === "amber" ? (
              <IconStars size={18} />
            ) : accent === "sky" ? (
              <IconBolt size={18} />
            ) : (
              <IconRoute size={18} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

function VoiceCallsVisual({ accent }: { accent: "emerald" }) {
  const miniCards = [
    "Greeting",
    "Objections",
    "Qualification",
    "Transfer",
  ];

  return (
    <div className="min-h-[280px]">
      <div
        className={`mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2 text-lg font-medium text-zinc-700 shadow-[0_0_30px_rgba(24,24,27,0.06)] transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:shadow-[0_0_30px_rgba(255,255,255,0.04)] ${
          accent === "emerald"
            ? "group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 dark:group-hover:border-emerald-500/20 dark:group-hover:bg-emerald-500/10 dark:group-hover:text-emerald-300"
            : ""
        }`}
      >
        <IconPhoneCall size={18} />
        Calling lead now
      </div>
      <p className="mt-8 text-center text-lg leading-8 text-zinc-500 dark:text-zinc-400">
        Comet adapts the conversation as the lead responds
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-4">
        {miniCards.map((item, index) => (
          <div
            key={item}
            className="rounded-[1.2rem] bg-zinc-50 p-4 dark:bg-zinc-900"
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                index % 2 === 0
                  ? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
              }`}
            >
              <IconBolt size={14} />
            </div>
            <div className="mt-5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {item}
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 rounded-full bg-zinc-100 dark:bg-zinc-800" />
              <div className="h-3 w-4/5 rounded-full bg-zinc-100 dark:bg-zinc-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadScoringVisual({ accent }: { accent: "amber" }) {
  const rows = [
    ["Urgency", "96%"],
    ["Budget fit", "91%"],
    ["Decision-maker", "88%"],
  ] as const;

  return (
    <div className="relative flex min-h-[280px] items-center justify-center">
      <div className="w-full max-w-md rounded-[1.6rem] bg-zinc-50 p-5 dark:bg-zinc-900">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Average lead score</p>
            <div className="mt-2 flex items-center gap-3">
              <p className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                87%
              </p>
              <span
                className={`rounded-full px-3 py-1 text-xs transition-all duration-200 ${
                  accent === "amber"
                    ? "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
                    : "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                }`}
              >
                High intent
              </span>
            </div>
          </div>
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-700 transition-all duration-200 dark:bg-zinc-950 dark:text-zinc-200 ${
              accent === "amber"
                ? "group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-300"
                : ""
            }`}
          >
            <IconStars size={18} />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[1.1rem] bg-white px-4 py-3 dark:bg-zinc-950"
            >
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrmSyncVisual({ accent }: { accent: "sky" }) {
  return (
    <div className="min-h-[280px]">
      <div className="mb-6 flex items-center justify-between rounded-[1.2rem] bg-zinc-50 px-4 py-3 dark:bg-zinc-900">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            CRM status
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Connected to Salesforce
            </span>
          </div>
        </div>
        <button
          className={`rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-600 transition-all duration-200 dark:bg-zinc-950 dark:text-zinc-300 ${
            accent === "sky"
              ? "hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-500/10 dark:hover:text-sky-300"
              : ""
          }`}
          type="button"
        >
          Demo sync
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="rounded-[1.4rem] bg-zinc-50 p-5 dark:bg-zinc-900">
          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Comet
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-white px-3 py-2 text-sm text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
              Transcript ready
            </div>
            <div className="rounded-xl bg-white px-3 py-2 text-sm text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
              Score: 91%
            </div>
          </div>
        </div>

        <div
          className={`mx-auto rounded-full bg-white px-4 py-2 text-sm text-zinc-600 transition-all duration-200 dark:bg-zinc-950 dark:text-zinc-300 ${
            accent === "sky"
              ? "group-hover:bg-sky-50 group-hover:text-sky-600 dark:group-hover:bg-sky-500/10 dark:group-hover:text-sky-300"
              : ""
          }`}
        >
          synced
        </div>

        <div className="rounded-[1.4rem] bg-zinc-50 p-5 dark:bg-zinc-900">
          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            CRM
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-white px-3 py-2 text-sm text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
              Owner assigned
            </div>
            <div className="rounded-xl bg-white px-3 py-2 text-sm text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
              Follow-up in 15m
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[1.4rem] bg-zinc-50 p-5 dark:bg-zinc-900">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>Auto-synced fields</span>
          <span>4/4</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Lead name", "Call outcome", "Score", "Transcript link"].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white px-4 py-3 text-sm text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoutingVisual({ accent }: { accent: "violet" }) {
  return (
    <div className="min-h-[280px]">
      <div className="rounded-[1.6rem] bg-zinc-50 p-5 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Agent workflow</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Builder rules
            </p>
          </div>
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-700 transition-all duration-200 dark:bg-zinc-950 dark:text-zinc-200 ${
              accent === "violet"
                ? "group-hover:bg-violet-50 group-hover:text-violet-600 dark:group-hover:bg-violet-500/10 dark:group-hover:text-violet-300"
                : ""
            }`}
          >
            <IconRoute size={18} />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {[
            ["Greeting line", "Active"],
            ["Lead qualification", "Enabled"],
            ["Human transfer", "Score > 90%"],
            ["Fallback answer", "Configured"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[1.1rem] bg-white px-4 py-3 dark:bg-zinc-950"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                  <IconCheck size={14} />
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                  {label}
                </span>
              </div>
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
