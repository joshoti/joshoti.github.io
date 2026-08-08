<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import GithubSolid from 'flowbite-svelte-icons/GithubSolid.svelte';
	import LinkedinSolid from 'flowbite-svelte-icons/LinkedinSolid.svelte';
	import FilePdfSolid from 'flowbite-svelte-icons/FilePdfSolid.svelte';
	import ChevronDownOutline from 'flowbite-svelte-icons/ChevronDownOutline.svelte';
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
		<!-- Added 'group' to manage the chevron hover/focus states -->
		<div class="group dropdown dropdown-end">
			<div
				tabindex="0"
				role="button"
				class="flex items-center gap-1 transition-colors hover:text-gray-300 focus:outline-none"
			>
				<FilePdfSolid class="h-6 w-6 md:h-8 md:w-8" />
				<!-- group-focus-within:rotate-180 dynamically handles the rotation without JS -->
				<ChevronDownOutline
					class="h-3 w-3 transition-transform duration-300 group-focus-within:rotate-180 md:h-4 md:w-4"
				/>
			</div>

			<!-- Dropdown Menu -->
			<ul
				tabindex="-1"
				class="menu dropdown-content z-1 mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#464646]/90 p-2 shadow-lg backdrop-blur-md"
			>
				<li>
					<a
						href={asset('/pdf/resume_aiml.pdf')}
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-reload
						class="text-sm hover:bg-white/10">AIML Resume</a
					>
				</li>
				<li>
					<a
						href={asset('/pdf/resume_swe.pdf')}
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-reload
						class="text-sm hover:bg-white/10">SWE Resume</a
					>
				</li>
				<li>
					<a
						href={asset('/pdf/resume_syseng.pdf')}
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-reload
						class="text-sm hover:bg-white/10">Systems & Hardware Resume</a
					>
				</li>
			</ul>
		</div>
	</div>
</header>
