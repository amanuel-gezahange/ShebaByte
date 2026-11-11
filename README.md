# ShebaByte

Company website for **ShebaByte** — a technology company building software and digital solutions for businesses.

📍 Gelan, Sidama, Awash, Ethiopia · 📞 +251 940 263 748 · ✉️ shebabyte@gmail.com

**Stack:** Next.js (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Develop
```bash
npm install
cp .env.local.example .env.local   # then fill in the values (see below)
npm run dev                        # http://localhost:3000
npm run lint                       # type-check
npm run build && npm start         # production build
```

## Configuration (`.env.local` / hosting environment variables)
| Variable | Purpose |
|---|---|
| `GMAIL_USER` | Gmail address that sends contact-form emails |
| `GMAIL_APP_PASSWORD` | 16-character Google **App Password** (Google Account → Security → 2-Step Verification → App passwords). Never commit it. |
| `CONTACT_TO` | Where messages are delivered (defaults to shebabyte@gmail.com) |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for SEO/sitemap, e.g. `https://shebabyte.com` (on Vercel it falls back to the production domain automatically) |

Without Gmail credentials the form works in development (messages are logged) but shows an error in production so messages are never silently lost.

## Content
All copy lives in `lib/data.ts` (services, process, FAQ, contact details). Set `contact.linkedin` to show LinkedIn links.

## Deploy (Vercel)
1. Push to GitHub and import the repo in Vercel.
2. Add the environment variables above in Project → Settings → Environment Variables.
3. Deploy, then submit the contact form once to confirm email delivery.

## Credits
Crown icon from [game-icons.net](https://game-icons.net) (CC BY 3.0) — keep the footer credit.
