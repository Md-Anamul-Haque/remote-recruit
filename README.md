# RemoteRecruit – Features Page

A pixel-faithful recreation of the RemoteRecruit Features page from the provided Figma design, built as part of the Fullstack Developer technical assessment for SG Services.

**Live Demo:** https://remote-recruit-kohl.vercel.app/

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui** (Radix UI primitives) — accessible, reusable UI components
- **tw-animate-css** — scroll-reveal animations (fade-in / slide-up on section entry)
- **lucide-react** — icon set
- **class-variance-authority** + **tailwind-merge** — variant-driven component styling
- **ESLint** + **Prettier** (with `prettier-plugin-tailwindcss`) — linting & formatting
- **pnpm** — package manager

## Project Setup

```bash
# 1. Clone the repository
git clone https://github.com/Md-Anamul-Haque/remote-recruit.git
cd remote-recruit

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev

# 4. Build for production
pnpm build

# 5. Preview the production build locally
pnpm preview
```

### Other useful scripts

```bash
pnpm lint        # run ESLint
pnpm format      # format the codebase with Prettier
pnpm typecheck   # run TypeScript in --noEmit mode
```

## Features Implemented

- Component-based architecture (sections, cards, buttons, etc. built as reusable, composable components)
- Fully responsive layout — desktop, tablet, and mobile breakpoints matched to the Figma design
- Scroll-reveal animations (fade-in / slide-up) on section entry using `tw-animate-css`
- Hover states and transitions on interactive elements (buttons, links, cards)
- Mock/placeholder data for the Common Questions section
- Scroll-to-top button
- Lazy-loaded images for performance
- Accessible markup using Radix UI primitives via shadcn/ui

## Known Issues / Limitations

- The Figma file was view-only, so some exact spacing/typography values were approximated by visual inspection rather than copied directly from design specs.
- Animations are implemented with CSS-based scroll-reveal (`tw-animate-css`) rather than a JS animation library like Framer Motion, to keep the bundle lightweight.
- Lighthouse scores were optimized for but not benchmarked against every possible network/device condition.

## Project Structure

```
remote-recruit/
├── public/                      # static assets
├── src/
│   ├── assets/                  # images, icons, etc.
│   ├── components/
│   │   ├── theme-provider.tsx   # theme context provider
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx
│   │   ├── landing/             # page-section components
│   │   │   ├── CtaSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── feature-section-card.tsx
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── FeaturesShowcase.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── PricingSection.tsx
│   │   └── ui/                  # shadcn/ui primitives
│   │       ├── accordion.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── data/                    # mock/placeholder data
│   │   ├── faq.ts
│   │   └── pricing.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── LandingPage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json              # shadcn/ui config
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```