import { Logo } from './logo';

const NAV = [
  { label: 'Products', href: '#products' },
  { label: 'Platform', href: '#platform' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <>
      {/* Scroll-progress bar. */}
      <div
        data-progress
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 2,
          width: '0%',
          background: '#161617',
          zIndex: 60,
        }}
      />

      <header
        data-nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          height: 60,
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          background: 'rgba(255,255,255,.72)',
          borderBottom: '1px solid rgba(22,22,23,.08)',
          transition: 'transform 450ms cubic-bezier(.4,0,.2,1)',
        }}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex text-ink-60">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-ink px-3.75 py-1.75 text-[14px] font-medium text-white transition-colors hover:bg-btn-hover"
        >
          Get in touch
        </a>
      </header>
    </>
  );
}
