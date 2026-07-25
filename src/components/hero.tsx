import { ArrowRight } from 'lucide-react';

import { PRODUCTS } from '@/lib/products';

const MARQUEE = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient product-brand light drifting behind the paper. */}
      <div className="aurora" aria-hidden />
      <div className="aurora-slate" aria-hidden />
      <div className="paper-top absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-40 md:pb-32">
        <div
          className="reveal inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-surface/70 px-4 py-1.5 backdrop-blur-sm"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          <span className="text-[14px] font-semibold tracking-wide text-ink-2 uppercase">
            Sels AI Inc. — a consumer AI company
          </span>
        </div>

        <h1
          className="reveal mt-8 max-w-5xl font-display text-[3.25rem] leading-[0.98] font-extrabold tracking-[-0.03em] text-ink md:text-[6rem]"
          style={{ animationDelay: '90ms' }}
        >
          Consumer AI
          <br />
          people use{' '}
          <span className="text-gradient">every day.</span>
        </h1>

        <p
          className="reveal mt-9 max-w-2xl text-xl leading-relaxed text-ink-2 md:text-2xl"
          style={{ animationDelay: '180ms' }}
        >
          We design, build, and operate a portfolio of AI apps — from
          one-prompt video to companions who remember you. One company,
          shipping real products to real users.
        </p>

        <div
          className="reveal mt-12 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '270ms' }}
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-[17px] font-semibold text-bg shadow-[0_16px_40px_-16px_rgba(22,20,15,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Explore our apps
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#company"
            className="rounded-full border border-line-2 bg-surface/60 px-8 py-4 text-[17px] font-semibold text-ink backdrop-blur-sm transition-colors hover:bg-surface"
          >
            About the company
          </a>
        </div>
      </div>

      {/* App-name ticker along the base of the hero. */}
      <div className="relative z-10 border-y border-line bg-surface/50 py-5 backdrop-blur-sm">
        <div className="flex items-center gap-8 overflow-hidden">
          <div className="marquee items-center gap-8">
            {MARQUEE.map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-2xl font-bold tracking-tight text-ink/85">
                  {p.name}
                </span>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: p.accent }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
