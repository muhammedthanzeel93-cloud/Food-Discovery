<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Food Discovery Platform Multi-Agent Directives

This document provides definitive operating rules, architectural constraints, testing mandates, and governance standards for all AI agents working on the Food Discovery Platform codebase.

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

## 4. Multi-Agent Development Governance (Task 002)

To enable safe, concurrent multi-agent development without regressions or merge conflicts, every AI agent must strictly follow these 10 rules:

### Rule 1: Agent Responsibilities & Operating Boundaries
Agents must strictly confine their work to the task requested. Never perform opportunistic refactoring outside the assigned scope.

### Rule 2: Branch Ownership Rules
- Work must happen on designated `feature/[task-id]-[description]` or `bugfix/[task-id]-[description]` branches.
- Base branch is always `develop`.
- **Never push directly to `main` or `develop`.**

### Rule 3: File Ownership & Boundary Isolation
- Do not edit files belonging to other features or domains without explicit task instructions.
- Modifying cross-cutting shared architecture (`src/config/site.ts`, `src/app/layout.tsx`, `src/lib/utils/cn.ts`, `vitest.config.ts`) requires explicit user confirmation.

### Rule 4: Mandatory Testing Protocol
Before reporting task completion, every agent must execute and verify zero errors on:
```bash
# 1. Type validation
npm run typecheck

# 2. Code style & linting
npm run lint

# 3. Unit and component test suites
npm run test

# 4. Production build check
npm run build
```
Never claim a test passed without running the command.

### Rule 5: Security & Secrets Exclusion
- Never commit `.env`, `.env.local`, `.env.*`, API keys, private keys, or passwords.
- Verify `git status` before committing to ensure no unintended files or credentials are staged.

### Rule 6: Commit Message Conventions
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat(scope): ...` — New feature or user-facing addition
- `fix(scope): ...` — Bug fix
- `test(scope): ...` — Adding or updating test cases
- `docs(scope): ...` — Documentation updates
- `refactor(scope): ...` — Code change that neither fixes a bug nor adds a feature
- `chore(scope): ...` — Tooling, dependency, or configuration updates

### Rule 7: Pull Request Requirements
Every PR must target `develop` and provide:
- Clear description of changes.
- Linked task or issue reference.
- Evidence that all 4 quality checks passed.
- Adherence to `.github/pull_request_template.md`.

### Rule 8: Restrictions on Modifying Shared Architecture
Unless explicitly instructed by the user, agents MUST NOT:
- Implement authentication/login systems prematurely.
- Introduce direct database drivers or heavy ORMs without approval.
- Add external payment gateways.
- Introduce microservices or external third-party tracking scripts.
- Add bloated dependencies when a clean standard solution exists.

### Rule 9: Absolute Prohibition on Direct Pushes to `main`
The `main` branch represents stable production code. No agent, automated script, or bot is permitted to push directly to `main` or bypass review gates.

### Rule 10: Independent Human Review Before Merging
All changes proposed by AI agents must undergo independent human review and approval prior to merging into `develop` or `main`.

---

## 5. Verification Protocol for AI Agents

```bash
# Full Quality Gate
npm run validate
npm run build
```

Do not claim success if any command fails. Fix all errors prior to completing your response.
