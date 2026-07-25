import { CAPABILITIES } from '@/lib/company';

export function Engineering() {
  return (
    <section id="platform" style={{ background: '#f5f5f7', padding: '140px 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 40px' }}>
        <div
          data-reveal
          className="font-mono text-[12.5px] tracking-[0.2em] text-ink-45 uppercase"
        >
          Engineering
        </div>
        <h2
          data-reveal
          className="mt-5 max-w-[18ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] md:text-[56px]"
        >
          A small team of very good engineers.
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-ink-60"
        >
          We hire people who can take a product from research to the app store
          and keep it running. The hard parts — inference, latency, cost,
          reliability — are ours, not a vendor&rsquo;s.
        </p>

        <div className="mt-[72px] grid gap-px overflow-hidden rounded-[20px] border border-hairline bg-hairline grid-cols-2 md:grid-cols-4">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.k}
              data-reveal
              className="bg-bg px-7 py-8"
              style={{ minHeight: 150 }}
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-40 uppercase">
                {cap.k}
              </div>
              <div className="mt-3.5 text-[19px] leading-[1.3] font-medium tracking-[-0.02em]">
                {cap.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
