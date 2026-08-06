<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import {
		easleyDunnExperience,
		autodeskExperience,
		phasecurveExperience,
		rehboxExperience
	} from '$lib/data/experience';
</script>

<div class="mb-6 flex justify-center">
	<h1 class="text-2xl font-bold md:text-[32px]">Experience</h1>
</div>

<div class="mx-auto flex max-w-4xl flex-col gap-6">
	<!-- Experience Cards -->
	<ExperienceCard {...easleyDunnExperience} />
	<ExperienceCard {...autodeskExperience} />
	<ExperienceCard {...phasecurveExperience} />
	<ExperienceCard {...rehboxExperience} />

	<!-- TODO: remove later -->
	<!-- <Card>
		<div class="mb-2 flex flex-col items-start justify-between gap-2 md:flex-row">
			<h2 class="text-xl font-bold md:text-2xl">Machine Learning Engineer, RehBox</h2>
			<span class="text-sm font-semibold whitespace-nowrap text-white/80 md:text-base"
				>06/2021 - 02/2022</span
			>
		</div>
		<p class="text-sm text-white/80 md:text-base">
			Experience Summary. Engineered data pipelines and trained machine learning models to improve
			predictive accuracy for physical and simulated environments.
		</p>
	</Card> -->
</div>
