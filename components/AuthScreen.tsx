"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconLock,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function AuthScreen({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const isSignup = mode === "signup";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.92),_transparent_52%)] dark:bg-[radial-gradient(circle_at_top,_rgba(39,39,42,0.38),_transparent_42%)]" />
      <div className="absolute left-[10%] top-24 h-56 w-56 rounded-full bg-zinc-100 blur-3xl dark:bg-zinc-900" />
      <div className="absolute right-[12%] top-32 h-48 w-48 rounded-full bg-zinc-100/80 blur-3xl dark:bg-zinc-900/80" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              <IconBolt size={18} />
            </span>
            Comet
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={isSignup ? "/login" : "/signup"}
              className="text-sm text-zinc-500 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {isSignup ? "Log in" : "Sign up"}
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-1 items-center py-10">
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <section className="max-w-xl">
              <div className="inline-flex rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                {isSignup ? "Start free" : "Welcome back"}
              </div>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
                {isSignup ? "Deploy your first AI sales agent." : "Pick up where your pipeline left off."}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
                {isSignup
                  ? "Create a Comet workspace, configure your voice agent, and start qualifying leads in minutes."
                  : "Jump back into call performance, scored leads, and the workflows your team is already running."}
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Voice agents that qualify leads automatically",
                  "Live scoring, transcripts, and CRM sync",
                  "Fast setup for tomorrow’s demo and beyond",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                      <IconCheck size={16} />
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 hidden rounded-[2rem] bg-zinc-50 p-6 dark:bg-zinc-900 lg:block">
                <div className="rounded-[1.5rem] bg-white p-5 dark:bg-zinc-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Agent performance
                      </p>
                      <p className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        87%
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      lead score
                    </span>
                  </div>
                  <div className="mt-6">
                    <svg viewBox="0 0 420 150" className="h-32 w-full" aria-hidden="true">
                      {[28, 58, 88, 118].map((line) => (
                        <line
                          key={line}
                          x1="16"
                          y1={line}
                          x2="404"
                          y2={line}
                          className="stroke-zinc-200 dark:stroke-zinc-800"
                          strokeWidth="1"
                        />
                      ))}
                      <path
                        d="M16 118 C 52 110, 82 76, 120 86 S 180 126, 224 94 S 296 46, 342 58 S 382 84, 404 52"
                        fill="none"
                        className="stroke-zinc-900 dark:stroke-zinc-100"
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto w-full max-w-md rounded-[2rem] bg-zinc-50 p-6 dark:bg-zinc-900">
              <div className="rounded-[1.6rem] bg-white p-6 dark:bg-zinc-950">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {isSignup ? "Create account" : "Log in"}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {isSignup ? "Set up your workspace" : "Access your dashboard"}
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    {isSignup ? <IconUser size={18} /> : <IconLock size={18} />}
                  </div>
                </div>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  {isSignup ? (
                    <InputField
                      icon={<IconUser size={16} />}
                      label="Full name"
                      placeholder="Ariana Wells"
                      type="text"
                    />
                  ) : null}
                  <InputField
                    icon={<IconMail size={16} />}
                    label="Email"
                    placeholder="you@company.com"
                    type="email"
                  />
                  <InputField
                    icon={<IconLock size={16} />}
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                  />

                  <button
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    type="submit"
                  >
                    {isSignup ? "Sign up" : "Log in"}
                    <IconArrowRight size={16} />
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  {isSignup ? "Already have an account?" : "Need a workspace?"}{" "}
                  <Link
                    href={isSignup ? "/login" : "/signup"}
                    className="text-zinc-900 transition-all duration-200 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
                  >
                    {isSignup ? "Log in" : "Sign up"}
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function InputField({
  label,
  placeholder,
  type,
  icon,
}: {
  label: string;
  placeholder: string;
  type: string;
  icon: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 px-4 py-3 transition-all duration-200 focus-within:bg-white focus-within:ring-1 focus-within:ring-zinc-300 dark:bg-zinc-900 dark:focus-within:bg-zinc-950 dark:focus-within:ring-zinc-700">
        <span className="text-zinc-400 dark:text-zinc-500">{icon}</span>
        <input
          className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </label>
  );
}
