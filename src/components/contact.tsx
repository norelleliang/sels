import { ArrowRight } from 'lucide-react';

import { COMPANY } from '@/lib/products';

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-2xl bg-ink p-10 md:p-16">
          {/* Ambient brand glow inside the dark panel. */}
          <div
            className="pointer-events-none absolute -top-1/2 -right-16 h-[130%] w-[55%] opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, var(--color-vidso) 0%, transparent 60%)',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-1/2 -left-16 h-[130%] w-[55%] opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, var(--color-charmsy) 0%, transparent 60%)',
            }}
            aria-hidden
          />

          <div className="relative">
            <h2 className="max-w-2xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.02em] text-bg md:text-6xl">
              Let&rsquo;s talk.
            </h2>
            <p className="mt-5 max-w-xl text-xl text-bg/70">
              Press, partnerships, or just curious about what we&rsquo;re
              building — reach out.
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-bg px-8 py-4 text-[17px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {COMPANY.email}
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
