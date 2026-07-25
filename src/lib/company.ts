export type PortfolioState = {
  label: string;
  body: string;
};

export type Capability = {
  k: string;
  v: string;
};

export type Belief = {
  n: string;
  t: string;
  d: string;
};

/** Closing 3-up under the product showcases. */
export const PORTFOLIO_STATES: PortfolioState[] = [
  { label: 'Shipped', body: 'Consumer apps on iOS, Android and web' },
  { label: 'In market', body: 'Web software for teams and businesses' },
  { label: 'In build', body: 'New categories, on the same foundation' },
];

/** Engineering capability grid. */
export const CAPABILITIES: Capability[] = [
  { k: 'Inference', v: 'Model serving tuned for latency and cost' },
  { k: 'Generation', v: 'Multi-stage media pipelines' },
  { k: 'Retrieval', v: 'Memory and context systems' },
  { k: 'Evaluation', v: 'Quality measured before users feel it' },
  { k: 'Applications', v: 'Native mobile and modern web' },
  { k: 'Reliability', v: 'Scaled to traffic spikes, not demos' },
  { k: 'Data', v: 'Observability across every request' },
  { k: 'Security', v: 'Payments and user data handled properly' },
];

/** Vision beliefs. */
export const BELIEFS: Belief[] = [
  {
    n: '01',
    t: 'Products, not demos',
    d: 'Real software in real markets, judged by who comes back tomorrow — not by a leaderboard.',
  },
  {
    n: '02',
    t: 'Own the hard parts',
    d: 'Research through release, built in-house, so quality is ours to control.',
  },
  {
    n: '03',
    t: 'Ship, then learn',
    d: 'Small team, unreasonable output. The market is the only review board we trust.',
  },
];

/** Pinned statement lines that crossfade on scroll. */
export const STATEMENT_LINES: string[] = [
  'Models are becoming infrastructure.',
  'Capability alone stopped being the product.',
  'So we build what people actually open.',
];
