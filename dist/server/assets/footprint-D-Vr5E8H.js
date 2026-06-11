import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageShell, G as GlassCard } from "./GlassCard-BgNO7gEJ.js";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
const url$3 = "/__l5e/assets-v1/7cd9d7ac-20ab-43f7-adf0-b2c5f691a438/country-rwanda.jpg";
const rwandaImg = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/4f3a67b6-cb7b-454c-9b2c-7b103927225c/country-ghana.jpg";
const ghanaImg = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/51e0384a-a270-477d-9ed8-331d498b39ab/country-ethiopia.jpg";
const ethiopiaImg = {
  url: url$1
};
const url = "/__l5e/assets-v1/0f7c8f59-89d2-4c51-bbb3-c74c767857dc/country-tanzania.jpg";
const tanzaniaImg = {
  url
};
const AFRICA_TOPO = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const AFRICAN_ISO_IDS = /* @__PURE__ */ new Set(["012", "024", "072", "086", "108", "120", "132", "140", "148", "174", "178", "180", "204", "226", "231", "232", "262", "266", "270", "288", "324", "384", "404", "426", "430", "434", "450", "454", "466", "478", "480", "504", "508", "516", "562", "566", "624", "646", "678", "686", "690", "694", "706", "710", "716", "728", "729", "732", "748", "768", "788", "800", "818", "834", "854", "894"]);
const nodes = [{
  id: "rw",
  name: "Rwanda",
  role: "Headquarters",
  detail: "Vision Arcade Executive Suites, Kigali",
  coords: [30.0619, -1.9441],
  hq: true,
  img: rwandaImg.url
}, {
  id: "gh",
  name: "Ghana",
  role: "Operating Co.",
  detail: "West Africa hub",
  coords: [-0.1869, 5.6037],
  img: ghanaImg.url
}, {
  id: "et",
  name: "Ethiopia",
  role: "Operating Co.",
  detail: "Horn of Africa hub",
  coords: [38.7578, 9.032],
  img: ethiopiaImg.url
}, {
  id: "tz",
  name: "Tanzania",
  role: "Operating Co.",
  detail: "East Africa hub",
  coords: [35.7395, -6.163],
  img: tanzaniaImg.url
}];
function FootprintPage() {
  const [active, setActive] = useState("rw");
  const current = nodes.find((n) => n.id === active);
  const hq = nodes.find((n) => n.hq);
  return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)] py-12 md:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "reveal max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Global Footprint" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl", children: [
        "Anchored in Kigali. ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Operating across Africa." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "Four national operating companies, one coordinated ecosystem. Tap a node to explore the role each country plays in the iLink Global network." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]", children: [
      /* @__PURE__ */ jsx(GlassCard, { strong: true, className: "relative aspect-[4/5] sm:aspect-[5/4]", hover: false, children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-2 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_60%_55%,oklch(0.30_0.06_220/0.35),transparent_65%)]", children: [
        /* @__PURE__ */ jsxs(ComposableMap, { projection: "geoMercator", projectionConfig: {
          scale: 360,
          center: [20, 0]
        }, width: 800, height: 800, style: {
          width: "100%",
          height: "100%"
        }, children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: "hqGrad", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.95 0.10 220)" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.65 0.18 230)" })
          ] }) }),
          /* @__PURE__ */ jsx(Geographies, { geography: AFRICA_TOPO, children: ({
            geographies
          }) => geographies.filter((geo) => AFRICAN_ISO_IDS.has(String(geo.id))).map((geo) => {
            const name = geo.properties.name || geo.properties.NAME || "";
            const node = nodes.find((n) => n.name.toLowerCase() === name.toLowerCase());
            const isActive = node && active === node.id;
            return /* @__PURE__ */ jsx(Geography, { geography: geo, onClick: () => node && setActive(node.id), style: {
              default: {
                fill: node ? isActive ? "oklch(0.62 0.18 230 / 0.9)" : "oklch(0.70 0.16 225 / 0.6)" : "oklch(0.78 0.06 225 / 0.45)",
                stroke: "oklch(0.45 0.14 230)",
                strokeWidth: 0.5,
                outline: "none",
                cursor: node ? "pointer" : "default",
                transition: "fill 0.3s"
              },
              hover: {
                fill: node ? "oklch(0.65 0.18 230 / 0.9)" : "oklch(0.78 0.06 225 / 0.55)",
                stroke: "oklch(0.40 0.16 230)",
                strokeWidth: 0.7,
                outline: "none"
              },
              pressed: {
                outline: "none"
              }
            } }, geo.rsmKey);
          }) }),
          nodes.filter((n) => !n.hq).map((n) => /* @__PURE__ */ jsx(Line, { from: hq.coords, to: n.coords, stroke: "oklch(0.85 0.16 220 / 0.85)", strokeWidth: 1.5, strokeLinecap: "round", strokeDasharray: "4 4", className: "footprint-flow" }, `line-${n.id}`)),
          nodes.map((n) => /* @__PURE__ */ jsxs(Marker, { coordinates: n.coords, onClick: () => setActive(n.id), style: {
            default: {
              cursor: "pointer"
            }
          }, children: [
            /* @__PURE__ */ jsx("circle", { r: n.hq ? 7 : 5, fill: n.hq ? "url(#hqGrad)" : "oklch(0.82 0.16 220)", stroke: active === n.id ? "white" : "oklch(0.95 0.02 220)", strokeWidth: active === n.id ? 2 : 1, style: {
              filter: "drop-shadow(0 0 6px oklch(0.82 0.16 220))"
            } }),
            /* @__PURE__ */ jsx("text", { textAnchor: "middle", y: -12, style: {
              fontFamily: "inherit",
              fontSize: 11,
              fontWeight: 600,
              fill: "oklch(0.98 0 0)",
              paintOrder: "stroke",
              stroke: "oklch(0.20 0.02 220 / 0.85)",
              strokeWidth: 3
            }, children: n.name })
          ] }, n.id))
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-3 left-3 rounded-md bg-background/85 px-2 py-1 text-[10px] uppercase tracking-wider text-foreground backdrop-blur", children: "★ HQ — Kigali, Rwanda" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs(GlassCard, { strong: true, className: "overflow-hidden !p-0", children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-44 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: current.img, alt: current.name, loading: "lazy", className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-accent-cyan", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16 }),
              /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em]", children: current.role })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl font-semibold", children: current.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: current.detail }),
            current.hq && /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 p-4 text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-foreground", children: "Headquarters" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-1 text-muted-foreground", children: [
                "Vision Arcade Executive Suites",
                /* @__PURE__ */ jsx("br", {}),
                "Kigali, Rwanda"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: nodes.map((n) => /* @__PURE__ */ jsxs("button", { onClick: () => setActive(n.id), className: `group relative overflow-hidden rounded-xl border text-left transition ${active === n.id ? "border-accent-cyan/60 ring-1 ring-accent-cyan/40" : "border-border hover:border-accent-cyan/40"}`, children: [
          /* @__PURE__ */ jsx("img", { src: n.img, alt: n.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/90 via-background/40 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "relative p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: n.name }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: n.role })
          ] })
        ] }, n.id)) })
      ] })
    ] })
  ] }) }) });
}
export {
  FootprintPage as component
};
