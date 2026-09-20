# XLW Advisory Malta

Bilingual English and Chinese website for XLW Advisory, a Malta-based accounting, tax, audit and cross-border advisory firm.

The project uses Next.js App Router and exports a fully static site. It can be deployed from GitHub through Firebase App Hosting, Firebase Hosting, Vercel or another static hosting platform.

## Requirements

- Node.js 20.9 or later
- npm 10 or later

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run check
```

The production export is generated in `out/`.

## Recommended deployment: Firebase App Hosting

No local Firebase login is required for this method.

1. Push this repository to GitHub with `main` as the deployment branch.
2. Open Firebase Console and select project `accountantsmalta`.
3. Go to **Hosting & Serverless > App Hosting** and choose **Create backend**.
4. Connect the GitHub repository and grant the Firebase GitHub application access to it.
5. Set the app root directory to `/` and the live branch to `main`.
6. Keep automatic rollouts enabled, choose the preferred European region and select **Finish and deploy**.

Every later push to `main` will trigger a new rollout. Firebase App Hosting may require the Blaze billing plan.

## Alternative: Firebase Hosting

This repository also contains a static Hosting configuration. After authenticating the Firebase CLI, run:

```bash
npm ci
npm run build
firebase deploy --only hosting --project accountantsmalta
```

`firebase.json` serves the generated `out/` directory and `.firebaserc` targets the `accountantsmalta` project.

## Environment variables

The site works without an environment file. Optional public variables are:

```text
NEXT_PUBLIC_SITE_URL=https://accountantsmalta.com
NEXT_PUBLIC_WHATSAPP_NUMBER=35699520938
```

Do not commit `.env` files or credentials. Configure variables in Firebase App Hosting or the chosen deployment platform when overrides are needed.

## Deployment notes

- The site is exported statically through `output: "export"` in `next.config.ts`.
- Images are served without the Next.js image optimizer for static-host compatibility.
- GitHub Actions runs linting and a production build for pushes and pull requests.
- Policy, tax, immigration and programme information should be rechecked against current official sources before publishing substantive updates.
