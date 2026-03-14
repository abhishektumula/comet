"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  IconBolt,
  IconBrandOpenai,
  IconCalendarEvent,
  IconClockHour4,
  IconHeadphones,
  IconMessage2,
  IconPhoneCall,
  IconPlayerPlayFilled,
  IconSparkles,
  IconStars,
  IconTopologyStar3,
  IconUsers,
  IconWaveSine,
} from "@tabler/icons-react";

const titles = ["Saas Companies", "HealthCare", "E-Commerce", "Home Services"];

const metrics = [
  { value: "24/7", label: "answers every lead" },
  { value: "3.1x", label: "more booked calls" },
  { value: "89%", label: "feels human to callers" },
];

const capabilities = [
  {
    icon: IconPhoneCall,
    title: "Inbound reception",
    text: "Answer calls instantly, qualify intent, and route urgent issues without sounding robotic.",
    stat: "Picks up in seconds",
  },
  {
    icon: IconCalendarEvent,
    title: "Booking automation",
    text: "Turn live conversations into confirmed appointments, demos, and callbacks.",
    stat: "Books without handoff",
  },
  {
    icon: IconHeadphones,
    title: "Support handling",
    text: "Resolve common requests, explain policies, and escalate only when necessary.",
    stat: "Escalates with context",
  },
];

const workflow = [
  {
    icon: IconMessage2,
    title: "Write the script",
    text: "Define how Comet opens, qualifies, and responds across your most common call paths.",
  },
  {
    icon: IconBrandOpenai,
    title: "Tune the voice",
    text: "Adjust tone, pacing, and fallback behavior until every response feels natural.",
  },
  {
    icon: IconBolt,
    title: "Go live fast",
    text: "Deploy to your website or call flow and start capturing conversations immediately.",
  },
];

const industries = [
  "SaaS teams",
  "Dental clinics",
  "Home services",
  "Legal intake",
  "E-commerce support",
  "Property management",
];

