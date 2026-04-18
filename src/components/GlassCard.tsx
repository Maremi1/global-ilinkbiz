import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
  hover?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, strong, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        strong ? "glass-strong" : "glass",
        hover && "glow-hover",
        "rounded-2xl p-6",
        className,
      )}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";
