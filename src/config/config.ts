export const SITE_TITLE = "Amal Richwin"
export const SITE_DESCRIPTION =
  "Welcome to my portfolio website. I am a full stack developer.";
export const TWITTER_HANDLE = "AMALRICHWIN";
export const TWITTER_PROFILE = `https://twitter.com/${TWITTER_HANDLE}`;
export const FULL_NAME = "Amal Richwin";
export const NAME = "Richie"
export const GITHUB_HANDLE = "AmalRichwin";
export const GITHUB_PROFILE = `https://github.com/${GITHUB_HANDLE}`;
export const LINKEDIN_HANDLE = "amal-richwin";
export const LINKEDIN_PROFILE = `https://www.linkedin.com/in/${LINKEDIN_HANDLE}`;
export const EMAIL_ADDRESS = "amal_richwin@outlook.com";
export const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`;

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
