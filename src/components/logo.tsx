import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-[22px] font-extrabold tracking-tight text-ink',
        className
      )}
    >
      Sels
      <span className="text-accent">AI</span>
    </span>
  );
}
