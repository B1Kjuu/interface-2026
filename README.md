This is the INTERFACE 2026 website, built with [Next.js](https://nextjs.org/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_LUMA_URL="https://luma.com/yvwaahcq"
```

## Deploy on Vercel

This repo includes a GitHub Actions workflow at [`.github/workflows/vercel.yml`](</home/ryan/Documents/repos/interface-2026/.github/workflows/vercel.yml:1>).

Behavior:

- Pull requests targeting `main` create a Preview deployment
- Pushes to `main` create a Production deployment

Required GitHub repository secrets:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

The workflow uses Vercel's recommended GitHub Actions flow:

1. `vercel pull`
2. `vercel build`
3. `vercel deploy --prebuilt`

Also configure the same environment variable in the Vercel project for Preview and Production.
