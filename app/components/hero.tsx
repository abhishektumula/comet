"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { KalDock } from "./navigation";
import Link from "next/link";

export const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  const titles = [
    "Saas Companies",
    "HealthCare",
    "E-Commerce",
    "Home Services",
  ];

  // Rotate title every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row w-full h-auto items-center justify-between mx-auto p-6">
      <div className="w-1/2">
        <h1 className="text-black text-6xl">AI voice agents for</h1>

        {/* Animate title change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-row text-neutral-700 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {titles[current].split("").map((letter, idx) => (
              <motion.h1
                key={idx}
                className="text-6xl font-bold"
                initial={{ x: 20, opacity: 0, filter: "blur(4px)" }}
                animate={{
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.25,
                  delay: idx * 0.04,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.h1>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="pt-8">
          <p className="text-2xl text-neutral-700">
            Your complete platform for AI voice agents that sound real. Easiest
            to use, best sounding, built to automate it all.
          </p>
        </div>
        <div className="pt-6 ">
          <Link href="/dashboard">
            <motion.button
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className="px-8 py-4 bg-black text-neutral-100 rounded-lg hover:rounded-2xl text-xl transition-all duration-300"
            >
              Get your voice agent
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <div className="m-10 bg-neutral-100 h-140 w-[80%] mx-auto border border-neutral-400 rounded-2xl shadow-xl/20 flex flex-col justify-start items-start">
          <div className="p-6 text-neutral-700 transition text duration-300">
            <span className="flex flex-row gap-2">
              <KalDock />
              KalDock
            </span>
          </div>
          <div className="w-[80%] p-6 mx-6 flex justify-start items-start border border-neutral-300 rounded-tl-2xl border-md">
            <h1 className="text-neutral-800">
              Hey there! I'm an AI assistant from Calldock. Want to see how I
              work? I can either give you a quick demo call or you can listen to
              some recordings first.
            </h1>
          </div>
          <div className="mx-6 px-2 py-4 w-[80%] flex items-start ">
            <button className="bg-black text-neutral-100 px-4 py-2 rounded-xl">
              Give me a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
