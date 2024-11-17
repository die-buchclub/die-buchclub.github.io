import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/die-buchclub.github.io/",
	plugins: [sveltekit()]
});
