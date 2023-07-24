<script setup lang="ts">
import { Sun, Moon } from "lucide-vue-next";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<button @click="toggleDark()" title="Pakeisti temą">
		<Sun v-if="isDark" />
		<Moon v-else />
	</button>
</template>
