
import { Telegraf } from "telegraf";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error(
    "TELEGRAM_BOT_TOKEN is missing"
  );
}

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply(
`Welcome to MockMarket 👋

Use the commands below:

/services - Browse services
/help - Help`
  );
});

bot.command("services", async (ctx) => {
  await ctx.reply(
    "Services will be loaded from PostgreSQL in the next version."
  );
});

bot.help((ctx) => {
  ctx.reply(
`Available commands:

/start
/services
/help`
  );
});

bot.launch();

console.log("Telegram Bot Running...");
