# jobping-web

Next.js 14 landing page for [JobPing](https://jobping.dev) — daily LLM-curated job digest emails.

Pairs with [`jobping-api`](https://github.com/neveon/jobping-api) (FastAPI backend).

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Vercel (hosting)

## Local dev
```bash
cp .env.local.example .env.local   # set NEXT_PUBLIC_API_URL
npm install
npm run dev
```

## Deploy
Auto-deploys to Vercel on push to `main`.
