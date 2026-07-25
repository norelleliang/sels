export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-bg-black text-center"
    >
      <div className="hero-glow" aria-hidden />
      {/* Vignette to seat the glow into true black at the edges. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 45%, transparent 30%, #000 78%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <p className="text-[15px] font-semibold tracking-[0.24em] text-ink-inv-2 uppercase">
          Sels AI Inc.
        </p>

        <h1 className="mt-6 font-display text-[3.5rem] leading-[0.95] font-semibold tracking-[-0.03em] text-ink-inv md:text-[7rem]">
          Consumer AI,
          <br />
          made to be used.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ink-inv-2 md:text-2xl">
          We design, build, and operate a portfolio of AI apps people open
          every day — from one-prompt video to companions who remember you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[19px]">
          <a href="#products" className="applink">
            Explore our apps
          </a>
          <a href="#company" className="applink">
            About the company
          </a>
        </div>
      </div>

      {/* Scroll cue. */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-ink-inv/25 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ink-inv/60" />
        </div>
      </div>
    </section>
  );
}
