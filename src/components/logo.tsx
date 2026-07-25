/**
 * Sels AI logo mark: a rounded ink square holding an open white ring
 * (rotated, right edge removed) plus a dot at bottom-right. Drawn in CSS
 * per the handoff. `nav` shows the wordmark; `footer` is the mark alone.
 */
export function LogoMark({ variant = 'nav' }: { variant?: 'nav' | 'footer' }) {
  const nav = variant === 'nav';
  const box = nav ? 28 : 22;
  const radius = nav ? 9 : 7;
  const ring = nav ? 13 : 10;
  const ringBorder = nav ? 2 : 1.5;
  const dot = nav ? 5 : 4;
  const inset = nav ? 5 : 4;

  return (
    <span
      style={{
        position: 'relative',
        width: box,
        height: box,
        borderRadius: radius,
        background: '#161617',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: ring,
          height: ring,
          border: `${ringBorder}px solid #fff`,
          borderRadius: '50%',
          borderRightColor: 'transparent',
          transform: 'rotate(-45deg)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          right: inset,
          bottom: inset,
          width: dot,
          height: dot,
          borderRadius: '50%',
          background: '#fff',
        }}
      />
    </span>
  );
}

export function Logo() {
  return (
    <a
      href="#top"
      aria-label="Sels AI home"
      style={{ display: 'flex', alignItems: 'center', gap: 11 }}
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
