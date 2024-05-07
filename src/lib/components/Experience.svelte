<script lang="ts">
	import { jobs } from '$lib/data/jobs';
</script>

<div class="opacity-90">
	{#each jobs as job}
		<div class="py-2">
			<div class="flex flex-col gap-1">
				<p class="text-pRed font-bold">{job.company}</p>
				<p class="text-tmux">{job.title}</p>
				<p>{job.duration}</p>
				<p>{job.location}</p>
				<p>{job.description}</p>
			</div>
		</div>
	{/each}
</div>
