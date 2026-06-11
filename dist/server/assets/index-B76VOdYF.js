import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageShell, G as GlassCard } from "./GlassCard-BgNO7gEJ.js";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Shield, Layers, Globe2, Play } from "lucide-react";
import { t as tier1Img, a as tier2Img, b as tier3Img } from "./tier3.jpg.asset-CzTfZUeA.js";
import "clsx";
import "tailwind-merge";
const url = "/__l5e/assets-v1/7767cd40-8562-4e60-8121-35f39b57b5e8/hero-ambient-v3.mp4";
const heroVideoAsset = {
  url
};
const heroPoster = "/assets/hero-ambient-poster-BEQpNzQK.jpg";
function HeroAmbientVideo() {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const [enableVideo, setEnableVideo] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    const conn = navigator.connection;
    const saveData = conn?.saveData === true;
    const slowNet = typeof conn?.effectiveType === "string" && /(^| )(2g|slow-2g)/.test(conn.effectiveType);
    if (prefersReducedMotion || isSmall || saveData || slowNet) return;
    setEnableVideo(true);
  }, []);
  useEffect(() => {
    if (!enableVideo) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;
    const tryPlay = () => video.play().catch(() => {
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tryPlay();
          else video.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(container);
    const onVis = () => document.hidden ? video.pause() : tryPlay();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [enableVideo]);
  useEffect(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let targetX = 0, targetY = 0, curX = 0, curY = 0, scrollScale = 1, raf = 0;
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * 24;
      targetY = ny * 16;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      scrollScale = 1.08 - progress * 0.06;
    };
    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      media.style.transform = `scale(${scrollScale.toFixed(3)}) translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    onScroll();
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    container.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      "aria-hidden": "true",
      className: "pointer-events-none absolute -top-28 left-0 right-0 bottom-0 -z-10 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: mediaRef,
            className: "absolute inset-0 will-change-transform",
            style: { transform: "scale(1.08)" },
            children: enableVideo ? /* @__PURE__ */ jsx(
              "video",
              {
                ref: videoRef,
                src: heroVideoAsset.url,
                poster: heroPoster,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                preload: "metadata",
                disablePictureInPicture: true,
                className: "h-full w-full object-cover opacity-70 dark:opacity-55"
              }
            ) : /* @__PURE__ */ jsx(
              "img",
              {
                src: heroPoster,
                alt: "",
                className: "h-full w-full object-cover opacity-70 dark:opacity-55"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 dark:hidden",
            style: {
              background: "radial-gradient(ellipse at 30% 55%, oklch(0.75 0.14 215 / 0.16), transparent 60%), linear-gradient(to bottom, oklch(0.985 0.008 230) 0%, oklch(0.985 0.008 230 / 0.55) 14%, oklch(0.985 0.008 230 / 0.18) 40%, oklch(0.985 0.008 230 / 0.30) 70%, oklch(0.985 0.008 230 / 0.95) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 hidden dark:block",
            style: {
              background: "radial-gradient(ellipse at 30% 55%, oklch(0.55 0.16 215 / 0.28), transparent 60%), linear-gradient(to bottom, oklch(0.18 0.03 252) 0%, oklch(0.18 0.03 252 / 0.65) 14%, oklch(0.18 0.03 252 / 0.28) 40%, oklch(0.18 0.03 252 / 0.40) 70%, oklch(0.18 0.03 252 / 0.96) 100%)"
            }
          }
        )
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative px-4", children: [
      /* @__PURE__ */ jsx(HeroAmbientVideo, {}),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)] py-16 md:py-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal max-w-3xl", children: [
          /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-4xl font-bold leading-[1.05] text-gradient sm:text-5xl md:text-6xl lg:text-7xl", children: "Structuring a Global Ecosystem" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "iLink Global Holdings unites knowledge, trade, infrastructure and capital under a single, transparent three-tier architecture — built for scale, sovereignty and chain-of-custody across borders." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/architecture", className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background", children: [
              "Explore Architecture ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/footprint", className: "glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground glow-hover", children: "See Global Footprint" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4", children: [{
          v: "4",
          l: "Operating Countries"
        }, {
          v: "3",
          l: "Architecture Tiers"
        }, {
          v: "4",
          l: "Operational Sectors"
        }, {
          v: "100%",
          l: "Chain of Custody"
        }].map((s) => /* @__PURE__ */ jsxs(GlassCard, { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-bold text-gradient sm:text-4xl", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative px-4 py-12 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal max-w-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl font-bold sm:text-4xl", children: [
          "Three layers. ",
          /* @__PURE__ */ jsx("span", { className: "text-accent-cyan", children: "One ecosystem." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "A modular holding model that separates intellectual ownership, international management and on-the-ground national operations." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: [{
        icon: Shield,
        tier: "TIER 1",
        title: "iLink Global Holdings",
        subtitle: "Custodian of Intellectual Property",
        bullets: ["Owns the brand, methodologies and operating standards", "Sets global governance and ethical framework", "Licenses IP to international and national tiers", "Sovereign apex — non-operational"],
        img: tier1Img.url
      }, {
        icon: Layers,
        tier: "TIER 2",
        title: "International Management",
        subtitle: "Strategic Oversight & Capital",
        bullets: ["Investment holding for the national entities", "Cross-border governance and risk control", "Expansion engine — new market deployment", "Capital funnel between investors and operators"],
        img: tier2Img.url
      }, {
        icon: Globe2,
        tier: "TIER 3",
        title: "National Operating Companies",
        subtitle: "Local Execution",
        bullets: ["Locally incorporated, locally compliant entities", "Deliver products and services on the ground", "Generate revenue feeding the value loop", "Rwanda · Ghana · Ethiopia · Tanzania"],
        img: tier3Img.url
      }].map((c) => /* @__PURE__ */ jsxs(GlassCard, { className: "reveal flex flex-col overflow-hidden !p-0", children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-72 w-full overflow-hidden shrink-0", children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/30 to-accent-blue/30 text-accent-cyan ring-1 ring-accent-cyan/30", children: /* @__PURE__ */ jsx(c.icon, { size: 18 }) }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] text-accent-cyan", children: c.tier }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-lg font-semibold leading-tight", children: c.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: c.subtitle }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 flex flex-col gap-2.5", children: c.bullets.map((b, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[13px] text-muted-foreground/90", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-cyan" }),
            /* @__PURE__ */ jsx("span", { className: "leading-snug", children: b })
          ] }, i)) })
        ] })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative px-4 py-12 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent-cyan", children: "In Motion" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-2 font-display text-3xl font-bold sm:text-4xl", children: [
            "The ecosystem, ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "in motion." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "A glimpse into how knowledge, trade, infrastructure and capital flow across our African footprint." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-cyan", children: [
          /* @__PURE__ */ jsx(Play, { size: 12 }),
          " Ambient Reel"
        ] })
      ] }),
      /* @__PURE__ */ jsx(GlassCard, { className: "overflow-hidden !p-0", children: /* @__PURE__ */ jsx("div", { className: "relative aspect-video w-full overflow-hidden", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.youtube.com/embed/41wXVemBxIY?autoplay=1&mute=1&loop=1&playlist=41wXVemBxIY&controls=0&modestbranding=1&rel=0", title: "Ambient Reel", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "h-full w-full border-0 object-cover" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative px-4 py-12 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto w-[min(1200px,94%)]", children: /* @__PURE__ */ jsx(GlassCard, { strong: true, className: "overflow-hidden p-8 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-8 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent-cyan", children: "Footprint" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-2 font-display text-3xl font-bold sm:text-4xl", children: [
          "Anchored in Kigali. ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Operating across Africa." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "From our headquarters at Vision Arcade Executive Suites in Rwanda, we coordinate national operating companies across Ghana, Ethiopia and Tanzania." }),
        /* @__PURE__ */ jsxs(Link, { to: "/footprint", className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-foreground", children: [
          "View interactive map ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative h-64 sm:h-80", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid grid-cols-2 gap-3", children: [{
        c: "Rwanda",
        t: "HQ"
      }, {
        c: "Ghana",
        t: "Ops"
      }, {
        c: "Ethiopia",
        t: "Ops"
      }, {
        c: "Tanzania",
        t: "Ops"
      }].map((n) => /* @__PURE__ */ jsxs("div", { className: "glass relative flex items-center justify-between rounded-xl px-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-base font-semibold", children: n.c }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: n.t })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-accent-cyan/40" }),
          /* @__PURE__ */ jsx("span", { className: "relative block h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_18px_var(--accent-cyan)]" })
        ] })
      ] }, n.c)) }) })
    ] }) }) }) })
  ] });
}
export {
  Index as component
};
