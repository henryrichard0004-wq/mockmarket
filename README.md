
# MockMarket

A Fiverr-style mock marketplace built with Next.js, PostgreSQL, Prisma and Telegram Bot.

## Installation

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
cp .env.example .env
```

Configure your PostgreSQL database.

Push database:

```bash
npx prisma db push
```

Seed demo data:

```bash
npm run db:seed
```

Run website:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run Telegram bot:

```bash
npm run bot
```

## Deploy to Railway

1. Push project to GitHub
2. Create Railway project
3. Add PostgreSQL
4. Connect GitHub repository
5. Add DATABASE_URL
6. Deploy web service
7. Create second service for Telegram bot
8. Add TELEGRAM_BOT_TOKEN
9. Set bot command:

```bash
npm run bot
```

## Future Features

- Authentication
- Seller dashboard
- Buyer dashboard
- Create services
- Orders
- Messaging
- Notifications
- Reviews
- Admin panel
