<script lang="ts">
	import './layout.css';
	import TopNav from '$lib/components/TopNav.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';

	let { children } = $props();
</script>

<!-- Responsive Background -->
<div
	class="fixed inset-0 -z-10 h-lvh w-full bg-[url('/bg_comp1.png')] bg-cover bg-center bg-no-repeat max-[500px]:bg-[url('/bg-portrait.png')]"
></div>

<!-- Main Layout Wrapper -->
<div class="relative z-0 flex min-h-lvh flex-col px-4 pt-6 pb-32 text-white md:px-12">
	<TopNav />

	<main class="mx-auto mt-8 w-full max-w-5xl grow text-sm md:mt-16 md:text-base">
		{@render children()}
	</main>

	<BottomNav />
</div>
