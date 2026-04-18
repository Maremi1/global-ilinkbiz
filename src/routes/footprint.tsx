import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const AFRICA_TOPO =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";

export const Route = createFileRoute("/footprint")({
  head: () => ({
    meta: [
      { title: "Global Footprint — iLink Global" },
      {
        name: "description",
        content:
          "iLink Global operates across Rwanda (HQ), Ghana, Ethiopia and Tanzania, coordinated from Vision Arcade Executive Suites in Kigali.",
      },
      { property: "og:title", content: "Global Footprint — iLink Global" },
      {
        property: "og:description",
        content: "Operating across Rwanda, Ghana, Ethiopia and Tanzania.",
      },
    ],
  }),
  component: FootprintPage,
});

const nodes = [
  {
    id: "rw",
    name: "Rwanda",
    role: "Headquarters",
    detail: "Vision Arcade Executive Suites, Kigali",
    x: 62,
    y: 58,
    hq: true,
  },
  { id: "gh", name: "Ghana", role: "Operating Co.", detail: "West Africa hub", x: 28, y: 50 },
  { id: "et", name: "Ethiopia", role: "Operating Co.", detail: "Horn of Africa hub", x: 70, y: 42 },
  { id: "tz", name: "Tanzania", role: "Operating Co.", detail: "East Africa hub", x: 64, y: 65 },
];

function FootprintPage() {
  const [active, setActive] = useState<string>("rw");
  const current = nodes.find((n) => n.id === active)!;

  return (
    <PageShell>
      <section className="px-4">
        <div className="mx-auto w-[min(1200px,94%)] py-12 md:py-20">
          <div className="reveal max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Global Footprint
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
              Anchored in Kigali. <br />
              <span className="text-gradient">Operating across Africa.</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Four national operating companies, one coordinated ecosystem.
              Tap a node to explore the role each country plays in the iLink
              Global network.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* MAP */}
            <GlassCard strong className="relative aspect-[4/5] sm:aspect-[5/4]" hover={false}>
              <div className="absolute inset-4 rounded-xl bg-[radial-gradient(circle_at_60%_55%,oklch(0.30_0.06_220/0.45),transparent_60%)]">
                {/* Stylized continent silhouette */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-25">
                  <path
                    d="M50 8 C 30 12 22 26 22 38 C 22 48 30 52 28 62 C 26 72 34 82 44 88 C 54 94 60 92 64 84 C 68 76 76 70 74 60 C 72 50 80 44 78 32 C 76 20 64 6 50 8 Z"
                    fill="none"
                    stroke="url(#g)"
                    strokeWidth="0.6"
                  />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7DD3FC" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Connection lines */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  {nodes
                    .filter((n) => !n.hq)
                    .map((n) => (
                      <line
                        key={n.id}
                        x1={62}
                        y1={58}
                        x2={n.x}
                        y2={n.y}
                        stroke="oklch(0.82 0.13 220 / 0.5)"
                        strokeWidth="0.3"
                        strokeDasharray="0.8 0.8"
                      />
                    ))}
                </svg>

                {/* Nodes */}
                {nodes.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActive(n.id)}
                    aria-label={n.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                    style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  >
                    <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-accent-cyan/40" />
                    <span
                      className={`relative grid h-5 w-5 place-items-center rounded-full ${
                        n.hq
                          ? "bg-gradient-to-br from-accent-cyan to-accent-blue shadow-[0_0_22px_var(--accent-cyan)]"
                          : "bg-accent-cyan shadow-[0_0_14px_var(--accent-cyan)]"
                      } ${active === n.id ? "ring-2 ring-foreground" : ""}`}
                    >
                      {n.hq && <span className="text-[8px] font-bold text-primary-foreground">★</span>}
                    </span>
                    <span className="mt-1 block whitespace-nowrap text-[10px] font-medium text-foreground">
                      {n.name}
                    </span>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* DETAIL PANEL */}
            <div className="flex flex-col gap-4">
              <GlassCard strong>
                <div className="flex items-center gap-2 text-accent-cyan">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-[0.2em]">{current.role}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold">{current.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{current.detail}</p>
                {current.hq && (
                  <div className="mt-4 rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 p-4 text-sm">
                    <div className="font-medium text-foreground">Headquarters</div>
                    <div className="mt-1 text-muted-foreground">
                      Vision Arcade Executive Suites
                      <br />
                      Kigali, Rwanda
                    </div>
                  </div>
                )}
              </GlassCard>

              <div className="grid grid-cols-2 gap-3">
                {nodes.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActive(n.id)}
                    className={`rounded-xl border p-3 text-left transition ${
                      active === n.id
                        ? "border-accent-cyan/60 bg-accent-cyan/10"
                        : "border-white/10 bg-white/5 hover:border-accent-cyan/30"
                    }`}
                  >
                    <div className="text-sm font-semibold">{n.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {n.role}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
