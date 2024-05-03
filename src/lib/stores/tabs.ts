import { writable } from 'svelte/store';

export const tabs = writable(['home']);
export const activeTab = writable(0);
