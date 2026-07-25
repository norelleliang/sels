export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  name: string;
  statusLabel: string;
  accent: string;
  tagline: string;
  description: string;
  specs: ProductSpec[];
  href: string;
  hrefLabel: string;
  visualGradient: string;
  placeholder: string;
};

/**
 * The apps Sels AI Inc. builds and operates. The showcase renders straight
 * from this list — new products append here and alternate sides by index
 * parity, no layout work.
 */
export const PRODUCTS: Product[] = [
  {
    name: 'Vidso',
    statusLabel: 'Live · Video',
    accent: '#c81e78',
    tagline: 'One prompt. One banger.',
    description:
      "Script, scenes, voice and a finished vertical cut from a single line of text. Built for people who post every day and can't wait on a production day.",
    specs: [
      { label: 'Time to first cut', value: 'Under a minute' },
      { label: 'Made in-house', value: 'Script → voice → edit' },
      { label: 'Platforms', value: 'iOS · Android · Web' },
    ],
    href: 'https://vidso.ai',
    hrefLabel: 'Visit vidso.ai',
    visualGradient: 'linear-gradient(160deg,#fdf0f7,#f5f5f7)',
    placeholder: '[ vidso app screen ]',
  },
  {
    name: 'Charmsy',
    statusLabel: 'Live · Companionship',
    accent: '#2f6f6a',
    tagline: 'Companions who remember you.',
    description:
      'Characters with real memory and personality, tuned for immersion over accuracy. A cast that grows with the person talking to it.',
    specs: [
      { label: 'Memory', value: 'Long-horizon, per character' },
      { label: 'Conversation', value: 'Unmetered' },
      { label: 'Platforms', value: 'iOS · Android · Web' },
    ],
    href: 'https://charmsy.io',
    hrefLabel: 'Visit charmsy.io',
    visualGradient: 'linear-gradient(160deg,#eef7f5,#f5f5f7)',
    placeholder: '[ charmsy app screen ]',
  },
];

export const COMPANY = {
  legalName: 'Sels AI Inc.',
  name: 'Sels AI',
  domain: 'sels.ai',
  email: 'hello@sels.ai',
};
