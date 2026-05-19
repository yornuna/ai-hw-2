# Next.js FSD Skeleton — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a Next.js 15 App Router project using FSD architecture with Redux Toolkit in `shared/store/`, TanStack React Query, CSS Modules, and Husky pre-commit hooks.

**Architecture:** Root `app/` is the thin Next.js routing shell (re-exports only); all FSD layers live in `src/`. Redux store lives in `src/shared/store/` so every layer can import it. Providers (Redux + QueryClient) are composed in the FSD `src/app/providers/` layer and injected once in `app/layout.tsx`.

**Tech Stack:** Next.js 15, TypeScript 5, Redux Toolkit 2, React Redux 9, TanStack React Query v5, CSS Modules, Husky v9, lint-staged, ESLint

---

## File Map

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — wraps tree with `<Providers>` |
| `app/page.tsx` | Route `/` — re-exports `HomePage` from `src/pages/home` |
| `pages/README.md` | Empty dir to prevent Next.js Pages Router activation |
| `src/app/providers/StoreProvider.tsx` | `"use client"` — Redux `<Provider>` |
| `src/app/providers/QueryProvider.tsx` | `"use client"` — `<QueryClientProvider>` with default config |
| `src/app/providers/index.tsx` | `"use client"` — composes both providers |
| `src/app/styles/globals.module.css` | CSS custom properties (design tokens) + resets |
| `src/pages/home/ui/HomePage.tsx` | Home page component |
| `src/pages/home/ui/HomePage.module.css` | Home page styles |
| `src/pages/home/index.ts` | Public API for home page FSD slice |
| `src/shared/store/index.ts` | `configureStore`, `RootState`, `AppDispatch` exports |
| `src/shared/store/hooks.ts` | `useAppSelector`, `useAppDispatch` typed hooks |
| `src/shared/api/base.ts` | Base `fetch` wrapper (stub) |
| `src/shared/config/env.ts` | Typed env vars (stub) |
| `src/widgets/.gitkeep` | Keeps empty layer tracked in git |
| `src/features/.gitkeep` | Keeps empty layer tracked in git |
| `src/entities/.gitkeep` | Keeps empty layer tracked in git |
| `src/shared/lib/.gitkeep` | Keeps empty segment tracked in git |
| `src/shared/ui/.gitkeep` | Keeps empty segment tracked in git |
| `.husky/pre-commit` | Runs `lint-staged` on commit |
| `.lintstagedrc.json` | Runs ESLint + tsc on staged TS files |
| `tsconfig.json` | Updated path alias: `@/*` → `./src/*` |

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: all root scaffold files (managed by `create-next-app`)

- [ ] **Step 1: Run `create-next-app`**

  Working directory is `/Users/yenlikibragim/Desktop/bcc hub/code_ai/hw-1`.
  Run the following command (pass `y` if prompted about the non-empty directory):

  ```bash
  npx create-next-app@latest . \
    --typescript \
    --app \
    --no-tailwind \
    --eslint \
    --no-src-dir \
    --import-alias "@/*"
  ```

  Expected output ends with: `Success! Created ...` or `Initialized a git repository.`
  Note: `create-next-app` automatically runs `git init` and makes an initial commit.

- [ ] **Step 2: Verify dev server starts**

  ```bash
  npm run dev &
  sleep 5
  curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
  ```

  Expected: `200`. Then stop the dev server: `kill %1` or `pkill -f "next dev"`.

- [ ] **Step 3: Commit**

  ```bash
  git add -A
  git commit -m "chore: scaffold Next.js 15 App Router project"
  ```

---

## Task 2: Fix TypeScript path alias + create FSD directory skeleton

**Files:**
- Modify: `tsconfig.json`
- Create: `pages/README.md`, `src/widgets/.gitkeep`, `src/features/.gitkeep`, `src/entities/.gitkeep`, `src/shared/lib/.gitkeep`, `src/shared/ui/.gitkeep`

