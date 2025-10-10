import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  async prerender() {
    return ["/"]; // Pre-render selected pages
  },
} satisfies Config;
