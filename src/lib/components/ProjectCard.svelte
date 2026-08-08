<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import ChevronDownOutline from 'flowbite-svelte-icons/ChevronDownOutline.svelte';
	import ChevronUpOutline from 'flowbite-svelte-icons/ChevronUpOutline.svelte';
	import Pill from '$lib/components/Pill.svelte';

	let {
		title = 'Project Title',
		summary = 'Short summary',
		bullets = [],
		domains = [],
		imageUrl = '',
		techs = []
	} = $props<{
		title?: string;
		summary?: string;
		bullets?: string[];
		domains?: string[];
		imageUrl?: string;
		techs?: string[];
	}>();

	let isExpanded = $state(false);
	let cardElement = $state<HTMLElement | null>(null);

	const toggleDetails = () => {
		if (isExpanded && cardElement) {
			// Scroll back to the top of the card smoothly before shrinking
			const yOffset = -20; // Optional padding
			const y = cardElement.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
		isExpanded = !isExpanded;
	};
	// TODO: add caveat and link to project. See `~/proj`
</script>

<div
	bind:this={cardElement}
	class="w-full rounded-3xl border border-white/5 bg-[#464646]/60 p-6 backdrop-blur-md md:p-8"
>
	<div class="flex flex-col items-start gap-6 md:flex-row">
		<!-- Conditionally render the image only if an imageUrl is provided -->
		{#if imageUrl}
			<!-- TODO: use profile picture pattern instead of below? -->
			<!-- <div class="h-16 w-16 shrink-0 rounded-2xl bg-[#D9D9D9] shadow-2xl md:h-24 md:w-24"> -->
			<!-- <img src={imageUrl} alt={title} class="h-full w-full object-cover" /> -->
			<!-- </div> -->

			<div class="shrink-0">
				<img
					src={imageUrl}
					alt={title}
					class="h-16 w-16 rounded-2xl bg-[#D9D9D9] object-cover md:h-24 md:w-24"
				/>
				<!-- TODO: decide if using css in the div is better -->
				<!-- <div class="h-16 w-16 shrink-0 rounded-2xl bg-[#D9D9D9] md:h-24 md:w-24"></div> -->
			</div>
		{/if}

		<!-- Main Content Area -->
		<div class="flex w-full flex-col">
			<h2 class="mb-1 text-xl font-bold md:text-2xl">{title}</h2>

			<!-- Expandable Summary / Bullets -->
			{#if !isExpanded}
				<p in:fade={{ duration: 200 }} class="mb-4 text-sm text-white/80 md:text-base">
					{summary}
				</p>
			{:else}
				<div in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
					<ul class="mb-4 list-disc space-y-2 pl-5 text-white/90">
						{#each bullets as bullet (bullet)}
							<li>{bullet}</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- Tech / Domains -->
			{#if isExpanded}
				{#if techs.length > 0}
					<div class="flex flex-wrap gap-3">
						{#each techs as tech (tech)}
							<Pill>{tech}</Pill>
						{/each}
					</div>
				{/if}
			{:else}
				{#if domains.length > 0}
					<div class="flex flex-wrap gap-3">
						{#each domains as domain (domain)}
							<Pill>{domain}</Pill>
						{/each}
					</div>
				{/if}
			{/if}

			<!-- Toggle Button -->
			<div class="mt-4 flex justify-start">
				<button
					class="flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
					onclick={toggleDetails}
				>
					{#if isExpanded}
						Show summary
						<ChevronUpOutline size="sm" />
					{:else}
						Show technical details
						<ChevronDownOutline size="sm" />
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>
