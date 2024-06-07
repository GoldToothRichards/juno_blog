// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jacob Crabtree";
export const SITE_DESCRIPTION =
  "Welcome! This is my personal blog where I write about technology, mathematics, and other things that I find interesting.";
export const TWITTER_HANDLE = "@crabtr26";
export const MY_NAME = "Jacob Crabtree";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
