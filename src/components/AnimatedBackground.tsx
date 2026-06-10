/**
 * Static aurora background — adapts to light/dark theme via CSS classes.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.985_0.008_230),oklch(0.97_0.012_230))] dark:bg-[linear-gradient(to_bottom,oklch(0.18_0.03_252),oklch(0.14_0.035_255))]"
      />

      {/* Aurora blob 1 — cyan, top-left */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full opacity-30 blur-[120px] aurora-drift-a bg-[radial-gradient(circle,oklch(0.78_0.10_215_/_0.25),transparent_65%)] dark:bg-[radial-gradient(circle,oklch(0.55_0.16_215_/_0.40),transparent_65%)] dark:opacity-50"
      />

      {/* Aurora blob 2 — blue, bottom-right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-25 blur-[140px] aurora-drift-b bg-[radial-gradient(circle,oklch(0.65_0.12_255_/_0.20),transparent_65%)] dark:bg-[radial-gradient(circle,oklch(0.50_0.18_260_/_0.45),transparent_65%)] dark:opacity-45"
      />

      {/* Aurora blob 3 — soft highlight, center */}
      <div
        className="absolute top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full opacity-20 blur-[100px] aurora-drift-c bg-[radial-gradient(circle,oklch(0.99_0.005_230_/_0.35),transparent_70%)] dark:bg-[radial-gradient(circle,oklch(0.70_0.10_220_/_0.20),transparent_70%)]"
      />
    </div>
  );
}
