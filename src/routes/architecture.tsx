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

const equity = [
  { name: "iLink Global Holdings", sub: "Tier 1 — IP Custodian" },
  { name: "iLink International Management", sub: "Tier 2 — Strategic Holding" },
];

const nationals = [
  { c: "Rwanda", role: "HQ & Operating Co." },
  { c: "Ghana", role: "Operating Co." },
  { c: "Ethiopia", role: "Operating Co." },
  { c: "Tanzania", role: "Operating Co." },
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

          {/* EQUITY TREE */}
          <div className="mt-20">
            <div className="reveal max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
                Equity Tree
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Ownership flows from the apex.
              </h2>
            </div>

            <div className="mt-10 flex flex-col items-center gap-6">
              {equity.map((n) => (
                <div key={n.name} className="w-full max-w-md">
                  <GlassCard strong className="text-center">
                    <div className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                      {n.sub}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold">{n.name}</div>
                  </GlassCard>
                  <div
                    className="mx-auto h-8 w-px bg-gradient-to-b from-accent-cyan to-transparent"
                    aria-hidden
                  />
                </div>
              ))}

              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
                {nationals.map((n) => (
                  <GlassCard key={n.c} className="text-center">
                    <div className="font-display text-base font-semibold">{n.c}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {n.role}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
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
