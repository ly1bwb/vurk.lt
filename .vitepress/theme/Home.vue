<script setup lang="ts">
import Date from "./Date.vue";
import { data as posts } from "./posts.data.js";
import { useData } from "vitepress";

const { frontmatter } = useData();
console.log(posts);
</script>

<template>
	<ul
		class="divide-y divide-gray-200 dark:divide-slate-200/5 list-none p-0 lg:p-0"
	>
		<li class="py-6" v-for="{ title, url, date, excerpt } of posts">
			<article class="xl:grid xl:grid-cols-4 xl:items-baseline">
				<Date :date="date" />
				<div class="xl:col-span-3">
					<h2 class="text-2xl leading-8 font-bold tracking-tight mt-4 lg:mt-4">
						<a
							class="text-slate-900 dark:text-white no-underline"
							:href="url"
							>{{ title }}</a
						>
					</h2>
					<div v-if="excerpt" v-html="excerpt"></div>
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
