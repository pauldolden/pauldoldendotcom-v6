<script>
	import About from '$lib/components/about.svelte';
	import Timeline from '$lib/components/timeline.svelte';
</script>

<div class="container px-10 h-full mx-auto flex py-5 md:py-20">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-56">
		<About />
		<Timeline />
	</div>
</div>
