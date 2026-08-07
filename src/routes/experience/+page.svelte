<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import {
		easleyDunnExperience,
		autodeskExperience,
		phasecurveExperience,
		rehboxExperience
	} from '$lib/data/experience';
</script>

<!-- Title -->
<div class="mb-6 flex justify-center">
	<h1 class="text-2xl font-bold md:text-[32px]">Experience</h1>
</div>

<!-- Main Content -->
<div class="mx-auto flex max-w-4xl flex-col gap-6">
	<!-- Experience Cards -->
	<ExperienceCard {...easleyDunnExperience} />
	<ExperienceCard {...autodeskExperience} />
	<ExperienceCard {...phasecurveExperience} />
	<ExperienceCard {...rehboxExperience} />
</div>
