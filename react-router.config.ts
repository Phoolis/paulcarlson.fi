import type { Config } from "@react-router/dev/config";
import { projects } from "./app/data/projects";

let slugs = projects.map((projects) => projects.slug);

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // dynamic routes cannot be auto-prerendered unless you explicitly tell React Router which concrete paths to generate.
  prerender: ["/", ...slugs.map((s) => `/projects/${s}`)],
} satisfies Config;
