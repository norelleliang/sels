import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const TITLE = 'Sels AI — Consumer AI products people use every day';
const DESCRIPTION =
  'Sels AI Inc. is the company behind Vidso and Charmsy. We design, build, and operate consumer AI apps across video and companionship.';

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
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
