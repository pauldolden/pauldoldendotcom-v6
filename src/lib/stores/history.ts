import { derived, writable } from 'svelte/store';
import { activeTab } from './tabs';

export type TabStdOut = {
  index: number;
  commands: string[];
};

export const history = writable<string[]>([]);
export const stdOut = writable<TabStdOut[]>([
  {
    index: 0,
    commands: ['development', 'home', 'about', 'experience']
  }
]);
// Derived store that returns the current tab stdOut
export const currentStdOut = derived([activeTab, stdOut], ([$activeTab, $stdOut]) => {
  return $stdOut.find((_, index) => index === $activeTab);
});
export const historyIndex = writable<number>(0);
