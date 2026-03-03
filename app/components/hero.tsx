"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sectors = ["Hospitality", "Property", "Legal Intake", "Clinics", "E-Commerce"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ticker = setInterval(() => {
      setIndex((prev) => (prev + 1) % sectors.length);
    }, 2400);

    return () => clearInterval(ticker);
  }, []);

  return (
    <section className="grid gap-8 pb-8 pt-8 md:grid-cols-[1.25fr_0.95fr] md:gap-12 md:pb-16 md:pt-14">
      <div className="space-y-7">
        <div className="eyebrow reveal-up">Conversational Revenue Engine</div>

        <h1 className="headline reveal-up">
          Typographic
          <br />
          Voice Ops
          <br />
          For
          <AnimatePresence mode="wait">
            <motion.span
              key={sectors[index]}
              className="ml-3 inline-block text-[var(--coral-500)]"
              initial={{ opacity: 0, y: 14, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {sectors[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="max-w-[58ch] text-[var(--ink-800)]">
          Build agents that sound human, route with context, and close intent faster.
          Kaldock combines script design, behavior controls, and real-time monitoring in one surface.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/new-agent" className="primary-button">
            Launch New Agent
          </Link>
          <Link href="/chat" className="ghost-button">
            Test Chat Studio
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Intent scoring", "Latency watch", "Adaptive scripts", "Campaign memory"].map((pill) => (
            <span key={pill} className="liquid-chip">
              {pill}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="section-frame float-card relative overflow-hidden rounded-3xl p-6 md:p-8"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-[rgba(15,17,19,0.2)] bg-[rgba(246,241,232,0.7)] px-3 py-1">
          <span className="status-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em]">Live Calls</span>
        </div>

        <div className="pt-9">
          <p className="eyebrow mb-4">Sample Conversation</p>

          <div className="space-y-3 text-sm">
            <div className="chat-bubble ml-auto max-w-[90%] bg-[rgba(15,17,19,0.08)]">
              Can you book a same-day pest inspection for 4pm?
            </div>
            <div className="chat-bubble max-w-[92%] border-[rgba(123,212,181,0.55)] bg-[rgba(123,212,181,0.15)]">
              Absolutely. I can confirm 4:00 PM today at 14 King Street. Want SMS confirmation too?
            </div>
            <div className="chat-bubble ml-auto max-w-[85%] bg-[rgba(15,17,19,0.08)]">Yes, send to +1 408 333 1209.</div>
          </div>
        </div>

        <div className="gradient-line mt-7" />

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-4xl font-semibold">31%</p>
            <p className="eyebrow mt-1">higher booking conversion</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">89ms</p>
            <p className="eyebrow mt-1">avg response latency</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
