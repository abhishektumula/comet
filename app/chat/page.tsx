"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconPlus,
  IconSend,
  IconLoader2,
  IconRobot,
} from "@tabler/icons-react";
import { WidgetScript } from "../components/widget-script";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ModernAIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("z-ai/glm-4.5-air");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, messages: [...messages, userMsg] }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res.ok
            ? data.reply || "Empty response"
            : `Server error: ${data?.error || "unknown"}`,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't reach the backend." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    setMessages([]);
  };

  const suggestedPrompts = [
    "what are the plans that are bring provided",
    "are there anual plans?",
    "what is the price of the monthly plan?",
    "what is the price of the annual plan?",
    "what is the price of the lifetime plan?",
    "what is the price of the enterprise plan?",
    "what is the price of the custom plan?",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex overflow-hidden">
      <WidgetScript />

      {/* Left Sidebar - Perfect Grok-style width */}
      <div className="w-72 border-r border-zinc-800 bg-zinc-950 flex flex-col">
        <div className="p-4">
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 active:bg-zinc-200 transition-all text-black font-medium py-3 px-4 rounded-2xl"
          >
            <IconPlus className="h-5 w-5" />
            New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2">
          <div className="px-3 py-2 text-xs font-medium text-zinc-500">
            Recent
          </div>
          <div className="px-4 py-3 text-sm text-zinc-400">
            No previous chats yet
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800 text-xs text-zinc-500">
          Model: <span className="text-zinc-400">{model.split("/").pop()}</span>
        </div>
      </div>

      {/* Main Chat Area - Balanced proportions */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Minimal top bar with model selector */}
        <div className="h-14 border-b border-zinc-800 flex items-center px-8 justify-end">
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-full px-5 py-1.5 text-sm focus:outline-none focus:border-violet-500"
          >
            <option value="z-ai/glm-4.5-air">z-ai/glm-4.5-air</option>
            <option value="openai/gpt-4o-mini">GPT-4o mini</option>
            <option value="anthropic/claude-3.5-sonnet">
              Claude 3.5 Sonnet
            </option>
            <option value="google/gemini-2.0-flash">Gemini 2.0 Flash</option>
          </select>
        </div>

        {/* Messages Area - Perfect vertical & horizontal balance */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-10">
          <div className="max-w-[740px] mx-auto h-full flex flex-col">
            {messages.length === 0 && !loading ? (
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <IconRobot className="h-16 w-16 mb-6 text-violet-500" />
                <h1 className="text-4xl font-semibold mb-3">
                  How can I help you today?
                </h1>
                <p className="text-zinc-400 mb-12">Ask me anything</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
                  {suggestedPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(prompt)}
                      className="text-left border border-zinc-700 hover:border-zinc-500 bg-zinc-900 hover:bg-zinc-800 transition-all p-4 rounded-3xl text-sm"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8 flex-1">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[70%] px-7 py-5 rounded-3xl text-[15.5px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-white text-black rounded-br-none"
                          : "bg-zinc-900 text-white rounded-bl-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-900 px-7 py-5 rounded-3xl flex items-center gap-3">
                      <IconLoader2 className="h-5 w-5 animate-spin text-violet-400" />
                      <span className="text-zinc-400">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Fixed-height Input - Grok proportions */}
        <div className="px-6 pb-8 pt-2 md:px-12">
          <div className="max-w-[740px] mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={loading}
              placeholder="Message..."
              className="w-full h-14 bg-zinc-900 border border-zinc-700 focus:border-violet-600 rounded-3xl px-8 text-base placeholder:text-zinc-500 focus:outline-none transition-all"
            />

            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-700 p-3 rounded-2xl transition-colors"
            >
              <IconSend className="h-5 w-5" />
            </button>
          </div>

          <p className="text-center text-[10px] text-zinc-500 mt-4">
            AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </main>
  );
}
