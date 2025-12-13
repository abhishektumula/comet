"use client";
import { useState } from "react";
import {
  IconChevronRight,
  IconChevronLeft,
  IconSend,
} from "@tabler/icons-react";
import { Container } from "./container";
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isStep1Valid = formData.name && formData.email && formData.phone;
  const isStep2Valid = formData.agentName && formData.greetingLine;
  const isStep3Valid =
    formData.organizationName && formData.organizationDescription;

  const handleNext = () => {
    if (step === 1 && isStep1Valid) {
      setStep(2);
    } else if (step === 2 && isStep2Valid) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStep3Valid) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  //   if (submitted) {
  //     return (
  //       <div>
  //         <div className="min-h-screen bg-white flex items-center justify-center p-4">
  //           <div className="max-w-sm w-full text-center">
  //             <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
  //               <IconSend className="w-8 h-8 text-white" />
  //             </div>
  //             <h2 className="text-2xl font-semibold text-black mb-2">Success</h2>
  //             <p className="text-gray-600 mb-8 text-sm">
  //               Your information has been submitted successfully.
  //             </p>
  //             <button
  //               onClick={() => {
  //                 setSubmitted(false);
  //                 setStep(1);
  //                 setFormData({
  //                   name: "",
  //                   email: "",
  //                   phone: "",
  //                   agentName: "",
  //                   greetingLine: "",
  //                   organizationName: "",
  //                   organizationDescription: "",
  //                 });
  //               }}
  //               className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
  //             >
  //               Start Again
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div className="w-full h-screen bg-white">
      <Container className="text-neutral-900">
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-black">
                  {step === 1 && "Contact Details"}
                  {step === 2 && "Agent Information"}
                  {step === 3 && "Organization"}
                </h1>
                <span className="text-sm text-gray-600 font-medium">
                  {step}/3
                </span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1 rounded-full ${
                      i <= step ? "bg-black" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm text-neutral-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm text-neutral-900"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm text-neutral-900"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      name="agentName"
                      value={formData.agentName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm text-neutral-900"
                      placeholder="Agent name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Greeting Line
                    </label>
                    <textarea
                      name="greetingLine"
                      value={formData.greetingLine}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm resize-none text-neutral-900"
                      placeholder="Enter greeting message"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm text-neutral-900"
                      placeholder="Organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Organization Description
                    </label>
                    <textarea
                      name="organizationDescription"
                      value={formData.organizationDescription}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-sm resize-none text-neutral-900"
                      placeholder="Describe your organization"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={step === 1}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-black hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <IconChevronLeft className="w-4 h-4" />
                  Back
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !isStep1Valid) ||
                      (step === 2 && !isStep2Valid)
                    }
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <IconChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link href="/agent">
                    <button
                      type="submit"
                      disabled={!isStep3Valid}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit
                      <IconSend className="w-4 h-4" />
                    </button>
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
