import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_KEY) {
      return NextResponse.json(
        { error: "Missing OPENROUTER_API_KEY in server environment." },
        { status: 500 },
      );
    }

    const { model, messages } = await req.json();

    const headers = {
      Authorization: `Bearer ${OPENROUTER_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000", // REQUIRED
      "X-Title": "My AI Chat App",
    };

    // Build the payload for OpenRouter
    const body = {
      model: model || "openai/gpt-4o-mini",
      messages,
      reasoning: { enabled: true },
    };

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("OPENROUTER ERROR:", data);
      return NextResponse.json(
        { error: data?.error || "OpenRouter request failed." },
        { status: res.status },
      );
    }

    const choice = data?.choices?.[0];
    const reply = choice?.message?.content || "⚠️ Empty response from model";

    return NextResponse.json({
      reply,
      raw: data,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Server crashed processing request." },
      { status: 500 },
    );
  }
}
