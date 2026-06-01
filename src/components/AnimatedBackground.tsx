/**
 * Static aurora background.
 * Soft, slow-drifting gradient blobs — non-distracting, on-brand.
 * No canvas, no rAF; pure CSS for best performance and legibility.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.985 0.008 230), oklch(0.97 0.012 230))",
        }}
      />

      {/* Aurora blob 1 — cyan, top-left */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full opacity-60 blur-3xl aurora-drift-a"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.14 215 / 0.55), transparent 65%)",
        }}
      />

      {/* Aurora blob 2 — blue, bottom-right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-55 blur-3xl aurora-drift-b"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 255 / 0.5), transparent 65%)",
        }}
      />

      {/* Aurora blob 3 — soft white highlight, center */}
      <div
        className="absolute top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full opacity-40 blur-3xl aurora-drift-c"
        style={{
          background:
            "radial-gradient(circle, oklch(0.99 0.005 230 / 0.7), transparent 70%)",
        }}
      />
    </div>
  );
}
