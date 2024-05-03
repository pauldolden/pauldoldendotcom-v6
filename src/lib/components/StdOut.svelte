<script lang="ts">
	import { currentStdOut } from '$lib/stores/history';
	import PromptText from './PromptText.svelte';

	const knownCommands = ['clear', 'exit', 'home', 'skills', 'experience'];
</script>

<label for="promptText" class="flex flex-col flex-1 justify-end px-2">
	{#each $currentStdOut.commands as command}
		<div class="py-2">
			<PromptText />
			{#if knownCommands.includes(command)}
				<div class="flex items-center">
					<p class="text-surface-100 text-2xl font-bold pr-1">❯</p>
					<p class="text-white">{command}</p>
				</div>
				{#if command === 'home'}
					<div class="opacity-70">
						Welcome to my personal website! I'm a senior software engineer with a passion for
						building web applications. I'm currently working at <a
							href="https://www.skeletonlabs.com"
							target="_blank"
							rel="noopener noreferrer"
							class="underline">Skeleton Labs</a
						>
						as a full-stack developer. I'm also a mentor at
						<a
							href="https://www.codenation.org"
							target="_blank"
							rel="noopener noreferrer"
							class="underline">Code Nation</a
						>
						and a volunteer at
						<a
							href="https://www.codeyourfuture.io"
							target="_blank"
							rel="noopener noreferrer"
							class="underline">Code Your Future</a
						>. I'm always looking for new opportunities to learn and grow, so feel free to reach out
						if you'd like to chat!
					</div>
				{:else if command === 'skills'}
					<div class="opacity-70">
						I have experience with a variety of technologies, including:
						<ul class="list-disc list-inside">
							<li>HTML, CSS, JavaScript, TypeScript</li>
							<li>React, Svelte, Angular</li>
							<li>Node.js, Express, NestJS</li>
							<li>PostgreSQL, MongoDB</li>
							<li>Git, GitHub, GitLab</li>
							<li>CI/CD, Docker, Kubernetes</li>
							<li>Agile, Scrum, Kanban</li>
						</ul>
					</div>
				{:else if command === 'experience'}
					<div class="opacity-70">
						I have worked at a number of companies, enhancing my skills in various roles ranging
						from software development to technical leadership.
					</div>
				{/if}
			{:else}
				<div class="flex items-center">
					<p class="text-surface-100 text-2xl font-bold pr-1">❯</p>
					<p class="text-white">{command}</p>
				</div>
				<div class="opacity-70">zsh: command not found: {command}</div>
			{/if}
		</div>
	{/each}
	<slot />
</label>
