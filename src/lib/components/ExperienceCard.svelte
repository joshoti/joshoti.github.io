<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import ChevronDownOutline from 'flowbite-svelte-icons/ChevronDownOutline.svelte';
	import ChevronUpOutline from 'flowbite-svelte-icons/ChevronUpOutline.svelte';
	import LinkedinSolid from 'flowbite-svelte-icons/LinkedinSolid.svelte';
	import Pill from '$lib/components/Pill.svelte';

	let {
		role = 'Role',
		company = 'Company',
		date = 'Date',
		summary = 'Short summary',
		bullets = [],
		techs = [],
		domains = [],
		linkUrl = '',
		linkLabel = ''
	} = $props<{
		role?: string;
		company?: string;
		date?: string;
		summary?: string;
		bullets?: string[];
		techs?: string[];
		domains?: string[];
		linkUrl?: string;
		linkLabel?: string;
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
</script>

<div
	bind:this={cardElement}
	class="w-full rounded-3xl border border-white/5 bg-[#464646]/60 p-6 backdrop-blur-md md:p-8"
>
	<!-- Line 1: Role, Company & Date -->
	<div class="mb-2 flex flex-col items-start justify-between gap-2 md:flex-row">
		<h2 class="text-lg font-bold md:text-xl">{role}, {company}</h2>
		<span class="text-sm font-semibold whitespace-nowrap text-white/80 md:text-base">
			{date}
		</span>
	</div>

	<!-- Line 2: Content Area (Summary / Bullets) -->
	<div class="min-h-18">
		{#if !isExpanded}
			<p in:fade={{ duration: 200 }} class="mb-4 text-sm text-white/80 md:text-base">
				{summary}
			</p>
		{:else}
			<div in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
				<ul class="mb-4 list-disc space-y-2 pl-5 text-sm text-white/90 md:text-base">
					{#each bullets as bullet (bullet)}
						<li>{bullet}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<!-- Techs / Domains -->
	{#if isExpanded}
		{#if techs.length > 0}
			<div class="mb-6 flex flex-wrap gap-3">
				{#each techs as tech (tech)}
					<Pill>{tech}</Pill>
				{/each}
			</div>
		{/if}
	{:else}
		{#if domains.length > 0}
			<div class="mb-6 flex flex-wrap gap-3">
				{#each domains as domain (domain)}
					<Pill>{domain}</Pill>
				{/each}
			</div>
		{/if}
	{/if}

	<!-- Line 3: Links -->
	{#if linkUrl && linkLabel}
		<div class="mb-6 flex flex-wrap gap-3">
			<!-- 
			Passing just the linkUrl variable raises eslint error to use resolve() for href.
			This makes the linter know an external link is being used.
			-->
			<a
				href={linkUrl.startsWith('http')
					? `https://${linkUrl.replace(/^https?:\/\//, '')}`
					: `https://${linkUrl}`}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-xl bg-[#D9D9D9]/35 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D9D9D9]/50"
			>
				<!-- Only one experience has a LinkedIn link, so we show the LinkedIn icon for that experience -->
				<LinkedinSolid class="h-5 w-5 shrink-0" color="#0072b1" />
				{linkLabel}
			</a>
		</div>
	{/if}

	<!-- Line 4: Toggle Button -->
	<div class="flex justify-start">
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
