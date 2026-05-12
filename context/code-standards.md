# Code Standards

## General

- Use `pnpm` for all package management and dependency installation.
- Keep components small, composable, and reusable.
- Separate:
  - **UI Components** → Presentational only
  - **Feature Components** → Business logic and state management
- Avoid deeply nested component trees.
- Prefer composition over prop drilling.
- Use absolute imports via `@/` aliases.
- File and folder names should use `kebab-case`.
- Component names should use `PascalCase`.
- Hooks should use the `use*` naming convention.
- Avoid large monolithic files (>300 lines where possible).

## Project Structure

```txt
src/
├── app/                # App Router pages/layouts
├── components/         # Shared UI components
│   ├── ui/             # shadcn/ui primitives
│   └── features/       # Business/domain components
├── lib/                # Utilities and shared services
├── actions/            # Server Actions
├── hooks/              # Custom React hooks
├── types/              # Global TypeScript types/interfaces
├── services/           # External integrations
├── styles/             # Global styles/theme
└── config/             # Static configuration
```

## TypeScript

- Strict mode enabled.
- Prefer `interface` over `type` for:
  - public APIs
  - database models.
  - component props

- Use type for:
  - unions
  - mapped types
  - utility types

- Explicitly define return types for:
  - Server Actions
  - utility functions
  - API handlers
- Avoid any. Use:
  - unknown
  - generics
  - proper interfaces
- Shared types should live in src/types.
  Example:

  ```cmd
  interface UpdateProfileInput {
  name: string;
  bio?: string;
  }

  interface ActionResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  }
  ```

# Next.js Standards

- Default to **Server Components**.
- Use `'use client'` only when required for:
  - hooks
  - browser APIs
  - interactive state
  - animations

## Prefer

- Server Actions
- async Server Components
- streaming rendering

---

# Routing

- Use route groups:
  - `(dashboard)`
  - `(marketing)`

- Keep layouts colocated with their routes.

---

# Data Fetching

- Fetch data on the server whenever possible.
- Avoid unnecessary client-side fetching.
- Use Prisma directly inside Server Components or Server Actions.

---

# Server Actions

Use Server Actions for:

- form submissions
- mutations
- authenticated writes

## All Server Actions must:

1. validate input
2. verify authentication
3. verify ownership
4. return typed responses

## Standard Response Shape

```ts
interface ActionResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

---

# API Routes

Use Route Handlers only when:

- webhooks are required
- third-party callbacks are needed
- public APIs are necessary

## Response Format

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

## Error Format

```json
{
  "success": false,
  "error": "Unauthorized"
}
```

---

# Authentication & Security

## Route Protection

- Use Clerk `authMiddleware` for protected routes.
- Dashboard routes must require authentication.

---

## Server-Side Auth

Always retrieve `userId` using `auth()` in:

- Server Components
- Server Actions
- Route Handlers

---

## Ownership Validation

Every mutation must verify:

- resource ownership
- authenticated identity

Never trust:

- client-side IDs
- form ownership claims

---

# Frontend Authentication

Use Clerk components for UI auth state:

```tsx
<SignedIn />
<SignedOut />
<UserButton />
```

Avoid manual auth state handling where possible.

---

# Database Standards

- Use Prisma as the single ORM layer.
- Never access the database directly outside Prisma.

## All tables must include:

- `id`
- `createdAt`
- `updatedAt`

---

## Recommended IDs

- Use `cuid()` or `uuid()` for public-facing IDs.
- Never expose incremental IDs publicly.

---

## Queries

- Select only required fields.
- Avoid over-fetching relations.

Use indexes for:

- `cardId`
- `userId`
- analytics timestamps

---

# Styling Standards

- Use Tailwind CSS utility classes.
- Use semantic design tokens only.
- Never hardcode colors or spacing values.

## Forbidden

```tsx
className = "bg-[#000000]";
```

## Correct

```tsx
className = "bg-background text-foreground";
```

---

# Component Standards

## UI Components

Located in:

```txt
src/components/ui
```

### Rules

- Purely presentational
- No business logic
- Reusable across features

---

## Feature Components

Located in:

```txt
src/components/features
```

### Rules

- Domain-specific logic allowed
- May use hooks/actions
- Composed from UI components

---

# Forms

Use:

- React Hook Form
- Zod validation

## Validate

- client-side
- server-side

## All forms must:

- show loading states
- show validation errors
- prevent duplicate submissions

---

# Performance Standards

- Public profile pages must remain lightweight.
- Minimize client-side JavaScript on `/card/[cardId]`.
- Lazy load non-critical dashboard components.
- Optimize images using Next.js `Image`.

## Performance Goals

| Metric                 | Target |
| ---------------------- | ------ |
| Initial profile load   | < 2s   |
| Lighthouse Performance | > 90   |
| CLS                    | < 0.1  |

---

# Accessibility

- All buttons and inputs must have accessible labels.
- Keyboard navigation must work throughout the dashboard.
- Maintain WCAG AA contrast ratios.
- Focus states must always remain visible.

---

# SEO Standards

All public pages must include:

- dynamic metadata
- OpenGraph tags
- Twitter metadata
- canonical URLs

## Profile pages should support:

- JSON-LD structured data
- social sharing previews

---

# Logging & Error Handling

- Never expose raw server errors to clients.
- Log internal errors server-side.
- Return user-friendly error messages.

## Example

```ts
return {
  success: false,
  error: "Unable to update profile",
};
```

---

# Git Standards

## Branch Naming

```txt
feature/profile-editor
fix/dashboard-sidebar
refactor/auth-flow
```

---

## Commit Convention

```txt
feat: add profile analytics
fix: resolve card routing issue
refactor: simplify dashboard layout
```

---

# Testing Standards

- Critical business logic must be testable.

## Prioritize testing:

- Server Actions
- utilities
- validation schemas

---

## Recommended Stack

- Vitest
- Testing Library
- Playwright (future)

---

# Architecture Principles

1. Database is the single source of truth.
2. Public profile rendering must remain dynamic.
3. Shared reusable infrastructure over per-user systems.
4. Prefer simplicity over premature abstraction.
5. Optimize for scalability and maintainability.
