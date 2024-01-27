import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
// import cloudflare from "@astrojs/cloudflare";
const SERVER_PORT = 3001;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://richwin.in";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}


// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  server: {
    port: SERVER_PORT
  },
  integrations: [tailwind(), sitemap(), react(), markdoc()],
  output: "server",
  adapter: cloudflare()
});