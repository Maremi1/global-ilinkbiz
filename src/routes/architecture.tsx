import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Building2, Globe, Network } from "lucide-react";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Holding Architecture — iLink Global" },
      {
        name: "description",
        content:
          "The three-tier iLink Global holding architecture: Global IP custody, International Management and National Operating Companies.",
      },
      { property: "og:title", content: "Holding Architecture — iLink Global" },
      {
        property: "og:description",
        content: "Global IP, International Management, National Operations — explained.",
      },
    ],
  }),
  component: ArchitecturePage,
});

const tiers = [
  {
    icon: Globe,
    label: "Tier 1",
    name: "iLink Global Holdings",
    role: "Custodian of Intellectual Property",
    points: [
      "Owns the brand, methodologies and operating standards",
      "Sets global governance and ethical framework",
      "Licenses IP to international and national tiers",
      "Sovereign apex — non-operational",
    ],
    color: "from-accent-cyan/30 to-accent-blue/30",
  },
  {
    icon: Network,
    label: "Tier 2",
    name: "International Management",
    role: "Strategic Oversight & Capital",
    points: [
      "Investment holding for the national entities",
      "Cross-border governance and risk control",
      "Expansion engine — new market deployment",
      "Capital funnel between investors and operators",
    ],
    color: "from-accent-blue/30 to-accent-cyan/30",
  },
  {
    icon: Building2,
    label: "Tier 3",
    name: "National Operating Companies",
    role: "Local Execution",
    points: [
      "Locally incorporated, locally compliant entities",
      "Deliver products and services on the ground",
      "Generate revenue feeding the value loop",
      "Rwanda · Ghana · Ethiopia · Tanzania",
    ],
    color: "from-accent-cyan/30 to-accent-blue/30",
  },
];

const nationals = [
  { c: "iLink Rwanda Limited", role: "HQ & Operating Co." },
  { c: "iLink Ghana", role: "Operating Co." },
  { c: "iLink Ethiopia", role: "Operating Co." },
  { c: "iLink Tanzania", role: "Operating Co." },
];

