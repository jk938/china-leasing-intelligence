# Deploy Instructions

## Option 1: Deploy from GitHub (Recommended)

Since you have GitHub and Vercel, follow these steps:

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `china-leasing-intelligence`
3. Click "Create repository"

### Step 2: Push Code

In your local terminal in the `finance-subscription` folder:

```bash
git init
git add .
git commit -m "Initial commit: China Leasing Intelligence"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/china-leasing-intelligence.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Click "Deploy"

Done! Your site will be live at `https://china-leasing-intelligence.vercel.app`

---

## Option 2: Deploy from Vercel CLI

```bash
cd C:\Users\Jackie\lobsterai\project\finance-subscription
vercel login
vercel --prod
```

---

## Environment Variables

To enable Stripe payments, add these in Vercel project settings:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key
- `STRIPE_SECRET_KEY` = your Stripe secret key
