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
import knowledgeImg from "@/assets/photos/sector-knowledge.jpg.asset.json";
import tradeImg from "@/assets/photos/sector-trade.jpg.asset.json";
import infraImg from "@/assets/photos/sector-infra.jpg.asset.json";
import supportImg from "@/assets/photos/sector-support.jpg.asset.json";

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
    img: knowledgeImg.url,
  },
  {
    icon: ShoppingBag,
    name: "Global Trade",
    desc: "Cross-border commerce, import/export and distribution channels powered by network advantage.",
    img: tradeImg.url,
  },
  {
    icon: HardHat,
    name: "Infrastructure",
    desc: "Built environment, logistics and physical assets that give the ecosystem its industrial backbone.",
    img: infraImg.url,
  },
  {
    icon: LifeBuoy,
    name: "Core Support",
    desc: "Shared services, finance, compliance and operations enabling every other sector to perform.",
    img: supportImg.url,
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

            <div className="mt-6 space-y-0">
              {[
                { t: "Capital", c: "Investors inject capital into the ecosystem", icon: "💰" },
                { t: "Allocation", c: "International management deploys funds strategically", icon: "🧭" },
                { t: "Operations", c: "National companies execute across 4 countries", icon: "⚙️" },
                { t: "Revenue", c: "Four sectors generate diversified income streams", icon: "📈" },
                { t: "Returns", c: "Dividends + IP royalties compound ecosystem value", icon: "🔄" },
              ].map((step, i, arr) => (
                <div key={step.t} className="relative flex items-stretch gap-5">
                  {/* Vertical timeline */}
                  <div className="flex flex-col items-center">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-accent-cyan/60 bg-accent-cyan/10 font-display text-sm font-bold text-accent-cyan shadow-[0_0_16px_var(--accent-cyan)]">
                      {i + 1}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="equity-line w-px flex-1 bg-gradient-to-b from-accent-cyan/50 to-accent-cyan/10" />
                    )}
                  </div>

                  {/* Content card */}
                  <GlassCard className="mb-3 flex-1 !p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{step.icon}</span>
                      <div>
                        <h3 className="font-display text-base font-semibold">{step.t}</h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">{step.c}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>

            <GlassCard strong className="mt-4 !p-4">
              <p className="text-center text-sm text-muted-foreground">
                <span className="font-semibold text-accent-cyan">↻</span>{" "}
                Returns flow back as dividends and upward as royalties — closing the loop
                and compounding ecosystem value with every cycle.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
