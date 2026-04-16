"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { IconArrowLeft, IconBuilding, IconSparkles } from "@tabler/icons-react";

const organizationTemplates = [
  {
    agentId: "atlas-sdr",
    name: "Riverline Dental",
    industry: "Dental clinic",
    agentName: "Riverline Front Desk",
    greeting:
      "Hi, this is Ava from Riverline Dental. I can help with appointments, insurance questions, or urgent dental concerns. How can I help today?",
    fallback:
      "That is a great question. Let me connect you with our front desk team so you get the right answer.",
    knowledge:
      "Riverline Dental is a full-service dental clinic serving families, professionals, and new patients. The clinic provides cleanings, exams, fillings, crowns, whitening, Invisalign consultations, and emergency dental visits. Most callers want to book or reschedule appointments, ask about insurance acceptance, confirm office hours, or understand pricing for common treatments. The office operates Monday through Saturday and supports both insured and self-pay patients. The agent should sound calm, reassuring, and professional, help callers identify the right appointment type, and escalate urgent pain or emergency concerns quickly.",
  },
  {
    agentId: "night-shift",
    name: "Northline Service Co.",
    industry: "Home services company",
    agentName: "Northline Dispatch",
    greeting:
      "Hello, this is Mason from Northline Service. I can help you book a technician visit or route your service request to the right team.",
    fallback:
      "I want to make sure you get the right help. Let me connect you with a specialist from our service desk.",
    knowledge:
      "Northline Service Co. is a residential home services company specializing in plumbing, HVAC maintenance, urgent repair visits, drain cleaning, leak detection, water heater replacement, and seasonal inspections. Customers usually call to ask about same-day availability, pricing, emergency dispatch, repair eligibility, or maintenance scheduling. The business serves homeowners, property managers, and small commercial clients, with weekday and Saturday service windows and a separate queue for emergency jobs. The agent should be direct, helpful, and fast, gather the issue type and urgency, and move qualified callers toward a booked appointment as quickly as possible.",
  },
  {
    agentId: "atlas-sdr",
    name: "BrightPath Legal",
    industry: "Legal intake",
    agentName: "BrightPath Intake",
    greeting:
      "Hi, this is Elena with BrightPath Legal. I can help understand your case and connect you with the right intake specialist.",
    fallback:
      "I do not want to guess on something important. Let me route this to our intake team for a more precise answer.",
    knowledge:
      "BrightPath Legal is a consumer-focused law firm handling personal injury, employment disputes, and civil claims. Most callers want to understand whether they have a valid case, what documents they should prepare, how consultations work, and when an attorney can call them back. The intake team gathers contact details, a short case summary, incident dates, and urgency before routing leads to the correct practice group. The agent should sound empathetic, composed, and structured, avoid legal advice, and focus on qualifying callers for a consultation.",
  },
  {
    agentId: "night-shift",
    name: "Nova Fitness",
    industry: "Gym and fitness studio",
    agentName: "Nova Membership Desk",
    greeting:
      "Hey, this is Jordan from Nova Fitness. I can help with memberships, class schedules, and booking a tour.",
    fallback:
      "I want to make sure I give you the right information. Let me connect you with a membership specialist.",
    knowledge:
      "Nova Fitness is a modern gym and boutique fitness studio offering monthly memberships, personal training, group classes, and introductory trial sessions. Prospective customers usually ask about membership pricing, class schedules, trainer availability, cancellation policies, and whether they can book a walk-through before signing up. The club is open seven days a week with separate schedules for strength classes, cardio sessions, and personal coaching. The agent should sound upbeat, confident, and welcoming, help leads find the right membership fit, and encourage high-intent callers to schedule a tour or speak with the sales desk.",
  },
] as const;

