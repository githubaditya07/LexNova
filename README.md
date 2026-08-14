# LexNova — Prototype

This repository contains the LexNova prototype — an AI-driven legal research demo built with Next.js, TypeScript and Tailwind.

This README explains how to connect your Supabase project, push to GitHub and deploy to Vercel for the demo presentation.

## Quick setup (local)

1. Copy environment variables to `.env.local` (do NOT commit):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```

2. Install and run locally:

```bash
npm install
npm run dev
```

3. Open http://localhost:3000 and go to `/login`.

## Supabase setup (required)

1. Create a Supabase project at https://app.supabase.com.
2. In Project  Settings  API copy the Project URL and anon key into `.env.local`.
3. In Authentication  Settings:
   - Add `http://localhost:3000` and your Vercel domain under "Redirect URLs".
   - Set "Site URL" to your Vercel domain.
4. (Optional but recommended) Configure SMTP under Authentication  Email for magic-link delivery.

## GitHub  push repository

Create a new GitHub repository and push:

```bash
git init
git add .
git commit -m "Initial LexNova prototype"
# replace <url> with your repo URL
git remote add origin <url>
git branch -M main
git push -u origin main
```

Or use GitHub CLI:

```bash
# requires 'gh' CLI
gh repo create YOUR_USER/lexnova-prototype --public --source=. --remote=origin --push
```

## Vercel deployment

1. Go to https://vercel.com/new and import your GitHub repo.
2. In the Vercel project settings, add Environment Variables (for both Preview and Production):

   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon/public key

3. (Optional) Set the Project's Node version to `22.x` in Vercel settings to match supabase-js recommendations.
4. Deploy — Vercel will run `npm run build` and host the site.

## Presentation fallback

If you cannot configure SMTP in Supabase before the demo, use the "Demo sign in" button on `/login` — it signs in locally for presentation only.

## CI  build check

This repository includes a GitHub Actions workflow that runs `npm ci` and `npm run build` on pushes to `main`.

## Files added to help deployment

- `.env.example`  environment var template
- `.nvmrc`  recommended Node version (22)
- `.github/workflows/ci.yml`  simple build workflow

If you want, I can create the GitHub repo for you using the GitHub CLI commands (you'll need to run them locally or paste them into your terminal). I cannot push with your credentials from here.
