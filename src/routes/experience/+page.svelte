<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Pill from '$lib/components/Pill.svelte';
  import { LinkSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex justify-center mb-6">
  <h1 class="text-2xl md:text-[32px] font-bold">Experience</h1>
</div>

<div class="flex flex-col gap-6 max-w-4xl mx-auto">
  <Card>
    <div class="flex justify-between items-start flex-col md:flex-row mb-2 gap-2">
      <h2 class="text-xl md:text-2xl font-bold">Autodesk | Machine Learning Engineer Intern</h2>
      <span class="text-white/80 font-semibold text-sm md:text-base whitespace-nowrap">05/2025 - 08/2025</span>
    </div>
    <p class="text-white/80 text-sm md:text-base mb-6">Experience Summary. Developed generative AI workflows and pushed code into production environments, contributing directly to core architectural systems.</p>
    <a href="https://linkedin.com" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-[#D9D9D9]/35 hover:bg-[#D9D9D9]/50 transition-colors rounded-xl text-sm font-medium">
      <LinkSolid class="w-4 h-4" /> LinkedIn Post
    </a>
  </Card>

  <Card>
    <div class="flex justify-between items-start flex-col md:flex-row mb-2 gap-2">
      <h2 class="text-xl md:text-2xl font-bold">Phasecurve | Software Engineer</h2>
      <span class="text-white/80 font-semibold text-sm md:text-base whitespace-nowrap">09/2022 - 07/2024</span>
    </div>
    <p class="text-white/80 text-sm md:text-base">Experience Summary. Designed and implemented full-stack solutions, scaling systems to support an expanded user base and improving deployment velocity.</p>
  </Card>

  <Card>
    <div class="flex justify-between items-start flex-col md:flex-row mb-2 gap-2">
      <h2 class="text-xl md:text-2xl font-bold">RehBox | Machine Learning Engineer</h2>
      <span class="text-white/80 font-semibold text-sm md:text-base whitespace-nowrap">09/2022 - 07/2024</span>
    </div>
    <p class="text-white/80 text-sm md:text-base">Experience Summary. Engineered data pipelines and trained machine learning models to improve predictive accuracy for physical and simulated environments.</p>
  </Card>
</div>