# Coding Standards — Food Discovery Platform

This document outlines the coding standards, conventions, and style guides for all developers and AI agents working on the Food Discovery Platform.

---

## 1. TypeScript Standards

1. **Strict Mode:** The compiler is configured with `"strict": true`. Never disable strict mode flags.
2. **No Implicit or Explicit `any`:** Avoid `any`. Use `unknown` with type narrowing, generics, or union types instead.
3. **Type Annotations vs. Type Inference:** Allow TypeScript to infer types when obvious (e.g., primitive assignments). Always annotate function arguments, return types of shared utilities, and exported module contracts.
4. **Interfaces vs. Types:**
   - Use `interface` for entity data models and component prop contracts that benefit from declaration merging.
   - Use `type` for unions, intersections, primitives, and utility types.
5. **Path Aliases:** Always use `@/*` to reference internal files (`@/components/...`, `@/lib/...`).

---

## 2. React & Next.js Conventions

1. **Server vs. Client Components:**
   - Default to Server Components.
   - Add `"use client";` only at the leaf level where client state or events (`onClick`, `onChange`, `useEffect`) are necessary.
   - Never import a Server Component directly into a Client Component without passing it via `children` (slots).
2. **Component Structure:**
   - One primary component per file.
   - Match the file name to the component's kebab-case name (e.g., `restaurant-card.tsx` exports `RestaurantCard`).
   - Group sub-components inside the corresponding feature directory.
3. **Props Validation & Typing:**
   - Explicitly type all component props with an interface (`ButtonProps`, `RestaurantCardProps`).
   - Use `React.forwardRef` when building reusable UI components in `src/components/ui/` to ensure full DOM compatibility.
4. **Semantic HTML & Accessibility:**
   - Use semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
   - Ensure interactive controls use native `<button>` or `<a>` elements with proper accessible names (`aria-label` where text is absent).
   - Maintain color contrast ratios of at least 4.5:1 for normal text (WCAG 2.1 AA).

---

## 3. Styling & Tailwind CSS

1. **Modern CSS-first Architecture:**
   - Tailwind v4 styles are centralized via `@import "tailwindcss";` in `src/app/globals.css`.
2. **Class Merging Utility:**
   - Always compose dynamic classes using the `cn(...)` utility:
   ```tsx
   import { cn } from "@/lib/utils/cn";

   export function Element({ className, isActive }: ElementProps) {
     return (
       <div className={cn("base-classes", isActive && "active-classes", className)}>
         ...
       </div>
     );
   }
   ```
3. **Mobile-First Breakpoint Progression:**
   - Write mobile default styles first, followed by `sm:`, `md:`, `lg:`, and `xl:` overrides.
4. **Color Tokens:**
   - Use consistent culinary tokens: warm ambers/saffrons for primary actions, stone/zinc for neutrals, and emerald for verified trust indicators.

---

## 4. Code Hygiene & Maintenance

- **No Dead Code:** Remove commented-out code blocks, unused imports, and unreferenced assets.
- **Small, Single-Purpose Functions:** Functions should do one thing well and be under 50 lines whenever feasible.
- **Explicit Constants:** Do not use magic numbers or strings. Centralize configuration in `src/config/`.