function ArchitecturePage() {
  return (
    <PageShell>
      <section className="px-4">
        <div className="mx-auto w-[min(1200px,94%)] py-12 md:py-20">
          <div className="reveal max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              The Holding Architecture
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="text-gradient">Three tiers</span> engineered for clarity, control and scale.
            </h1>
            <p className="mt-5 text-muted-foreground">
              A clean separation between intellectual property, international
              capital and national execution — making the ecosystem auditable,
              investable and infinitely expandable.
            </p>
          </div>

          {/* TIER CARDS */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <GlassCard key={t.name} className="flex flex-col">
                <div
                  className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${t.color} text-accent-cyan ring-1 ring-accent-cyan/30`}
                >
                  <t.icon size={22} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                  {t.label}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">{t.name}</h3>
                <div className="text-sm text-muted-foreground">{t.role}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_8px_var(--accent-cyan)]" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          {/* EQUITY TREE — 100% chain of custody */}
          <div className="mt-20">
            <div className="reveal max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
                Equity Tree
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">100% Chain of Custody.</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ownership flows transparently from the apex down through every
                national operating entity.
              </p>
            </div>

            <GlassCard
              strong
              hover={false}
              className="mt-8 overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.85 0.02 220 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.02 220 / 0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              <div className="flex flex-col items-center py-6 sm:py-10">
                {/* Tier 1 — Apex */}
                <div className="w-full max-w-sm">
                  <div className="rounded-xl border-2 border-accent-cyan/60 bg-gradient-to-br from-accent-blue/40 to-accent-cyan/20 p-5 text-center shadow-[0_0_30px_oklch(0.65_0.18_230/0.35)]">
                    <div className="font-display text-xl font-bold tracking-tight">
                      iLink <span className="text-accent-cyan">Global</span>
                    </div>
                    <div className="mt-2 border-t border-accent-cyan/30 pt-2 text-xs uppercase tracking-wider">
                      Ultimate IP & Holding Authority
                    </div>
                  </div>
                </div>

                {/* Connector + label */}
                <div className="relative flex h-16 items-center justify-center">
                  <div className="equity-line h-full w-0.5 bg-gradient-to-b from-accent-cyan via-accent-cyan/70 to-accent-cyan shadow-[0_0_8px_var(--accent-cyan)]" />
                  <span className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-medium text-accent-cyan backdrop-blur">
                    100% Wholly Owned · 10,000 Shares
                  </span>
                </div>

                {/* Tier 2 */}
                <div className="w-full max-w-sm">
                  <div className="rounded-xl border-2 border-accent-cyan/40 bg-gradient-to-br from-accent-blue/30 to-accent-cyan/10 p-5 text-center shadow-[0_0_24px_oklch(0.65_0.18_230/0.25)]">
                    <div className="font-display text-xl font-bold tracking-tight">
                      iLink <span className="text-accent-cyan">International</span>
                    </div>
                    <div className="mt-2 border-t border-accent-cyan/30 pt-2 text-xs uppercase tracking-wider">
                      Investment & Management Arm
                    </div>
                  </div>
                </div>

                {/* Connector + label */}
                <div className="relative flex h-12 items-center justify-center">
                  <div className="h-full w-0.5 bg-gradient-to-b from-accent-cyan to-accent-cyan/40" />
                  <span className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-medium text-accent-cyan backdrop-blur">
                    Fractional / Majority Ownership
                  </span>
                </div>

                {/* Horizontal bus + drop lines */}
                <div className="w-full max-w-4xl px-4">
                  <div className="mx-auto h-0.5 w-[88%] bg-accent-cyan/50" />
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                    {nationals.map((n) => (
                      <div key={n.c} className="flex flex-col items-center">
                        <div className="h-6 w-0.5 bg-accent-cyan/50" />
                        <div className="w-full rounded-lg border border-accent-cyan/40 bg-gradient-to-br from-accent-blue/40 to-accent-blue/10 p-3 text-center shadow-[0_0_16px_oklch(0.65_0.18_230/0.2)]">
                          <div className="font-display text-sm font-semibold leading-tight">
                            {n.c}
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                            {n.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example structure callout */}
                <div className="mt-10 w-full max-w-xl px-4">
                  <div className="rounded-xl border border-accent-cyan/40 bg-accent-cyan/5 p-4 text-sm">
                    <div className="font-semibold text-foreground">
                      Example Structure: iLink Rwanda (10,000 Total Shares)
                    </div>
                    <ul className="mt-2 space-y-1 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                        5,000 shares held directly by iLink International
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                        Remaining held by local strategic partners
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* COMPARISON TABLE */}
          <div className="mt-20">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Functional Comparison
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Each tier, its mandate.
            </h2>

            <GlassCard strong className="mt-6 overflow-x-auto p-0" hover={false}>
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-accent-cyan">
                  <tr>
                    <th className="px-5 py-4">Function</th>
                    <th className="px-5 py-4">Global IP</th>
                    <th className="px-5 py-4">International</th>
                    <th className="px-5 py-4">National</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Brand & IP", "Owns", "Licenses", "Operates under"],
                    ["Strategy", "Sets vision", "Executes", "Localizes"],
                    ["Capital", "—", "Allocates", "Deploys"],
                    ["Operations", "—", "Oversees", "Delivers"],
                    ["Compliance", "Standards", "Cross-border", "Local law"],
                    ["Revenue", "Royalties", "Returns", "Generates"],
                  ].map((row) => (
                    <tr key={row[0]} className="text-muted-foreground hover:text-foreground">
                      <td className="px-5 py-3 font-medium text-foreground">{row[0]}</td>
                      <td className="px-5 py-3">{row[1]}</td>
                      <td className="px-5 py-3">{row[2]}</td>
                      <td className="px-5 py-3">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
