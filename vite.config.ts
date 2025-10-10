import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  define: {
    __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED),
  },
});
