"use client";

import { useState, useEffect, useRef } from "react";
import {
  IconSend,
  IconSettings,
  IconTrash,
  IconLoader,
} from "@tabler/icons-react";
import { Container } from "../components/container";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Default OpenRouter model
  const [model, setModel] = useState("openai/gpt-4o-mini");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model,
          messages: [
            ...messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            userMsg,
          ],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "⚠️ Server error: " + (data?.error || "unknown"),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error contacting backend." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm("Clear all messages?")) setMessages([]);
  };

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <Container className="overflow-hidden text-neutral-900">
        <div className="flex h-screen bg-white">
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-black">AI Chat</h1>

              <div className="flex items-center gap-3">
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <IconTrash className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <IconSettings className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </header>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6 space-y-4">
              {messages.length === 0 && (
                <div className="h-full flex items-center justify-center text-gray-400">
                  <p className="text-center">
                    <span className="block text-3xl mb-2">💬</span>
                    Start a conversation
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-3xl ${msg.role === "user"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                      }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-black px-4 py-3 rounded-3xl">
                    <IconLoader className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3 items-center">
              {/* Model Selector */}
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="mr-2 px-3 py-2 text-sm border border-gray-200 rounded-full bg-white"
              >
                <option value="openai/gpt-4o-mini">openai/gpt-4o-mini</option>
                <option value="openai/gpt-4.1-mini">openai/gpt-4.1-mini</option>
                <option value="anthropic/claude-3.5-sonnet">
                  anthropic/claude-3.5-sonnet
                </option>
                <option value="google/gemini-2.0-flash">
                  google/gemini-2.0-flash
                </option>
                <option value="mistralai/mistral-small">
                  mistralai/mistral-small
                </option>
                <option value="arcee-ai/trinity-mini:free">
                  arcee-ai/trinity-mini:free
                </option>
              </select>

              {/* Input Field */}
              <input
                type="text"
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !loading ? sendMessage() : null
                }
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:border-black outline-none"
              />

              {/* Send Button */}
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-black text-white p-3 rounded-full hover:bg-neutral-800 disabled:bg-gray-400"
              >
                <IconSend className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Settings Panel (right side) */}
          {showSettings && (
            <div className="w-80 border-l border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-bold mb-4">Settings</h2>

              <p className="text-sm text-gray-600">
                Your API key is stored **only in the server `.env`**:
              </p>

              <pre className="bg-gray-200 p-3 rounded text-xs mt-3">
                OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxx
              </pre>

              <button
                onClick={() => setShowSettings(false)}
                className="mt-6 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
