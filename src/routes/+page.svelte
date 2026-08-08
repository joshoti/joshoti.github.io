<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="md:mt-10">
	<Card>
		<!-- Top Row: Picture + Introduction -->
		<div
			class="mb-6 flex flex-col items-center gap-6 text-left md:mb-8 md:flex-row md:items-start md:gap-8"
		>
			<!-- Profile Picture Square -->
			<div
				class="h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-[#D9D9D9]/65 shadow-2xl backdrop-blur-md md:h-48 md:w-48 md:rounded-3xl"
			>
				<img
					src="/img/profilepicture-nobg.png"
					alt="Joshua Oti"
					class="h-full w-full object-cover"
				/>
			</div>

			<!-- Name, Experience, and Education -->
			<div class="flex flex-col justify-center py-2">
				<h1 class="mb-4 text-center text-2xl font-bold md:text-left md:text-[32px]">Joshua Oti</h1>

				<div class="space-y-2 text-sm text-white/90 md:text-lg">
					<p>Software Development Engineer, Easley-Dunn Productions Inc.</p>
					<p>Prev Machine Learning Engineer, Autodesk</p>
					<p>MS Computer Science, University of Southern California</p>
					<p>B.Eng Mechanical Engineering, Covenant University</p>
				</div>
			</div>
		</div>

		<!-- Full-width Introduction -->
		<p class="text-sm leading-relaxed text-white/80 md:text-base">
			Building at the intersection of low-level systems, intelligent software, and physical
			hardware. Core foundation is in Mechanical Engineering, graduating at the top of the class.
			Gained hands-on lab experience across the hardware lifecycle, spanning from CAD/CAM and
			additive manufacturing to PCB schematic capture and electronic failure analysis. To complement
			this, earned a Master’s in Computer Science focused on distributed systems, generative AI, and
			software engineering.
		</p>
	</Card>
</div>
