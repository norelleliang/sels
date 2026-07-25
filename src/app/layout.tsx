import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';

import './globals.css';

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex',
  display: 'swap',
});

const TITLE = 'Sels AI — Consumer AI, built to be used every day';
const DESCRIPTION =
  'Sels AI Inc. designs, builds, and operates a portfolio of AI apps end to end — models, pipelines, product, distribution. The company behind Vidso and Charmsy.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s | Sels AI',
  },
  description: DESCRIPTION,
  metadataBase: new URL('https://sels.ai'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://sels.ai',
    siteName: 'Sels AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
