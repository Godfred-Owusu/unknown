# AI Workflow Rules

## Approach

Build TapLink incrementally using **spec-driven development**.

Each feature must be implemented as an isolated **Unit** as defined in the Build Plan.

Before implementing any Unit:

1. Read the corresponding specification inside `context/specs/`
2. Review:
   - acceptance criteria
   - UX expectations
   - architectural constraints
   - verification checklist
3. Confirm dependencies and impacted systems before coding.

---

# Development Philosophy

- Prioritize:
  - maintainability
  - scalability
  - simplicity
  - fast iteration

- Build reusable systems over one-off implementations.
- Avoid premature abstraction.
- Optimize for long-term SaaS scalability.

---

# Implementation Rules

## General

- Keep commits focused to a single logical change.
- Prefer incremental improvements over large rewrites.
- Avoid introducing hidden side effects across unrelated modules.
- Preserve backward compatibility whenever possible.

---

## Scoping Rules

- Never modify the database schema unless explicitly requested to update `schema.prisma`.
- Never introduce new infrastructure providers without approval.
- If a UI implementation requires a new dependency:
  1. explain why it is needed
  2. request approval before running `pnpm add`

---

## Build Unit Rules

Each Unit should:

- solve one clearly defined problem
- remain independently testable
- avoid leaking implementation details into unrelated layers

A Unit is considered complete only when:

- acceptance criteria pass
- TypeScript passes
- linting passes
- build passes
- verification checklist is satisfied

---

# File Modification Rules

## Before Editing

Always check:

- existing architecture patterns
- shared utilities
- reusable UI components
- existing design tokens

Avoid duplicating:

- components
- utility logic
- validation schemas
- database queries

---

## After Editing

After meaningful implementation changes:

1. Update `progress-tracker.md`
2. Verify affected documentation remains accurate
3. Ensure no architectural rules were violated

---

# Documentation Synchronization

Documentation must evolve with the codebase.

## Required Updates

| Change Type              | Required Documentation Update    |
| ------------------------ | -------------------------------- |
| Architecture changes     | `architecture-context.md`        |
| UI/Design changes        | `ui-context.md`                  |
| Workflow/process changes | `ai-workflow-rules.md`           |
| Feature completion       | `progress-tracker.md`            |
| Database updates         | `schema.prisma` + relevant specs |

---

# Architecture Change Rule

If a major architectural pivot occurs:

Examples:

- changing auth providers
- changing ORM
- changing deployment strategy
- introducing queues/workers
- switching storage providers

Then:

1. Update architecture documentation FIRST
2. Explain the reasoning
3. Document migration implications
4. Then proceed with implementation

---

# Verification Workflow

Before moving to the next Unit:

## Required Checks

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

---

## Verification Checklist

Ensure:

- no TypeScript errors
- no ESLint errors
- no hydration issues
- responsive layouts work
- dark mode remains consistent
- accessibility is preserved
- server actions are authenticated
- ownership validation exists

---

# Code Quality Rules

- Avoid unnecessary client components.
- Keep business logic outside UI components.
- Prefer server-side data fetching.
- Avoid over-engineering.
- Keep files readable and modular.

---

# Performance Rules

- Protect `/card/[cardId]` performance aggressively.
- Minimize client-side JavaScript.
- Avoid unnecessary re-renders.
- Lazy load dashboard-only functionality.
- Optimize all uploaded images.

---

# Security Rules

- Never trust client-provided IDs.
- Validate all server mutations.
- Verify authenticated ownership on every write operation.
- Never expose sensitive internal data to public routes.
- Sanitize user-generated content when rendered publicly.

---

# SEO Rules

Public profile pages must always support:

- dynamic metadata
- OpenGraph tags
- Twitter metadata
- canonical URLs
- structured data (JSON-LD)

Avoid blocking search indexing unless explicitly required.

---

# AI Collaboration Rules

When implementing features:

- Think systemically, not just visually.
- Preserve consistency with existing architecture.
- Reuse existing patterns before creating new ones.
- Optimize for future scalability and SaaS growth.

The goal is not only to make features work,
but to ensure TapLink evolves as a scalable digital identity platform.
