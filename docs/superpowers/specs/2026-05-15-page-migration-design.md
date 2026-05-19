# Page Migration Design: bcc-hub-jobs-portal → hw-2

**Date:** 2026-05-15  
**Source:** `/Users/yenlikibragim/Desktop/bcc hub/bcc-hub-jobs-portal`  
**Target:** `/Users/yenlikibragim/Desktop/bcc hub/code_ai/hw-2`

---

## Goal

Extract three pages (Main/Home, About, Vacancies) from the production `bcc-hub-jobs-portal` project into student-ready `.tsx` template files in `hw-2`. Templates preserve all markup, styles, assets, and mobile/desktop layouts. All business logic and API calls are stripped and replaced with `// TODO:` comments and mock data, so students can add logic incrementally.

---

## Approach: Full FSD Faithful Migration

Mirror the source's feature-based architecture inside hw-2's existing FSD `src/` structure. Install the same design system (`bcc-design`) and sass so styles are identical to production.

---

## 1. Dependencies

Add to `hw-2/package.json`:

| Package      | Version   | Reason                                               |
| ------------ | --------- | ---------------------------------------------------- |
| `bcc-design` | `^4.0.28` | UI component library used throughout source          |
| `bcc-styles` | `^0.0.36` | CSS custom properties (`--b-color-*`, `--spacing-*`) |
| `sass`       | `^1.81.0` | Required for `.module.scss` files                    |
| `clsx`       | `^2.1.1`  | Used by shared Typography/Section components         |

---

## 2. Assets

Copy from source `public/` → target `public/`:

- `images/` — all `.webp` images referenced by feature components
- `assets/fonts/` — SuisseIntl font family (OTF files)

Copy from source `styles/globals.css` content → merge into `src/app/styles/globals.css` (font-face declarations, CSS custom properties, resets).

---

## 3. File Structure

```
src/
  shared/
    components/
      Section/
        Section.tsx           ← copied from source shared/components/Section
        styles.module.scss
        index.ts
      Container/
        Container.tsx         ← copied from source shared/components/Container
        styles.module.scss
        index.ts
      Typography/
        Heading.tsx           ← copied from source shared/components/Typography
        Body.tsx
        Eyebrow.tsx
        Caption.tsx
        Typography.types.ts
        classNames.ts
        styles.module.scss
        index.ts
    hooks/
      useMobile.ts            ← copied from source hooks/useMobile (uses bcc-design useLayoutContext)
    styles/
      container.ts            ← BccUIContainerWidth / BccUIContainerGutter enums

  features/
    # Main page (8 sections)
    hub-hero/
      HubHero.tsx
      styles.module.scss
      index.ts
    hub-stats/
      HubStats.tsx
      styles.module.scss
      index.ts
    hub-value-proposition/
      HubValueProposition.tsx
      styles.module.scss
      index.ts
    hub-how-we-work/
      HubHowWeWork.tsx
      styles.module.scss
      index.ts
      types.ts
      ui/
        desktop/HubHowWeWorkDesktop.tsx
        desktop/styles.module.scss
        mobile/HubHowWeWorkMobile.tsx
        mobile/MobileDots.tsx
        mobile/MobileFeatureCard.tsx
        mobile/styles.module.scss
    hub-products/
      HubProducts.tsx
      styles.module.scss
      index.ts
      types.ts
      ui/
        desktop/HubProductsDesktop.tsx
        desktop/styles.module.scss
        mobile/HubProductsMobile.tsx
        mobile/MobileDots.tsx
        mobile/MobileProductCard.tsx
        mobile/styles.module.scss
    hub-case-study/
      HubCaseStudy.tsx
      styles.module.scss
      index.ts
    hub-culture/
      HubCulture.tsx
      styles.module.scss
      index.ts
    hub-contact-form/
      HubContactForm.tsx      ← form markup kept, submit handler emptied
      styles.module.scss
      index.ts

    # About page (6 sections)
    about-redesign-hero/
      AboutRedesignHero.tsx
      styles.module.scss
      index.ts
    about-redesign-who-we-are/
      AboutRedesignWhoWeAre.tsx
      styles.module.scss
      index.ts
    about-redesign-how-we-work/
      AboutRedesignHowWeWork.tsx
      styles.module.scss
      index.ts
    about-redesign-culture/
      AboutRedesignCulture.tsx
      styles.module.scss
      index.ts
    about-redesign-faq/
      AboutRedesignFaq.tsx    ← dynamically imported (ssr: false)
      styles.module.scss
      index.ts
    about-redesign-stats/
      AboutRedesignStats.tsx
      styles.module.scss
      index.ts

    # Vacancies page (3 features)
    vacancies-filter/
      VacanciesFilter.tsx
      VacanciesFilter.type.ts
      styles.module.scss
      index.ts
      ui/
        vacancies-filter-desktop/VacanciesFilterDesktop.tsx
        vacancies-filter-mobile/VacanciesFilterMobile.tsx
        vacancies-filter-form/VacanciesFilterForm.tsx
        vacancies-filter-form/styles.module.css
        vacancies-hero/VacanciesHero.tsx
        vacancies-hero/styles.module.scss
    vacancies-list-filterable/
      VacanciesListFilterable.tsx   ← uses MOCK_VACANCIES, no useQuery
      styles.module.scss
      index.ts
      ui/
        vacancies-list/VacanciesList.tsx
        vacancies-list/styles.module.css
        no-data-widgets/index.tsx
        no-data-widgets/styles.module.scss
    candidates-contact-form/
      CandidatesContactForm.tsx     ← dynamically imported (ssr: false), form markup kept
      styles.module.scss
      index.ts

  pages/
    home/
      ui/HomePage.tsx         ← updated from stub: composes all hub-* features
      index.ts
    about/
      ui/AboutPage.tsx        ← new
      index.ts
    vacancies/
      ui/VacanciesPage.tsx    ← new
      index.ts

app/
  about/
    page.tsx                  ← new: export { AboutPage as default } from '@/pages/about'
  vacancies/
    page.tsx                  ← new: export { VacanciesPage as default } from '@/pages/vacancies'
  layout.tsx                  ← updated: add bcc-design CSS bundle import
  page.tsx                    ← unchanged
```