- [ ] **Step 1: Update tsconfig path alias**

  Open `tsconfig.json`. Find the `"paths"` section and change `@/*` to point to `./src/*` instead of `./*`:

  ```json
  {
    "compilerOptions": {
      "target": "ES2017",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [{ "name": "next" }],
      "paths": {
        "@/*": ["./src/*"]
      }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
  }
  ```

- [ ] **Step 2: Create FSD layer directories and empty prevention dir**

  ```bash
  mkdir -p src/app/providers src/app/styles
  mkdir -p src/pages/home/ui
  mkdir -p src/widgets src/features src/entities
  mkdir -p src/shared/store src/shared/api src/shared/config src/shared/lib src/shared/ui
  mkdir -p pages
  ```

- [ ] **Step 3: Add .gitkeep files for empty layers**

  ```bash
  touch src/widgets/.gitkeep
  touch src/features/.gitkeep
  touch src/entities/.gitkeep
  touch src/shared/lib/.gitkeep
  touch src/shared/ui/.gitkeep
  ```

- [ ] **Step 4: Create pages/README.md**

  Create the file `pages/README.md` with this content:

  ```markdown
  # pages/

  This directory is intentionally empty.

  Next.js requires an empty `pages/` directory at the project root when using
  the App Router (`app/`) alongside FSD's `src/pages/` layer, to prevent
  automatic activation of the Pages Router.

  Do not add any files here.
  ```

- [ ] **Step 5: Verify TypeScript compiles**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors (only the default Next.js scaffold files exist so far).

- [ ] **Step 6: Commit**

  ```bash
  git add tsconfig.json pages/README.md src/
  git commit -m "chore: set up FSD directory skeleton and fix tsconfig path alias"
  ```

---

## Task 3: Install additional dependencies

**Files:**
- Modify: `package.json` (managed by npm)

- [ ] **Step 1: Install runtime dependencies**

  ```bash
  npm install @reduxjs/toolkit react-redux @tanstack/react-query
  ```

  Expected: packages added to `dependencies` in `package.json`.

- [ ] **Step 2: Install dev dependencies**

  ```bash
  npm install --save-dev husky lint-staged
  ```

  Expected: packages added to `devDependencies` in `package.json`.

- [ ] **Step 3: Verify no peer dependency warnings**

  ```bash
  npm ls @reduxjs/toolkit react-redux @tanstack/react-query husky lint-staged 2>&1 | head -30
  ```

  Expected: package tree with no `UNMET PEER DEPENDENCY` lines.

- [ ] **Step 4: Commit**

  ```bash
  git add package.json package-lock.json
  git commit -m "chore: install Redux Toolkit, React Query, Husky, lint-staged"
  ```

---

## Task 4: Create Redux store in shared/store/

**Files:**
- Create: `src/shared/store/index.ts`
- Create: `src/shared/store/hooks.ts`

- [ ] **Step 1: Create store configuration**

  Create `src/shared/store/index.ts`:

  ```typescript
  import { configureStore } from '@reduxjs/toolkit';

  export const store = configureStore({
    reducer: {
      // Register slice reducers here as you build features:
      // example: counter: counterReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  ```

- [ ] **Step 2: Create typed hooks**

  Create `src/shared/store/hooks.ts`:

  ```typescript
  import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
  import type { AppDispatch, RootState } from './index';

  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  ```

- [ ] **Step 3: Type-check**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 4: Commit**

  ```bash
  git add src/shared/store/
  git commit -m "feat: add Redux store and typed hooks in shared/store"
  ```

---

## Task 5: Create app providers

**Files:**
- Create: `src/app/providers/StoreProvider.tsx`
- Create: `src/app/providers/QueryProvider.tsx`
- Create: `src/app/providers/index.tsx`

- [ ] **Step 1: Create StoreProvider**

  Create `src/app/providers/StoreProvider.tsx`:

  ```tsx
  'use client';

  import { Provider } from 'react-redux';
  import { store } from '@/shared/store';

  export function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  ```

