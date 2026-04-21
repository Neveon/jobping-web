# jobping-web

Next.js 14 landing page for **JobPing** — daily LLM-curated job digest emails.

**Live**: [jobping-web.vercel.app](https://jobping-web.vercel.app) · Backend repo: [`jobping-api`](https://github.com/Neveon/jobping-api)

## What's here

- `/` — Hero + 3-step explainer + signup form (email + resume PDF upload). Calls `jobping-api`'s `/signup` endpoint directly.
- `/unsubscribe` — Confirmation page users land on after clicking the unsubscribe link in a digest email. Reads `?status=` (ok / invalid / error) from the query string.

That's the entire frontend. The app deliberately has no dashboards, accounts, or login — signup is a one-shot and everything else happens over email.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)

## Local dev

```bash
cp .env.local.example .env.local   # set NEXT_PUBLIC_API_URL
npm install
npm run dev
```

## Deploy

Auto-deploys to Vercel on push to `main`. The one env var is `NEXT_PUBLIC_API_URL` — the Railway URL for the backend.
