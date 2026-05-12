/**
 * TapLink Theme Utilities
 *
 * Functions for managing theme state and providing
 * theme-related helper utilities.
 */

// ============================================
// THEME TYPES
// ============================================
export type ThemeMode = "dark" | "light";

export interface ThemeConfig {
  mode: ThemeMode;
  isDark: boolean;
  isLight: boolean;
}

// ============================================
// THEME CONSTANTS
// ============================================
export const THEME_STORAGE_KEY = "taplink-theme";
export const DEFAULT_THEME: ThemeMode = "dark";

// ============================================
// THEME DETECTION
// ============================================

/**
 * Get the current theme mode from localStorage or system preference
 */
export function getTheme(): ThemeMode {
  // Check localStorage first
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  }

  // Check system preference
  if (typeof window !== "undefined" && window.matchMedia) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  }

  // Default to dark mode
  return DEFAULT_THEME;
}

/**
 * Check if the current theme is dark mode
 */
export function isDarkMode(): boolean {
  return getTheme() === "dark";
}

/**
 * Check if the current theme is light mode
 */
export function isLightMode(): boolean {
  return getTheme() === "light";
}

// ============================================
// THEME APPLICATION
// ============================================

/**
 * Apply a theme mode to the document
 * Uses .light class for light mode (dark is default)
 */
export function applyTheme(mode: ThemeMode): void {
  if (typeof document === "undefined") return;

  const html = document.documentElement;

  if (mode === "light") {
    html.classList.add("light");
    html.classList.remove("dark");
  } else {
    html.classList.remove("light");
    html.classList.remove("dark");
  }
}

/**
 * Set and persist the theme mode
 */
export function setTheme(mode: ThemeMode): void {
  // Store in localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }

  // Apply to document
  applyTheme(mode);
}

/**
 * Toggle between dark and light themes
 */
export function toggleTheme(): ThemeMode {
  const current = getTheme();
  const next: ThemeMode = current === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}

// ============================================
// THEME INITIALIZATION
// ============================================

/**
 * Initialize the theme on page load
 * Should be called as early as possible to prevent flash
 */
export function initializeTheme(): void {
  const theme = getTheme();
  applyTheme(theme);
}

// ============================================
// SYSTEM PREFERENCE LISTENER
// ============================================

/**
 * Listen for system theme preference changes
 * Only applies if user hasn't explicitly set a preference
 */
export function watchSystemTheme(
  callback: (mode: ThemeMode) => void,
): () => void {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (event: MediaQueryListEvent) => {
    // Only auto-switch if user hasn't set explicit preference
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (!stored) {
      const newMode: ThemeMode = event.matches ? "dark" : "light";
      callback(newMode);
    }
  };

  // Modern browsers
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }

  // Legacy browsers
  mediaQuery.addListener(handleChange);
  return () => mediaQuery.removeListener(handleChange);
}

// ============================================
// THEME UTILITIES
// ============================================

/**
 * Get the opposite theme mode
 */
export function getOppositeTheme(mode: ThemeMode): ThemeMode {
  return mode === "dark" ? "light" : "dark";
}

/**
 * Get theme configuration object
 */
export function getThemeConfig(): ThemeConfig {
  const mode = getTheme();
  return {
    mode,
    isDark: mode === "dark",
    isLight: mode === "light",
  };
}

// ============================================
// CSS VARIABLE UTILITIES
// ============================================

/**
 * Get a CSS custom property value
 */
export function getCSSVariable(name: string): string {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

/**
 * Set a CSS custom property value
 */
export function setCSSVariable(name: string, value: string): void {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty(name, value);
}

// ============================================
// COLOR UTILITIES
// ============================================

/**
 * Get the current theme's primary color
 */
export function getPrimaryColor(): string {
  return getCSSVariable("--primary");
}

/**
 * Get the current theme's background color
 */
export function getBackgroundColor(): string {
  return getCSSVariable("--background");
}

/**
 * Get the current theme's foreground color
 */
export function getForegroundColor(): string {
  return getCSSVariable("--foreground");
}

// ============================================
// EXPORT DEFAULT THEME MANAGER
// ============================================
export const theme = {
  get: getTheme,
  set: setTheme,
  toggle: toggleTheme,
  init: initializeTheme,
  watch: watchSystemTheme,
  isDark: isDarkMode,
  isLight: isLightMode,
  getOpposite: getOppositeTheme,
  getConfig: getThemeConfig,
};

export default theme;
