/**
 * TapLink Application Constants
 *
 * Centralized configuration values for the application.
 */

import { siteUrl } from "@/config/metadata";

// ============================================
// SITE CONFIGURATION
// ============================================
export const SITE_CONFIG = {
  name: "TapLink",
  description: "Create beautiful link-in-bio pages with TapLink",
  url: siteUrl,
  ogImage: "https://taplink.io/og.jpg",
  links: {
    twitter: "https://twitter.com/taplink",
    github: "https://github.com/taplink",
    terms: "/terms",
    privacy: "/privacy",
  },
} as const;

// ============================================
// BREAKPOINTS (in pixels)
// ============================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// ============================================
// SPACING SCALE (in pixels)
// ============================================
export const SPACING = {
  micro: 4,
  small: 8,
  base: 12,
  medium: 16,
  large: 24,
  section: 32,
  page: 48,
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const RADIUS = {
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  full: "9999px",
} as const;

// ============================================
// FONT SIZES
// ============================================
export const FONT_SIZES = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
} as const;

// ============================================
// ANIMATION DURATIONS (in milliseconds)
// ============================================
export const ANIMATION = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const;

// ============================================
// MAXIMUM CONTENT WIDTHS
// ============================================
export const MAX_WIDTH = {
  prose: "65ch",
  content: "450px", // Profile page max width
  sidebar: "280px", // Dashboard sidebar width
  container: "1280px",
} as const;

// ============================================
// TOUCH TARGET SIZE
// ============================================
export const TOUCH_TARGET = 44; // Minimum touch target size in pixels

// ============================================
// API ROUTES
// ============================================
export const API_ROUTES = {
  auth: {
    signIn: "/api/auth/signin",
    signUp: "/api/auth/signup",
    signOut: "/api/auth/signout",
    session: "/api/auth/session",
  },
  users: {
    profile: "/api/users",
    links: "/api/users/links",
    analytics: "/api/users/analytics",
  },
} as const;

// ============================================
// PAGE ROUTES
// ============================================
export const PAGE_ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  profile: "/[username]",
  settings: "/settings",
  pricing: "/pricing",
  login: "/login",
  signup: "/signup",
} as const;

// ============================================
// LOCAL STORAGE KEYS
// ============================================
export const STORAGE_KEYS = {
  theme: "taplink-theme",
  onboarding: "taplink-onboarding-complete",
  lastPath: "taplink-last-path",
} as const;

// ============================================
// ERROR MESSAGES
// ============================================
export const ERROR_MESSAGES = {
  required: "This field is required",
  invalidEmail: "Please enter a valid email address",
  passwordTooShort: "Password must be at least 8 characters",
  usernameTaken: "This username is already taken",
  unauthorized: "You must be logged in to perform this action",
  notFound: "The requested resource was not found",
  serverError: "An unexpected error occurred. Please try again.",
  rateLimited: "Too many requests. Please try again later.",
} as const;

// ============================================
// SUCCESS MESSAGES
// ============================================
export const SUCCESS_MESSAGES = {
  accountCreated: "Account created successfully!",
  linkCreated: "Link created successfully!",
  linkUpdated: "Link updated successfully!",
  linkDeleted: "Link deleted successfully!",
  profileUpdated: "Profile updated successfully!",
  settingsSaved: "Settings saved successfully!",
} as const;

// Export individual constants for convenience
export const {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: APP_URL,
} = SITE_CONFIG;
