<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import Article from "./Article.vue";
import NotFound from "./NotFound.vue";

const { page, frontmatter } = useData();
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
					class="w-10"
					src="/logo.svg"
					alt="Vilniaus universiteto radijo klubo logotipas, rombo formos, melsvos spalvos. Viršuje antenos simbolis, per vidurį kubo iliustracija, apačioje įžeminimo simbolis."
				/>
			</a>
			<div class="flex gap-4 font-semibold text-slate-700 dark:text-slate-200">
				<a href="/">Naujienos</a>
				<a href="/nariai">Nariai</a>
				<a href="/kontaktai">Kontaktai</a>
			</div>
		</nav>
	</div>
	<main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
		<NotFound v-if="page.isNotFound" />
		<Content v-else />
	</main>
</template>