---

## 4. Logic-Stripping Rules

Applied uniformly to every migrated file:

| Source pattern                                             | Migration result                                                                                                                                        |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useTranslations('Hub Page.Hero')` → `t('title')`          | Replaced with hardcoded Russian string from `messages/ru.json`                                                                                          |
| `useVacanciesFilter()`                                     | Removed entirely. All returned values stubbed as empty/false. `// TODO: подключить хук useVacanciesFilter` added at call site                           |
| `useQuery({ queryFn: () => filterVacanciesRequest(...) })` | Removed. `isLoading=false`, `error=null`, `data=MOCK_VACANCIES` const defined in same file. `// TODO: API call to filterVacanciesRequest` comment above |
| `useMobile()`                                              | **Kept** — hook migrated to `src/shared/hooks/useMobile.ts`, used identically                                                                           |
| `useState(isMobileDefault)` for breakpoint tracking        | **Kept** — pure UI state                                                                                                                                |
| `useEffect(() => setIsMobileState(isMobile), [isMobile])`  | **Kept** — layout sync, no business logic                                                                                                               |
| `dynamic(() => import(...), { ssr: false })`               | **Kept** — same pattern                                                                                                                                 |
| `onClick` handlers with scroll/navigation/business logic   | Replaced with `() => { /* TODO: добавить логику */ }`                                                                                                   |
| `onSubmit` / `handleSubmit` with API submission            | Form `onSubmit` set to `() => { /* TODO: отправка формы */ }`                                                                                           |
| Form `rules={{ required: ..., validate: ... }}`            | **Kept** — structure/validation schema stays for students to wire up                                                                                    |
| `router.replace(...)` navigation calls                     | Replaced with `() => { /* TODO: навигация */ }`                                                                                                         |
| `executeRecaptcha(...)`                                    | Removed from submit handler                                                                                                                             |

---

## 5. Mock Data

`VacanciesListFilterable` will define a `MOCK_VACANCIES` constant with 3–5 representative vacancy objects matching the `FilterVacanciesResponse` shape from the source's API model:

```ts
const MOCK_VACANCIES = {
  total_hits: 3,
  vacancies: [
    {
      id: "1",
      title: "Frontend Developer",
      short_description: "Разработка интерфейсов для финтех-продуктов",
      direction: "it-frontend",
      experience_level: "1-3",
      work_format: "hybrid",
      tags: ["React", "TypeScript"],
      technologies: ["Next.js", "Redux"],
      city: "Almaty",
      salary_from: 500000,
      salary_to: 800000,
      created_at: "2026-05-01",
      on_top: true,
    },
    // ... 2 more
  ],
};
```

---

## 6. App Router Wiring

| File                     | Content                                                              |
| ------------------------ | -------------------------------------------------------------------- |
| `app/about/page.tsx`     | `export { AboutPage as default } from '@/pages/about'`               |
| `app/vacancies/page.tsx` | `export { VacanciesPage as default } from '@/pages/vacancies'`       |
| `app/layout.tsx`         | Add `import 'bcc-design/dist/index.css'` (or equivalent bundle path) |

---

## 7. Text Strategy

All `useTranslations()` calls replaced with the corresponding Russian string from `messages/ru.json`. No `next-intl` installed. Example:

```tsx
// Source:
const t = useTranslations('Hub Page.Hero');
<Heading>{t('title')}</Heading>

// Migrated:
<Heading>Создаем финтех-продукты</Heading>
```

---

## 8. Student TODOs

Each page will include a header comment block:

```
/**
 * TODO для студентов:
 * 1. Подключить хук фильтрации вакансий (useVacanciesFilter)
 * 2. Заменить MOCK_VACANCIES на реальный API-запрос через useQuery
 * 3. Добавить обработчик отправки формы с валидацией
 * 4. Добавить i18n через next-intl (заменить хардкод на useTranslations)
 * 5. Подключить Redux store для глобального состояния
 */
```

---

## 9. Out of Scope

- Navbar and Footer components (not part of the three target pages)
- Blog, Products, Vacancy detail pages
- Auth / cookie logic
- ReCaptcha integration
- Redux store slices (students wire these up)
- `next-intl` setup
