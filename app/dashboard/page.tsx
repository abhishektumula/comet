import Link from "next/link";
import {
  IconArrowUpRight,
} from "@tabler/icons-react";
import { Container } from "../components/container";
import { DashboardNavigationBar } from "../components/navigation";
import { WidgetScript } from "../components/widget-script";

const agents = [
  {
    name: "Comet Frontdesk",
    industry: "Dental clinic",
    status: "Live",
    callsToday: 28,
    booked: 11,
    avgDuration: "3m 21s",
    conversion: "39%",
    tone: "Warm and direct",
  },
  {
    name: "Atlas Intake",
    industry: "Legal intake",
    status: "Live",
    callsToday: 19,
    booked: 7,
    avgDuration: "4m 08s",
    conversion: "31%",
    tone: "Clear and formal",
  },
  {
    name: "Northline Service Co.",
    industry: "Home services",
    status: "Live",
    callsToday: 15,
    booked: 6,
    avgDuration: "2m 46s",
    conversion: "40%",
    tone: "Fast and practical",
  },
  {
    name: "Riverline Dental",
    industry: "Dental clinic",
    status: "Monitoring",
    callsToday: 12,
    booked: 4,
    avgDuration: "5m 02s",
    conversion: "26%",
    tone: "Friendly and reassuring",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <WidgetScript />
      <Container>
        <DashboardNavigationBar />

        <div className="mt-4 flex justify-end">
          <Link href="/new-agent">
            <button className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white shadow-[inset_0_-4px_10px_rgba(255,255,255,0.12),0_14px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
              Add new agent
            </button>
          </Link>
        </div>

        <section className="mt-10 flex justify-center">
          <div className="w-full max-w-[980px] rounded-[2rem] bg-white px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_18px_36px_rgba(15,23,42,0.06)]">
            <div className="text-center">
              <div className="text-sm uppercase tracking-[0.22em] text-neutral-400">Deployed agents</div>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-black md:text-5xl">
                Active fleet
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
                Live agents currently deployed across booking, intake, support, and reception
                workflows.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="grid gap-5 rounded-[1.6rem] bg-stone-50 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-8px_16px_rgba(0,0,0,0.04)] md:grid-cols-[1.2fr_0.8fr_auto]"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-black">
                        {agent.name}
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          agent.status === "Live"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {agent.status}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-neutral-500">{agent.industry}</div>
                    <div className="mt-4 text-sm leading-7 text-neutral-600">
                      Voice style: {agent.tone}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                    <Metric label="Calls today" value={String(agent.callsToday)} />
                    <Metric label="Booked" value={String(agent.booked)} />
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <div className="grid gap-3">
                      <Metric label="Avg duration" value={agent.avgDuration} />
                      <Metric label="Conversion" value={agent.conversion} />
                    </div>
                    <Link
                      href="/agent"
                      className="inline-flex items-center gap-2 text-sm font-medium text-black transition hover:translate-x-0.5"
                    >
                      Open agent
                      <IconArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-[1.1rem] bg-white px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
    <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{label}</div>
    <div className="mt-2 text-xl font-semibold tracking-[-0.04em] text-black">{value}</div>
  </div>
);