- [ ] **Step 2: Create QueryProvider**

  Create `src/app/providers/QueryProvider.tsx`:

  ```tsx
  'use client';

  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
  import { useState } from 'react';

  export function QueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              staleTime: 60_000,
              retry: 1,
            },
          },
        }),
    );

    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }
  ```

- [ ] **Step 3: Compose providers**

  Create `src/app/providers/index.tsx`:

  ```tsx
  'use client';

  import { QueryProvider } from './QueryProvider';
  import { StoreProvider } from './StoreProvider';

  export function Providers({ children }: { children: React.ReactNode }) {
    return (
      <StoreProvider>
        <QueryProvider>{children}</QueryProvider>
      </StoreProvider>
    );
  }
  ```

- [ ] **Step 4: Type-check**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 5: Commit**

  ```bash
  git add src/app/providers/
  git commit -m "feat: add Redux and React Query providers in src/app/providers"
  ```

---

## Task 6: Create global styles and HomePage

**Files:**
- Create: `src/app/styles/globals.module.css`
- Create: `src/pages/home/ui/HomePage.tsx`
- Create: `src/pages/home/ui/HomePage.module.css`
- Create: `src/pages/home/index.ts`

- [ ] **Step 1: Create global CSS tokens**

  Create `src/app/styles/globals.module.css`:

  ```css
  :global(:root) {
    --color-primary: #0070f3;
    --color-text: #111111;
    --color-text-secondary: #666666;
    --color-bg: #ffffff;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, sans-serif;
    background: var(--color-bg);
    color: var(--color-text);
  }
  ```

- [ ] **Step 2: Create HomePage component**

  Create `src/pages/home/ui/HomePage.tsx`:

  ```tsx
  import styles from './HomePage.module.css';

  export function HomePage() {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>HW-1 — Next.js FSD Skeleton</h1>
        <p className={styles.description}>
          Built with Feature-Sliced Design, Redux Toolkit, and TanStack React
          Query.
        </p>
        <ul className={styles.stack}>
          <li>Next.js 15 — App Router</li>
          <li>Feature-Sliced Design (FSD)</li>
          <li>Redux Toolkit — client state</li>
          <li>TanStack React Query — server state</li>
          <li>CSS Modules — styling</li>
        </ul>
      </main>
    );
  }
  ```

- [ ] **Step 3: Create HomePage styles**

  Create `src/pages/home/ui/HomePage.module.css`:

  ```css
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  .description {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    text-align: center;
    max-width: 480px;
  }

  .stack {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }
  ```

- [ ] **Step 4: Create public API for home slice**

  Create `src/pages/home/index.ts`:

  ```typescript
  export { HomePage } from './ui/HomePage';
  ```

- [ ] **Step 5: Type-check**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 6: Commit**

  ```bash
  git add src/app/styles/ src/pages/
  git commit -m "feat: add global CSS tokens and HomePage FSD slice"
  ```

---

## Task 7: Create shared/api and shared/config stubs

**Files:**
- Create: `src/shared/api/base.ts`
- Create: `src/shared/config/env.ts`

- [ ] **Step 1: Create base fetch wrapper**

  Create `src/shared/api/base.ts`:

  ```typescript
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

  export async function apiFetch<T>(
    path: string,
    options?: RequestInit,
  ): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, options);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
  ```

- [ ] **Step 2: Create typed env vars**

  Create `src/shared/config/env.ts`:

  ```typescript
  export const env = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
  } as const;
  ```

- [ ] **Step 3: Type-check**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 4: Commit**

  ```bash
  git add src/shared/api/ src/shared/config/
  git commit -m "feat: add shared api fetch wrapper and env config stubs"
  ```

---

## Task 8: Wire app/layout.tsx and app/page.tsx

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Delete: `app/globals.css` (replaced by `src/app/styles/globals.module.css`)
- Delete: `app/page.module.css` (replaced by `src/pages/home/ui/HomePage.module.css`)

