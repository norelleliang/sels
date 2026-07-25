import { COMPANY, PRODUCTS } from '@/lib/products';
import { LogoMark } from './logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid rgba(22,22,23,.1)' }}>
      <div
        className="text-ink-45"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '44px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 14,
        }}
      >
        <span className="flex items-center gap-2.5">
          <LogoMark variant="footer" />© {year} {COMPANY.legalName}
        </span>

        <div className="flex gap-7">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              {p.name}
            </a>
          ))}
          <a
            href={`mailto:${COMPANY.email}`}
            className="transition-colors hover:text-ink"
          >
            {COMPANY.email}
          </a>
        </div>

        <span>{COMPANY.domain}</span>
      </div>
    </footer>
  );
}
