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
		const scrollAmount = window.innerWidth > 768 ? 650 + 48 : window.innerWidth * 0.85 + 24;
		if (!carouselRef) return;
		carouselRef.scrollBy({
			left: direction === 'right' ? scrollAmount : -scrollAmount,
			behavior: 'smooth'
		});
	};
</script>

<!-- Page Title -->
<div class="relative z-10 mb-1 flex justify-center md:mb-8">
	<h1 class="text-2xl font-bold md:text-[32px]">Skills</h1>
</div>

<!-- Full Bleed Carousel Container (Breaks out of standard padding) -->
<div class="relative right-1/2 left-1/2 z-10 mr-[-50vw] ml-[-50vw] w-screen px-4 md:px-12">
	<!-- DaisyUI Carousel -->
	<div
		class="no-scrollbar carousel max-w-full carousel-center items-center space-x-6 rounded-box p-4 md:space-x-12"
	>
		<!-- All Slides -->
		<div
			bind:this={carouselRef}
			class="no-scrollbar carousel max-w-full carousel-center items-center space-x-6 px-[7.5vw] py-4 md:space-x-12 md:px-[calc(50vw-325px)]"
		>
			{#each allSkills as category (category.title)}
				<div class="carousel-item h-95 w-[85vw] md:w-162.5">
					<Card>
						<h2 class="mb-8 text-center text-xl font-bold md:text-2xl">{category.title}</h2>
						<div class="flex flex-wrap justify-center gap-4 md:gap-6">
							{#each category.data as skill (skill)}
								<Pill>{skill}</Pill>
							{/each}
						</div>
					</Card>
				</div>
			{/each}
		</div>

		<!-- TODO: remove after using design inspiration -->
		<!-- Slide 1: Programming Languages -->
		<!-- <div class="carousel-item w-[85vw] md:w-[600px]">
      <Card>
        <h2 class="text-center text-xl md:text-2xl font-bold mb-8">Programming Languages</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <Pill>Python</Pill>
          <Pill>C++</Pill>
          <Pill>JavaScript</Pill>
          <Pill>TypeScript</Pill>
          <Pill>MATLAB</Pill>
          <Pill>Go</Pill>
          <Pill>Rust</Pill>
        </div>
      </Card>
    </div> -->
	</div>

	<div
		class="relative z-10 mb-1 ml-[66vw] inline-flex -translate-x-1/2 items-center gap-6 px-4 md:mb-8"
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
