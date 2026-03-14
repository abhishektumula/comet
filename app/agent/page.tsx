"use client";

import { useEffect, useState } from "react";
import {
  IconActivityHeartbeat,
  IconChartLine,
  IconCopy,
  IconPhone,
  IconPhoneCall,
  IconWaveSine,
} from "@tabler/icons-react";
import { Container } from "../components/container";
import { DashboardNavigationBar } from "../components/navigation";
import { WidgetScript } from "../components/widget-script";

const baseSeries = [42, 48, 46, 52, 57, 54, 63, 59, 68, 72, 69, 76];

const recentCallSeed = [
  { caller: "New booking request", state: "Booking", duration: "02:14" },
  { caller: "Insurance question", state: "Resolving", duration: "01:31" },
  { caller: "Reschedule request", state: "Qualified", duration: "03:08" },
];

export default function AgentPage() {
  const [copied, setCopied] = useState(false);
  const [series, setSeries] = useState(baseSeries);
  const [stats, setStats] = useState({
    activeCalls: 6,
    callsHandled: 128,
    bookingRate: 38,
    avgLatency: 740,
  });
  const [recentCalls, setRecentCalls] = useState(recentCallSeed);

  const agentId = "cd_8701kbyj8c8zf4c8rz94j4ctfer9";
  const embedScript = `<script src=\"https://www.calldock.co/widget.js\" data-agentid=\"${agentId}\" data-logo-width=\"24\" data-logo-height=\"24\"></script>`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries((prev) => {
        const next = Math.max(36, Math.min(84, prev[prev.length - 1] + Math.floor(Math.random() * 11) - 5));
        return [...prev.slice(1), next];
      });

      setStats((prev) => ({
        activeCalls: Math.max(2, Math.min(9, prev.activeCalls + (Math.random() > 0.55 ? 1 : -1))),
        callsHandled: prev.callsHandled + (Math.random() > 0.45 ? 1 : 0),
        bookingRate: Math.max(31, Math.min(44, prev.bookingRate + (Math.random() > 0.6 ? 1 : Math.random() < 0.15 ? -1 : 0))),
        avgLatency: Math.max(620, Math.min(920, prev.avgLatency + Math.floor(Math.random() * 51) - 25)),
      }));

      setRecentCalls((prev) => {
        const states = ["Booking", "Resolving", "Qualified", "Escalating"];
        const callers = [
          "New booking request",
          "Emergency plumbing call",
          "Support escalation",
          "Follow-up callback",
          "Pricing clarification",
        ];

        const updated = prev.map((item, index) =>
          index === 0
            ? item
            : {
                ...item,
                duration: advanceDuration(item.duration),
              },
        );

        if (Math.random() > 0.55) {
          return [
            {
              caller: callers[Math.floor(Math.random() * callers.length)],
              state: states[Math.floor(Math.random() * states.length)],
              duration: "00:18",
            },
            ...updated.slice(0, 2),
          ];
        }

        return updated;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <WidgetScript agentId={agentId} />
      <Container>
        <DashboardNavigationBar />

        <section className="mt-6 rounded-[2rem] bg-stone-50 px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-12px_20px_rgba(0,0,0,0.04),0_18px_40px_rgba(15,23,42,0.06)]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-neutral-400">Live agent monitor</div>
                  <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-black md:text-5xl">
                    Arora Agent
                  </h1>
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-mono">{agentId}</span>
                    <button onClick={() => copy(agentId)} className="rounded p-1 hover:bg-gray-100">
                      <IconCopy size={16} />
                    </button>
                  </div>
                  {copied && <p className="mt-1 text-xs text-green-700">Copied</p>}
                </div>

                <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_12px_24px_rgba(15,23,42,0.05)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Status</p>
                  <p className="mt-1 font-semibold text-green-700">Live</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <LiveMetric
                  title="Active Calls"
                  value={String(stats.activeCalls)}
                  suffix=""
                  icon={<IconPhoneCall size={18} />}
                />
                <LiveMetric
                  title="Calls Handled"
                  value={String(stats.callsHandled)}
                  suffix=""
                  icon={<IconPhone size={18} />}
                />
                <LiveMetric
                  title="Booking Rate"
                  value={String(stats.bookingRate)}
                  suffix="%"
                  icon={<IconChartLine size={18} />}
                />
                <LiveMetric
                  title="Avg Latency"
                  value={String(stats.avgLatency)}
                  suffix="ms"
                  icon={<IconWaveSine size={18} />}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Info title="First Response" value="Hi, I am Arora. How can I help you today?" />
                <Info title="Voice" value="Hayden" />
                <Info title="Max Call Duration" value="5 minutes" />
                <Info title="Knowledge Sources" value="1 knowledge base connected" />
              </div>
            </div>

            <div className="rounded-[1.8rem] bg-white px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.94),0_16px_32px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-neutral-400">Realtime trend</div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black">
                    Call quality over the last hour
                  </div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
                  <IconActivityHeartbeat size={18} />
                </div>
              </div>

              <div className="mt-6">
                <TrendGraph values={series} />
              </div>

              <div className="mt-6 grid gap-3">
                {recentCalls.map((call, index) => (
                  <div
                    key={`${call.caller}-${index}`}
                    className="grid gap-3 rounded-[1.3rem] bg-stone-50 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:grid-cols-[1fr_auto_auto]"
                  >
                    <div>
                      <div className="text-base font-semibold text-black">{call.caller}</div>
                      <div className="mt-1 text-sm text-neutral-500">{call.state}</div>
                    </div>
                    <div className="self-center rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      live
                    </div>
                    <div className="self-center text-sm font-medium text-black">{call.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-frame mt-5 p-6">
          <h2 className="text-xl font-semibold">Website Widget Script</h2>
          <p className="mt-1 text-sm text-gray-600">Paste this in your website&apos;s head tag.</p>
          <pre className="mt-4 overflow-auto rounded-lg bg-gray-100 p-3 text-xs">{embedScript}</pre>
          <button
            onClick={() => copy(embedScript)}
            className="mt-4 rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Copy Script
          </button>
        </div>
      </Container>
    </main>
  );
}

const LiveMetric = ({
  title,
  value,
  suffix,
  icon,
}: {
  title: string;
  value: string;
  suffix: string;
  icon: React.ReactNode;
}) => (
  <div className="rounded-[1.4rem] bg-white px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_12px_24px_rgba(15,23,42,0.05)]">
    <div className="flex items-center justify-between text-neutral-500">
      <p className="text-xs uppercase tracking-[0.18em]">{title}</p>
      {icon}
    </div>
    <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-black">
      {value}
      <span className="ml-1 text-lg text-neutral-500">{suffix}</span>
    </div>
  </div>
);

const Info = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-xl bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_12px_24px_rgba(15,23,42,0.05)]">
    <p className="text-xs uppercase tracking-wide text-gray-500">{title}</p>
    <p className="mt-2 text-sm text-gray-800">{value}</p>
  </div>
);

const TrendGraph = ({ values }: { values: number[] }) => {
  const width = 520;
  const height = 220;
  const min = Math.min(...values) - 8;
  const max = Math.max(...values) + 8;
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / (max - min)) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[220px] w-full overflow-visible">
      {[0.2, 0.4, 0.6, 0.8].map((ratio) => (
        <line
          key={ratio}
          x1="0"
          x2={width}
          y1={height * ratio}
          y2={height * ratio}
          stroke="#e7e5e4"
          strokeDasharray="4 8"
        />
      ))}
      <polyline
        fill="none"
        stroke="#111827"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {values.map((value, index) => {
        const x = (index / (values.length - 1)) * width;
        const y = height - ((value - min) / (max - min)) * height;

        return <circle key={`${value}-${index}`} cx={x} cy={y} r="4.5" fill="#111827" />;
      })}
    </svg>
  );
};

const advanceDuration = (value: string) => {
  const [minutes, seconds] = value.split(":").map(Number);
  const total = minutes * 60 + seconds + Math.floor(Math.random() * 9) + 4;
  const nextMinutes = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const nextSeconds = (total % 60).toString().padStart(2, "0");
  return `${nextMinutes}:${nextSeconds}`;
};
