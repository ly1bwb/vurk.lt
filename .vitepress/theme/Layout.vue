<script setup lang="ts">
import { useData } from "vitepress";
import NotFound from "./NotFound.vue";
import Article from "./Article.vue";
import Prose from "./Prose.vue";
import Navigation from "./Navigation.vue";
import MobileNavigation from "./MobileNavigation.vue";

const { page, frontmatter } = useData();

const navigationItems = {
	"/": "Naujienos",
	"/apie-kluba": "Apie klubą",
	"/nariai": "Nariai",
	"/istorija": "Istorija",
	"/rekvizitai": "Rekvizitai",
};
</script>

<template>
	<div
		class="sticky top-0 z-10 w-full backdrop-blur py-4 border-b border-slate-900/10 bg-white supports-backdrop-blur:bg-white/95 dark:border-slate-300/10 dark:bg-slate-900/75"
	>
		<nav
			class="flex justify-between items-center max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"
		>
			<a href="/" class="mr-4">
				<img
					class="w-10 h-[78px]"
					src="/logo.svg"
					alt="Vilniaus universiteto radijo klubo logotipas, rombo formos, melsvos spalvos. Viršuje antenos simbolis, per vidurį kubo iliustracija, apačioje įžeminimo simbolis."
				/>
			</a>
			<Navigation class="hidden lg:flex" :navigation-items="navigationItems" />
			<MobileNavigation class="lg:hidden" :navigation-items="navigationItems" />
		</nav>
	</div>
	<main
		class="max-w-3xl xl:max-w-5xl mx-auto my-8 lg:my-16 px-4 sm:px-6 xl:px-0"
	>
		<NotFound v-if="page.isNotFound" />
		<Article v-else-if="frontmatter.layout === 'post'" />
		<Prose v-else-if="frontmatter.layout === 'prose'" />
		<Content v-else />
	</main>
</template>