export default function FormPage() {
  const router = useRouter();
  const [endUnqualified, setEndUnqualified] = useState(true);
  const [transferQualified, setTransferQualified] = useState(false);
  const [organizationQuery, setOrganizationQuery] = useState("");
  const [agentName, setAgentName] = useState("");
  const [greetingLine, setGreetingLine] = useState("");
  const [fallbackLine, setFallbackLine] = useState("");
  const [knowledge, setKnowledge] = useState("");

  const matchingOrganizations = useMemo(() => {
    const normalized = organizationQuery.trim().toLowerCase();

    if (!normalized) {
      return organizationTemplates;
    }

    return organizationTemplates.filter(
      (template) =>
        template.name.toLowerCase().includes(normalized) ||
        template.industry.toLowerCase().includes(normalized),
    );
  }, [organizationQuery]);

  const applyTemplate = (template: (typeof organizationTemplates)[number]) => {
    setOrganizationQuery(template.name);
    setAgentName(template.agentName);
    setGreetingLine(template.greeting);
    setFallbackLine(template.fallback);
    setKnowledge(template.knowledge);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createdAgent = {
      organizationName: organizationQuery.trim(),
      agentName: agentName.trim(),
      greetingLine: greetingLine.trim(),
      fallbackLine: fallbackLine.trim(),
      knowledge: knowledge.trim(),
      endUnqualified,
      transferQualified,
    };

    window.localStorage.setItem("comet-demo-agent", JSON.stringify(createdAgent));
    router.push("/dashboard/demo-agent");
  };

  return (
    <main className="bg-white px-6 pb-24 pt-32 dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <IconArrowLeft size={18} />
          Back to Agents
        </Link>

        <div className="mt-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Configure your agent
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Define how your AI agent speaks and what it knows.
          </p>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <IconSparkles size={18} />
              Demo autofill
            </div>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Search an organization and Comet will prefill a realistic demo script.
            </p>

            <div className="relative mt-4">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                <IconBuilding size={18} />
              </div>
              <input
                className="w-full rounded-xl border border-zinc-200 bg-white px-11 py-3 text-sm text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-zinc-600"
                onChange={(event) => setOrganizationQuery(event.target.value)}
                placeholder="Search for a clinic, law firm, home services company..."
                type="text"
                value={organizationQuery}
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {matchingOrganizations.slice(0, 4).map((template) => (
                <button
                  key={template.name}
                  className="rounded-full bg-white px-3 py-1.5 text-sm text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  onClick={() => applyTemplate(template)}
                  type="button"
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <Field label="Agent Name">
            <input
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-600"
              onChange={(event) => setAgentName(event.target.value)}
              placeholder="e.g. Outbound SDR - Q2 Campaign"
              type="text"
              value={agentName}
            />
          </Field>

          <Field label="Greeting Line">
            <input
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-600"
              onChange={(event) => setGreetingLine(event.target.value)}
              placeholder="Hi, my name is Alex and I'm calling from..."
              type="text"
              value={greetingLine}
            />
            <p className="mt-2 text-xs text-zinc-400">
              This is the first thing your agent says when the call connects.
            </p>
          </Field>

          <Field label="Fallback / Don&apos;t Know Line">
            <input
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-600"
              onChange={(event) => setFallbackLine(event.target.value)}
              placeholder="That's a great question — let me connect you with someone who can help."
              type="text"
              value={fallbackLine}
            />
            <p className="mt-2 text-xs text-zinc-400">
              Used when the AI doesn&apos;t have a confident answer.
            </p>
          </Field>

          <Field label="Agent Description / Knowledge">
            <textarea
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 transition focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-600"
              onChange={(event) => setKnowledge(event.target.value)}
              placeholder="Paste your product information, FAQs, objection handling guides, or call scripts here. The agent will use this as its knowledge base."
              rows={8}
              value={knowledge}
            />
            <p className="mt-2 text-xs text-zinc-400">
              Supports plain text. Up to 50,000 characters.
            </p>
          </Field>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Call Behavior
            </label>
            <div className="space-y-4 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-900">
              <ToggleRow
                checked={endUnqualified}
                label="End call if lead is unqualified"
                onChange={() => setEndUnqualified((value) => !value)}
              />
              <ToggleRow
                checked={transferQualified}
                label="Transfer to human if score &gt; 90%"
                onChange={() => setTransferQualified((value) => !value)}
              />
            </div>
          </div>

          <button
            className="w-full rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            type="submit"
          >
            Create Agent
          </button>
          <p className="text-center text-xs text-zinc-400">
            Agent will be active within 30 seconds of creation.
          </p>
        </form>
      </div>
    </main>
  );
}

function Field({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}

function ToggleRow({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
      <button
        aria-pressed={checked}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-200 ${
          checked ? "bg-zinc-900 dark:bg-white" : "bg-zinc-200 dark:bg-zinc-700"
        }`}
        onClick={onChange}
        type="button"
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white transition-all duration-200 dark:bg-zinc-900 ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
