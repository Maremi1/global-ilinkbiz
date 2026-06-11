import { defineConfig } from "@lovable.dev/vite-tanstack-config";
const conf = defineConfig({
  plugins: [
    {
      name: 'remove-lovable-tagger',
      configResolved(config) {
        config.plugins = config.plugins.filter(p => p.name !== 'lovable-plugin');
      }
    }
  ]
});
console.log(conf);
