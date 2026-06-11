import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageShell, G as GlassCard } from "./GlassCard-BgNO7gEJ.js";
import { Globe, Network, Building2, BadgeCheck, BookOpen, Shield, Copyright, Cpu } from "lucide-react";
import { t as tier1Img, a as tier2Img, b as tier3Img } from "./tier3.jpg.asset-CzTfZUeA.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
const tiers = [{
  icon: Globe,
  label: "Tier 1",
  name: "iLink Global Holdings",
  role: "Custodian of Intellectual Property",
  points: ["Owns the brand, methodologies and operating standards", "Sets global governance and ethical framework", "Licenses IP to international and national tiers", "Sovereign apex — non-operational"],
  color: "from-accent-cyan/30 to-accent-blue/30",
  img: tier1Img.url
}, {
  icon: Network,
  label: "Tier 2",
  name: "International Management",
  role: "Strategic Oversight & Capital",
  points: ["Investment holding for the national entities", "Cross-border governance and risk control", "Expansion engine — new market deployment", "Capital funnel between investors and operators"],
  color: "from-accent-blue/30 to-accent-cyan/30",
  img: tier2Img.url
}, {
  icon: Building2,
  label: "Tier 3",
  name: "National Operating Companies",
  role: "Local Execution",
  points: ["Locally incorporated, locally compliant entities", "Deliver products and services on the ground", "Generate revenue feeding the value loop", "Rwanda · Ghana · Ethiopia · Tanzania"],
  color: "from-accent-cyan/30 to-accent-blue/30",
  img: tier3Img.url
}];
const nationals = [{
  c: "iLink Rwanda Limited",
  role: "HQ & Operating Co."
}, {
  c: "iLink Ghana",
  role: "Operating Co."
}, {
  c: "iLink Ethiopia",
  role: "Operating Co."
}, {
  c: "iLink Tanzania",
  role: "Operating Co."
}];
function ArchitecturePage() {
  return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)] py-12 md:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "reveal max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "The Holding Architecture" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Three tiers" }),
        " engineered for clarity, control and scale."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "A clean separation between intellectual property, international capital and national execution — making the ecosystem auditable, investable and infinitely expandable." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: tiers.map((t) => /* @__PURE__ */ jsxs(GlassCard, { className: "reveal flex flex-col overflow-hidden !p-0", children: [
      /* @__PURE__ */ jsx("div", { className: "relative h-72 w-full overflow-hidden shrink-0", children: /* @__PURE__ */ jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: `mb-4 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${t.color} text-accent-cyan ring-1 ring-accent-cyan/30`, children: /* @__PURE__ */ jsx(t.icon, { size: 18 }) }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] text-accent-cyan", children: t.label }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-lg font-semibold leading-tight", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: t.role }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 flex flex-col gap-2.5", children: t.points.map((p, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[13px] text-muted-foreground/90", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-cyan" }),
          /* @__PURE__ */ jsx("span", { className: "leading-snug", children: p })
        ] }, i)) })
      ] })
    ] }, t.name)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "The Macro Layer" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-2 font-display text-3xl font-bold sm:text-4xl", children: [
          "The ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "IP Shield." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Every asset that powers the ecosystem — the brand, the methodologies, the technology — is custodied centrally and licensed outward. One vault, one chain of trust." })
      ] }),
      /* @__PURE__ */ jsxs(GlassCard, { strong: true, hover: false, className: "mt-8 overflow-hidden", style: {
        backgroundImage: "linear-gradient(oklch(0.85 0.02 220 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.02 220 / 0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "relative grid items-center gap-8 py-8 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:py-12", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 md:gap-12", children: [{
            icon: BadgeCheck,
            title: "Trademarks, Brand Names & Logos"
          }, {
            icon: BookOpen,
            title: "Proprietary Methodologies & Curricula"
          }].map((a) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-3 rounded-xl border border-accent-cyan/40 bg-background/40 p-3 backdrop-blur-sm md:ml-4", children: [
            /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan", children: /* @__PURE__ */ jsx(a.icon, { size: 22 }) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-tight", children: a.title }),
            /* @__PURE__ */ jsx("div", { className: "equity-line absolute left-full top-1/2 hidden h-0.5 w-12 -translate-y-1/2 bg-gradient-to-r from-accent-cyan/70 to-accent-cyan/20 md:block", "aria-hidden": true })
          ] }, a.title)) }),
          /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "The IP Shield" }),
            /* @__PURE__ */ jsxs("div", { className: "relative mt-4", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.18_230/0.45),transparent_70%)] blur-2xl" }),
              /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 -m-10 grid place-items-center", "aria-hidden": true, children: [
                /* @__PURE__ */ jsxs("div", { className: "shield-orbit absolute h-[260px] w-[260px] rounded-full border border-dashed border-accent-cyan/40", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-cyan shadow-[0_0_12px_var(--accent-cyan)]" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 -right-1.5 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-cyan/80 shadow-[0_0_10px_var(--accent-cyan)]" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "shield-orbit-slow absolute h-[320px] w-[320px] rounded-full border border-accent-cyan/20", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-cyan/70 shadow-[0_0_10px_var(--accent-cyan)]" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-cyan shadow-[0_0_12px_var(--accent-cyan)]" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative grid h-44 w-44 place-items-center rounded-3xl border-2 border-accent-cyan/60 bg-gradient-to-br from-accent-blue/40 to-accent-cyan/20 shadow-[0_0_60px_oklch(0.65_0.18_230/0.5)]", children: [
                /* @__PURE__ */ jsx(Shield, { size: 64, className: "text-accent-cyan drop-shadow-[0_0_12px_var(--accent-cyan)]", strokeWidth: 1.4 }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 font-display text-sm font-bold tracking-tight", children: [
                  "iLink ",
                  /* @__PURE__ */ jsx("span", { className: "text-accent-cyan", children: "Global" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 md:gap-12", children: [{
            icon: Copyright,
            title: "Copyrights & Patents"
          }, {
            icon: Cpu,
            title: "Software & Artificial Intelligence Systems"
          }].map((a) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-3 rounded-xl border border-accent-cyan/40 bg-background/40 p-3 backdrop-blur-sm md:mr-4", children: [
            /* @__PURE__ */ jsx("div", { className: "equity-line equity-line-delay-2 absolute right-full top-1/2 hidden h-0.5 w-12 -translate-y-1/2 bg-gradient-to-l from-accent-cyan/70 to-accent-cyan/20 md:block", "aria-hidden": true }),
            /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan", children: /* @__PURE__ */ jsx(a.icon, { size: 22 }) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-tight", children: a.title })
          ] }, a.title)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "-mx-6 -mb-6 mt-2 border-t-2 border-accent-cyan/50 bg-gradient-to-r from-accent-blue/40 via-accent-blue/30 to-accent-blue/40 px-6 py-5 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base", children: [
          "iLink Global generates revenue exclusively by",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-accent-cyan", children: "licensing this protected IP" }),
          " ",
          "to national entities in exchange for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-accent-cyan", children: "royalties" }),
          "."
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Equity Tree" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold sm:text-4xl", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "100% Chain of Custody." }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Ownership flows transparently from the apex down through every national operating entity." })
      ] }),
      /* @__PURE__ */ jsx(GlassCard, { strong: true, hover: false, className: "mt-8 overflow-hidden", style: {
        backgroundImage: "linear-gradient(oklch(0.85 0.02 220 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.02 220 / 0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center py-6 sm:py-10", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border-2 border-accent-cyan/60 bg-gradient-to-br from-accent-blue/40 to-accent-cyan/20 p-5 text-center shadow-[0_0_30px_oklch(0.65_0.18_230/0.35)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-display text-xl font-bold tracking-tight", children: [
            "iLink ",
            /* @__PURE__ */ jsx("span", { className: "text-accent-cyan", children: "Global" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 border-t border-accent-cyan/30 pt-2 text-xs uppercase tracking-wider", children: "Ultimate IP & Holding Authority" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "equity-line h-full w-0.5 bg-gradient-to-b from-accent-cyan via-accent-cyan/70 to-accent-cyan shadow-[0_0_8px_var(--accent-cyan)]" }),
          /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-medium text-accent-cyan backdrop-blur", children: "100% Wholly Owned · 10,000 Shares" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border-2 border-accent-cyan/40 bg-gradient-to-br from-accent-blue/30 to-accent-cyan/10 p-5 text-center shadow-[0_0_24px_oklch(0.65_0.18_230/0.25)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-display text-xl font-bold tracking-tight", children: [
            "iLink ",
            /* @__PURE__ */ jsx("span", { className: "text-accent-cyan", children: "International" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 border-t border-accent-cyan/30 pt-2 text-xs uppercase tracking-wider", children: "Investment & Management Arm" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex h-12 items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "equity-line equity-line-delay-1 h-full w-0.5 bg-gradient-to-b from-accent-cyan to-accent-cyan/40" }),
          /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-medium text-accent-cyan backdrop-blur", children: "Fractional / Majority Ownership" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl px-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto h-0.5 w-[88%] bg-accent-cyan/50" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4", children: nationals.map((n, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("div", { className: `equity-line equity-line-delay-${i + 1} h-6 w-0.5 bg-accent-cyan/50` }),
            /* @__PURE__ */ jsxs("div", { className: "w-full rounded-lg border border-accent-cyan/40 bg-gradient-to-br from-accent-blue/40 to-accent-blue/10 p-3 text-center shadow-[0_0_16px_oklch(0.65_0.18_230/0.2)]", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-sm font-semibold leading-tight", children: n.c }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] uppercase tracking-wider text-muted-foreground", children: n.role })
            ] })
          ] }, n.c)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 w-full max-w-xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-accent-cyan/40 bg-accent-cyan/5 p-4 text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: "Example Structure: iLink Rwanda (10,000 Total Shares)" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" }),
              "5,000 shares held directly by iLink International"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" }),
              "Remaining held by local strategic partners"
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Functional Comparison" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold sm:text-4xl", children: "Each tier, its mandate." }),
      /* @__PURE__ */ jsx(GlassCard, { strong: true, className: "mt-6 overflow-x-auto p-0", hover: false, children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[640px] text-left text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "border-b border-border text-xs uppercase tracking-wider text-accent-cyan", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "Function" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "Global IP" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "International" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-4", children: "National" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border", children: [["Brand & IP", "Owns", "Licenses", "Operates under"], ["Strategy", "Sets vision", "Executes", "Localizes"], ["Capital", "—", "Allocates", "Deploys"], ["Operations", "—", "Oversees", "Delivers"], ["Compliance", "Standards", "Cross-border", "Local law"], ["Revenue", "Royalties", "Returns", "Generates"]].map((row) => /* @__PURE__ */ jsxs("tr", { className: "text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-3 font-medium text-foreground", children: row[0] }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-3", children: row[1] }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-3", children: row[2] }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-3", children: row[3] })
        ] }, row[0])) })
      ] }) })
    ] })
  ] }) }) });
}
export {
  ArchitecturePage as component
};
