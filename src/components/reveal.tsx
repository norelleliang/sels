'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger in milliseconds before the transition begins. */
  delay?: number;
  as?: 'div' | 'section' | 'span';
};

/**
 * Fades + lifts its children into view once, when they scroll into the
 * viewport. Apple-style entrance without a motion dependency.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      data-reveal={visible ? 'in' : ''}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
