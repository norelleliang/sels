import { PORTFOLIO_STATES } from '@/lib/company';
import { PRODUCTS, type Product } from '@/lib/products';

function ProductVisual({ product }: { product: Product }) {
  return (
    <div
      data-reveal
      style={{
        aspectRatio: '4/5',
        borderRadius: 28,
        background: product.visualGradient,
        border: '1px solid rgba(22,22,23,.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="font-mono"
        style={{
          width: 190,
          height: 390,
          borderRadius: 34,
          background:
            'repeating-linear-gradient(45deg,rgba(22,22,23,.05) 0 2px,transparent 2px 11px)',
          border: '1px solid rgba(22,22,23,.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 16,
          fontSize: 11,
          letterSpacing: '.1em',
          color: 'rgba(22,22,23,.4)',
        }}
      >
        {product.placeholder}
      </div>
    </div>
  );
}

function ProductText({ product }: { product: Product }) {
  return (
    <div style={{ padding: '20px 0 120px' }}>
      <div data-reveal className="flex items-center gap-2.5">
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: product.accent,
          }}
        />
        <span className="font-mono text-[12px] tracking-[0.16em] text-ink-45 uppercase">
          {product.statusLabel}
        </span>
      </div>

      <h3 className="mt-5 text-[60px] leading-none font-semibold tracking-[-0.045em]">
        {product.name}
      </h3>
      <p
        data-reveal
        className="mt-3 text-[24px] font-medium tracking-[-0.02em]"
        style={{ color: product.accent }}
      >
        {product.tagline}
      </p>
      <p
        data-reveal
        className="mt-7 max-w-[44ch] text-[19px] leading-[1.6] text-ink-62"
      >
        {product.description}
      </p>

      <div
        data-reveal
        className="mt-11 grid gap-px border-t border-b border-hairline bg-hairline"
      >
        {product.specs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between bg-bg px-0.5 py-[18px] text-[16px]"
          >
            <span className="text-ink-50">{spec.label}</span>
            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>

      <a
        data-reveal
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex items-center gap-2 text-[17px] font-medium transition-opacity hover:opacity-70"
        style={{ color: product.accent }}
      >
        {product.hrefLabel} →
      </a>
    </div>
  );
}

function ProductShowcase({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const visualLeft = index % 2 === 0;
  const visual = (
    <div style={{ position: 'sticky', top: 130 }}>
      <ProductVisual product={product} />
    </div>
  );
  const text = <ProductText product={product} />;

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: index === 0 ? '100px auto 0' : '0 auto',
        padding: '0 40px',
      }}
    >
      <div className="grid items-start gap-20 md:grid-cols-2">
        {visualLeft ? (
          <>
            {visual}
            {text}
          </>
        ) : (
          <>
            {text}
            {visual}
          </>
        )}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" style={{ background: '#fff', padding: '140px 0 0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 40px' }}>
        <div
          data-reveal
          className="font-mono text-[12.5px] tracking-[0.2em] text-ink-45 uppercase"
        >
          Products
        </div>
        <h2
          data-reveal
          className="mt-5 max-w-[18ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] md:text-[56px]"
        >
          A portfolio, not a product.
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-ink-60"
        >
          Mobile apps, web products and software for businesses — built and
          operated under one roof. Here is what has shipped so far.
        </p>
      </div>

      {PRODUCTS.map((product, i) => (
        <ProductShowcase key={product.name} product={product} index={i} />
      ))}

      <div
        style={{ maxWidth: 1120, margin: '0 auto', padding: '0 40px 140px' }}
      >
        <div
          data-reveal
          className="grid gap-px overflow-hidden rounded-[20px] border border-hairline bg-hairline md:grid-cols-3"
        >
          {PORTFOLIO_STATES.map((state) => (
            <div key={state.label} className="bg-bg px-[30px] py-[34px]">
              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-40 uppercase">
                {state.label}
              </div>
              <div className="mt-3.5 text-[20px] font-medium tracking-[-0.02em]">
                {state.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
