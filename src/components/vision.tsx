import { BELIEFS } from '@/lib/company';

export function Vision() {
  return (
    <section id="vision" style={{ background: '#fff', padding: '150px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 40px' }}>
        <div
          data-reveal
          className="font-mono text-[12.5px] tracking-[0.2em] text-ink-45 uppercase"
        >
          Vision
        </div>
        <p
          data-reveal
          className="mt-9 max-w-[20ch] text-[44px] leading-[1.1] font-semibold tracking-[-0.045em] md:text-[64px]"
        >
          Intelligence gets cheap. Taste doesn&rsquo;t.
        </p>
        <p
          data-reveal
          className="mt-8 max-w-[58ch] text-[20px] leading-[1.6] text-ink-60"
        >
          The winners of this era won&rsquo;t be the models. They&rsquo;ll be
          the products people can&rsquo;t put down. Sels AI exists to build
          those — across consumer and business, in whatever category the
          technology opens next. What we&rsquo;ve shipped so far is the start of
          the argument, not the whole of it.
        </p>

        <div className="mt-24 grid gap-14 md:grid-cols-3">
          {BELIEFS.map((belief) => (
            <div key={belief.n} data-reveal>
              <div className="h-px bg-hairline-16" />
              <div className="mt-[22px] font-mono text-[12px] text-ink-40">
                {belief.n}
              </div>
              <h3 className="mt-3.5 text-[26px] font-semibold tracking-[-0.025em]">
                {belief.t}
              </h3>
              <p className="mt-3.5 text-[17.5px] leading-[1.6] text-ink-60">
                {belief.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
