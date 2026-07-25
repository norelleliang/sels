const PRINCIPLES = [
  {
    title: 'Products, not demos',
    body: 'We ship apps that live on real phones in real app stores — measured by people who come back, not by benchmarks.',
  },
  {
    title: 'Own the whole stack',
    body: 'Model routing, generation pipelines, billing, and mobile — built and operated in-house so quality is ours to control.',
  },
  {
    title: 'Every day, not every launch',
    body: 'We build for daily habits. The bar is whether someone opens the app tomorrow, and the day after.',
  },
];

export function Company() {
  return (
    <section id="company" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              The company
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-ink-2">
              Sels AI Inc. is a consumer AI company. We build a portfolio of
              apps under one roof — sharing the infrastructure, taste, and
              engineering that make each one better.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-ink-2">
              Small team, high output, shipping across video and companionship
              today — with more categories on the way.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="bg-surface p-8 md:p-9">
                <h3 className="font-display text-xl font-bold text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-2">
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
