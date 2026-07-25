import { Reveal } from './reveal';

const PRINCIPLES = [
  {
    title: 'Products, not demos',
    body: 'We ship apps that live on real phones in real app stores — measured by people who come back, not by benchmarks.',
  },
  {
    title: 'The whole stack',
    body: 'Model routing, generation pipelines, billing, and mobile — built and operated in-house, so quality is ours to control.',
  },
  {
    title: 'Every day',
    body: 'We build for daily habits. The bar is whether someone opens the app tomorrow, and the day after.',
  },
];

export function Company() {
  return (
    <section id="company" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <Reveal>
          <p className="text-[16px] font-semibold tracking-[0.16em] text-ink-3 uppercase">
            The company
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-ink md:text-7xl">
            One roof. One bar for quality.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-ink-2 md:text-2xl">
            Sels AI Inc. is a consumer AI company. A small team building a
            portfolio of apps under one roof — sharing the infrastructure,
            taste, and engineering that make each one better.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 text-left md:grid-cols-3 md:gap-10">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 100}>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-2">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
