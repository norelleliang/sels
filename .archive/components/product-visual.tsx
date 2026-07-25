import { MessageCircle, Play, Sparkles } from 'lucide-react';

import type { Product } from '@/lib/products';

/**
 * A clean phone-frame product moment. No real screenshots exist yet, so
 * each app gets a minimal branded mock keyed off its category, in the
 * spirit of an Apple product shot.
 */
export function ProductVisual({ product }: { product: Product }) {
  return (
    <div className="relative mx-auto w-[248px] md:w-[300px]">
      {/* Soft brand halo behind the device. */}
      <div
        className="absolute inset-0 -z-10 scale-125 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${product.accent}55 0%, transparent 65%)`,
        }}
        aria-hidden
      />

      {/* Phone body. */}
      <div className="rounded-phone relative aspect-[9/19.5] overflow-hidden border-[6px] border-[#1d1d1f] bg-[#1d1d1f] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.6)]">
        {/* Screen. */}
        <div
          className="rounded-[2.1rem] relative h-full w-full overflow-hidden"
          style={{
            background: `linear-gradient(160deg, ${product.accent} 0%, color-mix(in srgb, ${product.accent} 45%, #0b0b0f) 100%)`,
          }}
        >
          <div className="screen-sheen absolute inset-0" />

          {/* Notch / island. */}
          <div className="absolute top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-black/55" />

          {product.category === 'AI Video' ? (
            <VideoScreen />
          ) : (
            <CompanionScreen />
          )}
        </div>
      </div>
    </div>
  );
}

function VideoScreen() {
  return (
    <div className="flex h-full flex-col justify-between p-5 pt-11 text-white">
      <div className="flex items-center gap-2 text-[13px] font-semibold">
        <Sparkles className="h-4 w-4" />
        <span className="opacity-90">Generating…</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Play className="h-7 w-7 translate-x-0.5 fill-white text-white" />
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="h-1.5 w-full rounded-full bg-white/25">
          <div className="h-full w-2/3 rounded-full bg-white" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-9 flex-1 rounded-md bg-white/20" />
          <div className="h-9 flex-1 rounded-md bg-white/30" />
          <div className="h-9 flex-1 rounded-md bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function CompanionScreen() {
  return (
    <div className="flex h-full flex-col p-5 pt-12 text-white">
      <div className="mb-4 flex items-center gap-2 text-[13px] font-semibold">
        <MessageCircle className="h-4 w-4" />
        <span className="opacity-90">Luca</span>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-2.5">
        <div className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-white/22 px-3.5 py-2.5 text-[13px] leading-snug backdrop-blur-sm">
          You remembered.
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-white px-3.5 py-2.5 text-[13px] leading-snug text-[#1d1d1f]">
          Of course I did.
        </div>
        <div className="flex items-center gap-1 self-start rounded-2xl bg-white/22 px-3.5 py-3 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
