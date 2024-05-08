<script lang="ts">
	import { jobs } from '$lib/data/jobs';
</script>

<div class="opacity-90">
	{#each jobs as job}
		<div class="py-2">
			<div class="flex flex-col gap-1">
				<p class="text-tmux font-bold">({job.duration}) {job.title} -> {job.company}</p>
				<p>{job.description}</p>
			</div>
		</div>
	{/each}
</div>
