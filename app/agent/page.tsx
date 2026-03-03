"use client";

import { useState } from "react";
import { IconCopy, IconPhone } from "@tabler/icons-react";
import { Container } from "../components/container";
import { DashboardNavigationBar } from "../components/navigation";
import { WidgetScript } from "../components/widget-script";

export default function AgentPage() {
  const [copied, setCopied] = useState(false);
  const agentId = "cd_8701kbyj8c8zf4c8rz94j4ctfer9";
  const embedScript = `<script src=\"https://www.calldock.co/widget.js\" data-agentid=\"${agentId}\" data-logo-width=\"24\" data-logo-height=\"24\"></script>`;

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <WidgetScript agentId={agentId} />
      <Container>
        <DashboardNavigationBar />

        <div className="mt-4 section-frame p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Arora Agent</h1>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <span className="font-mono">{agentId}</span>
                <button onClick={() => copy(agentId)} className="rounded p-1 hover:bg-gray-100">
                  <IconCopy size={16} />
                </button>
              </div>
              {copied && <p className="mt-1 text-xs text-green-700">Copied</p>}
            </div>

            <div className="rounded-xl border border-gray-200 p-3 text-right">
              <p className="text-xs text-gray-500">Status</p>
              <p className="font-semibold text-green-700">Live</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Info title="First Response" value="Hi, I am Arora. How can I help you today?" />
            <Info title="Voice" value="Hayden" />
            <Info title="Max Call Duration" value="5 minutes" />
            <Info title="Knowledge Sources" value="1 knowledge base connected" />
          </div>
        </div>

        <div className="section-frame mt-5 p-6">
          <h2 className="text-xl font-semibold">Website Widget Script</h2>
          <p className="mt-1 text-sm text-gray-600">Paste this in your website&apos;s head tag.</p>
          <pre className="mt-4 overflow-auto rounded-lg bg-gray-100 p-3 text-xs">{embedScript}</pre>
          <button onClick={() => copy(embedScript)} className="mt-4 rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-neutral-800">
            Copy Script
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Action title="Test Agent" desc="Run a test conversation before going live." />
          <Action title="Conversation Logs" desc="Review caller transcripts and outcomes." />
          <Action title="Activity" desc="Check performance and booking trends." />
        </div>
      </Container>
    </main>
  );
}

const Info = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-xl border border-gray-200 p-4">
    <p className="text-xs uppercase tracking-wide text-gray-500">{title}</p>
    <p className="mt-2 text-sm text-gray-800">{value}</p>
  </div>
);

const Action = ({ title, desc }: { title: string; desc: string }) => (
  <button className="section-frame p-5 text-left transition hover:-translate-y-0.5">
    <IconPhone size={20} className="text-gray-700" />
    <h3 className="mt-3 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </button>
);
