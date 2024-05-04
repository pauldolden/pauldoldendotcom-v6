<script lang="ts">
	import { jobs } from '$lib/data/jobs';
</script>

<div class="opacity-90">
	{#each jobs as job}
		<div class="py-2">
			<div class="flex flex-col gap-1">
				<p class="text-pGreen">{job.title}</p>
				<p class="text-pBlue">{job.company}</p>
				<p>{job.duration}</p>
				<p>{job.location}</p>
			</div>
		</div>
	{/each}
</div>
