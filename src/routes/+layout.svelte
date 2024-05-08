<script lang="ts">
	import '../app.postcss';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import TabBar from '$lib/components/TabBar.svelte';
	import KeyBoardEvents from '$lib/components/KeyboardEvents.svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Prompt from '$lib/components/Prompt.svelte';
	import StdOut from '$lib/components/StdOut.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>paul dolden | senior software engineer</title>
	<meta name="description" content="paul dolden | senior software engineer" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<!-- Main container with full screen height and appropriate overflow handling -->
<main class="h-dvh flex flex-col overflow-hidden">
	<!-- Scrollable StdOut section with explicit height control -->
	<section id="stdOut" class="flex-1 overflow-auto text-white font-jbm">
		<StdOut>
			<slot />
		</StdOut>
	</section>

	<!-- Fixed bottom section with Prompt and TabBar -->
	<section class="text-white font-jbm">
		<Prompt />
		<TabBar />
	</section>
</main>

<KeyBoardEvents />
