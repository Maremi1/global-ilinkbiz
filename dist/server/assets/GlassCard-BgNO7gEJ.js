import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, forwardRef } from "react";
import { Sun, Moon, X, Menu, Mail, Globe, MapPin } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const url = "/__l5e/assets-v1/afa6b058-27c2-4fc2-9b8f-c62c589a547b/ilink-logo.png";
const ilinkLogo = {
  url
};
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}
function ThemeToggle({ className }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      title: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      className: cn(
        "grid h-10 w-10 place-items-center rounded-lg border border-border bg-background/40 text-foreground transition-colors hover:bg-accent-cyan/10 hover:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan",
        className
      ),
      children: mounted && theme === "dark" ? /* @__PURE__ */ jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsx(Moon, { size: 18 })
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/architecture", label: "Architecture" },
  { to: "/footprint", label: "Footprint" },
  { to: "/operations", label: "Operations" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1200px,94%)]", children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: cn(
              "flex items-center justify-between gap-4 rounded-2xl px-5 py-3",
              "glass-strong"
            ),
            children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: ilinkLogo.url,
                  alt: "iLink Global",
                  className: "h-10 w-auto"
                }
              ) }),
              /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.to,
                  className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan",
                  activeOptions: { exact: l.to === "/" },
                  activeProps: {
                    className: "rounded-lg px-3 py-2 text-sm text-foreground bg-accent-cyan/10 ring-1 ring-accent-cyan/40 shadow-[0_0_20px_-5px_var(--accent-cyan)]"
                  },
                  children: l.label
                }
              ) }, l.to)) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "hidden rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex",
                    children: "Get in Touch"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    "aria-label": "Toggle menu",
                    className: "grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden",
                    onClick: () => setOpen((v) => !v),
                    children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsx("div", { className: "glass-strong mt-2 rounded-2xl p-3 md:hidden", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent-cyan/10 hover:text-foreground",
            activeOptions: { exact: l.to === "/" },
            activeProps: {
              className: "block rounded-lg px-3 py-2.5 text-sm text-foreground bg-accent-cyan/10 ring-1 ring-accent-cyan/40"
            },
            children: l.label
          }
        ) }, l.to)) }) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative z-10 mt-24 px-4 pb-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto w-[min(1200px,94%)]", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("img", { src: ilinkLogo.url, alt: "iLink Global", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-sm text-muted-foreground", children: "Structuring a global ecosystem across knowledge, trade, infrastructure and capital — from Rwanda to the world." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-3 text-sm font-semibold", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/architecture", className: "hover:text-accent-cyan", children: "Architecture" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/footprint", className: "hover:text-accent-cyan", children: "Footprint" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/operations", className: "hover:text-accent-cyan", children: "Operations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-accent-cyan", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-3 text-sm font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "mt-0.5 text-accent-cyan" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@ilinkbiz.com", className: "hover:text-accent-cyan", children: "info@ilinkbiz.com" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { size: 14, className: "mt-0.5 text-accent-cyan" }),
            /* @__PURE__ */ jsx("a", { href: "https://global.ilinkbiz.com", className: "hover:text-accent-cyan", children: "global.ilinkbiz.com" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14, className: "mt-0.5 text-accent-cyan" }),
            /* @__PURE__ */ jsx("span", { children: "Vision Arcade, Kigali, Rwanda" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " iLink Global Holdings. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Headquartered in Kigali · Operating across Africa" })
    ] })
  ] }) }) });
}
function AnimatedBackground() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.985_0.008_230),oklch(0.97_0.012_230))] dark:bg-[linear-gradient(to_bottom,oklch(0.18_0.03_252),oklch(0.14_0.035_255))]"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full opacity-30 blur-[120px] aurora-drift-a bg-[radial-gradient(circle,oklch(0.78_0.10_215_/_0.25),transparent_65%)] dark:bg-[radial-gradient(circle,oklch(0.55_0.16_215_/_0.40),transparent_65%)] dark:opacity-50"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -bottom-1/4 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-25 blur-[140px] aurora-drift-b bg-[radial-gradient(circle,oklch(0.65_0.12_255_/_0.20),transparent_65%)] dark:bg-[radial-gradient(circle,oklch(0.50_0.18_260_/_0.45),transparent_65%)] dark:opacity-45"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full opacity-20 blur-[100px] aurora-drift-c bg-[radial-gradient(circle,oklch(0.99_0.005_230_/_0.35),transparent_70%)] dark:bg-[radial-gradient(circle,oklch(0.70_0.10_220_/_0.20),transparent_70%)]"
          }
        )
      ]
    }
  );
}
function PageShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(AnimatedBackground, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "relative z-10 pt-28", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const GlassCard = forwardRef(
  ({ className, strong, hover = true, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        strong ? "glass-strong" : "glass",
        hover && "glow-hover",
        "rounded-2xl p-6",
        className
      ),
      ...props
    }
  )
);
GlassCard.displayName = "GlassCard";
export {
  GlassCard as G,
  PageShell as P
};
