# Next.js FSD Skeleton — Design Spec

**Date:** 2026-05-14  
**Status:** Approved

---

## Overview

A Next.js 14+ (App Router) skeleton project structured with Feature-Sliced Design (FSD). Purpose: homework / learning project demonstrating FSD, Redux Toolkit, TanStack React Query, and CSS Modules together.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Architecture | Feature-Sliced Design (FSD) |
| Styling | CSS Modules |
| Client state | Redux Toolkit |
| Server state / API | TanStack React Query v5 |
| Pre-commit | Husky + lint-staged (ESLint + tsc) |
| VCS | Git (initialised at project root) |

---

## Folder Structure

Follows the [official FSD + Next.js guide](https://feature-sliced.design/docs/guides/tech/with-nextjs).

```
hw-1/
├── app/                          # Next.js routing — thin shell, re-exports only
│   ├── layout.tsx                # imports Providers from src/app/providers
│   └── page.tsx                  # re-exports HomePage from src/pages/home
├── pages/                        # Empty dir — prevents Next.js Pages Router activation
│   └── README.md
├── src/
│   ├── app/                      # FSD app layer
│   │   ├── providers/
│   │   │   ├── index.tsx         # composes StoreProvider + QueryProvider
│   │   │   ├── StoreProvider.tsx # <Provider store={store}>
│   │   │   └── QueryProvider.tsx # <QueryClientProvider>
│   │   └── styles/
│   │       └── globals.module.css
│   ├── pages/                    # FSD pages layer
│   │   └── home/
│   │       └── ui/
│   │           ├── HomePage.tsx
│   │           └── HomePage.module.css
│   ├── widgets/                  # Composed UI sections (header, sidebar, etc.)
│   ├── features/                 # User interaction slices
│   ├── entities/                 # Business domain slices
│   └── shared/                   # Cross-cutting infrastructure
│       ├── store/
│       │   ├── index.ts          # configureStore, RootState, AppDispatch
│       │   └── hooks.ts          # useAppSelector, useAppDispatch
│       ├── api/
│       │   └── base.ts           # base fetch/axios instance
│       ├── config/
│       │   └── env.ts            # typed env vars
│       ├── lib/                  # generic utilities
│       └── ui/                   # shared UI primitives
├── .husky/
│   └── pre-commit
├── .lintstagedrc.json
├── .eslintrc.json
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Architecture Decisions

### FSD Import Rules
Each layer may only import from layers *below* it:
```
app → pages → widgets → features → entities → shared
```
`shared/` has no FSD dependencies — it only imports from npm packages and Next.js.

### Redux Store in `shared/store/`
The store instance, `RootState`, `AppDispatch`, and typed hooks (`useAppSelector`, `useAppDispatch`) live in `src/shared/store/`. This lets every FSD layer access them without violating import rules (all layers can import from `shared`). Individual slice reducers are defined in their own FSD layer and registered in the root store.

### QueryClient in `src/app/providers/`
The `QueryClientProvider` lives in the FSD `app` layer since it is a global app-level concern. It wraps the Redux provider. Default config: `staleTime: 60_000`, `retry: 1`.

### CSS Modules
Each UI component has a co-located `.module.css` file. No global utility classes. CSS custom properties (design tokens) are declared in `src/app/styles/globals.module.css` and imported once in `app/layout.tsx`.

### Next.js `app/` as Thin Shell
The root `app/` directory only handles routing. Every `page.tsx` re-exports a component from `src/pages/<name>`. No business logic lives in the routing shell.

### Empty `pages/` Directory
Required by Next.js to prevent automatic Pages Router detection. Contains only a `README.md` explaining its purpose.

---

## Pre-commit Setup

- **Husky** initialised via `npx husky init`
- **lint-staged** runs on `*.{ts,tsx}`:
  1. `eslint --fix` — auto-fix lint errors
  2. `tsc --noEmit` — type-check staged files

Config in `.lintstagedrc.json`:
```json
{
  "*.{ts,tsx}": ["eslint --fix", "tsc --noEmit"]
}
```

---

## Out of Scope

- No example feature slices (entities/features/widgets are empty scaffolds)
- No authentication
- No database / backend
- No testing setup
- No CI/CD
