import { defineConfig } from "vitepress";
import { genFeed } from "./genFeed.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "VURK",
	lang: "lt-LT",
	description: "Vilniaus universiteto radijo klubo tinklaraštis",
	cleanUrls: true,
	buildEnd: genFeed,
	head: [
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
		],
		[
			"link",
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
		],
		[
			"link",
			{
				rel: "mask-icon",
				href: "/safari-pinned-tab.svg",
				color: "#5bbad5",
			},
		],
		[
			"meta",
			{
				name: "msapplication-TileColor",
				content: "#da532c",
			},
		],
		[
			"meta",
			{
				name: "theme-color",
				content: "#ffffff",
			},
		],
		// OG tags
		[
			"meta",
			{
				property: "og:type",
				content: "website",
			},
		],
		[
			"meta",
			{
				property: "og:title",
				content: "Vilniaus universiteto radijo klubas",
			},
		],
		[
			"meta",
			{
				property: "og:description",
				content: "Vilniaus universiteto radijo klubo tinklaraštis",
			},
		],
		[
			"meta",
			{
				property: "og:image",
				content: "https://vurk.lt/og.png",
			},
		],
		[
			"meta",
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
		],
		[
			"meta",
			{
				property: "twitter:domain",
				content: "vurk.lt",
			},
		],
		[
			"meta",
			{
				property: "twitter:url",
				content: "https://vurk.lt",
			},
		],
		[
			"meta",
			{
				name: "twitter:title",
				content: "Vilniaus universiteto radijo klubas",
			},
		],
		[
			"meta",
			{
				name: "twitter:description",
				content: "Vilniaus universiteto radijo klubo tinklaraštis",
			},
		],
		[
			"meta",
			{
				name: "twitter:image",
				content: "https://vurk.lt/og.png",
			},
		],
	],
});
