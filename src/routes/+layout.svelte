<script lang="ts">
	import './layout.css';
	import '@fontsource-variable/inter';
	import TopNav from '$lib/components/TopNav.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';
</script>

<!-- Responsive Background -->
<div
	class="fixed inset-0 -z-10 h-[100lvh] w-full bg-cover bg-center bg-no-repeat"
	style="background-image: url('/bg_comp1.png');"
></div>

<!-- Main Layout Wrapper -->
<div class="relative z-0 flex min-h-[100lvh] flex-col px-4 pt-6 pb-32 text-white md:px-12">
	<TopNav />

	<main class="mx-auto mt-8 w-full max-w-5xl flex-grow text-sm md:mt-16 md:text-base">
		<slot />
	</main>

	<BottomNav />
</div>
