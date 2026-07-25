import { COMPANY } from '@/lib/products';
import { Reveal } from './reveal';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg-black text-center"
    >
      <div className="hero-glow opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 35%, #000 80%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 md:py-36">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-ink-inv md:text-7xl">
            Let&rsquo;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-ink-inv-2 md:text-2xl">
            Press, partnerships, or just curious about what we&rsquo;re
            building — reach out.
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-10 inline-flex items-center rounded-full bg-ink-inv px-8 py-4 text-[18px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            {COMPANY.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
