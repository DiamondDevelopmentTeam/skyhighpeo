# SkyHigh PEO Website

A React and TypeScript website for SkyHigh PEO. The refined visual system uses original layouts, components, SVG illustrations and animations while preserving the company's approved business information and service focus.

## Included

- React, TypeScript and Vite
- Responsive desktop, tablet and mobile layouts
- Framer Motion page and scroll animations
- Accessible navigation and reduced-motion support
- Home, About, Services, PEO Overview, Resources, FAQs, Blog, Contact, Privacy, Terms and 404 routes
- Reusable blog article template
- Contact form validation and API abstraction
- Optional Cloudflare Turnstile integration
- GitHub Pages deployment workflow for the `skyhighpeo` repository
- Original local SVG artwork and reusable design components

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Create or open the `skyhighpeo` repository.
2. Copy this project's files into the repository.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings > Pages**.
5. Set **Source** to **GitHub Actions**.
6. The included workflow builds with the `/skyhighpeo/` base path and deploys automatically.

For a custom domain, keep the app code as-is and update the deployment base path if the hosting platform requires it.

## Contact form

The form works in demonstration mode until an API endpoint is configured. Demo mode validates the form and displays a clear configuration message without pretending an email was delivered.

Create a `.env.local` file:

```env
VITE_CONTACT_API_URL=https://your-api.example.com/contact
VITE_TURNSTILE_SITE_KEY=your_public_turnstile_site_key
```

The endpoint receives JSON with contact details, consent, a honeypot field and the Turnstile token. The server must validate all fields, verify the Turnstile token with Cloudflare, rate-limit requests and send or store the inquiry securely.

## Replace or add approved assets

- Original illustrations live in `src/assets/images`.
- Approved downloadable resources should go in `public/downloads`.
- Update resources, services, FAQs, company information and blog posts in `src/data/site.ts`.
- Replace the custom SVG wordmark in `src/components/ui/Logo.tsx` with the approved company logo when supplied.

## Launch checklist

- Connect the contact API and test real email delivery
- Add the production Turnstile site key and server-side validation
- Replace resource placeholders with approved PDFs
- Have Privacy Policy and Terms reviewed by company counsel
- Confirm all service claims, coverage language and carrier references
- Add approved analytics and consent tooling if needed
- Test keyboard navigation, mobile forms and all links
- Optimize any additional photos before publishing
