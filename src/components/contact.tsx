import { COMPANY } from '@/lib/products';

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="rounded-2xl border border-line bg-surface p-10 md:p-16">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-5 max-w-xl text-xl text-ink-2">
            Press, partnerships, or just curious about what we&rsquo;re
            building — reach out.
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[17px] font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            {COMPANY.email}
          </a>
        </div>
      </div>
    </section>
  );
}
