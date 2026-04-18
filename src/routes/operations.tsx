import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import {
  BookOpen,
  ShoppingBag,
  HardHat,
  LifeBuoy,
  Shield,
  TrendingUp,
  Compass,
  Rocket,
  Banknote,
} from "lucide-react";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operational Ecosystem — iLink Global" },
      {
        name: "description",
        content:
          "Four operating sectors, an IP shield and a value creation loop that turns capital into compounding ecosystem returns.",
      },
      { property: "og:title", content: "Operational Ecosystem — iLink Global" },
      {
        property: "og:description",
        content: "Knowledge & Tech, Trade, Infrastructure and Core Support sectors.",
      },
    ],
  }),
  component: OperationsPage,
});

const sectors = [
  {
    icon: BookOpen,
    name: "Knowledge & Technology",
    desc: "Education, research, digital platforms and IP-driven products that anchor the ecosystem in expertise.",
  },
  {
    icon: ShoppingBag,
    name: "Global Trade",
    desc: "Cross-border commerce, import/export and distribution channels powered by network advantage.",
  },
  {
    icon: HardHat,
    name: "Infrastructure",
    desc: "Built environment, logistics and physical assets that give the ecosystem its industrial backbone.",
  },
  {
    icon: LifeBuoy,
    name: "Core Support",
    desc: "Shared services, finance, compliance and operations enabling every other sector to perform.",
  },
];

const meso = [
  { icon: Banknote, name: "Investment Holding", desc: "Capital structuring across the group." },
  { icon: Compass, name: "Strategic Oversight", desc: "Governance and direction-setting." },
  { icon: Rocket, name: "Expansion Engine", desc: "New markets, new ventures." },
  { icon: TrendingUp, name: "Capital Funnel", desc: "From investors to operators and back." },
];

function OperationsPage() {
  return (
    <PageShell>
      <section className="px-4">
        <div className="mx-auto w-[min(1200px,94%)] py-12 md:py-20">
          <div className="reveal max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Operational Ecosystem
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
              Capital in. <span className="text-gradient">Value compounded.</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              The iLink Global operating model spans four sectors, protected by
              an IP shield and orchestrated by an international management
              layer that closes the value loop.
            </p>
          </div>

          {/* IP SHIELD */}
          <div className="mt-12">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Macro Layer
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold">The IP Shield</h2>

            <GlassCard strong className="mt-5">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan/40 to-accent-blue/40 ring-1 ring-accent-cyan/40">
                  <Shield size={32} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Sovereign custody of the iLink IP
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Brand, methodologies, technology stack and operating
                    standards live at the apex — licensed downstream, never
                    exposed to operational risk. This shield is what makes the
                    ecosystem durable, transferable and investable across
                    jurisdictions.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* MESO LAYER */}
          <div className="mt-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Meso Layer
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold">International Management</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {meso.map((m) => (
                <GlassCard key={m.name}>
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/30 to-accent-blue/30 text-accent-cyan ring-1 ring-accent-cyan/30">
                    <m.icon size={18} />
                  </div>
                  <div className="font-display text-base font-semibold">{m.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* SECTORS */}
          <div className="mt-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Micro Layer · National
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold">Four Operating Sectors</h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {sectors.map((s) => (
                <GlassCard key={s.name} className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/30 to-accent-blue/30 text-accent-cyan ring-1 ring-accent-cyan/30">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* VALUE LOOP */}
          <div className="mt-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Revenue Flow
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold">The Value Creation Loop</h2>

            <GlassCard strong className="mt-5">
              <div className="grid items-center gap-6 md:grid-cols-5">
                {[
                  { t: "Capital", c: "from investors" },
                  { t: "Allocation", c: "by Int'l Mgmt" },
                  { t: "Operations", c: "in 4 countries" },
                  { t: "Revenue", c: "in 4 sectors" },
                  { t: "Returns", c: "+ IP royalties" },
                ].map((step, i, arr) => (
                  <div key={step.t} className="flex items-center gap-3 md:flex-col md:gap-2">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/40 to-accent-blue/40 font-display text-sm font-bold text-primary-foreground shadow-[0_0_20px_var(--accent-cyan)]">
                      {i + 1}
                    </div>
                    <div className="md:text-center">
                      <div className="font-display text-sm font-semibold">{step.t}</div>
                      <div className="text-[11px] text-muted-foreground">{step.c}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden h-px w-full bg-gradient-to-r from-accent-cyan/60 to-transparent md:block" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 p-4 text-sm text-muted-foreground">
                Returns flow back to the international layer as dividends and
                upward to the global IP layer as royalties — closing the loop
                and compounding ecosystem value with every cycle.
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
