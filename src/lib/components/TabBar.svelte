<script lang="ts">
	import { tabs, activeTab } from '$lib/stores/tabs';
	import { DateTime } from 'luxon';

	// Create a Luxon DateTime from a JavaScript Date object
	const dateTime = DateTime.now();

	// Format the DateTime object to "10:01 09-Jun-20"
	const formattedDate = dateTime.toFormat('HH:mm dd-LLL-yy');
</script>

<section class="bg-tmux flex text-surface-900 justify-between px-1">
	<div class="flex gap-4">
		<div>[0]</div>
		<nav class="flex gap-3">
			{#each $tabs as tab, index}
				<button class="tab" on:click={() => ($activeTab = index)}>
					{index}:{tab}{index === $activeTab ? '*' : ''}
				</button>
			{/each}
		</nav>
	</div>
	<div class="flex gap-3">
		<p>"pauldolden.com"</p>
		<p>{formattedDate}</p>
	</div>
</section>
