<script lang="ts">
	import { jobs } from '$lib/data/jobs';
</script>

<div class="overflow-y-scroll pb-10">
	{#each jobs as job}
		<article
			class="mb-10 md:p-5 md:mb-5 cursor-pointer flex flex-col gap-6 rounded-md hover:bg-surface-100-800-token transition-colors ease-in-out"
		>
			<a href={job.url} target="_blank">
				<p class="text-2xl font-teko text-primary-400">{job.duration}</p>
				<div class="flex flex-col gap-3">
					<header class="flex items-center justify-between">
						<h2 class="text-xl font-bold">{job.title}</h2>
					</header>
					<p class="text-xl mt-2">{job.company}</p>
					<p class="mt-2 text-sm md:text-l">{job.description}</p>
				</div>
			</a>
			<div class="flex gap-2 flex-wrap">
				{#each job.tools as tool}
					<a href={tool.url}><span class="chip variant-filled-primary">{tool.name}</span></a>
				{/each}
			</div>
		</article>
	{/each}
</div>
