import { jsx, jsxs } from "react/jsx-runtime";
import { createRootRoute, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
const appCss = "/assets/styles-DEKiy-Z_.css";
const SITE_URL = "https://global.ilinkbiz.com";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4500738-47b3-428b-b970-bae3f4b851c6/id-preview-e8f49159--f5bebb16-44bf-4574-8ea4-fae0f82590cf.lovable.app-1776848912862.png";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.03]",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "iLink Global — Structuring a Global Ecosystem" },
      {
        name: "description",
        content: "iLink Global Holdings architects a three-tier corporate ecosystem across Africa — knowledge, trade, infrastructure and capital, headquartered in Kigali, Rwanda."
      },
      { name: "author", content: "iLink Global Holdings" },
      { name: "robots", content: "index, follow" },
      /* Open Graph */
      { property: "og:site_name", content: "iLink Global" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "iLink Global — Structuring a Global Ecosystem" },
      {
        property: "og:description",
        content: "A three-tier holding architecture spanning Rwanda, Ghana, Ethiopia and Tanzania across knowledge, trade, infrastructure and capital."
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      /* Twitter / X */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "iLink Global — Structuring a Global Ecosystem" },
      {
        name: "twitter:description",
        content: "A three-tier holding architecture spanning Rwanda, Ghana, Ethiopia and Tanzania across knowledge, trade, infrastructure and capital."
      },
      { name: "twitter:image", content: OG_IMAGE }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var r=document.documentElement;if(t==='dark'){r.classList.add('dark');}r.style.colorScheme=t;}catch(e){}})();`
          }
        }
      ),
      /* @__PURE__ */ jsx("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-SRMEMRKCHH" }),
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SRMEMRKCHH');`
          }
        }
      ),
      /* @__PURE__ */ jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const $$splitComponentImporter$4 = () => import("./operations-Akldy830.js");
const Route$4 = createFileRoute("/operations")({
  head: () => ({
    meta: [{
      title: "Operational Ecosystem — iLink Global"
    }, {
      name: "description",
      content: "Four operating sectors, an IP shield and a value creation loop that turns capital into compounding ecosystem returns."
    }, {
      property: "og:url",
      content: "https://global.ilinkbiz.com/operations"
    }, {
      property: "og:title",
      content: "Operational Ecosystem — iLink Global"
    }, {
      property: "og:description",
      content: "Knowledge & Tech, Trade, Infrastructure and Core Support sectors."
    }, {
      name: "twitter:title",
      content: "Operational Ecosystem — iLink Global"
    }, {
      name: "twitter:description",
      content: "Knowledge & Tech, Trade, Infrastructure and Core Support sectors."
    }],
    links: [{
      rel: "canonical",
      href: "https://global.ilinkbiz.com/operations"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./footprint-D-Vr5E8H.js");
const Route$3 = createFileRoute("/footprint")({
  head: () => ({
    meta: [{
      title: "Global Footprint — iLink Global"
    }, {
      name: "description",
      content: "iLink Global operates across Rwanda (HQ), Ghana, Ethiopia and Tanzania, coordinated from Vision Arcade Executive Suites in Kigali."
    }, {
      property: "og:url",
      content: "https://global.ilinkbiz.com/footprint"
    }, {
      property: "og:title",
      content: "Global Footprint — iLink Global"
    }, {
      property: "og:description",
      content: "Operating across Rwanda, Ghana, Ethiopia and Tanzania."
    }, {
      name: "twitter:title",
      content: "Global Footprint — iLink Global"
    }, {
      name: "twitter:description",
      content: "Operating across Rwanda, Ghana, Ethiopia and Tanzania."
    }],
    links: [{
      rel: "canonical",
      href: "https://global.ilinkbiz.com/footprint"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CWCOWZ4Q.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — iLink Global"
    }, {
      name: "description",
      content: "Get in touch with iLink Global Holdings. Email info@ilinkbiz.com or visit our headquarters at Vision Arcade Executive Suites, Kigali, Rwanda."
    }, {
      property: "og:url",
      content: "https://global.ilinkbiz.com/contact"
    }, {
      property: "og:title",
      content: "Contact — iLink Global"
    }, {
      property: "og:description",
      content: "Reach iLink Global Holdings — info@ilinkbiz.com · Kigali, Rwanda."
    }, {
      name: "twitter:title",
      content: "Contact — iLink Global"
    }, {
      name: "twitter:description",
      content: "Reach iLink Global Holdings — info@ilinkbiz.com · Kigali, Rwanda."
    }],
    links: [{
      rel: "canonical",
      href: "https://global.ilinkbiz.com/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./architecture-BmyyWxvt.js");
const Route$1 = createFileRoute("/architecture")({
  head: () => ({
    meta: [{
      title: "Holding Architecture — iLink Global"
    }, {
      name: "description",
      content: "The three-tier iLink Global holding architecture: Global IP custody, International Management and National Operating Companies."
    }, {
      property: "og:url",
      content: "https://global.ilinkbiz.com/architecture"
    }, {
      property: "og:title",
      content: "Holding Architecture — iLink Global"
    }, {
      property: "og:description",
      content: "Global IP, International Management, National Operations — explained."
    }, {
      name: "twitter:title",
      content: "Holding Architecture — iLink Global"
    }, {
      name: "twitter:description",
      content: "Global IP, International Management, National Operations — explained."
    }],
    links: [{
      rel: "canonical",
      href: "https://global.ilinkbiz.com/architecture"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B76VOdYF.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "iLink Global — Structuring a Global Ecosystem"
    }, {
      name: "description",
      content: "iLink Global Holdings architects a three-tier corporate ecosystem across Africa — knowledge, trade, infrastructure and capital, headquartered in Kigali, Rwanda."
    }, {
      property: "og:url",
      content: "https://global.ilinkbiz.com/"
    }, {
      property: "og:title",
      content: "iLink Global — Structuring a Global Ecosystem"
    }, {
      property: "og:description",
      content: "A three-tier holding architecture across Rwanda, Ghana, Ethiopia and Tanzania."
    }, {
      name: "twitter:title",
      content: "iLink Global — Structuring a Global Ecosystem"
    }, {
      name: "twitter:description",
      content: "A three-tier holding architecture across Rwanda, Ghana, Ethiopia and Tanzania."
    }],
    links: [{
      rel: "canonical",
      href: "https://global.ilinkbiz.com/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const OperationsRoute = Route$4.update({
  id: "/operations",
  path: "/operations",
  getParentRoute: () => Route$5
});
const FootprintRoute = Route$3.update({
  id: "/footprint",
  path: "/footprint",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const ArchitectureRoute = Route$1.update({
  id: "/architecture",
  path: "/architecture",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ArchitectureRoute,
  ContactRoute,
  FootprintRoute,
  OperationsRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
