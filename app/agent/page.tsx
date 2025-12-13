"use client";
import {
  IconPhone,
  IconCopy,
  IconClock,
  IconFileText,
  IconChartBar,
  IconGlobe,
} from "@tabler/icons-react";

import { useState } from "react";
import { Container } from "../components/container";

export default function FuckoFF() {
  const [copiedId, setCopiedId] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);

  const agentId = "cd_8701kbyj8c8zf4c8rz94j4ctfer9";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const embedScript = `<script src="https://www.calldock.co/widget.js" data-agentid="${agentId}" data-logo-width="24" data-logo-height="24"></script>`;

  return (
    <div className="h-screen w-full bg-white text-neutral-900">
      <Container className="">
        <div className="min-h-screen bg-white">
          <script
            src="https://www.calldock.co/widget.js"
            data-agentid={agentId}
            data-logo-width="24"
            data-logo-height="24"
          ></script>

          {/* HEADER */}
          <header className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between max-w-[1600px] mx-auto">
              <div className="flex items-center gap-6">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <nav className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Dashboard</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900 font-medium">arora</span>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">$0.136</span>
                <button className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-medium">
                  A
                </button>
              </div>
            </div>
          </header>

          {/* MAIN */}
          <main className="max-w-[1600px] mx-auto px-6 py-8">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <IconPhone className="w-7 h-7 text-gray-700" />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold mb-1">arora</h1>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 font-mono">
                      {agentId}
                    </span>
                    <button
                      onClick={() => handleCopy(agentId)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <IconCopy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* NAV TABS */}
              <nav className="flex gap-1 border-b border-gray-200">
                <button className="px-6 py-3 text-sm font-medium border-b-2 border-black">
                  Overview
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Settings
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Conversation
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Widget
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Lead Form
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Activity
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Knowledge
                </button>
              </nav>
            </div>

            {/* AGENT OVERVIEW CARD */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-1">Agent Overview</h2>
                <p className="text-sm text-gray-500">
                  Basic information about your voice agent
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-3">
                    Agent ID
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded border border-gray-200">
                    <span className="text-sm font-mono flex-1">{agentId}</span>
                    <button
                      onClick={() => handleCopy(agentId)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <IconCopy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-3">
                    First Response
                  </label>
                  <div className="text-sm text-gray-900">Hi i am arora</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-3">
                    Created
                  </label>
                  <div className="text-sm text-gray-900">
                    12/8/2025, 2:16:40 PM
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-3">
                    Voice
                  </label>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <span className="w-4 h-4 text-gray-400">🔊</span>
                    <span>Hayden</span>
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-3">
                    Max Call Duration
                  </label>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <IconClock className="w-4 h-4 text-gray-400" />
                    <span>5 minutes</span>
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-3">
                    Knowledge Sources
                  </label>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <button>
                      <IconFileText className="w-4 h-4 text-gray-400" />
                      <span>1 knowledge base connected (94.7 KB)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-3 gap-6">
                {/* TEST AGENT */}
                <button className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-sm transition-all group">
                  <div className="flex flex-col items-center gap-4">
                    <IconPhone className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                    <span className="text-sm font-medium">Test Your Agent</span>
                  </div>
                </button>

                {/* CONNECT TO WEBSITE */}
                <button
                  onClick={() => setShowConnectModal(true)}
                  className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex flex-col items-center gap-4">
                    <IconGlobe className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                    <span className="text-sm font-medium">
                      Connect To Your Website
                    </span>
                  </div>
                </button>

                {/* VIEW ACTIVITY */}
                <button className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-sm transition-all group">
                  <div className="flex flex-col items-center gap-4">
                    <IconChartBar className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                    <span className="text-sm font-medium">View Activity</span>
                  </div>
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* ✨ MODAL POPUP */}
        {showConnectModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-[480px] rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-3">
                Connect To Your Website
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Copy the script below and paste it inside your website’s{" "}
                <code>&lt;head&gt;</code> section.
              </p>

              <div className="bg-gray-100 border text-sm border-gray-300 rounded p-3 font-mono break-all">
                {embedScript}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => navigator.clipboard.writeText(embedScript)}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800"
                >
                  Copy
                </button>

                <button
                  onClick={() => setShowConnectModal(false)}
                  className="px-4 py-2 text-gray-700 border rounded hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
