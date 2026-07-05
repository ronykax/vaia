import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { bot } from "./bot";

bot.onDirectMessage(async (thread, message) => {
  const { text } = await generateText({
    model: openai("gpt-5.4-mini"),
    prompt: message.text ?? "",
  });

  await thread.post(text);
});
