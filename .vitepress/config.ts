import { defineConfig } from "vitepress";
import { genFeed } from "./genFeed.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VURK",
  description: "Vilniaus universiteto radijo klubo tinklaraštis",
  cleanUrls: true,
  buildEnd: genFeed,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
