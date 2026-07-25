import { PRODUCTS } from '@/lib/products';
import { ProductVisual } from './product-visual';
import { Reveal } from './reveal';

export function Products() {
  return (
    <div id="products">
      {PRODUCTS.map((product, i) => (
        <section
          key={product.name}
          className={
            i % 2 === 0
              ? 'bg-bg border-t border-line'
              : 'bg-bg-gray'
          }
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-4 text-center md:pt-28">
            <Reveal>
              <p
                className="text-[16px] font-semibold tracking-[0.16em] uppercase"
                style={{ color: product.accent }}
              >
                {product.category}
              </p>
              <h2 className="mt-3 font-display text-5xl font-semibold tracking-[-0.03em] text-ink md:text-8xl">
                {product.name}
              </h2>
              <p className="mt-4 text-2xl font-medium text-ink md:text-4xl">
                {product.tagline}
              </p>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
                {product.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[19px]">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="applink"
                >
                  Visit {product.name}
                </a>
                <span className="text-ink-3">
                  {product.platforms.join(' · ')}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14 md:mt-16">
              <ProductVisual product={product} />
            </Reveal>
          </div>

          <div className="pb-24 md:pb-28" />
        </section>
      ))}
    </div>
  );
}
