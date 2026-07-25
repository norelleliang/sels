export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 40px 80px',
      }}
    >
      {/* Decorative drifting orbs. */}
      <div
        data-orb
        style={{
          position: 'absolute',
          top: '-14%',
          left: '50%',
          width: 1100,
          height: 1100,
          marginLeft: -550,
          borderRadius: '50%',
          background:
            'radial-gradient(closest-side,rgba(122,150,255,.16),rgba(122,150,255,0) 70%)',
          animation: 'drift 16s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        data-orb
        style={{
          position: 'absolute',
          bottom: '-24%',
          right: '-6%',
          width: 820,
          height: 820,
          borderRadius: '50%',
          background:
            'radial-gradient(closest-side,rgba(255,170,140,.14),rgba(255,170,140,0) 70%)',
          animation: 'drift 21s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      <div data-hero style={{ position: 'relative', maxWidth: 1000 }}>
        <div className="font-mono text-[12.5px] tracking-[0.2em] text-ink-45 uppercase">
          Sels AI Inc.
        </div>
        <h1 className="mt-6.5 text-[52px] leading-none font-semibold tracking-[-0.045em] md:text-[96px]">
          Consumer AI,
          <br />
          built to be used
          <br />
          every day.
        </h1>
        <p className="mx-auto mt-8 max-w-[54ch] text-[19px] leading-[1.55] text-ink-60 md:text-[21px]">
          We design, build and operate a portfolio of AI apps end to end —
          models, pipelines, product, distribution. Frontier capability,
          pointed at ordinary life.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <a
            href="#products"
            className="rounded-full bg-ink px-7 py-3.5 text-[16px] font-medium text-white transition-colors hover:bg-btn-hover"
          >
            See the products
          </a>
          <a
            href="#vision"
            className="rounded-full border border-hairline-20 px-7 py-3.5 text-[16px] font-medium transition-colors hover:border-ink"
          >
            Read our vision
          </a>
        </div>
      </div>

      {/* Scroll cue. */}
      <div
        style={{
          position: 'absolute',
          bottom: 34,
          left: '50%',
          marginLeft: -9,
          width: 18,
          height: 28,
          border: '1px solid rgba(22,22,23,.25)',
          borderRadius: 100,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6,
        }}
      >
        <span
          data-cue
          style={{
            width: 2,
            height: 6,
            borderRadius: 2,
            background: 'rgba(22,22,23,.45)',
            animation: 'cueDrop 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
