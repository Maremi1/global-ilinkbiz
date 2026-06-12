// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig as lovableConfig } from "@lovable.dev/vite-tanstack-config";

export default async (env: any) => {
  const configFn = lovableConfig({
    tanstackStart: {
      spa: {
        enabled: true
      }
    }
  });
  const config = await configFn(env);
  
  // Remove the lovable-tagger plugin to hide the "Edit with Lovable" badge
  if (config.plugins) {
    config.plugins = (config.plugins as any[]).flat().filter((p: any) => p && p.name !== "lovable-plugin");
  }

  // Ensure assets and router base resolve correctly in production
  // and emit sourcemaps to help map runtime errors back to source files.
  config.base = config.base ?? '/';
  config.build = {
    ...(config.build || {}),
    sourcemap: true,
  };
  
  return config;
};
