import { Reveal } from './reveal';

const STATS = [
  { value: '2', label: 'apps live' },
  { value: '3', label: 'platforms' },
  { value: '2', label: 'categories' },
  { value: '1', label: 'team, in-house' },
];

export function Stats() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-6xl font-semibold tracking-[-0.03em] text-ink md:text-7xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-[16px] font-medium text-ink-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
