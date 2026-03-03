"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const titles = ["Saas Companies", "HealthCare", "E-Commerce", "Home Services"];

const KalDock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
};

export const LandingHero = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex h-auto w-full flex-row items-center justify-between p-6">
      <div className="w-1/2">
        <h1 className="text-6xl text-black">AI voice agents for</h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-row text-center text-neutral-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {titles[current].split("").map((letter, idx) => (
              <motion.h1
                key={idx}
                className="text-6xl font-bold"
                initial={{ x: 20, opacity: 0, filter: "blur(4px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.25, delay: idx * 0.04, ease: "easeOut" }}
              >
                {letter}
              </motion.h1>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="pt-8">
          <p className="text-2xl text-neutral-700">
            Your complete platform for AI voice agents that sound real. Easiest to use, best sounding,
            built to automate it all.
          </p>
        </div>

        <div className="pt-6">
          <Link href="/dashboard">
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className="rounded-lg bg-black px-8 py-4 text-xl text-neutral-100 transition-all duration-300 hover:rounded-2xl"
            >
              Get your voice agent
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="w-1/2">
        <div className="mx-auto m-10 flex h-[35rem] w-[80%] flex-col items-start justify-start rounded-2xl border border-neutral-400 bg-neutral-100 shadow-xl/20">
          <div className="p-6 text-neutral-700 transition duration-300">
            <span className="flex flex-row gap-2">
              <KalDock />
              KalDock
            </span>
          </div>
          <div className="mx-6 flex w-[80%] items-start justify-start rounded-tl-2xl border border-neutral-300 p-6">
            <h1 className="text-neutral-800">
              Hey there! I&apos;m an AI assistant from Calldock. Want to see how I work? I can either give
              you a quick demo call or you can listen to some recordings first.
            </h1>
          </div>
          <div className="mx-6 w-[80%] items-start px-2 py-4">
            <button className="rounded-xl bg-black px-4 py-2 text-neutral-100">Give me a call</button>
          </div>
        </div>
      </div>
    </div>
  );
};
