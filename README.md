# Food Discovery Platform

> Authentic Food. Independently Verified.

A modern, trustworthy food discovery web platform designed to help food lovers discover authentic local restaurants, heritage food spots, and independently verified signature dishes — beginning in **Kozhikode (Calicut), Kerala, India**.

---

## 📍 Initial Launch Focus: Kozhikode, Kerala

Kozhikode is renowned worldwide as Kerala's culinary capital, recognized by UNESCO as a City of Literature and home to centuries of maritime spice-route culinary heritage. Our launch focuses on the authentic food ecosystem of Kozhikode, including:

- **Kozhikodan Dum Biryani:** Subtle, slow-dum Khaima (Jeerakasala) rice with delicate Malabar spices.
- **Kozhikode Halwa:** Slow-stirred in large copper cauldrons with pure coconut oil or ghee in Sweet Meat Street (S.M. Street).
- **Coastal Delicacies:** Arikadukka (stuffed mussels), Fish Mango Curries, and Kallummakkaya roasts along the Beach Promenade.
- **Traditional Breads & Savories:** Erachi Pathiri, Chatti Pathiri, Nei Pathiri, and Malabar Parotta.
- **The Sulaimani Ritual:** Golden spiced digestive tea infused with mint and lemon.

---

## 🛡️ Core Philosophy: Independent Verification

Traditional food aggregators and review platforms are plagued by paid promotions, sponsored rankings, and biased ratings. The Food Discovery Platform operates on a fundamentally different standard:

1. **Dish-First Verification:** We verify individual dishes rather than assigning generic restaurant ratings. A spot known for brilliant biryani might not have great desserts — transparency matters.
2. **Zero Paid Placement:** No restaurant can buy rank, badges, or algorithmic prominence.
3. **Transparent Audits:** Trained culinary auditors assess taste authenticity, recipe heritage, ingredient consistency, and hygiene.

*Note: All restaurant listings and dishes displayed in this initial baseline are sample preview placeholders to demonstrate system architecture.*

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, latest stable release)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (modern CSS-first engine)
- **Code Quality:** [ESLint](https://eslint.org/)
- **Icons & Primitives:** Native accessible SVG & semantic HTML

---

## 📁 Project Structure

```
Food Discovery/
├── docs/
│   ├── architecture/
│   │   └── project-architecture.md     # Architectural design and flow
│   └── development/
│       ├── coding-standards.md         # TypeScript and React coding standards
│       └── testing-strategy.md         # Testing strategy and roadmap
├── public/                             # Static assets
├── src/
│   ├── app/                            # Next.js App Router (pages, layout, styles)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/                     # Reusable presentation components
│   │   ├── layout/                     # Header, Footer, navigation
│   │   └── ui/                         # Buttons, Badges, Cards
│   ├── config/                         # Site and city configurations
│   ├── features/                       # Feature-sliced domain modules
│   │   └── discovery/                  # Discovery domain (cards, hero, mock data)
│   ├── lib/                            # Shared utilities (class merger, etc.)
│   └── types/                          # Shared domain types
├── tests/                              # Automated test suites
├── AGENTS.md                           # AI agent guidelines & guardrails
├── package.json
└── tsconfig.json
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js:** `v20.x` or higher (verified on `v24.x`)
- **npm:** `v10.x` or higher (verified on `v11.x`)
- **Git:** Installed

### Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Quality Commands

```bash
# Type check without emitting files
npm run typecheck

# Lint check
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## 📜 Documentation Index

- [Project Architecture](docs/architecture/project-architecture.md)
- [Coding Standards](docs/development/coding-standards.md)
- [Testing Strategy](docs/development/testing-strategy.md)
- [Agent Guidelines (AGENTS.md)](AGENTS.md)
