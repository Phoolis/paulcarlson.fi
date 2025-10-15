import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  base: "/",
  define: {
    __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED),
  }, // Footer env-variable for Last updated field
});
