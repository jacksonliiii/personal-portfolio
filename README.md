# personal-portfolio

Portfolio site for Jackson Li.

## Local development

```bash
cd jli-portfolio
npm install
npm run dev
```

## Build

```bash
cd jli-portfolio
npm run build
```

## Deployment

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`
that deploys the `jli-portfolio/dist` build to GitHub Pages on every push to `main`.

If you prefer local deploy via `gh-pages`, you can still run:

```bash
cd jli-portfolio
npm run deploy
```
