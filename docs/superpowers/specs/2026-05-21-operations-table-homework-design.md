# Operations Table Homework — Design Spec

**Date:** 2026-05-21  
**Status:** Approved

---

## Overview

Update the hw-2 template to replace the vacancies homework with a new homework: implement the BCC Business main page from a Figma design, with the focus requirement being the "Операции" (Operations) section — a transactions table with filters, pagination, and correct data formatting. Students use only `bcc-design`, `bcc-styles`, and `bcc-design-icons` components; no raw HTML UI elements.

---

## Changes

### 1. `package.json`

Restore BCC design-system packages that were stripped from the current file:

| Package | Version |
|---|---|
| `bcc-design` | `^4.0.28` |
| `bcc-design-icons` | `^2.0.1` |
| `bcc-styles` | `^0.0.36` |
| `clsx` | `^2.1.1` |
| `sass` | `^1.81.0` |

`react-hook-form` is **not** restored — not needed for this task.

---

### 2. `src/shared/mocks/transactions.ts`

New file. Exports:

- `TransactionStatus` union type
- `Currency` union type
- `Transaction` interface
- `MOCK_TRANSACTIONS` array (~50 rows)

#### Types

```ts
export type TransactionStatus =
  | 'partially_signed'  // Частично подписано
  | 'executed'          // Исполнено
  | 'processing'        // В обработке
  | 'created'           // Создано
  | 'error'             // Ошибка

export type Currency = 'KZT' | 'RUB' | 'USD'

export interface Transaction {
  id: string
  date: string          // 'YYYY-MM-DD'
  number: string        // e.g. '23', '055', '003434542' (long → students truncate with '...')
  name: string          // transaction type label
  counterparty: string  // full org name (long → students truncate)
  bin_iin: string | null // null displayed as '–'
  amount: number        // raw number — students format with space thousands separator
  currency: Currency
  status: TransactionStatus
}
```

#### Mock data requirements

- ~50 rows spread across 8+ distinct dates (mix of close and further dates)
- All 5 statuses represented proportionally (`created` most common, `error` least)
- All 3 currencies: KZT (majority), RUB (few), USD (few)
- Two `name` values: `'Валютный перевод внутри банка'` and `'Заявление на входящий перевод'`
- `counterparty`: always `'Непубличное акционерное общество «Государственная корпорация»'`
- Mix of short numbers (2–5 digits) and long numbers (8+ digits, e.g. `'54212121'`, `'003434542'`)
- Mix of `bin_iin` present and `null`
- Wide range of amounts: small (3 000–50 000), medium (100 000–500 000), large (1 000 000+)
- Rows within the same date are intentionally varied in status and currency

---

### 3. `README.md`

Do **not** rewrite from scratch. Edit in place:

**Remove:**
- All three task descriptions (Задача 1: фильтры, Задача 2: кнопка локации, Задача 3: офисы)
- Яндекс Карты setup section
- Vacancies mock data table
- All vacancies-specific prompts and tips referencing `vacancies.ts`, `VacanciesFilter`, `bcc-hub-jobs-portal`
- Checklist items specific to vacancies and maps
- The `bcc-hub-jobs-portal` reference from the folder structure

**Keep:**
- Title and description section (update to reflect new task)
- Pre-commit setup section (unchanged)
- Install & run steps (unchanged)
- Commit rules section (unchanged — `feat: task finished` stays)
- Claude tips section (update prompts to reflect new task)

**Add:**
- Task description: implement the BCC Business main page from Figma, with the primary requirement being the "Операции" section
- UI kit requirement: use only `bcc-design`, `bcc-styles`, `bcc-design-icons` components; creating new components is allowed only when no suitable component exists in the kit
- Figma link placeholder: `TODO: PUT FIGMA LINK HERE`
- Mock data import instructions for `MOCK_TRANSACTIONS` from `@/shared/mocks/transactions`
- `Transaction` type documentation (fields, types, display rules)
- Display rules students must implement:
  - Amounts: formatted with space thousands separator + currency symbol (₸ / ₽ / $)
  - Long `number` values (>6 chars): displayed as `...{value}` (prepend `...`)
  - Long `name` and `counterparty`: truncated with ellipsis
  - `null` `bin_iin`: displayed as `–`
- Filter requirements: Статус (multi-select), Валюта (multi-select), Сегодня (toggle today's date)
- Pagination requirement: client-side, 10 rows per page, date-group headers preserved
- Checklist items for the new task
- Example Claude prompt for the operations table

---

## Out of Scope

- No new FSD folders or page scaffolding
- No sidebar/header implementation provided
- No server-side data fetching
- No tests
