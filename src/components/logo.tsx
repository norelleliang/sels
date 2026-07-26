/**
 * Sels AI logo mark: an app-icon-style rounded ink tile holding a clean
 * geometric "S" monogram (two arcs, round caps). Reads as a portfolio /
 * app company. `nav` shows the wordmark; `footer` is the mark alone.
 */
export function LogoMark({ variant = 'nav' }: { variant?: 'nav' | 'footer' }) {
  const size = variant === 'nav' ? 28 : 22;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <rect width="32" height="32" rx="8" fill="#161617" />
      <path
        d="M21 11a5 5 0 1 0-5 5 5 5 0 1 1-5 5"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <a
      href="#top"
      aria-label="Sels AI home"
      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
    >
      <LogoMark variant="nav" />
      <span
        style={{ fontSize: 16.5, fontWeight: 600, letterSpacing: '-0.025em' }}
      >
        Sels AI
      </span>
    </a>
  );
}
