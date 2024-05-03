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
<main class="md:h-screen md:overflow-scroll flex flex-col text-pWhite font-jbm">
	<StdOut>
		<slot />
	</StdOut>
	<Prompt />
	<TabBar />
	<KeyBoardEvents />
</main>
