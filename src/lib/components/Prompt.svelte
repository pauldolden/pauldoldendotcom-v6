<!-- TerminalInput.svelte -->
<script lang="ts">
	import { promptText } from '$lib/stores/prompt';
	import PromptText from './PromptText.svelte';
</script>

<section class="flex flex-col px-2">
	<PromptText />
	<div class="flex items-center">
		<label class="text-l h-10 text-white flex w-full items-center" for="promptText">
			<p class="text-surface-100 text-2xl font-bold pr-1">❯</p>
			{$promptText}
			<!-- Vim Caret -->
			<div class="w-3 h-6 bg-white opacity-70"></div>
		</label>
		<!-- Hidden input to capture input -->
		<input
			class="text-black absolute -top-20"
			name="promptText"
			bind:value={$promptText}
			id="promptText"
			type="text"
			oninput={() => ($promptText = $promptText.toLowerCase())}
		/>
	</div>
</section>
