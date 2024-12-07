
import theme from '@/libs/mantine/theme';
import { sharedMetadata, sharedViewport } from '@/utils/metadata';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
// import after core styles:
import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import { montserrat } from '@/libs/fonts';

export const metadata: Metadata = {
  ...sharedMetadata,
};

export const viewport: Viewport = {
  ...sharedViewport,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-US' dir='ltr'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </head>
      <body className={`${montserrat.className}`} suppressHydrationWarning>
        <MantineProvider theme={theme}>
          <Notifications position='top-center' zIndex={100000} limit={3} />
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
