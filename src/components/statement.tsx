import { STATEMENT_LINES } from '@/lib/company';

const LINE_STYLE: React.CSSProperties = {
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 64,
  lineHeight: 1.1,
  letterSpacing: '-0.04em',
  fontWeight: 600,
  transition:
    'opacity 600ms cubic-bezier(.4,0,.2,1), transform 600ms cubic-bezier(.4,0,.2,1)',
};

export function Statement() {
  return (
    <section
      data-pin
      style={{ position: 'relative', height: '320vh', background: '#f5f5f7' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 40px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{ position: 'relative', maxWidth: '22ch', textAlign: 'center' }}
        >
          {STATEMENT_LINES.map((line, i) => {
            const isLast = i === STATEMENT_LINES.length - 1;
            return (
              <p
                key={line}
                data-line
                style={{
                  ...LINE_STYLE,
                  position: isLast ? 'relative' : 'absolute',
                  inset: isLast ? undefined : 0,
                }}
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
