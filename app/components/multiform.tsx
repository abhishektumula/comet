"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconSparkles } from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  agentName: string;
  greetingLine: string;
  organizationName: string;
  organizationDescription: string;
}

const suggestions = {
  1: [
    {
      label: "Clinic operator",
      values: {
        name: "Ariana Wells",
        email: "ariana@riverlinedental.com",
        phone: "+1 415 555 0192",
      },
    },
    {
      label: "Home services rep",
      values: {
        name: "Marcus Reed",
        email: "marcus@northlineservice.com",
        phone: "+1 408 555 0147",
      },
    },
  ],
  2: [
    {
      label: "Front desk agent",
      values: {
        agentName: "Comet Frontdesk",
        greetingLine:
          "Hi, this is Comet from Riverline Dental. I can help with appointments, insurance questions, or rescheduling. What do you need today?",
      },
    },
    {
      label: "Intake agent",
      values: {
        agentName: "Atlas Intake",
        greetingLine:
          "Hello, this is Atlas from Northline Service. I can help you book a visit or route your request to the right team.",
      },
    },
  ],
  3: [
    {
      label: "Dental clinic",
      values: {
        organizationName: "Riverline Dental",
        organizationDescription:
          "Riverline Dental is a full-service dental clinic serving families, professionals, and new patients across the city. The practice offers preventive care such as cleanings, exams, X-rays, and fillings, as well as cosmetic dentistry, whitening, crowns, Invisalign consultations, and emergency dental appointments. Most callers contact the clinic to book or reschedule visits, ask whether the practice accepts their insurance, check appointment availability, confirm office hours, or understand the difference between treatment options. The clinic operates Monday through Saturday, supports both insured and self-pay patients, and usually schedules new patient consultations in longer appointment slots than routine follow-up visits. The agent should sound calm, reassuring, and professional, guide callers toward the right type of appointment, explain the next step clearly, and escalate urgent treatment concerns when needed.",
      },
    },
    {
      label: "Home services company",
      values: {
        organizationName: "Northline Service Co.",
        organizationDescription:
          "Northline Service Co. is a residential home services company specializing in plumbing, HVAC maintenance, urgent repair visits, drain cleaning, leak detection, water heater replacement, and seasonal inspection services. The business serves homeowners, property managers, and small commercial clients who typically call for same-day availability, pricing questions, emergency dispatch, maintenance scheduling, or follow-up support after a technician visit. Many callers want to know whether a technician can come out today, what service window is available, whether the company handles a specific repair issue, and how urgent problems should be prioritized. The company runs weekday and Saturday service windows, keeps separate scheduling for emergency work, and uses the phone line as the main channel for lead capture and dispatch coordination. The agent should be direct, helpful, and fast, collect the issue type and urgency, reassure the caller that the request is being routed correctly, and move qualified callers toward a booked service slot as quickly as possible.",
      },
    },
  ],
} satisfies Record<number, Array<{ label: string; values: Partial<FormData> }>>;

type FormStep = 1 | 2 | 3;

export default function MultiStepForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    agentName: "",
    greetingLine: "",
    organizationName: "",
    organizationDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applySuggestion = (values: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...values }));
  };

  const isStep1Valid = formData.name && formData.email && formData.phone;
  const isStep2Valid = formData.agentName && formData.greetingLine;
  const isStep3Valid = formData.organizationName && formData.organizationDescription;

  return (
    <div className="mx-auto mt-8 mb-10 max-w-2xl section-frame p-6 md:p-8">
      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-black">
          {step === 1 && "Contact Details"}
          {step === 2 && "Agent Information"}
          {step === 3 && "Organization"}
        </h1>
        <span className="text-sm font-medium text-gray-600">{step}/3</span>
      </div>

      <div className="mb-6 flex gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-black" : "bg-gray-200"}`} />
        ))}
      </div>

      <div className="mb-6 rounded-2xl bg-stone-50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
          <IconSparkles size={16} />
          Quick fill suggestions
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions[step].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => applySuggestion(item.values)}
              className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_8px_18px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:text-black"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {step === 1 && (
          <>
            <Field name="name" label="Name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            <Field name="email" label="Email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" />
            <Field name="phone" label="Phone Number" value={formData.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
          </>
        )}

        {step === 2 && (
          <>
            <Field name="agentName" label="Agent Name" value={formData.agentName} onChange={handleChange} placeholder="Agent name" />
            <TextArea name="greetingLine" label="Greeting Line" value={formData.greetingLine} onChange={handleChange} placeholder="How should your agent greet callers?" />
          </>
        )}

        {step === 3 && (
          <>
            <Field name="organizationName" label="Organization Name" value={formData.organizationName} onChange={handleChange} placeholder="Company" />
            <TextArea
              name="organizationDescription"
              label="Detailed Company Description"
              hint="Write a detailed description of the company. Explain what the business does, the services it provides, who its customers are, what callers usually ask for, how bookings or support work, business hours, locations, pricing context, and anything the agent should know to answer naturally."
              value={formData.organizationDescription}
              onChange={handleChange}
              placeholder="Example: Riverline Dental is a full-service dental clinic serving families, working professionals, and new patients across San Francisco. We provide routine cleanings, fillings, cosmetic dentistry, Invisalign consultations, emergency dental care, crowns, and whitening treatments. Most callers want to book or reschedule appointments, ask about insurance coverage, confirm clinic hours, or understand treatment pricing. The clinic is open Monday to Saturday, supports both insured and self-pay patients, and usually books new patients for 45-minute consultation slots. The agent should sound warm, professional, and clear, help qualify the caller's need, and guide them toward booking or the right team."
            />
          </>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => setStep(step === 3 ? 2 : 1)}
          disabled={step === 1}
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-50 disabled:opacity-50"
        >
          Back
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={() => step === 1 ? isStep1Valid && setStep(2) : isStep2Valid && setStep(3)}
            disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <Link href="/agent">
            <button
              type="button"
              disabled={!isStep3Valid}
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-50"
            >
              Deploy Agent
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

type Props = {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  hint?: string;
};

const Field = ({ name, label, value, placeholder, onChange, type = "text" }: Props) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-black">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-black"
      placeholder={placeholder}
    />
  </div>
);

const TextArea = ({ name, label, value, placeholder, onChange, hint }: Props) => (
  <AutoResizeTextArea
    name={name}
    label={label}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    hint={hint}
  />
);

const AutoResizeTextArea = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  hint,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = textareaRef.current;
    if (!element) return;
    element.style.height = "0px";
    element.style.height = `${element.scrollHeight}px`;
  }, [value]);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-black">{label}</label>
      {hint ? <p className="mb-2 text-sm leading-6 text-neutral-500">{hint}</p> : null}
      <textarea
        ref={textareaRef}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full resize-none overflow-hidden rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-black"
        placeholder={placeholder}
      />
    </div>
  );
};
