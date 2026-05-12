import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// ============================================
// FONT CONFIGURATION
// ============================================

// Geist Sans for headings (Geist is the new name for Geist Sans)
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Inter for body text and UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Geist Mono for code
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ============================================
// METADATA CONFIGURATION
// ============================================

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://taplink.io",
  ),

  // Title and Description
  title: {
    default: "TapLink - Create Beautiful Link-in-Bio Pages",
    template: "%s | TapLink",
  },
  description:
    "Create stunning, customizable link-in-bio pages with TapLink. Share all your content in one beautiful page with analytics and premium themes.",
  keywords: [
    "link in bio",
    "bio link",
    "link tree",
    "social media links",
    "profile page",
    "link management",
    "TapLink",
  ],

  // Author and Publisher
  authors: [{ name: "TapLink", url: "https://taplink.io" }],
  creator: "TapLink",
  publisher: "TapLink",

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

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taplink.io",
    siteName: "TapLink",
    title: "TapLink - Create Beautiful Link-in-Bio Pages",
    description:
      "Create stunning, customizable link-in-bio pages with TapLink. Share all your content in one beautiful page with analytics and premium themes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TapLink - Create Beautiful Link-in-Bio Pages",
        type: "image/png",
      },
    ],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "TapLink - Create Beautiful Link-in-Bio Pages",
    description:
      "Create stunning, customizable link-in-bio pages with TapLink.",
    images: ["/twitter-image.png"],
    creator: "@taplink",
    site: "@taplink",
  },

  // Verification
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },

  // Manifest
  manifest: "/manifest.json",

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TapLink",
  },

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
// ROOT LAYOUT
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-sans bg-background text-foreground">
        {/* Theme initialization script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('taplink-theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
