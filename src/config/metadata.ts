/**
 * TapLink Metadata Configuration
 *
 * Centralized metadata configuration for SEO and social sharing.
 */

import type { Metadata } from "next";

// ============================================
// SITE CONFIGURATION
// ============================================

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://taplink.io";
const siteName = "TapLink";
const siteDescription =
  "Create stunning, customizable link-in-bio pages with TapLink. Share all your content in one beautiful page with analytics and premium themes.";

// ============================================
// DEFAULT METADATA
// ============================================

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Title and Description
  title: {
    default: `${siteName} - Create Beautiful Link-in-Bio Pages`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "link in bio",
    "bio link",
    "link tree",
    "social media links",
    "profile page",
    "link management",
    "TapLink",
    "link sharing",
    "mobile landing page",
  ],

  // Authors
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ============================================
// OPENGRAPH CONFIGURATION
// ============================================

export const openGraph = {
  type: "website",
  locale: "en_US",
  url: siteUrl,
  siteName,
  title: `${siteName} - Create Beautiful Link-in-Bio Pages`,
  description: siteDescription,
  images: [
    {
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: `${siteName} - Create Beautiful Link-in-Bio Pages`,
      type: "image/png",
    },
  ],
};

// ============================================
// TWITTER CONFIGURATION
// ============================================

export const twitter = {
  card: "summary_large_image",
  title: `${siteName} - Create Beautiful Link-in-Bio Pages`,
  description: siteDescription,
  images: [`${siteUrl}/twitter-image.png`],
  creator: "@taplink",
  site: "@taplink",
};

// ============================================
// VIEWPORT CONFIGURATION
// ============================================

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ============================================
// ICONS CONFIGURATION
// ============================================

export const icons = {
  icon: "/favicon.ico",
  shortcut: "/favicon-16x16.png",
  apple: "/apple-touch-icon.png",
};

// ============================================
// MERGED DEFAULT METADATA
// ============================================

export const metadata: Metadata = {
  ...defaultMetadata,
  openGraph,
  twitter,
  viewport,
  icons,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteName,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(options: {
  title: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
}): Metadata {
  const { title, description, image, canonicalPath } = options;

  return {
    title,
    description: description || siteDescription,
    openGraph: {
      ...openGraph,
      title,
      description: description || siteDescription,
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
            type: "image/png",
          },
        ],
      }),
    },
    twitter: {
      ...twitter,
      title,
      description: description || siteDescription,
      ...(image && { images: [image] }),
    },
    ...(canonicalPath && {
      alternates: {
        canonical: `${siteUrl}${canonicalPath}`,
      },
    }),
  };
}

// Export individual items for flexibility
export { siteUrl, siteName, siteDescription };
