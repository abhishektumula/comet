"use client";

import { useEffect, useState } from "react";
import {
  IconActivityHeartbeat,
  IconClockHour4,
  IconPhoneCall,
  IconTargetArrow,
  IconWaveSine,
} from "@tabler/icons-react";
import { Container } from "../components/container";
import { DashboardNavigationBar } from "../components/navigation";

const baseTrend = [61, 64, 63, 67, 69, 68, 72, 71, 75, 77, 76, 80];

export default function StatsPage() {
  const [trend, setTrend] = useState(baseTrend);
  const [stats, setStats] = useState({
    accuracy: 96.4,
    callsPerMinute: 2.8,
    responseTime: 742,
    completionRate: 91,
    interruptionsHandled: 88,
    activeSessions: 7,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTrend((prev) => {
        const next = Math.max(
          54,
          Math.min(88, prev[prev.length - 1] + Math.floor(Math.random() * 7) - 3),
        );
        return [...prev.slice(1), next];
      });

      setStats((prev) => ({
        accuracy: roundToOne(
          Math.max(94.8, Math.min(98.7, prev.accuracy + (Math.random() * 0.8 - 0.4))),
        ),
        callsPerMinute: roundToOne(
          Math.max(1.8, Math.min(4.6, prev.callsPerMinute + (Math.random() * 0.6 - 0.3))),
        ),
        responseTime: Math.max(
          640,
          Math.min(890, prev.responseTime + Math.floor(Math.random() * 41) - 20),
        ),
        completionRate: Math.max(
          86,
          Math.min(95, prev.completionRate + (Math.random() > 0.55 ? 1 : -1)),
        ),
        interruptionsHandled: Math.max(
          80,
          Math.min(94, prev.interruptionsHandled + (Math.random() > 0.55 ? 1 : -1)),
        ),
        activeSessions: Math.max(
          3,
          Math.min(12, prev.activeSessions + (Math.random() > 0.5 ? 1 : -1)),
        ),
      }));
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <Container>
        <DashboardNavigationBar />

        <section className="mx-auto mt-8 max-w-[1080px] px-2 pb-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                  Live statistics
                </div>
                <h1 className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-black md:text-6xl">
                  Arora Agent
                </h1>
                <div className="mt-4 font-mono text-sm text-neutral-500">
                  cd_8701kbyj8c8zf4c8rz94j4ctfer9
                </div>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full bg-stone-100 px-4 py-3 text-sm text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_24px_rgba(15,23,42,0.06)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-[inset_0_-3px_8px_rgba(255,255,255,0.12)]">
                  <IconActivityHeartbeat size={18} />
                </span>
                Live numbers updating every few seconds
              </div>
            </div>

            <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4">
              <StatNumber
                label="Accuracy"
                value={`${stats.accuracy}%`}
                detail="Intent and answer quality"
                icon={<IconTargetArrow size={18} />}
              />
              <StatNumber
                label="Calls / minute"
                value={String(stats.callsPerMinute)}
                detail="Current throughput"
                icon={<IconPhoneCall size={18} />}
              />
              <StatNumber
                label="Response time"
                value={`${stats.responseTime} ms`}
                detail="Average live latency"
                icon={<IconClockHour4 size={18} />}
              />
              <StatNumber
                label="Completion rate"
                value={`${stats.completionRate}%`}
                detail="Ended successfully"
                icon={<IconWaveSine size={18} />}
              />
            </div>

            <div className="h-px bg-stone-200" />

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                  Quality trend
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-black">
                  Realtime performance curve
                </div>
                <div className="mt-8">
                  <PlainTrendGraph values={trend} />
                </div>
              </div>

              <div className="space-y-8">
                <PlainRow
                  label="Interruptions handled"
                  value={`${stats.interruptionsHandled}%`}
                />
                <PlainRow
                  label="Active sessions"
                  value={String(stats.activeSessions)}
                />
                <PlainRow
                  label="Average call quality"
                  value={`${trend[trend.length - 1]} / 100`}
                />
                <PlainRow
                  label="Current model stability"
                  value={stats.responseTime < 780 ? "Strong" : "Normal"}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

const StatNumber = ({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}) => (
  <div className="space-y-3">
    <div className="flex items-center gap-3 text-neutral-400">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        {icon}
      </span>
      <span className="text-sm uppercase tracking-[0.22em]">{label}</span>
    </div>
    <div className="text-5xl font-semibold tracking-[-0.06em] text-black">{value}</div>
    <div className="text-sm text-neutral-500">{detail}</div>
  </div>
);

const PlainRow = ({ label, value }: { label: string; value: string }) => (
  <div className="border-b border-stone-200 pb-5">
    <div className="text-sm uppercase tracking-[0.18em] text-neutral-400">{label}</div>
    <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-black">{value}</div>
  </div>
);

const PlainTrendGraph = ({ values }: { values: number[] }) => {
  const width = 760;
  const height = 240;
  const min = Math.min(...values) - 6;
  const max = Math.max(...values) + 6;

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / (max - min)) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[240px] w-full overflow-visible">
      {[0.2, 0.4, 0.6, 0.8].map((ratio) => (
        <line
          key={ratio}
          x1="0"
          x2={width}
          y1={height * ratio}
          y2={height * ratio}
          stroke="#e7e5e4"
          strokeDasharray="5 10"
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

        return <circle key={`${value}-${index}`} cx={x} cy={y} r="4" fill="#111827" />;
      })}
    </svg>
  );
};

const roundToOne = (value: number) => Math.round(value * 10) / 10;
