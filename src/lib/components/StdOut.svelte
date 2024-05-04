<script lang="ts">
	import { currentStdOut } from '$lib/stores/history';
	import About from './About.svelte';
	import Experience from './Experience.svelte';
	import Development from './Development.svelte';
	import Home from './Home.svelte';
	import PromptText from './PromptText.svelte';

	const knownCommands = ['home', 'experience', 'about', 'clear', 'exit'];

</script>

<label for="promptText" class="flex flex-col justify-end px-2">
	{#each $currentStdOut.commands as command}
		<div class="py-2">
			<PromptText />
			<div class="flex items-center">
				<p class="text-surface-100 text-2xl font-bold pr-1">❯</p>
				<p class="text-white">{command}</p>
			</div>
			{#if command === 'home'}
				<Home />
			{:else if command === 'experience'}
				<Experience />
			{:else if command === 'about'}
				<About />
			{:else if command === 'development'}
				<Development />
			{:else}
				{#if !knownCommands.includes(command)}
					<div class="opacity-70">zsh: command not found: {command}</div>
				{/if}
			{/if}
		</div>
	{/each}
	<slot />
</label>

