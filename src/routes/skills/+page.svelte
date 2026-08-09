<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Pill from '$lib/components/Pill.svelte';
	import ChevronLeftOutline from 'flowbite-svelte-icons/ChevronLeftOutline.svelte';
	import ChevronRightOutline from 'flowbite-svelte-icons/ChevronRightOutline.svelte';
	import {
		languages,
		aiMl,
		webBackend,
		cloudInfra,
		tools,
		hardware,
		certifications,
		databases
	} from '$lib/data/skills';

	const allSkills = [
		languages,
		aiMl,
		webBackend,
		cloudInfra,
		tools,
		hardware,
		certifications,
		databases
	];

	let carouselRef: HTMLDivElement | null = null;

	const scrollCarousel = (direction: string) => {
		if (!carouselRef) return;

		// --- MAGIC NUMBERS EXPLAINED ---
		// Desktop (>768px): 650px (Card width from w-162.5) + 48px (Gap from space-x-12)
		// Mobile (<=768px): 85vw (Card width from w-[85vw]) + 24px (Approximated gap/padding tolerance)
		// -------------------------------
		const scrollAmount = window.innerWidth > 768 ? 650 + 48 : window.innerWidth * 0.85 + 24;

		const currentIndex = Math.round(carouselRef.scrollLeft / scrollAmount);
		let targetIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

		// Clamp the target index to prevent out-of-bounds scrolling
		targetIndex = Math.max(0, Math.min(targetIndex, allSkills.length - 1));

		carouselRef.scrollTo({
			left: targetIndex * scrollAmount,
			behavior: 'smooth'
		});
	};
</script>

<!-- Page Title -->
<div class="relative z-10 mb-1 flex justify-center md:mb-8">
	<h1 class="text-2xl font-bold md:text-[32px]">Skills</h1>
</div>

<!-- Full Bleed Carousel Container -->
<div class="relative right-1/2 left-1/2 z-10 mr-[-50vw] ml-[-50vw] w-screen">
	<!-- DaisyUI Carousel -->
	<div
		bind:this={carouselRef}
		class="no-scrollbar carousel w-full carousel-center items-center space-x-4 px-[7.5vw] py-2 md:space-x-12 md:px-[calc(50vw-325px)]"
	>
		{#each allSkills as category (category.title)}
			<!-- Added max-h-[65vh] so it scales down on short mobile screens -->
			<div class="carousel-item h-95 max-h-[65vh] w-[85vw] md:max-h-none md:w-162.5">
				<Card>
					<h2 class="mb-5 text-center text-xl font-bold md:mb-8 md:text-2xl">{category.title}</h2>
					<div class="flex flex-wrap justify-center gap-4 md:gap-6">
						{#each category.data as skill (skill)}
							<Pill>{skill}</Pill>
						{/each}
					</div>
				</Card>
			</div>
		{/each}
	</div>

	<!-- Carousel Controls (Perfectly flush with the right edge of the center card) -->
	<!-- The width settings below mirror the carousel item width in order to align perfectly with the center card -->
	<div
		class="relative z-10 mx-auto mt-4 flex w-[85vw] justify-end gap-6 pb-4 md:mt-8 md:w-162.5 md:pb-8"
	>
		<!-- Left Carousel Control -->
		<button
			class="btn btn-circle border border-white/10 bg-[#D9D9D9]/35 btn-ghost backdrop-blur-md"
			onclick={() => scrollCarousel('left')}
		>
			<ChevronLeftOutline class="h-8 w-8" />
		</button>

		<!-- Right Carousel Control -->
		<button
			class="btn btn-circle border border-white/10 bg-[#D9D9D9]/35 btn-ghost backdrop-blur-md"
			onclick={() => scrollCarousel('right')}
		>
			<ChevronRightOutline class="h-8 w-8" />
		</button>
	</div>
</div>

<!-- On Safari desktop, prevent horizontal overflow due to vertical scrollbar's width -->
<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
