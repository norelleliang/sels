import { Logo } from './logo';

const NAV = [
  { label: 'Products', href: '#products' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="Sels AI home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Our apps
        </a>
      </div>
    </header>
  );
}
