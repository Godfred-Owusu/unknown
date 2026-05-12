# UI Context

## Theme

TapLink uses a premium, minimalist, high-contrast visual language. The application is **Dark-First** by default to provide a professional "technical workspace" feel. A high-contrast **Light Mode** is supported for accessibility and specific user preferences.

## Colors

All components must use the CSS custom properties defined below. Do not use hardcoded hex values in the codebase.

| Role                 | CSS Variable           | Dark (Default)           | Light                    |
| -------------------- | ---------------------- | ------------------------ | ------------------------ |
| Background           | `--background`         | `#050505`                | `#FFFFFF`                |
| Surface/Card         | `--surface`            | `#0D0D0D`                | `#F5F5F5`                |
| Primary Text         | `--foreground`         | `#FFFFFF`                | `#111111`                |
| Secondary Text       | `--muted-foreground`   | `#A1A1AA`                | `#666666`                |
| Primary Accent       | `--primary`            | `#5B5FFB`                | `#4F46E5`                |
| Secondary Accent     | `--secondary`          | `#8B5CF6`                | `#7C3AED`                |
| Cyan Accent          | `--accent-cyan`        | `#00B7FF`                | `#0095D9`                |
| Border               | `--border`             | `#27272A`                | `#E5E5E5`                |
| Input Background     | `--input`              | `#111111`                | `#FFFFFF`                |
| Ring/Focus           | `--ring`               | `#5B5FFB`                | `#4F46E5`                |
| Hero Gradient Start  | `--gradient-start`     | `#5B5FFB`                | `#6366F1`                |
| Hero Gradient Middle | `--gradient-middle`    | `#8B5CF6`                | `#8B5CF6`                |
| Hero Gradient End    | `--gradient-end`       | `#00B7FF`                | `#0EA5E9`                |
| Button Primary Text  | `--primary-foreground` | `#FFFFFF`                | `#FFFFFF`                |
| Button Secondary     | `--secondary-surface`  | `#18181B`                | `#F1F5F9`                |
| Navbar Background    | `--navbar`             | `rgba(5,5,5,0.75)`       | `rgba(255,255,255,0.75)` |
| Glass Effect         | `--glass`              | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.04)`       |
| Shadow Glow          | `--glow`               | `rgba(91,95,251,0.35)`   | `rgba(79,70,229,0.18)`   |

<!-- | Role            | CSS Variable       | Dark (Default) | Light     |
| --------------- | ------------------ | -------------- | --------- |
| Page Background | `--bg-base`        | `#020617`      | `#F8FAFC` |
| Surface / Card  | `--bg-surface`     | `#0F172A`      | `#FFFFFF` |
| Primary Text    | `--text-primary`   | `#F8FAFC`      | `#0F172A` |
| Muted Text      | `--text-muted`     | `#94A3B8`      | `#64748B` |
| Primary Accent  | `--accent-primary` | `#2563EB`      | `#2563EB` |
| Border Default  | `--border-default` | `#1E293B`      | `#E2E8F0` |
| Success / Lead  | `--state-success`  | `#10B981`      | `#059669` |
| Error / Danger  | `--state-error`    | `#EF4444`      | `#DC2626` | -->

<!-- | Role      | Font Family                  | Variable      |
| --------- | ---------------------------- | ------------- |
| UI Text   | Geist Sans, Inter, System-UI | `--font-sans` |
| Code/Mono | Geist Mono, Fira Code        | `--font-mono` | -->

## Typography

| Role                 | Font Family | Variable         |
| -------------------- | ----------- | ---------------- |
| Primary Heading      | Geist Sans  | `--font-heading` |
| Body Text            | Inter       | `--font-body`    |
| Dashboard/UI         | Inter       | `--font-ui`      |
| Buttons              | Inter       | `--font-button`  |
| Navigation           | Geist Sans  | `--font-nav`     |
| Hero Section         | Geist Sans  | `--font-hero`    |
| Form Inputs          | Inter       | `--font-input`   |
| Analytics/Data       | Inter       | `--font-data`    |
| Small Labels         | Inter       | `--font-label`   |
| Optional Accent Font | Satoshi     | `--font-accent`  |

## Border Radius

| Context           | Class         | Value  |
| ----------------- | ------------- | ------ |
| Inline / Small UI | `rounded-md`  | `6px`  |
| Cards / Panels    | `rounded-xl`  | `12px` |
| Modals / Overlays | `rounded-2xl` | `16px` |

## Spacing Scale

| Role            | Value |
| --------------- | ----- |
| Micro spacing   | 4px   |
| Small           | 8px   |
| Base            | 12px  |
| Medium          | 16px  |
| Large           | 24px  |
| Section spacing | 32px  |
| Page spacing    | 48px  |

## Responsive Breakpoints

**Mobile-first design baseline**

- sm: 640px
- md: 768px
- lg: 1024px
- Dashboard sidebar collapses under md
- Profile pages always optimized for mobile first

## Missing elevation / depth system

| Level | Usage                   |
| ----- | ----------------------- |
| 0     | Background              |
| 1     | Cards                   |
| 2     | Floating UI (dropdowns) |
| 3     | Modals                  |
| 4     | Critical overlays       |

## Component Library

- **Foundation:** Tailwind CSS for styling and responsive layouts.
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives).
- **Icons:** [Lucide React](https://lucide.dev/). Stroke width: `2px`. Sizes: `h-4 w-4` for inline, `h-5 w-5` for buttons.
- **Animation Library:** [Framer Motion](https://motion.dev). Framer Motion for smooth premium animations.
- **Scrolling Animation:** [React Kino](https://www.react-kino.dev/). Cinematic scroll-driven storytelling.

## Accessibility

- Minimum contrast ratio: WCAG AA
- All interactive elements must have focus rings (--ring)
- Keyboard navigation required for dashboard
- Touch targets ≥ 44px

## Layout Patterns

- **Marketing:** Center-aligned, high-impact typography with subtle gradient backgrounds.
- **Dashboard:** Fixed-width left sidebar (`280px`) on desktop; persistent bottom-bar navigation on mobile.
- **Public Profile:** Mobile-first, single-column "Linktree-style" layout. Maximum content width of `450px`.
- **Modals:** Centered overlays using `backdrop-blur-md` for visual depth.

## Implementation Rules

1. **Dark Mode Preference:** Use the `dark` class on the `<html>` element as the default state.
2. **Interactive Elements:** All buttons and links must have a subtle `transition-colors` and `active:scale-95` feedback.
3. **Glassmorphism:** Use `bg-surface/80` combined with `backdrop-blur` for floating headers or navigation bars.
