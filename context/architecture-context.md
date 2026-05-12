# Architecture Context

## Stack

| Layer     | Technology              | Role                                                  |
| --------- | ----------------------- | ----------------------------------------------------- |
| Framework | Next.js 15 (App Router) | Full-stack rendering (UI, API routes, Server Actions) |
| Language  | TypeScript              | Type-safe full-stack development                      |
| UI        | Tailwind CSS + Lucide   | Utility-first styling system                          |
| Database  | PostgreSQL (via Prisma) | Core relational data layer (multi-tenant SaaS)        |
| Auth      | Clerk                   | Authentication, sessions, user management             |
| Payments  | Stripe                  | Subscriptions, billing, and hardware checkout         |
| Storage   | S3 / UploadThing        | Media assets (profile images, logos)                  |
| Analytics | Custom event tracking   | NFC taps, profile visits, lead conversions            |

## System Boundaries

### Public Layer (SEO + NFC Entry Point)

`src/app/card/[cardId]`

- Dynamic profile renderer
- SSR-first (for speed + SEO)
- Edge-optimized where possible
- Entry point for NFC and QR traffic

`src/app/(marketing)`

- Landing pages
- SEO acquisition layer
- Conversion funnels (purchase NFC cards)

### Authenticated Layer (SaaS Dashboard)

`src/app/(dashboard)`

- Profile editor
- Card management
- Analytics dashboard
- Billing management (Stripe)

### Infrastructure Layer

`src/lib/prisma.ts`

- Singleton Prisma client (prevents connection exhaustion)

  `src/lib/auth.ts`

- Clerk session helpers and server-side protection utilities

  `src/lib/analytics.ts`

- Event tracking abstraction layer (tap, view, lead, conversion)

## Rendering Strategy

### Public Profile (/card/[cardId])

- Default mode: SSR (Server-Side Rendering)
- Optional caching layer: ISR (Incremental Static Regeneration) for hot profiles
- Edge rendering for:
  1.  low latency NFC access
  2.  global distribution

  #### Why this matters:

- NFC scans must resolve instantly
- Profiles must be globally cacheable
- Updates must still propagate quickly

## SEO & Metadata System (CRITICAL)

All public profile pages must implement dynamic metadata generation.

### Dynamic Metadata Rules

Each /card/[cardId] page must generate:

- title
- description
- openGraph
- twitterCard
- canonical URL

#### Example structure:

1. Title format:
   - {name} | TapLink Digital Profile

2. Description format:
   - {name} — {role}. View profile, contact details, and social links instantly.
3. OpenGraph image:
   - Dynamically generated or user-uploaded profile preview card
4. Canonical URL:
   - https://taplink.com/card/[cardId]

   ### OpenGraph Requirements

Every profile must support:

- og:title
- og:description
- og:image
- og:type = profile
- og:url

This ensures:

- LinkedIn previews work correctly
- WhatsApp / iMessage previews are rich
- NFC shares generate trust signals

#### Twitter/X Metadata

- twitter:card = summary_large_image
- twitter:title
- twitter:description
- twitter:image

### Structured Data (SEO Boost Layer)

Each profile page should include JSON-LD:

- Schema type: Person
- Fields:
  - name
  - jobTitle
  - url
  - sameAs (social links)

This improves:

- Google indexing
- search visibility for personal profiles
- professional discoverability

### Storage Model

- PostgreSQL (via Prisma)
  - Users
  - Cards
  - Leads
  - Analytics events
  - Subscription status

  ### S3 / UploadThing

- Profile images
- Logos
- OpenGraph images (optional generated assets)

### Performance Strategy (IMPORTANT for NFC use case)

To guarantee <2s load time:

1. Edge-first routing

- `/card/[cardId]` should prefer edge runtime

2. Caching rules

- Public profiles cached with short TTL (30–120s)
- Revalidation triggered on profile updates

3. Payload optimization

- No heavy client-side hydration on profile pages
- Minimal JS bundle for `/card/[cardId]`

### Security Invariants

1. All mutations require authenticated user ownership checks.
2. Users can only modify resources linked to their userId.
3. Public profile routes must never expose sensitive metadata (emails, internal IDs).
4. Rate limiting applied to:
   - lead submissions
   - profile fetch endpoints

### System Invariants

1. No hardcoded values in UI (only design tokens)
2. Database is single source of truth (no duplicated state)
3. Profile rendering is fully dynamic (no static HTML per user)
4. All NFC traffic resolves via /card/[cardId]

### Key Architectural Principle

    TapLink is a real-time identity resolution system, not a static website generator.

Every request to /card/[cardId] is:

1. identity lookup
2. data hydration
3. UI rendering
4. analytics capture
