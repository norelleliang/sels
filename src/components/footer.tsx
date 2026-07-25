import { COMPANY, PRODUCTS } from '@/lib/products';
import { Logo } from './logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              {COMPANY.tagline}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-[14px] font-semibold tracking-wide text-ink-3 uppercase">
                Apps
              </h4>
              <ul className="mt-4 space-y-3">
                {PRODUCTS.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-ink-2 transition-colors hover:text-ink"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold tracking-wide text-ink-3 uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#company"
                    className="text-[16px] text-ink-2 transition-colors hover:text-ink"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[16px] text-ink-2 transition-colors hover:text-ink"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-[15px] text-ink-3 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {year} {COMPANY.legalName}. All rights reserved.
          </span>
          <span>{COMPANY.domain}</span>
        </div>
      </div>
    </footer>
  );
}
