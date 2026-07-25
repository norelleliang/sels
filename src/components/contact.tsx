import { COMPANY } from '@/lib/products';

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#f5f5f7',
        padding: '160px 0',
      }}
    >
      <div
        data-orb
        style={{
          position: 'absolute',
          bottom: '-40%',
          left: '50%',
          width: 1000,
          height: 1000,
          marginLeft: -500,
          borderRadius: '50%',
          background:
            'radial-gradient(closest-side,rgba(122,150,255,.18),rgba(122,150,255,0) 70%)',
          animation: 'drift 18s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          maxWidth: 1120,
          margin: '0 auto',
          padding: '0 40px',
          textAlign: 'center',
        }}
      >
        <h2
          data-reveal
          className="text-[48px] leading-[1.02] font-semibold tracking-[-0.045em] md:text-[72px]"
        >
          Build the everyday with us.
        </h2>
        <p
          data-reveal
          className="mx-auto mt-6 max-w-[52ch] text-[20px] leading-[1.6] text-ink-60"
        >
          Investors, partners and press — or engineers who want to ship at this
          speed. One inbox, we read all of it.
        </p>
        <a
          data-reveal
          href={`mailto:${COMPANY.email}`}
          className="mt-10 inline-block rounded-full bg-ink px-8.5 py-4.25 text-[18px] font-medium text-white transition-colors hover:bg-btn-hover"
        >
          {COMPANY.email}
        </a>
      </div>
    </section>
  );
}
