const STATS = [
  { value: '2', label: 'apps live' },
  { value: '3', label: 'platforms — iOS, Android, Web' },
  { value: '2', label: 'categories — video & companions' },
  { value: '1', label: 'team, built in-house' },
];

export function Stats() {
  return (
    <section className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
                {stat.value}
              </span>
              <span className="mt-2 text-[15px] leading-snug font-medium text-ink-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
