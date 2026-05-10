# THULIR Deployment Guide

This repository is deployment-ready for static hosting. The default build command is intentionally dependency-light so deployment can succeed even when the full Next.js dependency install is unavailable.

## Build output

```bash
npm run build
```

The command writes the static site to `out/` with:

- HTML routes for the homepage, core pages, service pages and blog pages
- `sitemap.xml`
- `robots.txt`
- copied public assets, including `logo-thulir.svg`

## Vercel

The included `vercel.json` configures:

- Build command: `npm run build`
- Output directory: `out`
- Install command: skips dependency installation because the static exporter uses Node built-ins only
- Static-site mode with clean URLs and trailing slashes
- Rewrites that map `/` to `/index.html` and extensionless paths to their generated `index.html` files
- Basic security headers

Deploy steps:

1. Import the Git repository in Vercel.
2. Keep the detected settings from `vercel.json`.
3. Set the production domain, for example `thulirinterior.com`.
4. Deploy.

### Vercel CLI deployment

If you have a Vercel token and the CLI available, deploy with:

```bash
vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```

This environment does not include a Vercel token, so production deployment must be run from an authenticated machine or connected Vercel project.

### Fixing Vercel `404: NOT_FOUND`

If Vercel shows a platform-level `404: NOT_FOUND`, redeploy the project after this configuration is present and confirm the build logs show `Built 27 static routes to out/`. The deployment must publish the generated `out/` directory, not the repository root or only the `public/` folder.

## Netlify

The included `netlify.toml` configures:

- Build command: `npm run build`
- Publish directory: `out`
- Basic security headers
- A canonical redirect for `/thank-you`

Deploy steps:

1. Import the Git repository in Netlify.
2. Keep the detected settings from `netlify.toml`.
3. Set the production domain, for example `thulirinterior.com`.
4. Deploy.

## Full Next.js build

When npm registry access is available and dependencies have been installed, you can run the full Next.js production build:

```bash
npm install
npm run build:next
```