- [ ] **Step 1: Delete default scaffold style files**

  ```bash
  rm app/globals.css app/page.module.css 2>/dev/null; true
  ```

- [ ] **Step 2: Rewrite app/layout.tsx**

  Replace the entire contents of `app/layout.tsx` with:

  ```tsx
  import type { Metadata } from 'next';
  import { Providers } from '@/app/providers';
  import '@/app/styles/globals.module.css';

  export const metadata: Metadata = {
    title: 'HW-1',
    description: 'Next.js FSD Skeleton',
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    );
  }
  ```

- [ ] **Step 3: Rewrite app/page.tsx**

  Replace the entire contents of `app/page.tsx` with:

  ```tsx
  export { HomePage as default } from '@/pages/home';
  ```

- [ ] **Step 4: Type-check**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 5: Verify dev server serves the page**

  ```bash
  npm run dev &
  sleep 6
  curl -s http://localhost:3000 | grep -c "HW-1"
  ```

  Expected: `1` (the title appears in the HTML). Stop the server: `pkill -f "next dev"`.

- [ ] **Step 6: Commit**

  `git add app/` stages both the modified files and the deletions from Step 1:

  ```bash
  git add app/
  git commit -m "feat: wire Next.js routing shell to FSD providers and HomePage"
  ```

---

## Task 9: Set up Husky and lint-staged

**Files:**
- Create: `.husky/pre-commit`
- Create: `.lintstagedrc.json`
- Modify: `package.json` (prepare script)

- [ ] **Step 1: Initialize Husky**

  ```bash
  npx husky init
  ```

  Expected: creates `.husky/pre-commit` with contents `npm test`.

- [ ] **Step 2: Update pre-commit hook to run lint-staged**

  Replace the contents of `.husky/pre-commit` with:

  ```sh
  npx lint-staged
  ```

- [ ] **Step 3: Create lint-staged config**

  Create `.lintstagedrc.json`:

  ```json
  {
    "*.{ts,tsx}": ["eslint --fix", "tsc --noEmit"]
  }
  ```

  Note: `tsc --noEmit` runs project-wide type checking (not just staged files) — this is expected behaviour for TypeScript projects.

- [ ] **Step 4: Verify lint-staged runs without errors on current files**

  ```bash
  npx lint-staged --diff="HEAD"
  ```

  Expected: all checks pass (or `No staged files match any configured task` if nothing is staged — both are OK).

- [ ] **Step 5: Verify pre-commit hook fires on a test commit**

  ```bash
  git add .lintstagedrc.json
  git commit -m "chore: add lint-staged config and Husky pre-commit hook"
  ```

  Expected: the pre-commit hook runs lint-staged, then the commit succeeds.

---

## Task 10: Final build verification

- [ ] **Step 1: Run production build**

  ```bash
  npm run build
  ```

  Expected output ends with:
  ```
  ✓ Compiled successfully
  Route (app)        Size    First Load JS
  ┌ ○ /              ...     ...
  ```
  No TypeScript or ESLint errors.

- [ ] **Step 2: Verify git log shows clean history**

  ```bash
  git log --oneline
  ```

  Expected — at minimum, these commits exist (in any order):
  ```
  chore: scaffold Next.js 15 App Router project
  chore: set up FSD directory skeleton and fix tsconfig path alias
  chore: install Redux Toolkit, React Query, Husky, lint-staged
  feat: add Redux store and typed hooks in shared/store
  feat: add Redux and React Query providers in src/app/providers
  feat: add global CSS tokens and HomePage FSD slice
  feat: add shared api fetch wrapper and env config stubs
  feat: wire Next.js routing shell to FSD providers and HomePage
  chore: add lint-staged config and Husky pre-commit hook
  ```

- [ ] **Step 3: Final commit if any files remain unstaged**

  ```bash
  git status
  ```

  If there are uncommitted changes (e.g., `.gitkeep` files):

  ```bash
  git add .
  git commit -m "chore: finalize FSD skeleton structure"
  ```
