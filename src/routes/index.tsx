import { createFileRoute, Link } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import HeroAmbientVideo from "@/components/HeroAmbientVideo";
import { ArrowRight, Globe2, Layers, Play, Shield, Sparkles } from "lucide-react";
import tier1Img from "@/assets/photos/tier1.jpg.asset.json";
import tier2Img from "@/assets/photos/tier2.jpg.asset.json";
import tier3Img from "@/assets/photos/tier3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iLink Global — Structuring a Global Ecosystem" },
      {
        name: "description",
        content:
          "iLink Global Holdings architects a three-tier corporate ecosystem across Africa — knowledge, trade, infrastructure and capital, headquartered in Kigali, Rwanda.",
      },
      { property: "og:url", content: "https://global.ilinkbiz.com/" },
      { property: "og:title", content: "iLink Global — Structuring a Global Ecosystem" },
      {
        property: "og:description",
        content:
          "A three-tier holding architecture across Rwanda, Ghana, Ethiopia and Tanzania.",
      },
      { name: "twitter:title", content: "iLink Global — Structuring a Global Ecosystem" },
      {
        name: "twitter:description",
        content:
          "A three-tier holding architecture across Rwanda, Ghana, Ethiopia and Tanzania.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://global.ilinkbiz.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative px-4">
        <HeroAmbientVideo />
        <div className="mx-auto w-[min(1200px,94%)] py-16 md:py-24">
          <div className="reveal max-w-3xl">

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-gradient sm:text-5xl md:text-6xl lg:text-7xl">
              Structuring a Global Ecosystem
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              iLink Global Holdings unites knowledge, trade, infrastructure and
              capital under a single, transparent three-tier architecture —
              built for scale, sovereignty and chain-of-custody across borders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore Architecture <ArrowRight size={16} />
              </Link>
              <Link
                to="/footprint"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground glow-hover"
              >
                See Global Footprint
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              { v: "4", l: "Operating Countries" },
              { v: "3", l: "Architecture Tiers" },
              { v: "4", l: "Operational Sectors" },
              { v: "100%", l: "Chain of Custody" },
            ].map((s) => (
              <GlassCard key={s.l} className="text-center">
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="relative px-4 py-12 md:py-20">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="reveal max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Three layers. <span className="text-accent-cyan">One ecosystem.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              A modular holding model that separates intellectual ownership,
              international management and on-the-ground national operations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Shield,
                tier: "TIER 1",
                title: "iLink Global Holdings",
                subtitle: "Custodian of Intellectual Property",
                bullets: [
                  "Owns the brand, methodologies and operating standards",
                  "Sets global governance and ethical framework",
                  "Licenses IP to international and national tiers",
                  "Sovereign apex — non-operational",
                ],
                img: tier1Img.url,
              },
              {
                icon: Layers,
                tier: "TIER 2",
                title: "International Management",
                subtitle: "Strategic Oversight & Capital",
                bullets: [
                  "Investment holding for the national entities",
                  "Cross-border governance and risk control",
                  "Expansion engine — new market deployment",
                  "Capital funnel between investors and operators",
                ],
                img: tier2Img.url,
              },
              {
                icon: Globe2,
                tier: "TIER 3",
                title: "National Operating Companies",
                subtitle: "Local Execution",
                bullets: [
                  "Locally incorporated, locally compliant entities",
                  "Deliver products and services on the ground",
                  "Generate revenue feeding the value loop",
                  "Rwanda · Ghana · Ethiopia · Tanzania",
                ],
                img: tier3Img.url,
              },
            ].map((c) => (
              <GlassCard key={c.title} className="reveal flex flex-col overflow-hidden !p-0">
                <div className="relative h-72 w-full overflow-hidden shrink-0">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/30 to-accent-blue/30 text-accent-cyan ring-1 ring-accent-cyan/30">
                    <c.icon size={18} />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-accent-cyan">{c.tier}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.subtitle}</p>
                  
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-muted-foreground/90">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="relative px-4 py-12 md:py-20">
        <div className="mx-auto w-[min(1200px,94%)]">
          <div className="reveal mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                In Motion
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                The ecosystem, <span className="text-gradient">in motion.</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                A glimpse into how knowledge, trade, infrastructure and capital
                flow across our African footprint.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-cyan">
              <Play size={12} /> Ambient Reel
            </div>
          </div>

          <GlassCard className="overflow-hidden !p-0">
            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/41wXVemBxIY?autoplay=1&mute=1&loop=1&playlist=41wXVemBxIY&controls=0&modestbranding=1&rel=0&playsinline=1"
                title="Ambient Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0 object-cover"
              />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FOOTPRINT TEASER */}
      <section className="relative px-4 py-12 md:py-20">
        <div className="mx-auto w-[min(1200px,94%)]">
          <GlassCard strong className="overflow-hidden p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                  Footprint
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                  Anchored in Kigali. <br />
                  <span className="text-gradient">Operating across Africa.</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  From our headquarters at Vision Arcade Executive Suites in
                  Rwanda, we coordinate national operating companies across
                  Ghana, Ethiopia and Tanzania.
                </p>
                <Link
                  to="/footprint"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-foreground"
                >
                  View interactive map <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative h-64 sm:h-80">
                <div className="absolute inset-0 grid grid-cols-2 gap-3">
                  {[
                    { c: "Rwanda", t: "HQ" },
                    { c: "Ghana", t: "Ops" },
                    { c: "Ethiopia", t: "Ops" },
                    { c: "Tanzania", t: "Ops" },
                  ].map((n) => (
                    <div
                      key={n.c}
                      className="glass relative flex items-center justify-between rounded-xl px-4"
                    >
                      <div>
                        <div className="font-display text-base font-semibold">{n.c}</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {n.t}
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute inset-0 animate-ping rounded-full bg-accent-cyan/40" />
                        <span className="relative block h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_18px_var(--accent-cyan)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
