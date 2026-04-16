import { NextResponse } from "next/server";
import {
  OpenRouterClient,
  type ChatMessage,
} from "../../lib/openrouter-client";

const FALLBACK_MODEL = "openrouter/elephant-alpha";

export async function POST(req: Request) {
  try {
    const key =
      process.env.OPENROUTER_API_KEY ||
      process.env.OPENAI_API_KEY ||
      process.env.OPEN_API_KEY;

    if (!key) {
      return NextResponse.json(
        {
          error:
            "Missing API key. Set OPENROUTER_API_KEY (or OPENAI_API_KEY) in .env.",
        },
        { status: 500 },
      );
    }

    const { model, messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages payload." },
        { status: 400 },
      );
    }

    const client = new OpenRouterClient(key);
    const completion = await client.chatCompletionsCreate({
      model: model || FALLBACK_MODEL,
      messages: messages as ChatMessage[],
    });

    const reply =
      completion?.choices?.[0]?.message?.content ||
      "Empty response from model.";

    return NextResponse.json({ reply, raw: completion });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Server crashed processing request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
