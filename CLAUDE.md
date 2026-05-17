# Singer/Songwriter Music Website

## Project Overview
A Next.js 16 site for a singer/songwriter client. The site should serve as a centralized hub for all artist information including music releases, tour dates, biography, and contact info.

## Key Requirements
- **Style**: Clean, modern, opinionated design with focus on music industry best practices (similar to avavaliantimusic.com)
- **Tech Stack**: Next.js 16 App Router with TypeScript and Tailwind CSS v4
- **Purpose**: Single-page website for artist presence (no multi-page routing needed)

## Directory Structure
```
app/
├── page.tsx              # Homepage with hero, featured releases
├── music/
│   ├── releases/         # Music releases page
│   └── video/            # Video/music video page
├── tour/                 # Tour dates and booking info
├── bio/                  # Artist biography
├── contact/              # Contact/booking form
├── image.svg             # Placeholder hero image
└── layout.tsx            # Root layout with navigation
```

## Design Principles
- Minimalist aesthetic with strong typography
- Dark theme by default (industry standard for music)
- Mobile-first responsive design
- Focus on album art and photography

## Important Notes
- This is a single-app website, not the multi-page Next.js from training data
- Follow breaking changes documented in `node_modules/next/dist/docs/`
- Use Tailwind v4 syntax (modern utility classes)

## Deployment Instructions
1. Link your Vercel account and deploy this repo to a production project:
   ```bash
   vercel login
   vercel deploy --prod
   ```
2. Pull environment variables from Vercel (if you have them set):
   ```bash
   vercel env pull
   ```
3. Build for production:
   ```bash
   vercel build --prod
   ```
4. Deploy to production:
   ```bash
   vercel deploy --prod
   ```

See the [Vercel CLI docs](https://vercel.com/docs/cli) for more commands.

## Build Notes
Use `npm` instead of `pnpm` to avoid issues with Tailwind CSS's @tailwindcss/oxide native bindings on some systems.

```bash
npm install
npm run build
```

## Important: Use Link Component for All Internal Navigation
Never use `<a>` tags for internal page navigation - always use `Link` from `next/link`:
- Import as: `import Link from "next/link"`
- Replace all `<a href="/...">` with `<Link href="/...">`
- This includes the logo link in layout.tsx and all nav menu items
- Only use regular `<a>` tags for external links or mailto: URLs (prefer Link even for mailto)
