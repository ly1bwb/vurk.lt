<script setup lang="ts">
import { useData } from "vitepress";
import NotFound from "./NotFound.vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import { MenuIcon } from "lucide-vue-next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

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
			<div
				class="hidden lg:flex gap-4 font-semibold text-slate-700 dark:text-slate-200"
			>
				<a href="/">Naujienos</a>
				<a href="/nariai">Nariai</a>
				<a href="/stotis">Stotis</a>
				<a href="/kontaktai">Kontaktai</a>
				<ThemeSwitch />
			</div>
			<Popover class="relative lg:hidden">
				<PopoverButton class="p-2 text-slate-700 dark:text-slate-200">
					<MenuIcon />
				</PopoverButton>

				<transition
					enter-active-class="transition duration-200 ease-out"
					enter-from-class="translate-y-1 opacity-0"
					enter-to-class="translate-y-0 opacity-100"
					leave-active-class="transition duration-150 ease-in"
					leave-from-class="translate-y-0 opacity-100"
					leave-to-class="translate-y-1 opacity-0"
				>
					<PopoverPanel
						class="absolute right-0 mt-3 w-screen max-w-[14rem] pl-8 sm:px-0"
						v-slot="{ close }"
					>
						<div
							class="divide-y divide-slate-100 dark:divide-slate-700 px-4 py-2 rounded-lg shadow-lg border border-slate-900/10 dark:border-slate-300/10 text-base font-semibold bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200"
						>
							<div class="py-2">
								<a
									href="/"
									class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									@click="close"
								>
									Naujienos
								</a>
								<a
									href="/nariai"
									class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									@click="close"
								>
									Nariai
								</a>
								<a
									href="/stotis"
									class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									@click="close"
								>
									Stotis
								</a>
								<a
									href="/kontaktai"
									class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									@click="close"
								>
									Kontaktai
								</a>
							</div>
							<div class="py-2">
								<ThemeSwitch
									class="flex w-full items-center rounded-md p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-700"
									aria-hidden="true"
									><span class="ml-2">Pakeisti temą</span></ThemeSwitch
								>
							</div>
						</div>
					</PopoverPanel>
				</transition>
			</Popover>
		</nav>
	</div>
	<main
		class="mx-auto my-8 lg:my-16 px-4 sm:px-6 xl:px-0 prose prose-slate dark:prose-invert lg:prose-xl prose-img:rounded-xl"
	>
		<NotFound v-if="page.isNotFound" />
		<Content v-else />
	</main>
</template>
