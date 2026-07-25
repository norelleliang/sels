import { PRODUCTS } from '@/lib/products';

export function Hero() {
  return (
    <section id="top" className="bg-grain relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-2" />
          <span className="text-[15px] font-medium tracking-wide text-ink-2 uppercase">
            Sels AI Inc.
          </span>
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-ink md:text-7xl">
          Consumer AI products
          <br />
          people use{' '}
          <span className="text-accent">every day.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-2 md:text-2xl">
          We design, build, and operate a portfolio of AI apps — from
          one-prompt video to companions who remember you. One company,
          shipping real products to real users.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-4">
          <a
            href="#products"
            className="rounded-full bg-accent px-7 py-3.5 text-[17px] font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            Explore our apps
          </a>
          <a
            href="#company"
            className="rounded-full border border-line-2 px-7 py-3.5 text-[17px] font-semibold text-ink transition-colors hover:bg-surface-2"
          >
            About the company
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[16px] text-ink-3">
          <span className="font-medium text-ink-2">Shipping now:</span>
          {PRODUCTS.map((p) => (
            <span key={p.name} className="font-display font-semibold text-ink">
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
