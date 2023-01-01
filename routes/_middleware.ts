import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 437,
  site: "test-site-fix",
  domains: ["deco-sites-test-site-fix.deno.dev"],
});