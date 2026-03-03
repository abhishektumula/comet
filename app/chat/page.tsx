"use client";

import { useEffect, useRef, useState } from "react";
import { IconLoader, IconSend, IconTrash } from "@tabler/icons-react";
import { Container } from "../components/container";
import { NavigationBar } from "../components/navigation";
import { WidgetScript } from "../components/widget-script";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
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
          content: res.ok ? data.reply || "Empty response" : `Server error: ${data?.error || "unknown"}`,
        },
      ]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error contacting backend." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <WidgetScript />
      <Container>
        <NavigationBar />

        <div className="section-frame mt-4 overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-bold text-black">AI Chat</h1>
            <button onClick={() => setMessages([])} className="rounded-full p-2 hover:bg-gray-100" aria-label="Clear chat">
              <IconTrash className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <div className="h-[60vh] overflow-y-auto px-6 py-6 space-y-4">
            {messages.length === 0 && !loading && (
              <div className="flex h-full items-center justify-center text-gray-400">Start a conversation</div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-md rounded-3xl px-4 py-3 text-sm ${msg.role === "user" ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-3xl bg-gray-100 px-4 py-3 text-black">
                  <IconLoader className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 md:flex-row md:items-center">
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm"
            >
              <option value="z-ai/glm-4.5-air">z-ai/glm-4.5-air</option>
              <option value="openai/gpt-4o-mini">openai/gpt-4o-mini</option>
              <option value="anthropic/claude-3.5-sonnet">anthropic/claude-3.5-sonnet</option>
              <option value="google/gemini-2.0-flash">google/gemini-2.0-flash</option>
            </select>

            <input
              type="text"
              value={input}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-gray-200 px-4 py-3 outline-none focus:border-black"
            />

            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="rounded-full bg-black p-3 text-white hover:bg-neutral-800 disabled:bg-gray-400"
            >
              <IconSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
