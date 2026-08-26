const { Telegraf } = require("telegraf");

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("TELEGRAM_BOT_TOKEN is missing.");
  process.exit(1);
}

const bot = new Telegraf(token);

bot.start(async (ctx) => {
  await ctx.reply(
    "Welcome to MockMarket 👋\n\n" +
    "Use the buttons below to explore the marketplace."
  );
});

bot.command("services", async (ctx) => {
  await ctx.reply(
    "🛍️ MockMarket Services\n\n" +
    "Telegram Channel Promotion — $25\n" +
    "Social Media Marketing — $30"
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply(
    "Available commands:\n\n" +
    "/start - Start MockMarket\n" +
    "/services - Browse services\n" +
    "/help - Show help"
  );
});

bot.launch();

console.log("MockMarket Telegram Bot is running.");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
