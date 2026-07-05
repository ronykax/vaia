import "./handler"; // registers onDirectMessage (side-effect import)
import { bot } from "./bot";

const PORT = Number(process.env.PORT ?? 3000);

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (req.method === "POST" && url.pathname === "/webhooks/twilio") {
      return bot.webhooks.twilio(req);
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Bot running on http://localhost:${PORT}`);
