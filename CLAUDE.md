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
