# my-fitness-app

Personal training dashboard for Denis. Built with React + Vite, deploys to Vercel.

## What's in it

- **Today** — today's workout based on day-of-week
- **Weekly Plan** — full 5-day rotation (Push / Kickbox / Pull / Legs / Kickbox or Movement)
- **PRs** — lifting / calisthenics / running / swimming
- **Mobility** — priority list, tests, daily minimum
- **Rules** — non-negotiables, forbidden, supplement stack
- **Goals** — 3-month target by 2026-09-22

## Editing content

All content lives in `src/data/` — plain JS objects, no DB:
- `goals.js` — profile + 3-month goals
- `plan.js` — 5-day rotation + rules
- `prs.js` — personal records
- `mobility.js` — priority list + tests
- `principles.js` — rules + supplements

Edit any file → push → Vercel rebuilds.

## Running locally

```bash
npm install
npm run dev
# opens http://localhost:3005
```

## Pushing to GitHub + auto-deploy

Repo: https://github.com/eCommvert/my-fitness-app

```bash
git init
git add .
git commit -m "Initial fitness dashboard"
git remote add origin https://github.com/eCommvert/my-fitness-app.git
git branch -M main
git push -u origin main --force
```

If Vercel is already connected to the repo, the push triggers auto-deploy.
If not, import the repo at https://vercel.com/new.

## Updating content

Quick way: edit `src/data/*.js`, commit, push. Vercel rebuilds in ~30s.
