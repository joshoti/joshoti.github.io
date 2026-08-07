<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ChevronDownOutline from 'flowbite-svelte-icons/ChevronDownOutline.svelte';
	import { featuredCategory, projectCategories } from '$lib/data/projects';

	let showMobileMenu = $state(false);
	let activeCategory = $state(featuredCategory);
</script>

<div class="relative flex flex-col">
	<!-- Active Category Title -->
	<h1 class=" mx-auto hidden text-2xl font-bold md:mb-6 md:flex md:text-[32px]">
		{activeCategory.name}
	</h1>

	<!-- Main Content -->
	<div class="relative flex flex-col gap-8 md:flex-row">
		<!-- Mobile Dropdown Trigger -->
		<div class="flex w-full justify-center md:hidden">
			<button
				onclick={() => (showMobileMenu = !showMobileMenu)}
				class="z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#D9D9D9]/35 px-6 py-2 text-lg font-semibold backdrop-blur-md"
			>
				{activeCategory.name}
				<ChevronDownOutline
					class="h-4 w-4 transition-transform duration-300 {showMobileMenu ? 'rotate-180' : ''}"
				/>
			</button>

			<!-- Mobile Dropdown Menu -->
			{#if showMobileMenu}
				<div
					class="absolute top-14 left-1/2 z-10 flex w-64 -translate-x-1/2 flex-col gap-3 rounded-2xl border border-white/10 bg-[#464646]/90 p-4 shadow-2xl backdrop-blur-xl"
				>
					<button
						onclick={() => {
							activeCategory = featuredCategory;
							showMobileMenu = false;
						}}
						class="text-left font-semibold">{featuredCategory.name}</button
					>
					<div class="my-1 h-px w-full bg-white/20"></div>
					<p class="mb-1 text-sm text-white/60">Domains</p>
					{#each projectCategories as category (category.name)}
						<button
							onclick={() => {
								activeCategory = category;
								showMobileMenu = false;
							}}
							class="pl-4 text-left transition-colors hover:text-white/70">{category.name}</button
						>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Desktop Sidebar -->
		<div
			class="hidden h-fit w-64 shrink-0 flex-col rounded-3xl border border-white/5 bg-[#464646]/60 p-6 backdrop-blur-md md:flex"
		>
			<button
				onclick={() => (activeCategory = featuredCategory)}
				class="mb-6 text-left text-xl font-bold {activeCategory === featuredCategory
					? 'text-white'
					: 'text-white/60 hover:text-white'}">{featuredCategory.name}</button
			>
			<p class="mb-4 text-lg font-semibold text-white/80">Domains</p>
			<div class="flex flex-col gap-4 pl-4">
				{#each projectCategories as category (category.name)}
					<button
						onclick={() => (activeCategory = category)}
						class="text-left text-base {activeCategory === category
							? 'font-semibold text-white'
							: 'text-white/60 hover:text-white'}">{category.name}</button
					>
				{/each}
			</div>
		</div>

		<!-- Project List -->
		<div class="flex grow flex-col gap-6">
			{#each activeCategory.projects as project (project.title)}
				<ProjectCard {...project} />
			{/each}

			<!-- TODO: remove after using image placement idea -->
			<!-- <Card>
				<div class="flex flex-col items-start gap-6 md:flex-row">
					<div class="h-16 w-16 shrink-0 rounded-2xl bg-[#D9D9D9] md:h-24 md:w-24"></div>
					<div class="flex w-full flex-col">
						<h2 class="mb-1 text-xl font-bold md:text-2xl">Concurrent Request Orchestrator</h2>
						<p class="mb-4 text-sm text-white/80 md:text-base">
							Project 2 Description. Engineered a robust backend system handling simultaneous
							operations.
						</p>
						<div class="flex flex-wrap gap-3">
							<Pill>Full-stack</Pill>
							<Pill>Operating Systems</Pill>
						</div>
					</div>
				</div>
			</Card> -->
		</div>
	</div>
</div>
