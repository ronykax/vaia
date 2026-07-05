import { Chat } from "chat";
import { createTwilioAdapter } from "@chat-adapter/twilio";
import { createMemoryState } from "@chat-adapter/state-memory";

export const bot = new Chat({
  userName: "vaia",
  adapters: {
    twilio: createTwilioAdapter({
      // Required when running behind ngrok: Twilio validates signatures
      // against the exact public URL, not the localhost one.
      webhookUrl: process.env.WEBHOOK_URL,
    }),
  },
  state: createMemoryState(),
});
