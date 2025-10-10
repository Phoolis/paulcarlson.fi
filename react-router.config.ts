import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false, // Disable server side rendering
  async prerender() {
    return ["/"]; // But pre-render selected pages
  },
} satisfies Config;
