"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  agentName: string;
  greetingLine: string;
  organizationName: string;
  organizationDescription: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
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
            <TextArea name="organizationDescription" label="Organization Description" value={formData.organizationDescription} onChange={handleChange} placeholder="What does your business do?" />
          </>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
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

const TextArea = ({ name, label, value, placeholder, onChange }: Props) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-black">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-black"
      placeholder={placeholder}
    />
  </div>
);
