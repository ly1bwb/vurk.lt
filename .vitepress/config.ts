import { defineConfig } from "vitepress";
import { genFeed } from "./genFeed.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "VURK",
	description: "Vilniaus universiteto radijo klubo tinklaraštis",
	cleanUrls: true,
	srcDir: "./pages",
	buildEnd: genFeed,
});
