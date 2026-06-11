import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageShell, G as GlassCard } from "./GlassCard-BgNO7gEJ.js";
import { Shield, Banknote, Compass, Rocket, TrendingUp, BookOpen, ShoppingBag, HardHat, LifeBuoy } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
const url$7 = "/__l5e/assets-v1/0c895be0-5868-488e-96ee-a3c574a44300/sector-knowledge.jpg";
const knowledgeImg = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/c2efa9de-9c56-4ec6-a07f-80f00217e3d1/sector-trade.jpg";
const tradeImg = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/abc2f737-a245-450e-a670-a21c118fea0e/sector-infra.jpg";
const infraImg = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/4a25e332-fa40-4b92-84bc-a69d8cc727ed/sector-support.jpg";
const supportImg = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/678d1906-e312-4130-b036-224065b4f4bf/ops-ipshield.jpg";
const ipShieldImg = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/5a6daaa8-fc1b-4e5d-aaa4-e6f6176155cb/ops-meso.jpg";
const mesoImg = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/608306f2-3d9d-4c9d-a1bd-3ce727e65223/ops-valueloop.jpg";
const valueLoopImg = {
  url: url$1
};
const url = "/__l5e/assets-v1/eb417fae-2242-41b9-a314-f97a882baabc/ops-team.jpg";
const teamImg = {
  url
};
const sectors = [{
  icon: BookOpen,
  name: "Knowledge & Technology",
  desc: "Education, research, digital platforms and IP-driven products that anchor the ecosystem in expertise.",
  img: knowledgeImg.url
}, {
  icon: ShoppingBag,
  name: "Global Trade",
  desc: "Cross-border commerce, import/export and distribution channels powered by network advantage.",
  img: tradeImg.url
}, {
  icon: HardHat,
  name: "Infrastructure",
  desc: "Built environment, logistics and physical assets that give the ecosystem its industrial backbone.",
  img: infraImg.url
}, {
  icon: LifeBuoy,
  name: "Core Support",
  desc: "Shared services, finance, compliance and operations enabling every other sector to perform.",
  img: supportImg.url
}];
const meso = [{
  icon: Banknote,
  name: "Investment Holding",
  desc: "Capital structuring across the group."
}, {
  icon: Compass,
  name: "Strategic Oversight",
  desc: "Governance and direction-setting."
}, {
  icon: Rocket,
  name: "Expansion Engine",
  desc: "New markets, new ventures."
}, {
  icon: TrendingUp,
  name: "Capital Funnel",
  desc: "From investors to operators and back."
}];
function OperationsPage() {
  return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)] py-12 md:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "reveal max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Operational Ecosystem" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl", children: [
        "Capital in. ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Value compounded." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "The iLink Global operating model spans four sectors, protected by an IP shield and orchestrated by an international management layer that closes the value loop." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Macro Layer" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "The IP Shield" }),
      /* @__PURE__ */ jsx(GlassCard, { strong: true, className: "mt-5 overflow-hidden !p-0", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-56 md:h-auto overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: ipShieldImg.url, alt: "iLink IP shield", loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-4 p-6 md:p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan/40 to-accent-blue/40 ring-1 ring-accent-cyan/40", children: /* @__PURE__ */ jsx(Shield, { size: 28, className: "text-accent-cyan" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: "Sovereign custody of the iLink IP" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Brand, methodologies, technology stack and operating standards live at the apex — licensed downstream, never exposed to operational risk. This shield is what makes the ecosystem durable, transferable and investable across jurisdictions." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Meso Layer" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "International Management" }),
      /* @__PURE__ */ jsxs(GlassCard, { className: "mt-5 overflow-hidden !p-0", children: [
        /* @__PURE__ */ jsx("div", { className: "h-64 overflow-hidden md:h-80", children: /* @__PURE__ */ jsx("img", { src: mesoImg.url, alt: "International management team reviewing strategy", loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { className: "max-w-xl text-sm text-muted-foreground", children: "A continental leadership team allocating capital, setting standards and orchestrating expansion across four jurisdictions." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: meso.map((m) => /* @__PURE__ */ jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/30 to-accent-blue/30 text-accent-cyan ring-1 ring-accent-cyan/30", children: /* @__PURE__ */ jsx(m.icon, { size: 18 }) }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-base font-semibold", children: m.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: m.desc })
      ] }, m.name)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Micro Layer · National" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "Four Operating Sectors" }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-5 md:grid-cols-2", children: sectors.map((s) => /* @__PURE__ */ jsxs(GlassCard, { className: "overflow-hidden !p-0", children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-44 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: s.img, alt: s.name, loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/30 to-accent-blue/30 text-accent-cyan ring-1 ring-accent-cyan/30", children: /* @__PURE__ */ jsx(s.icon, { size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: s.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.desc })
          ] })
        ] })
      ] }, s.name)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Revenue Flow" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl font-bold", children: "The Value Creation Loop" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(GlassCard, { className: "overflow-hidden !p-0", children: /* @__PURE__ */ jsx("img", { src: valueLoopImg.url, alt: "Capital flow loop visualization", loading: "lazy", className: "h-full max-h-72 w-full object-cover" }) }),
        /* @__PURE__ */ jsx(GlassCard, { className: "overflow-hidden !p-0", children: /* @__PURE__ */ jsx("img", { src: teamImg.url, alt: "African operating team in action", loading: "lazy", className: "h-full max-h-72 w-full object-cover" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-0", children: [{
        t: "Capital",
        c: "Investors inject capital into the ecosystem",
        icon: "💰"
      }, {
        t: "Allocation",
        c: "International management deploys funds strategically",
        icon: "🧭"
      }, {
        t: "Operations",
        c: "National companies execute across 4 countries",
        icon: "⚙️"
      }, {
        t: "Revenue",
        c: "Four sectors generate diversified income streams",
        icon: "📈"
      }, {
        t: "Returns",
        c: "Dividends + IP royalties compound ecosystem value",
        icon: "🔄"
      }].map((step, i, arr) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-stretch gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-accent-cyan/60 bg-accent-cyan/10 font-display text-sm font-bold text-accent-cyan shadow-[0_0_16px_var(--accent-cyan)]", children: i + 1 }),
          i < arr.length - 1 && /* @__PURE__ */ jsx("div", { className: "equity-line w-px flex-1 bg-gradient-to-b from-accent-cyan/50 to-accent-cyan/10" })
        ] }),
        /* @__PURE__ */ jsx(GlassCard, { className: "mb-3 flex-1 !p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl", children: step.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-semibold", children: step.t }),
            /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm text-muted-foreground", children: step.c })
          ] })
        ] }) })
      ] }, step.t)) }),
      /* @__PURE__ */ jsx(GlassCard, { strong: true, className: "mt-4 !p-4", children: /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-accent-cyan", children: "↻" }),
        " Returns flow back as dividends and upward as royalties — closing the loop and compounding ecosystem value with every cycle."
      ] }) })
    ] })
  ] }) }) });
}
export {
  OperationsPage as component
};
