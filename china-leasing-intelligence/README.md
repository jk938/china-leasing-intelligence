# China Leasing Intelligence

Exclusive intelligence on China's $2.5 trillion leasing industry.

## Quick Deploy to Vercel

### Prerequisites
1. Node.js 18+ installed
2. GitHub account
3. Vercel account

### Step 1: Push to GitHub

```bash
cd finance-subscription
git add .
git commit -m "Initial commit: China Leasing Intelligence"
gh repo create china-leasing-intelligence --public --source=. --push
```

(If `gh` is not installed, download from: https://github.com/cli/cli)

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Click "Deploy"

That's it! Your site will be live in about 1 minute.

## Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

## Environment Variables (for Stripe payments)

In Vercel project settings, add:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key
- `STRIPE_SECRET_KEY` = your Stripe secret key

Get these from https://dashboard.stripe.com/apikeys

## Project Structure

```
src/app/
├── page.tsx          # Home page
├── subscribe/        # Subscription page
├── reports/         # Reports listing
├── dashboard/       # User dashboard
└── api/             # API routes (Stripe)
```
