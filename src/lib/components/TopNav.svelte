<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import GithubSolid from 'flowbite-svelte-icons/GithubSolid.svelte';
	import LinkedinSolid from 'flowbite-svelte-icons/LinkedinSolid.svelte';
	import FilePdfSolid from 'flowbite-svelte-icons/FilePdfSolid.svelte';
	import ChevronDownOutline from 'flowbite-svelte-icons/ChevronDownOutline.svelte';

	let showDropdown = $state(false);

	function toggleDropdown() {
		showDropdown = !showDropdown;
	}
</script>

<header class="mx-auto flex w-full max-w-6xl items-start justify-between">
	<!-- Top Left Logo -->
	<a href={resolve('/')} class="text-2xl font-bold tracking-tight md:text-3xl">JO</a>

	<!-- Top Right Icons -->
	<div class="flex items-center gap-4 md:gap-6">
		<a
			href="https://github.com/joshoti"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-gray-300"
		>
			<GithubSolid class="h-6 w-6 md:h-8 md:w-8" />
		</a>
		<a
			href="https://www.linkedin.com/in/joshua-oti/"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-gray-300"
		>
			<LinkedinSolid class="h-6 w-6 md:h-8 md:w-8" />
		</a>

		<!-- PDF Dropdown Container -->
		<div class="relative">
			<button
				onclick={toggleDropdown}
				class="flex items-center gap-1 transition-colors hover:text-gray-300 focus:outline-none"
			>
				<FilePdfSolid class="h-6 w-6 md:h-8 md:w-8" />
				<ChevronDownOutline
					class="h-3 w-3 transition-transform duration-300 md:h-4 md:w-4 {showDropdown
						? 'rotate-180'
						: ''}"
				/>
			</button>

			{#if showDropdown}
				<div
					class="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-[#464646]/90 shadow-lg backdrop-blur-md"
				>
					<a
						href={asset('/resume_aiml.pdf')}
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-reload
						class="block px-4 py-2 text-sm hover:bg-white/10">AIML Resume</a
					>
					<a
						href={asset('/resume_swe.pdf')}
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-reload
						class="block px-4 py-2 text-sm hover:bg-white/10">SWE Resume</a
					>
					<a
						href={asset('/resume_syseng.pdf')}
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-reload
						class="block px-4 py-2 text-sm hover:bg-white/10">Systems & Hardware Resume</a
					>
				</div>
			{/if}
		</div>
	</div>
</header>
