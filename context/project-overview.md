# TapLink

## Overview

TapLink is a SaaS-enabled digital identity infrastructure that connects physical NFC cards to dynamically generated, cloud-hosted professional profiles.

Each NFC card acts as a physical access key to a real-time digital identity layer, enabling instant sharing of contact information, portfolios, social links, and booking actions through a single tap interaction.

The system is built as a multi-tenant platform where all user profiles are rendered dynamically from shared infrastructure rather than individually hosted websites.

## Goals

1. Provide a frictionless "Tap-to-Profile" experience with < 2s load times.
2. Convert physical NFC card purchases into long-term SaaS subscriptions through value-added digital identity features.
3. Enable individuals and organizations to manage scalable digital identity profiles from a unified dashboard.
4. Establish TapLink as a reusable identity layer for real-world networking interactions.

## Core User Flow

1. User purchases an NFC card (pre-encoded with a unique ID).
2. User creates an account during checkout or via landing page.
3. User customizes their digital profile in the TapLink dashboard.
4. User receives the physical card and taps it on a smartphone.
5. The phone opens the TapLink URL, rendering a dynamic profile and capturing analytics.
6. Device opens a dynamic URL (/card/[cardId]).
7. Backend resolves card ID → user profile → renders optimized profile page.
8. System logs interaction event for analytics and attribution.

## System Design Principle

TapLink does not generate individual websites per user.

Instead, it operates on a:

`single-template, multi-tenant rendering architecture`

All profiles are:

- dynamically resolved at request time
- rendered using shared UI components
- backed by a centralized database schema

This ensures:

- horizontal scalability
- consistent UX across users
- low operational overhead
- fast deployment cycles

## Scope

### In Scope

- Dynamic profile rendering via `/card/[cardId]`
- User authentication and onboarding
- Dashboard for profile management
- VCard (.vcf) generation and download
- Lead capture forms on public profiles
- QR code generation linked to profiles
- Subscription billing (Stripe integration)
- NFC card ↔ user association system
- Basic analytics (tap tracking, device metadata)

### Out of Scope

- Native iOS/Android app (Web-only MVP).
- Physical card printing software (Handled by external vendors).
- Messaging system between users.

## Success Criteria

1. Profile updates in the dashboard reflect on public profiles in under 1 second (near real-time consistency).
2. A visitor can save a contact (via vCard or system contact prompt) in ≤ 2 interactions.
3. NFC tap events are reliably tracked and attributed to a user profile with ≥ 99% accuracy.
4. System supports multiple cards per user without data duplication or performance degradation.
