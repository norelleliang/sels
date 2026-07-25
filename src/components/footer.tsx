import { COMPANY, PRODUCTS } from '@/lib/products';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-gray">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {p.name}
              </a>
            ))}
            <a
              href="#company"
              className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              Company
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              Contact
            </a>
          </div>
          <span className="text-[15px] text-ink-3">{COMPANY.domain}</span>
        </div>

        <p className="mt-6 text-[13px] leading-relaxed text-ink-3">
          &copy; {year} {COMPANY.legalName}. All rights reserved. Sels AI is the
          company behind {PRODUCTS.map((p) => p.name).join(' and ')}.
        </p>
      </div>
    </footer>
  );
}
