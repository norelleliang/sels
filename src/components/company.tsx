const PRINCIPLES = [
  {
    no: '01',
    title: 'Products, not demos',
    body: 'We ship apps that live on real phones in real app stores — measured by people who come back, not by benchmarks.',
  },
  {
    no: '02',
    title: 'Own the whole stack',
    body: 'Model routing, generation pipelines, billing, and mobile — built and operated in-house so quality is ours to control.',
  },
  {
    no: '03',
    title: 'Every day, not every launch',
    body: 'We build for daily habits. The bar is whether someone opens the app tomorrow, and the day after.',
  },
];

export function Company() {
  return (
    <section id="company" className="relative border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <span className="text-[14px] font-semibold tracking-[0.2em] text-ink-3 uppercase">
              The company
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.02em] text-ink md:text-6xl">
              One roof.
              <br />
              One bar.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-ink-2">
              Sels AI Inc. is a consumer AI company. We build a portfolio of
              apps under one roof — sharing the infrastructure, taste, and
              engineering that make each one better.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-ink-2">
              Small team, high output, shipping across video and companionship
              today — with more categories on the way.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="group rounded-xl border border-line bg-surface p-8 transition-colors hover:border-line-2 md:p-9"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-lg font-bold text-accent tabular-nums">
                    {principle.no}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-4 pl-9 text-lg leading-relaxed text-ink-2">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
