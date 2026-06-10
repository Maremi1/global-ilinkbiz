import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.03]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "iLink Global — Structuring a Global Ecosystem" },
      {
        name: "description",
        content:
          "iLink Global Holdings — a three-tier holding architecture spanning Rwanda, Ghana, Ethiopia and Tanzania across knowledge, trade, infrastructure and capital.",
      },
      { name: "author", content: "iLink Global" },
      { property: "og:title", content: "iLink Global — Structuring a Global Ecosystem" },
      {
        property: "og:description",
        content:
          "A three-tier corporate ecosystem operating across Africa from its Kigali headquarters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "iLink Global — Structuring a Global Ecosystem" },
      { name: "description", content: "Globalink is a dynamic website showcasing client profiles with interactive 3D backgrounds and a glassmorphism design." },
      { property: "og:description", content: "Globalink is a dynamic website showcasing client profiles with interactive 3D backgrounds and a glassmorphism design." },
      { name: "twitter:description", content: "Globalink is a dynamic website showcasing client profiles with interactive 3D backgrounds and a glassmorphism design." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4500738-47b3-428b-b970-bae3f4b851c6/id-preview-e8f49159--f5bebb16-44bf-4574-8ea4-fae0f82590cf.lovable.app-1776848912862.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4500738-47b3-428b-b970-bae3f4b851c6/id-preview-e8f49159--f5bebb16-44bf-4574-8ea4-fae0f82590cf.lovable.app-1776848912862.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var r=document.documentElement;if(t==='dark'){r.classList.add('dark');}r.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
