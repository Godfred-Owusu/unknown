# Unit 02: Full Marketing Landing Page (Expanded)

## Implementation: Section-by-Section Breakdown

## Pre-requisites

- AI must read `AGENT.md` to understand the hierarchical context order before implementation.

### 1. Hero Section (The Hook)

- **Visual:** High-fidelity 3D NFC Card (Looping Video) floating in a 3D space with a soft blue "aura" glow.
- **Glassmorphism:** A sticky, blurred `<Nav />` containing locale switcher (EN, FR, DE, NL, GE) and "Sign In".
- **Interaction:** Scroll-triggered text opacity. As the user scrolls, the hero text fades out and the card moves toward the "phone" in the next section.

### 2. The "Digital-First" Section (Immediate Value)

- **Concept:** Explain that you don't wait for the mail to start networking.
- **Content:** "Your profile is live before your card arrives."
- **Visual:** A split view.
  - **Left:** A dynamic QR code generated for the user's future card.
  - **Right:** A "Add to Apple/Google Wallet" button with a glassmorphism card preview.
- **Animation:** A "Step 1, 2, 3" staggered reveal as the user scrolls into view.

### 3. Feature Showcase: "Infrastructure for Identity"

- **Grid Layout:** 3 Large Glass-Cards with hover-glow effects.
- **Card A (NFC Gateway):** Description of the physical chip technology. Icon: Lucide `Cpu`.
- **Card B (Dynamic Engine):** Description of the real-time dashboard updates. Icon: Lucide `Zap`.
- **Card C (Lead Capture):** Description of the integrated form that saves contacts directly to the CRM. Icon: Lucide `Users`.

### 4. Interactive "Tap" Demo (Scroll-Triggered)

- **Visual:** A large iPhone mockup in the center.
- **Animation:** As the user scrolls, a 3D TapLink card slides in from the side and "taps" the top of the iPhone.
- **Trigger:** Upon the "tap," the iPhone screen transitions from a lock screen to a vibrant, glass-styled TapLink profile page.
- **i18n Note:** The text on the iPhone screen must change based on the selected locale.

### 5. Tiered Pricing (Revenue Generation)

- **Layout:** Three vertical glass containers.
- **Free:** "The Digital Entry" - QR only, 1 theme, basic links.
- **Pro:** "The Professional" - Physical NFC Card included, all themes, advanced analytics, custom CSS.
- **Team:** "The Enterprise" - Bulk management, employee syncing, white-labeling.
- **Style:** The "Pro" card should have a rotating "Cobalt Blue" border glow to signify it's the best value.

### 6. Social Proof & Global Reach

- **Content:** "Trusted by professionals in Paris, Berlin, Amsterdam, and beyond."
- **Visual:** A soft-focused map background with glowing "Tap" points appearing in the locations corresponding to our i18n languages.

### 7. Final Call to Action (CTA)

- **Visual:** Large centered glass box.
- **Text:** "Ready to upgrade your first impression?"
- **Button:** Pulsing "Order Your Card Now" button.

### 8. Multi-Language Footer

- **Localization:** All links (Privacy, Terms, Shipping) fully translated.
- **Credits:** "Designed for the future of networking. © 2026 TapLink."

---

## Technical Specifications for AI Implementation

### Internationalization (next-intl)

- Store all strings in `messages/[locale].json`.
- Do not hardcode strings in the components.
- Implementation must use `useTranslations` hook for all section titles and body text.

### Framer Motion Settings

- **Viewport Scroll:** Use `whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`.
- **Stagger:** Use `staggerChildren` for the feature grid to create a "wave" entry effect.

### Responsive Rules

- **Desktop (1280px+):** Full 3D visual on the right, text on the left.
- **Tablet (768px - 1024px):** 2-column grid for features, simplified animations.
- **Mobile (< 768px):** Single column. 3D card visual moves to the top (above the headline). Animations simplified to preserve battery/performance.

## Verify when done

- [ ] All 8 sections are present and follow the `--bg-base` / `--bg-surface` token system.
- [ ] Language switching doesn't "flicker" or lose scroll position.
- [ ] Glassmorphism `backdrop-filter` works across Safari, Chrome, and Firefox.
- [ ] All buttons have a defined `href` (even if pointing to a `#` for now).
