'use client';

import { useEffect } from 'react';

/**
 * Owns every scroll-driven behaviour on the page through a single
 * rAF-throttled listener plus one IntersectionObserver — no per-component
 * scroll handlers. Operates on data-attributes rendered by the server
 * components, so the page is fully readable without JS (hidden reveal
 * state is only applied here, on mount).
 *
 * Mirrors the design handoff's choreography spec.
 */
export function ScrollChoreographer() {
  useEffect(() => {
    const motion = !window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches;

    // --- Reveals: hide on mount, then fade/lift in on intersect. ---
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    let io: IntersectionObserver | undefined;

    if (motion) {
      reveals.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(22px)';
        el.style.transition =
          'opacity 800ms cubic-bezier(.16,1,.3,1), transform 800ms cubic-bezier(.16,1,.3,1)';
        el.style.transitionDelay = `${(i % 4) * 60}ms`;
      });

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            io?.unobserve(el);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
      );
      reveals.forEach((el) => io?.observe(el));
    }

    // --- Scroll-driven elements. ---
    const lines = Array.from(
      document.querySelectorAll<HTMLElement>('[data-line]')
    );
    const pin = document.querySelector<HTMLElement>('[data-pin]');
    const nav = document.querySelector<HTMLElement>('[data-nav]');
    const bar = document.querySelector<HTMLElement>('[data-progress]');
    const hero = document.querySelector<HTMLElement>('[data-hero]');
    let lastY = 0;
    let raf: number | null = null;

    const tick = () => {
      raf = null;
      const y = window.scrollY || document.documentElement.scrollTop;
      const doc =
        document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.width = `${doc > 0 ? (y / doc) * 100 : 0}%`;

      if (hero && motion) {
        const p = Math.min(1, y / (window.innerHeight * 0.9));
        hero.style.transform = `translateY(${-p * 60}px) scale(${1 - p * 0.06})`;
        hero.style.opacity = String(1 - p * 1.15);
      }

      if (pin && lines.length) {
        const rect = pin.getBoundingClientRect();
        const span = pin.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / (span || 1)));
        const active = Math.min(
          lines.length - 1,
          Math.floor(p * lines.length * 0.999)
        );
        lines.forEach((el, i) => {
          const on = i === active;
          el.style.opacity = on ? '1' : '0';
          el.style.transform = on
            ? 'translateY(0)'
            : i < active
              ? 'translateY(-26px)'
              : 'translateY(26px)';
        });
      }

      if (nav) {
        nav.style.transform =
          y > lastY && y > 400 ? 'translateY(-100%)' : 'translateY(0)';
        lastY = y;
      }
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    tick();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      io?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
