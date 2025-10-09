import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false, // Disable server side rendering
  async prerender() {
    return ["/"]; // Pre-render selected pages
  },
} satisfies Config;
