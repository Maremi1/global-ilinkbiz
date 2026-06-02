import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import rwandaImg from "@/assets/photos/country-rwanda.jpg.asset.json";
import ghanaImg from "@/assets/photos/country-ghana.jpg.asset.json";
import ethiopiaImg from "@/assets/photos/country-ethiopia.jpg.asset.json";
import tanzaniaImg from "@/assets/photos/country-tanzania.jpg.asset.json";

const AFRICA_TOPO =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// ISO 3166-1 numeric IDs for African countries (used to filter world map)
const AFRICAN_ISO_IDS = new Set([
  "012","024","072","086","108","120","132","140","148","174","178","180","204","226","231","232","262","266","270","288","324","384","404","426","430","434","450","454","466","478","480","504","508","516","562","566","624","646","678","686","690","694","706","710","716","728","729","732","748","768","788","800","818","834","854","894",
]);

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

type Node = {
  id: string;
  name: string;
  role: string;
  detail: string;
  coords: [number, number];
  hq?: boolean;
};

const nodes: (Node & { img: string })[] = [
  {
    id: "rw",
    name: "Rwanda",
    role: "Headquarters",
    detail: "Vision Arcade Executive Suites, Kigali",
    coords: [30.0619, -1.9441],
    hq: true,
    img: rwandaImg.url,
  },
  { id: "gh", name: "Ghana", role: "Operating Co.", detail: "West Africa hub", coords: [-0.1869, 5.6037], img: ghanaImg.url },
  { id: "et", name: "Ethiopia", role: "Operating Co.", detail: "Horn of Africa hub", coords: [38.7578, 9.032], img: ethiopiaImg.url },
  { id: "tz", name: "Tanzania", role: "Operating Co.", detail: "East Africa hub", coords: [35.7395, -6.163], img: tanzaniaImg.url },
];

function FootprintPage() {
  const [active, setActive] = useState<string>("rw");
  const current = nodes.find((n) => n.id === active)!;
  const hq = nodes.find((n) => n.hq)!;

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
              <div className="absolute inset-2 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_60%_55%,oklch(0.30_0.06_220/0.35),transparent_65%)]">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 360, center: [20, 0] }}
                  width={800}
                  height={800}
                  style={{ width: "100%", height: "100%" }}
                >
                  <defs>
                    <radialGradient id="hqGrad">
                      <stop offset="0%" stopColor="oklch(0.95 0.10 220)" />
                      <stop offset="100%" stopColor="oklch(0.65 0.18 230)" />
                    </radialGradient>
                  </defs>
                  <Geographies geography={AFRICA_TOPO}>
                    {({ geographies }) =>
                      geographies
                        .filter((geo) => AFRICAN_ISO_IDS.has(String(geo.id)))
                        .map((geo) => {
                          const name: string =
                            geo.properties.name || geo.properties.NAME || "";
                          const node = nodes.find(
                            (n) => n.name.toLowerCase() === name.toLowerCase(),
                          );
                          const isActive = node && active === node.id;
                          return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => node && setActive(node.id)}
                            style={{
                              default: {
                                fill: node
                                  ? isActive
                                    ? "oklch(0.62 0.18 230 / 0.9)"
                                    : "oklch(0.70 0.16 225 / 0.6)"
                                  : "oklch(0.78 0.06 225 / 0.45)",
                                stroke: "oklch(0.45 0.14 230)",
                                strokeWidth: 0.5,
                                outline: "none",
                                cursor: node ? "pointer" : "default",
                                transition: "fill 0.3s",
                              },
                              hover: {
                                fill: node
                                  ? "oklch(0.65 0.18 230 / 0.9)"
                                  : "oklch(0.78 0.06 225 / 0.55)",
                                stroke: "oklch(0.40 0.16 230)",
                                strokeWidth: 0.7,
                                outline: "none",
                              },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>

                  {nodes
                    .filter((n) => !n.hq)
                    .map((n) => (
                      <Line
                        key={`line-${n.id}`}
                        from={hq.coords}
                        to={n.coords}
                        stroke="oklch(0.85 0.16 220 / 0.85)"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                        className="footprint-flow"
                      />
                    ))}

                  {nodes.map((n) => (
                    <Marker
                      key={n.id}
                      coordinates={n.coords}
                      onClick={() => setActive(n.id)}
                      style={{ default: { cursor: "pointer" } }}
                    >
                      <circle
                        r={n.hq ? 7 : 5}
                        fill={n.hq ? "url(#hqGrad)" : "oklch(0.82 0.16 220)"}
                        stroke={active === n.id ? "white" : "oklch(0.95 0.02 220)"}
                        strokeWidth={active === n.id ? 2 : 1}
                        style={{
                          filter: "drop-shadow(0 0 6px oklch(0.82 0.16 220))",
                        }}
                      />
                      <text
                        textAnchor="middle"
                        y={-12}
                        style={{
                          fontFamily: "inherit",
                          fontSize: 11,
                          fontWeight: 600,
                          fill: "oklch(0.98 0 0)",
                          paintOrder: "stroke",
                          stroke: "oklch(0.20 0.02 220 / 0.85)",
                          strokeWidth: 3,
                        }}
                      >
                        {n.name}
                      </text>
                    </Marker>
                  ))}
                </ComposableMap>
                <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-background/40 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                  ★ HQ — Kigali, Rwanda
                </div>
              </div>
            </GlassCard>

            {/* DETAIL PANEL */}
            <div className="flex flex-col gap-4">
              <GlassCard strong className="overflow-hidden !p-0">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={current.img}
                    alt={current.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                </div>
                <div className="p-6">
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
                </div>
              </GlassCard>

              <div className="grid grid-cols-2 gap-3">
                {nodes.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActive(n.id)}
                    className={`group relative overflow-hidden rounded-xl border text-left transition ${
                      active === n.id
                        ? "border-accent-cyan/60 ring-1 ring-accent-cyan/40"
                        : "border-white/10 hover:border-accent-cyan/40"
                    }`}
                  >
                    <img
                      src={n.img}
                      alt={n.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20" />
                    <div className="relative p-3">
                      <div className="text-sm font-semibold">{n.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {n.role}
                      </div>
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
