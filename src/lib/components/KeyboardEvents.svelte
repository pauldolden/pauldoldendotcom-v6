<script lang="ts">
	import { tabs, activeTab } from '$lib/stores/tabs';
	import { history, historyIndex, currentStdOut, stdOut } from '$lib/stores/history';
	import { promptText } from '$lib/stores/prompt';
	let ctrlBPressed = false;
	let upPressed = false;
	let downPressed = false;

	function onKeyDown(event: KeyboardEvent): void {
		// focus the prompt to be ready for input
		const promptInput = document.getElementById('promptText') as HTMLInputElement;
		promptInput.focus();
		if (event.ctrlKey && event.key === 'b') {
			ctrlBPressed = true;
		} else if (event.key === 'Enter') {
			handleEnter();
			upPressed = false;
			downPressed = false;
			ctrlBPressed = false;
		} else if (event.key === 'ArrowUp') {
			handleArrowUp();
			downPressed = false;
			ctrlBPressed = false;
		} else if (event.key === 'ArrowDown') {
			handleArrowDown();
			upPressed = false;
			ctrlBPressed = false;
		} else if (ctrlBPressed) {
			handleCtrlBCommands(event);
			upPressed = false;
			downPressed = false;
		}
	}

	function handleEnter() {
		if ($promptText === '') return;
		// scroll to the bottom of stdOut

		history.update((h) => [$promptText, ...h]);
		// update the current tab's stdOut
		stdOut.update((currentStdOut) => {
			const index = $activeTab;
			currentStdOut[index].commands.push($promptText);
			return currentStdOut;
		});

		// Accepted Commands go here
		if ($promptText === 'clear') {
			const index = $currentStdOut!.index;
			stdOut.update((currentStdOut) => {
				currentStdOut[index].commands = [];
				return currentStdOut;
			});
		}

		if ($promptText === 'exit') {
			// remove the current tab from the stdOut
			stdOut.update((_currentStdOut) => {
				if (_currentStdOut.length > 1) {
					const index = $currentStdOut!.index;
					_currentStdOut.splice(index, 1);
				}
				return _currentStdOut;
			});

			// remove current tab if it's not the last and shift all table indexes set active tab to the previous tab
			tabs.update((currentTabs) => {
				if (currentTabs.length > 1) {
					const index = $activeTab;
					currentTabs.splice(index, 1);
					activeTab.set((index - 1 + currentTabs.length) % currentTabs.length);
				}
				return currentTabs;
			});
		}

		const stdOutElement = document.getElementById('stdOut')!;
		stdOutElement.scrollTop = stdOutElement.scrollHeight;

		promptText.set('');
	}

	function handleArrowUp(): void {
		if ($history.length === 0) return;
		if (upPressed) {
			// Move forward in the history array, which moves back in time since new entries are at the front.
			let newIndex = $historyIndex + 1;
			if (newIndex >= $history.length) {
				// If we've reached the end of the history, wrap around or stop incrementing.
				newIndex = 0; // Wrap to the start of the history if desired, or you can disable wrapping by removing this line.
			}
			const newPrompt = $history[newIndex];
			promptText.set(newPrompt);
			historyIndex.set(newIndex);
		} else {
			// The first press of arrow up sets to the most recent history (index 0) if any history exists.
			if ($history.length > 0) {
				const recentPrompt = $history[0];
				promptText.set(recentPrompt);
				historyIndex.set(0);
			}
			upPressed = true; // Mark that the up arrow has been pressed.
		}

		// Request animation frame to set the cursor position after the prompt text has been updated
		requestAnimationFrame(() => {
			const promptInput = document.getElementById('promptText') as HTMLInputElement;
			const length = promptInput.value.length;
			promptInput.setSelectionRange(length, length);
		});
	}

	function handleArrowDown(): void {
		if ($history.length === 0) return;
		if (downPressed) {
			// Move backward in the history array, which moves forward in time since new entries are at the front.
			let newIndex = $historyIndex - 1;
			if (newIndex < 0) {
				// If we've reached the start of the history, wrap around or stop decrementing.
				newIndex = 0;
				promptText.set('');
			} else {
				promptText.set($history[newIndex]);
				historyIndex.set(newIndex);
			}
		} else {
			// The first press of arrow down sets to the oldest history (index length - 1) if any history exists.
			if ($history.length > 0) {
				if ($historyIndex === 0) {
					promptText.set('');
				} else {
					promptText.set($history[$history.length - 1]);
					historyIndex.set($history.length - 1);
				}
			}
		}
		downPressed = true; // Mark that the down arrow has been pressed.
	}

	function handleCtrlBCommands(event: KeyboardEvent): void {
		event.preventDefault();
		const commandKey = event.key;

		switch (commandKey) {
			case 'c':
				tabs.update((currentTabs) => {
					if (currentTabs.length < 10) currentTabs.push('home');
					return currentTabs;
				});
				// create a new StdOut for the new tab
				stdOut.update((currentStdOut) => {
					if (currentStdOut.length < 10)
						currentStdOut.push({ index: $tabs.length - 1, commands: [] });
					return currentStdOut;
				});
				activeTab.set($tabs.length - 1);
				break;
			case 'n':
				activeTab.update((tab) => (tab + 1) % $tabs.length);
				break;
			case 'p':
				activeTab.update((tab) => (tab - 1 + $tabs.length) % $tabs.length);
				break;
			default:
				if (isNumber(commandKey)) {
					setActiveTabBasedOnKey(commandKey);
				}
				break;
		}
	}

	function isNumber(key: string): boolean {
		return !isNaN(Number(key));
	}

	function setActiveTabBasedOnKey(key: string): void {
		const index = Number(key);
		tabs.update((currentTabs) => {
			if (index < currentTabs.length) {
				activeTab.set(index);
			}
			return currentTabs;
		});
	}
</script>

<svelte:window onkeydown={onKeyDown} />
