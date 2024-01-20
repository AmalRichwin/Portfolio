export const SITE_TITLE = "Amal Richwin | Portfolio"
export const SITE_DESCRIPTION =
  "Welcome to my portfolio website. I am a full stack developer.";
export const FULL_NAME = "Amal Richwin";
export const NAME = "Richie"

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
