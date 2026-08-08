<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<div class="fixed right-0 bottom-4 left-0 z-50 flex justify-center px-4 max-[512px]:max-w-[100vw]">
	<nav
		class="flex w-full max-w-lg items-center justify-around rounded-full border border-white/10 bg-[#D9D9D9]/35 px-2 py-3 text-sm font-semibold shadow-lg backdrop-blur-lg max-[380px]:text-xs md:px-6 md:py-4 md:text-base"
	>
		<a
			href={resolve('/')}
			class="rounded-full px-4 py-2 transition-colors {page.url.pathname === '/'
				? 'text-white'
				: 'text-white/70 hover:text-white'}">Home</a
		>
		<a
			href={resolve('/projects')}
			class="rounded-full px-4 py-2 transition-colors {page.url.pathname === '/projects'
				? 'text-white'
				: 'text-white/70 hover:text-white'}">Projects</a
		>
		<a
			href={resolve('/experience')}
			class="rounded-full px-4 py-2 transition-colors {page.url.pathname === '/experience'
				? 'text-white'
				: 'text-white/70 hover:text-white'}">Experience</a
		>
		<a
			href={resolve('/skills')}
			class="rounded-full px-4 py-2 transition-colors {page.url.pathname === '/skills'
				? 'text-white'
				: 'text-white/70 hover:text-white'}">Skills</a
		>
	</nav>
</div>
