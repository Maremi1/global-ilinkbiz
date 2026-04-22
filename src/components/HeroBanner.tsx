import { cn } from "@/lib/utils";

interface HeroBannerProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroBanner({ src, alt, className }: HeroBannerProps) {
  return (
    <div
      className={cn(
        "relative -mt-[72px] h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[480px]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={1920}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* gradient overlay so text above remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
    </div>
  );
}
