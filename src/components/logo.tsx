import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-[21px] font-semibold tracking-[-0.02em] text-ink',
        className
      )}
    >
      Sels AI
    </span>
  );
}
