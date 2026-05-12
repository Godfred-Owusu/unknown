# 01 - Design System Foundation

## Goal

Establish the core styling infrastructure and install the base UI component library (shadcn/ui) configured for the TapLink theme. This unit transitions the high-level `ui-context.md` into functional code.

## Pre-requisites

- AI must read `AGENT.md` to understand the hierarchical context order before implementation.
- Next.js project must be initialized with `pnpm`.

# Goals

By the end of this unit:

- The application supports:
  - dark mode (default)
  - light mode
- Global semantic design tokens are configured
- Typography system is implemented
- Tailwind is configured with TapLink theme tokens
- shadcn/ui is installed and configured
- Shared UI primitives exist
- Basic layout shell is established
- Glassmorphism utilities and animation utilities are available
- Core accessibility and responsiveness standards are enforced

---

# Scope

## In Scope

### Theme Infrastructure

- CSS variable-based theme system
- Dark-first architecture
- Semantic color tokens
- Tailwind token integration
- Radius tokens
- Shadow/elevation tokens
- Gradient tokens

---

### Typography System

Implement:

- Geist Sans
- Inter
- Optional Satoshi support

Define typography variables:

- `--font-heading`
- `--font-body`
- `--font-ui`
- `--font-button`
- `--font-nav`
- `--font-hero`
- `--font-input`
- `--font-data`
- `--font-label`
- `--font-accent`

---

### UI Infrastructure

Install and configure:

- Tailwind CSS
- shadcn/ui
- Lucide React
- Framer Motion
- React Kino

---

### Shared UI Components

Create initial reusable primitives:

```txt
src/components/ui/
```

Required components:

- button
- input
- textarea
- card
- badge
- avatar
- dialog
- dropdown-menu
- tabs
- separator
- skeleton

---

### Utility Infrastructure

Create:

```txt
src/lib/
```

Required utilities:

- `utils.ts`
- `constants.ts`
- `theme.ts`

---

### Layout Foundation

Create:

```txt
src/app/layout.tsx
```

Requirements:

- dark mode enabled by default
- font variables configured globally
- metadata configured
- theme classes attached to `<html>`
- responsive viewport setup

---

### Global Styling

Implement:

```txt
src/app/globals.css
```

Must include:

- semantic CSS variables
- dark/light themes
- base typography rules
- scrollbar styling
- glassmorphism utilities
- animation utilities
- focus ring styling
- selection styling

---

### SEO Foundation

Configure root metadata:

- title template
- description
- OpenGraph defaults
- Twitter metadata
- metadataBase
- viewport configuration

---

# Out of Scope

- Dashboard pages
- Authentication UI
- Profile rendering
- Database integration
- Stripe integration
- Analytics
- Business logic

This unit is infrastructure-only.

---

# Required Dependencies

Install:

```bash
pnpm add framer-motion lucide-react next-themes react-kino
```

Initialize shadcn/ui:

```bash
pnpm dlx shadcn@latest init
```

Add required shadcn components:

```bash
pnpm dlx shadcn@latest add button input textarea card badge avatar dialog dropdown-menu tabs separator skeleton
```

Optional fonts:

```bash
pnpm add geist
```

---

# File Structure

Expected structure after completion:

```txt
src/
├── app/
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── ...
│
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── theme.ts
│
├── styles/
│   └── tokens.css
│
└── config/
    └── metadata.ts
```

---

# Theme Requirements

## Dark Mode

Dark mode must be the default experience.

Apply:

```html
<html class="dark"></html>
```

---

## Semantic Tokens

All colors must use semantic variables.

Forbidden:

```tsx
className = "bg-[#000000]";
```

Correct:

```tsx
className = "bg-background text-foreground";
```

---

## Required Tokens

Must implement all variables defined in:

```txt
context/ui-context.md
```

Including:

- background
- surface
- foreground
- muted-foreground
- primary
- secondary
- accent-cyan
- border
- input
- ring
- gradient tokens
- glass token
- glow token

---

# Typography Requirements

## Fonts

Required:

- Geist Sans
- Inter

Optional:

- Satoshi

---

## Typography Behavior

- Headings use Geist Sans
- Body/UI text use Inter
- Font smoothing enabled
- Responsive typography scaling
- Tight letter spacing for headings

---

# Animation Requirements

Implement reusable motion utilities:

- fade-in
- slide-up
- scale-in
- shimmer skeleton animation

Framer Motion should be globally available.

Avoid:

- excessive motion
- long animation durations

---

# Glassmorphism Rules

Reusable utility classes should support:

- translucent surfaces
- backdrop blur
- subtle borders
- soft glow shadows

Used for:

- floating navbar
- dialogs
- overlays
- command menus

---

# Accessibility Requirements

Must support:

- keyboard navigation
- visible focus rings
- WCAG AA contrast
- reduced motion preference
- accessible input labels

Minimum touch target:

```txt
44px
```

---

# Responsive Rules

The system must be mobile-first.

Required breakpoints:

| Breakpoint | Width  |
| ---------- | ------ |
| sm         | 640px  |
| md         | 768px  |
| lg         | 1024px |
| xl         | 1280px |

---

# Metadata Requirements

Root metadata must support:

## SEO

- metadataBase
- title template
- description
- keywords

---

## OpenGraph

- title
- description
- siteName
- images
- locale
- type

---

## Twitter/X

- summary_large_image
- title
- description
- image

---

# Acceptance Criteria

The unit is complete when:

- Tailwind theme tokens are fully configured
- Dark mode works globally
- Light mode works correctly
- shadcn/ui components render correctly
- Fonts load correctly
- Semantic tokens are used throughout
- `pnpm run build` passes
- Lighthouse accessibility score > 90
- No hydration warnings
- Responsive layout works on mobile and desktop

---

# Verification Checklist

## Visual

- [ ] Dark mode is default
- [ ] Light mode renders correctly
- [ ] Glass effects render properly
- [ ] Typography hierarchy is visible
- [ ] Focus rings are visible
- [ ] Borders use semantic tokens

---

## Technical

- [ ] No hardcoded colors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No hydration mismatch
- [ ] Components are reusable
- [ ] No unnecessary client components

---

# Deliverables

After completion, the project should have:

1. Production-ready theme architecture
2. Shared reusable UI primitives
3. Global styling infrastructure
4. Responsive design foundation
5. SEO-ready metadata foundation
6. Animation and glassmorphism utilities
7. Accessible component baseline

This unit becomes the foundation for all future TapLink development.
