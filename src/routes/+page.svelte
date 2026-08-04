<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="mt-10 flex flex-col items-center gap-8 md:mt-20 md:flex-row md:items-start md:gap-12">
	<!-- Profile Picture Square -->
	<div
		class="h-48 w-48 flex-shrink-0 overflow-hidden rounded-[36px] bg-[#D9D9D9] shadow-2xl md:h-64 md:w-64"
	>
		<!-- Insert image here, or leave as solid color block for now -->
		<!-- <img src="/your-image.png" alt="Joshua Oti" class="w-full h-full object-cover" /> -->
	</div>

	<!-- Bio Text -->
	<Card>
		<h1 class="mb-4 text-2xl font-bold md:text-[32px]">Joshua Oti</h1>

		<div class="mb-6 space-y-1 text-sm text-white/90 md:text-lg">
			<p>Prev Machine Learning Engineer @ Autodesk</p>
			<p>MS Computer Science @ USC</p>
			<p>B.Eng Mechanical Engineering @ Covenant University</p>
		</div>

		<p class="text-sm leading-relaxed text-white/80 md:text-base">
			Building at the intersection of low-level systems, intelligent software, and physical
			hardware. Core foundation in Mechanical Engineering—graduating top of my class with hands-on
			lab experience in soldering, PCB schematic capture, and logic analyzers—paired with a Master’s
			in Computer Science focused on distributed systems, operating systems, and ML.
		</p>
	</Card>
</div>
