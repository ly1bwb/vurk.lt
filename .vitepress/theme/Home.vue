<script setup lang="ts">
import Date from "./Date.vue";
import { data as posts } from "./posts.data.js";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
	<h1
		class="mb-6 text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl md:text-6xl sm:mb-8 lg:mb-10"
	>
		Vilniaus universiteto<br />radijo klubas
	</h1>
	<ul
		class="divide-y divide-gray-200 dark:divide-slate-200/5 list-none p-0 lg:p-0 border-t border-slate-200/5"
	>
		<li class="py-6" v-for="{ title, url, date, excerpt } of posts">
			<article class="xl:grid xl:grid-cols-4 xl:items-baseline">
				<Date :date="date" />
				<div class="xl:col-span-3">
					<h2 class="text-2xl font-bold tracking-tight my-4">
						<a
							class="text-slate-900 dark:text-white no-underline"
							:href="url"
							>{{ title }}</a
						>
					</h2>
					<div
						v-if="excerpt"
						v-html="excerpt"
						class="prose prose-slate dark:prose-invert prose-img:rounded-xl"
					/>
					<a
						class="no-underline font-semibold mt-4 inline-block"
						aria-label="skaityti daugiau"
						:href="url"
						>Skaityti daugiau →</a
					>
				</div>
			</article>
		</li>
	</ul>
</template>
