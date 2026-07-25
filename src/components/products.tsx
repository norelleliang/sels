import { ArrowUpRight } from 'lucide-react';

import { PRODUCTS } from '@/lib/products';

export function Products() {
  return (
    <section id="products" className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            The portfolio
          </h2>
          <p className="mt-5 text-xl text-ink-2">
            Every product is built and operated in-house. Different audiences,
            one bar for quality.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all hover:border-line-2 hover:shadow-[0_20px_60px_-30px_rgba(20,18,16,0.35)] md:p-10"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: product.accent }}
              />

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink">
                    {product.name}
                  </h3>
                  <p
                    className="mt-1 text-lg font-semibold"
                    style={{ color: product.accent }}
                  >
                    {product.tagline}
                  </p>
                </div>
                <ArrowUpRight className="h-7 w-7 shrink-0 text-ink-3 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>

              <p className="mt-6 text-lg leading-relaxed text-ink-2">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                {product.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-[14px] font-medium text-ink-2"
                  >
                    {platform}
                  </span>
                ))}
                <span className="ml-1 flex items-center gap-1.5 text-[14px] font-medium text-ink-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-2" />
                  Live
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-lg text-ink-3">
          More apps in the works.
        </p>
      </div>
    </section>
  );
}