export const LandingHero = () => {
  const [current, setCurrent] = useState<number>(0);
  const [activeMode, setActiveMode] = useState<"qualify" | "book" | "escalate">("qualify");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 pb-20 pt-6 md:pb-32 md:pt-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-9 md:gap-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-sm text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_18px_rgba(15,23,42,0.08)]">
            <IconWaveSine size={18} />
            Hyper-realistic AI voice agents
          </div>

          <div>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-black md:text-7xl">
              AI voice agents for
            </h1>

            <div className="mt-2 min-h-[4.5rem] md:min-h-[6.2rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="flex flex-wrap text-stone-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {titles[current].split("").map((letter, idx) => (
                    <motion.span
                      key={`${titles[current]}-${idx}`}
                      className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
                      initial={{ y: 18, opacity: 0, filter: "blur(6px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.24, delay: idx * 0.03, ease: "easeOut" }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <p className="max-w-2xl text-xl leading-8 text-neutral-600 md:text-2xl">
            Your complete platform for AI voice agents that sound real. Easiest to use, best
            sounding, built to automate it all.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/dashboard">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl bg-black px-7 py-4 text-lg font-medium text-white shadow-[inset_0_-4px_12px_rgba(255,255,255,0.14),0_16px_32px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5"
              >
                <IconSparkles size={18} />
                Get your voice agent
              </motion.button>
            </Link>

            <button className="inline-flex items-center gap-2 rounded-2xl bg-stone-100 px-6 py-4 text-lg text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-6px_14px_rgba(0,0,0,0.05),0_12px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5">
              <IconPlayerPlayFilled size={16} />
              Hear sample calls
            </button>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl bg-stone-100 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-8px_18px_rgba(0,0,0,0.04),0_10px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="text-3xl font-semibold tracking-[-0.05em] text-black">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-neutral-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-6 h-24 w-24 rounded-full bg-stone-200 shadow-[inset_0_-10px_18px_rgba(0,0,0,0.08)]" />
          <div className="absolute bottom-10 right-4 h-32 w-32 rounded-[2rem] bg-neutral-900 shadow-[inset_0_-10px_18px_rgba(255,255,255,0.08),0_20px_36px_rgba(0,0,0,0.18)]" />

          <div className="relative mx-auto flex w-full max-w-[32rem] flex-col gap-5 rounded-[2rem] bg-stone-50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-18px_28px_rgba(0,0,0,0.04),0_24px_60px_rgba(15,23,42,0.14)]">
            <div className="flex items-center justify-between rounded-[1.5rem] bg-white px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-[inset_0_-4px_10px_rgba(255,255,255,0.12)]">
                  <IconSparkles size={18} />
                </div>
                <div>
                  <div className="text-base font-semibold text-black">Comet</div>
                  <div className="text-sm text-neutral-500">AI voice operator</div>
                </div>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                Live now
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_36px_rgba(15,23,42,0.06)]">
              <div className="text-lg leading-8 text-neutral-700">
                Hey there! I&apos;m an AI assistant from Comet. Want to see how I work? I can either
                give you a quick demo call or you can listen to some recordings first.
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <button className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-black px-5 py-4 text-base font-medium text-white shadow-[inset_0_-4px_10px_rgba(255,255,255,0.12),0_16px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
                <IconPhoneCall size={18} />
                Give me a call
              </button>

              <button className="rounded-[1.4rem] bg-stone-200 px-5 py-4 text-base font-medium text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-6px_12px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5">
                Recordings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 rounded-[2rem] bg-stone-100 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-10px_20px_rgba(0,0,0,0.04),0_18px_36px_rgba(15,23,42,0.06)] md:mt-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-neutral-500">Built for teams that miss calls</div>
            <div className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-black md:text-4xl">
              Comet handles the first minute better than most humans.
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_18px_rgba(15,23,42,0.05)]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-28 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div className="flex flex-col justify-between rounded-[2rem] bg-neutral-900 px-7 py-8 text-white shadow-[inset_0_-14px_24px_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.18)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <IconClockHour4 size={16} />
              No waiting. No voicemail drop-off.
            </div>
            <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-5xl">
              Every missed call is pipeline leakage.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/72">
              Comet answers immediately, handles repetitive questions, books qualified conversations,
              and hands off edge cases with context intact.
            </p>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-white/6 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="flex flex-wrap gap-2">
              {[
                { key: "qualify", label: "Qualify" },
                { key: "book", label: "Book" },
                { key: "escalate", label: "Escalate" },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveMode(item.key as "qualify" | "book" | "escalate")}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    activeMode === item.key
                      ? "bg-white text-black shadow-[inset_0_-4px_10px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.16)]"
                      : "bg-white/8 text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-[1.25rem] bg-black/20 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/45">
                  <span>Live behavior</span>
                  <span>{activeMode}</span>
                </div>

                {activeMode === "qualify" && (
                  <>
                    <div className="text-base text-white/90">
                      “Are you calling about a new booking, support, or pricing?”
                    </div>
                    <div className="flex gap-2 text-xs text-white/60">
                      <span className="rounded-full bg-white/8 px-3 py-1">intent detected</span>
                      <span className="rounded-full bg-white/8 px-3 py-1">caller tagged</span>
                    </div>
                  </>
                )}

                {activeMode === "book" && (
                  <>
                    <div className="text-base text-white/90">
                      “I can lock in Thursday at 4:30 PM and send confirmation right away.”
                    </div>
                    <div className="flex gap-2 text-xs text-white/60">
                      <span className="rounded-full bg-white/8 px-3 py-1">slot held</span>
                      <span className="rounded-full bg-white/8 px-3 py-1">sms ready</span>
                    </div>
                  </>
                )}

                {activeMode === "escalate" && (
                  <>
                    <div className="text-base text-white/90">
                      “I’m pulling in a teammate now and passing along everything you’ve said.”
                    </div>
                    <div className="flex gap-2 text-xs text-white/60">
                      <span className="rounded-full bg-white/8 px-3 py-1">summary attached</span>
                      <span className="rounded-full bg-white/8 px-3 py-1">priority escalated</span>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">Average pickup</div>
              <div className="mt-2 text-4xl font-semibold tracking-[-0.05em]">2 sec</div>
            </div>
            <div className="rounded-[1.6rem] bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">Booked from calls</div>
              <div className="mt-2 text-4xl font-semibold tracking-[-0.05em]">31%</div>
            </div>
          </div>
        </div>

        <div className="px-1 py-3">
          <div className="grid gap-14">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isFirst = index === 0;

              return (
                <div key={capability.title} className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-6px_12px_rgba(0,0,0,0.06)]">
                      <Icon size={22} />
                    </div>
                    <div className="text-sm font-medium tracking-[0.24em] text-neutral-400">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="max-w-2xl">
                    <div className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                      {isFirst ? "Primary use" : capability.stat}
                    </div>
                    <div className="mt-2 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-black">
                      {capability.title}
                    </div>
                    <p className="mt-4 text-lg leading-8 text-neutral-600">{capability.text}</p>
                  </div>

                  <div className="lg:pt-8">
                    <div className="inline-flex rounded-full bg-stone-100 px-4 py-2 text-sm text-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_18px_rgba(15,23,42,0.05)]">
                      {isFirst
                        ? "Built for teams that lose leads when the phone rings outside office rhythm."
                        : capability.stat}
                    </div>
                  </div>

                  {index < capabilities.length - 1 && (
                    <div className="lg:col-span-3">
                      <div className="mt-1 h-px bg-stone-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-28 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="rounded-[2rem] bg-stone-100 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-12px_20px_rgba(0,0,0,0.05),0_18px_40px_rgba(15,23,42,0.06)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_8px_18px_rgba(15,23,42,0.05)]">
            <IconTopologyStar3 size={16} />
            How it works
          </div>

          <div className="mt-8 grid gap-5">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_14px_30px_rgba(15,23,42,0.06)] md:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[inset_0_-3px_8px_rgba(255,255,255,0.12)]">
                      <Icon size={18} />
                    </div>
                    <div className="text-sm font-medium text-neutral-400">0{index + 1}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-black">
                      {step.title}
                    </div>
                    <p className="mt-2 text-base leading-7 text-neutral-600">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2rem] bg-white p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_20px_44px_rgba(15,23,42,0.08)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-sm text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
              <IconStars size={16} />
              Customer reaction
            </div>

            <div className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-black">
              “It sounds like a real front desk, not a bot menu.”
            </div>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Teams use Comet when they need better pickup rates, cleaner booking flows, and a voice
              experience that actually protects brand perception.
            </p>
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-stone-100 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-10px_18px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[inset_0_-3px_8px_rgba(255,255,255,0.12)]">
                <IconUsers size={18} />
              </div>
              <div>
                <div className="text-base font-semibold text-black">Trusted by high-volume teams</div>
                <div className="text-sm text-neutral-500">Sales, support, booking, and intake workflows</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 rounded-[2.25rem] bg-black px-7 py-12 text-white shadow-[inset_0_-14px_24px_rgba(255,255,255,0.08),0_28px_54px_rgba(0,0,0,0.22)] md:px-10 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <IconSparkles size={16} />
              Ready to launch
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-5xl">
              Put Comet on your phone line and website.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Start with one workflow, test it in real calls, and scale from there without rebuilding
              your operations stack.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard">
              <button className="rounded-2xl bg-white px-6 py-4 text-base font-medium text-black shadow-[inset_0_-6px_14px_rgba(0,0,0,0.05),0_14px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
                Open dashboard
              </button>
            </Link>
            <button className="rounded-2xl bg-white/10 px-6 py-4 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5">
              Talk to Comet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
