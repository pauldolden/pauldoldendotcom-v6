<script lang="ts">
	import { jobs } from '$lib/data/jobs';
</script>

<div class="overflow-y-scroll pb-10">
	{#each jobs as job}
		<article
			class="mb-10 md:p-5 md:mb-5 cursor-pointer flex flex-col gap-6 bg-surface-100-800-token"
		>
			<a href={job.url} target="_blank">
				<p class="text-2xl font-teko text-primary-500 mb-3">{job.duration}</p>
				<div class="flex flex-col gap-5">
					<header class="flex items-center gap-5">
						<img src={job.image} alt={job.company} class="h-10" />
						<p class="text-xl font-bold">{job.company}</p>
					</header>
					<h2 class="text-xl font-bold">{job.title}</h2>
					<p class="mt-2 text-sm md:text-l">{job.description}</p>
				</div>
			</a>
			<div class="flex gap-2 flex-wrap">
				{#each job.tools as tool}
					<a href={tool.url}
						><span class="chip variant-filled-primary rounded-none">{tool.name}</span></a
					>
				{/each}
			</div>
		</article>
	{/each}
</div>
