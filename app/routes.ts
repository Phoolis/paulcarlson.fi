import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // Dynamic /projects/:slug route
  route("projects/:slug", "routes/projects/$slug.tsx"),
] satisfies RouteConfig;
