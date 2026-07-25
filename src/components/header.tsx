import { Logo } from './logo';

const NAV = [
  { label: 'Products', href: '#products' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="Sels AI home">
          <Logo />
        </a>

        <nav className="flex items-center gap-7 md:gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
