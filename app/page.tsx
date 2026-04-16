import {
  IconChartBar,
  IconPhoneCall,
  IconPlayerPlay,
  IconUpload,
} from "@tabler/icons-react";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { HeroTranscript } from "@/components/HeroTranscript";
import { PricingCard } from "@/components/PricingCard";

export default function Home() {
  return (
    <main className="bg-white dark:bg-zinc-950">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 text-center">
        <div className="mx-auto inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          AI-powered sales calls
        </div>
        <h1 className="mt-8 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-7xl">
          <span className="block">Close more deals.</span>
          <span className="mt-2 block text-zinc-400 dark:text-zinc-500">
            While you sleep.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          Comet deploys voice AI agents that call your leads, qualify them in
          real time, and score their likelihood to convert.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/signup"
            className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Start for free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <IconPlayerPlay size={18} />
            </span>
            See it in action
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span>Trusted by 200+ sales teams</span>
          <div className="flex -space-x-2">
            {["A", "M", "K", "S"].map((label, index) => (
              <div
                key={label}
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-medium text-white dark:border-zinc-950 ${
                  index === 0
                    ? "bg-blue-500"
                    : index === 1
                      ? "bg-emerald-500"
                      : index === 2
                        ? "bg-zinc-700"
                        : "bg-amber-500"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-3xl">
          <HeroTranscript />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24" id="features">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            From lead to close — automatically.
          </h2>
        </div>
        <div className="mt-16 space-y-12">
          {[
            {
              step: "01",
              title: "Upload your lead list",
              description:
                "Import prospects from CSVs or your CRM and segment them by campaign, region, or intent.",
            },
            {
              step: "02",
              title: "Comet calls and qualifies",
              description:
                "Voice agents handle first-touch outreach, answer questions, and adapt in real time as the call unfolds.",
            },
            {
              step: "03",
              title: "Review scored leads",
              description:
                "Your team gets ranked opportunities, transcripts, and a clear recommendation on who to call next.",
            },
          ].map((item, index) => (
            <div
              key={item.step}
              className={`grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start ${
                index === 1 ? "md:pl-20" : index === 2 ? "md:pl-10" : ""
              }`}
            >
              <div className="text-7xl font-bold tracking-tight text-zinc-100 dark:text-zinc-800 md:text-8xl">
                {item.step}
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
              <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                {index === 0 ? (
                  <IconUpload size={20} />
                ) : index === 1 ? (
                  <IconPhoneCall size={20} />
                ) : (
                  <IconChartBar size={20} />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeatureShowcase />

      <section className="bg-zinc-50 py-10 dark:bg-zinc-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          {[
            ["10M+", "Calls Made"],
            ["87%", "Avg Lead Score Accuracy"],
            ["3×", "More Conversions"],
            ["< 2s", "Response Time"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`${
                index < 3
                  ? "md:border-r md:border-zinc-200 md:pr-8 dark:md:border-zinc-800"
                  : ""
              }`}
            >
              <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {value}
              </div>
              <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24" id="pricing">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Choose the pace that fits your pipeline.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <PricingCard
            name="Starter"
            price="$99"
            description="For teams validating outbound automation."
            features={[
              "1 active agent",
              "2,000 minutes included",
              "Basic lead scoring",
              "Email support",
            ]}
          />
          <PricingCard
            name="Growth"
            price="$299"
            description="For revenue teams scaling faster follow-up."
            features={[
              "5 active agents",
              "20,000 minutes included",
              "CRM sync and transcripts",
              "Advanced analytics",
              "Priority support",
            ]}
            featured
          />
          <PricingCard
            name="Enterprise"
            price="Custom"
            description="For multi-team orchestration and custom deployment."
            features={[
              "Unlimited agents",
              "Custom workflows",
              "Dedicated onboarding",
              "Security review",
              "SLA support",
            ]}
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-zinc-900 px-8 py-12 text-center dark:bg-zinc-100 md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white dark:text-zinc-900">
              Ready to automate your pipeline?
            </h2>
            <p className="mt-2 text-sm text-zinc-300 dark:text-zinc-600">
              Launch your first AI calling workflow in a few minutes.
            </p>
          </div>
          <a
            href="/new-agent"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-all duration-200 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Start free
          </a>
        </div>
      </section>
    </main>
  );
}
