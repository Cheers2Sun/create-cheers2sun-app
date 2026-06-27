import { Plugin } from "./index";

export const nextjsPlugin: Plugin = {
  name: "nextjs",

  async generate() {
    console.log("Generating Next.js project...");
  }
};
