import { ArrowUpRight } from 'lucide-react';

import { PRODUCTS } from '@/lib/products';

export function Products() {
  return (
    <section id="products" className="relative border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[14px] font-semibold tracking-[0.2em] text-ink-3 uppercase">
            The portfolio
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.02em] text-ink md:text-6xl">
            Products, not demos.
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-ink-2">
            Every app is built and operated in-house — different audiences, one
            bar for quality.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_40px_80px_-40px_rgba(20,18,16,0.45)]"
            >
              {/* Brand-color header panel. */}
              <div
                className="relative h-40 overflow-hidden md:h-48"
                style={{
                  background: `radial-gradient(120% 140% at 20% 0%, ${product.accent} 0%, color-mix(in srgb, ${product.accent} 55%, #16140f) 100%)`,
                }}
              >
                <div className="absolute inset-0 opacity-25 [background:repeating-linear-gradient(115deg,transparent,transparent_18px,rgba(255,255,255,0.12)_18px,rgba(255,255,255,0.12)_19px)]" />
                <div className="absolute inset-0 flex items-end justify-between p-7">
                  <span className="font-display text-[2.75rem] leading-none font-extrabold tracking-tight text-white md:text-6xl">
                    {product.name}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/30">
                    <ArrowUpRight className="h-6 w-6 text-white transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <span className="absolute top-6 left-7 text-[13px] font-semibold tracking-[0.16em] text-white/80 uppercase">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-8 md:p-9">
                <p
                  className="text-xl font-bold tracking-tight"
                  style={{ color: product.accent }}
                >
                  {product.tagline}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-2">
                  {product.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-2 pt-6">
                  {product.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-[14px] font-medium text-ink-2"
                    >
                      {platform}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1.5 text-[14px] font-semibold text-ink-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent-2" />
                    Live
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* More-to-come tile. */}
          <div className="flex min-h-55 flex-col items-center justify-center rounded-2xl border border-dashed border-line-2 bg-surface/40 p-10 text-center md:col-span-2">
            <span className="font-display text-2xl font-bold tracking-tight text-ink">
              More apps in the works.
            </span>
            <p className="mt-2 max-w-md text-lg text-ink-3">
              New categories are in the pipeline. Same team, same bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
