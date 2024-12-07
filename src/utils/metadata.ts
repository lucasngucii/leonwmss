import type { Metadata, Viewport } from 'next';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  title: 'Leons - Warehouse Management System',
  description: 'Leons is a warehouse management system',
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
    shortcut: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  generator: 'Next.js',
  applicationName: 'Leon',
  referrer: 'origin-when-cross-origin',
  keywords: ['Leons', 'wms', 'Warehouse', 'storage', 'index', 'system'],
  creator: 'Lucas Alehs',
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Leons - Warehouse Management System',
  description: 'Leons is a warehouse management system',
  applicationName: 'Leons',
  authors: [{ name: 'Lucas Alehs' }],
  generator: 'Next.js',
  keywords: ['Leons', 'wms', 'Warehouse', 'storage', 'index', 'system'],
  referrer: 'origin-when-cross-origin',
  colorScheme: null,
  creator: 'Leons Team',
  publisher: 'Leons Team',
  robots: 'index, follow',
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
    shortcut: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    title: 'Leons - Warehouse Management System',
    siteName: 'Leons',
    description: 'Leons is a warehouse management system',
    images: [
      { url: '/images/hero.png', width: 1200, height: 630, alt: 'Leons' },
    ],
    locale: 'en_US',
    url: defaultUrl,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Leons',
    creator: '@Leons',
    title: 'Leons',
    description: 'A nonprofit health quiz',
    images: [
      { url: '/images/hero.png', width: 1200, height: 630, alt: 'Leons' },
    ],
  },
};

export const sharedViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: false,
  themeColor: '#1098AD',
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
