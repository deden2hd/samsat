import Image from "next/image";

import { cn } from "@/src/lib/utils";

type HeroVisualProps = {
  alt?: string;
  className?: string;
  src?: string;
};

export function HeroVisual({
  alt = "Mockup aplikasi SIGNAL",
  className,
  src,
}: HeroVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-slate-50 shadow-card md:aspect-[16/9]",
        className,
      )}
    >
      {src ? (
        <Image alt={alt} className="object-cover" fill sizes="(min-width: 1024px) 980px, 100vw" src={src} />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-50 px-6 text-center">
          <div className="space-y-3">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-primary-50" />
            <p className="text-sm font-medium text-neutral-900 sm:text-base">Mockup aplikasi SIGNAL</p>
          </div>
        </div>
      )}
    </div>
  );
}
