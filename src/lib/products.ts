export type Product = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  platforms: string[];
  accent: string;
  status: 'live' | 'coming-soon';
};

/**
 * The apps Sels AI Inc. builds and operates. Add future apps here — the
 * portfolio grid renders straight from this list.
 */
export const PRODUCTS: Product[] = [
  {
    name: 'Vidso',
    tagline: 'One prompt. One banger.',
    description:
      'AI-generated vertical video. Script, scenes, voice, and a finished cut from a single prompt — built for creators who post every day.',
    href: 'https://vidso.ai',
    platforms: ['iOS', 'Android', 'Web'],
    accent: '#c81e78',
    status: 'live',
  },
  {
    name: 'Charmsy',
    tagline: 'Companions who remember you.',
    description:
      'AI characters with memory and personality, tuned for immersion over accuracy. Unlimited conversation, a cast that grows with you.',
    href: 'https://charmsy.io',
    platforms: ['iOS', 'Android', 'Web'],
    accent: '#2f6f6a',
    status: 'live',
  },
];

export const COMPANY = {
  legalName: 'Sels AI Inc.',
  name: 'Sels AI',
  domain: 'sels.ai',
  email: 'hello@sels.ai',
  tagline: 'We build consumer AI products people use every day.',
};
