<script lang="ts">
	import './layout.css';
	import TopNav from '$lib/components/TopNav.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';

	let { children } = $props();
</script>

<!-- Responsive Background -->
<div
	class="fixed inset-0 -z-10 bg-[url('/img/bg_comp1.png')] bg-cover bg-center bg-no-repeat max-[500px]:bg-[url('/img/bg-portrait.png')]"
></div>

<!-- Global Blur Overlay -->
<div class="pointer-events-none fixed inset-0 z-[-1] bg-black/10 backdrop-blur-[6px]"></div>

<!-- Main Layout Wrapper (Updated with safe-area padding) -->
<div class="relative z-0 flex min-h-screen flex-col px-4 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(8rem,env(safe-area-inset-bottom))] text-white md:px-12">
	<TopNav />

	<main class="mx-auto mt-8 w-full max-w-5xl grow text-sm max-[380px]:mt-2 md:mt-14 md:text-base">
		{@render children()}
	</main>

	<BottomNav />
</div>
