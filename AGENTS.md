<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Food Discovery Platform Directives

This document provides definitive operating rules, architectural constraints, and quality standards for all AI agents working on the Food Discovery Platform codebase.

---

## 1. Project Mission & Core Tenets

- **Mission:** Build a high-performance, trustworthy food discovery platform starting in **Kozhikode, Kerala, India**.
- **Product Goal:** Help users discover authentic local food spots and independently verified signature dishes.
- **Integrity Rule:** Never invent fake verification claims or present unverified restaurants as verified. All mock or placeholder data must be explicitly labeled as preview/sample data.

---

## 2. Technical Stack & Conventions

- **Next.js App Router:** Use the App Router exclusively (`src/app/`). Do not use the legacy Pages Router.
- **Server Components by Default:** Keep all components as React Server Components (RSC) unless interactivity (`useState`, `useEffect`, event handlers) or browser APIs are strictly required. Mark client components explicitly with `"use client";` at the top of the file.
- **TypeScript Strict Mode:** Maintain 100% strict TypeScript. Prohibit the use of `any` unless explicitly justified in a code comment.
- **Styling:** Use Tailwind CSS utility classes and design tokens. Use `cn(...)` from `@/lib/utils/cn` for class merging.
- **Path Aliases:** Always use `@/*` to reference modules inside the `src/` directory (e.g., `@/components/ui/button`). Avoid brittle relative imports like `../../components`.

---

## 3. Architecture & Folder Organization

```
src/
├── app/          # Routes, root layouts, route handlers, error boundaries
├── components/   # Cross-cutting presentation components (ui/, layout/)
├── config/       # Static application configuration and metadata
├── features/     # Feature-sliced modules (e.g., discovery/, search/, reviews/)
│   └── [feature]/
│       ├── components/
│       ├── data/
│       ├── hooks/
│       └── types.ts
├── lib/          # Pure helper functions and shared utilities
└── types/        # Global cross-domain TypeScript definitions
```

Rules:
1. Keep feature-specific logic within its corresponding `features/[name]/` directory.
2. Shared reusable UI primitives belong in `src/components/ui/`.
3. Never mix server-only logic (like database access or secret keys) into client-bundle files.

---

## 4. Prohibitions & Hard Guardrails

Unless explicitly instructed by the user, agents MUST NOT:
- Implement authentication/login systems prematurely.
- Introduce direct database drivers or heavy ORMs without approval.
- Add external payment gateways.
- Introduce microservices or external third-party tracking scripts.
- Commit `.env` files, credentials, API keys, or private tokens.
- Add bloated dependencies when a clean standard solution exists.
- Push directly to any remote Git repository without user instruction.

---

## 5. Verification Protocol for AI Agents

Before marking any task as complete, every agent MUST execute and verify:

```bash
# 1. TypeScript compilation check
npm run typecheck

# 2. ESLint check
npm run lint

# 3. Production build verification
npm run build
```

Do not claim success if any of the above commands fail. Fix all errors prior to completing your response.
