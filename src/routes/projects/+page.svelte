<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Pill from '$lib/components/Pill.svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';

  let showMobileMenu = false;
  let activeDomain = 'Featured Projects';
  const domains = ['Generative AI', 'Software Engr', 'Machine Learning', 'Systems Engr', 'Hardware'];
</script>

<div class="flex flex-col md:flex-row gap-8 relative">
  
  <!-- Mobile Dropdown Trigger -->
  <div class="md:hidden flex justify-center w-full mb-4">
    <button 
      on:click={() => showMobileMenu = !showMobileMenu}
      class="flex items-center gap-2 bg-[#D9D9D9]/35 backdrop-blur-md px-6 py-2 rounded-full font-semibold text-lg border border-white/10 z-20">
      {activeDomain}
      <ChevronDownOutline class="w-4 h-4 transition-transform duration-300 {showMobileMenu ? 'rotate-180' : ''}" />
    </button>

    <!-- Mobile Dropdown Menu -->
    {#if showMobileMenu}
      <div class="absolute top-14 left-1/2 -translate-x-1/2 w-64 bg-[#464646]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 z-10 shadow-2xl flex flex-col gap-3">
        <button on:click={() => {activeDomain = 'Featured Projects'; showMobileMenu = false;}} class="text-left font-semibold">Featured projects</button>
        <div class="h-px bg-white/20 w-full my-1"></div>
        <p class="text-white/60 text-sm mb-1">Domains</p>
        {#each domains as domain}
          <button on:click={() => {activeDomain = domain; showMobileMenu = false;}} class="text-left pl-4 hover:text-white/70 transition-colors">{domain}</button>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Desktop Sidebar -->
  <div class="hidden md:flex flex-col w-64 flex-shrink-0 bg-[#464646]/60 backdrop-blur-md rounded-3xl p-6 border border-white/5 h-fit">
    <button on:click={() => activeDomain = 'Featured Projects'} class="text-left text-xl font-bold mb-6 {activeDomain === 'Featured Projects' ? 'text-white' : 'text-white/60 hover:text-white'}">Featured projects</button>
    <p class="text-white/80 font-semibold mb-4 text-lg">Domains</p>
    <div class="flex flex-col gap-4 pl-4">
      {#each domains as domain}
        <button on:click={() => activeDomain = domain} class="text-left text-base {activeDomain === domain ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}">{domain}</button>
      {/each}
    </div>
  </div>

  <!-- Project List -->
  <div class="flex-grow flex flex-col gap-6">
    <!-- Project 1 -->
    <Card>
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <div class="w-16 h-16 md:w-24 md:h-24 bg-[#D9D9D9] rounded-2xl flex-shrink-0"></div>
        <div class="flex flex-col w-full">
          <h2 class="text-xl md:text-2xl font-bold mb-1">Movies Data Visualization</h2>
          <p class="text-white/80 text-sm md:text-base mb-4">Project 1 Description. Built to analyze and explore complex movie datasets seamlessly.</p>
          <div class="flex gap-3 flex-wrap">
            <Pill>GenAI</Pill>
            <Pill>Full-stack</Pill>
          </div>
        </div>
      </div>
    </Card>

    <!-- Project 2 -->
    <Card>
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <div class="w-16 h-16 md:w-24 md:h-24 bg-[#D9D9D9] rounded-2xl flex-shrink-0"></div>
        <div class="flex flex-col w-full">
          <h2 class="text-xl md:text-2xl font-bold mb-1">Concurrent Request Orchestrator</h2>
          <p class="text-white/80 text-sm md:text-base mb-4">Project 2 Description. Engineered a robust backend system handling simultaneous operations.</p>
          <div class="flex gap-3 flex-wrap">
            <Pill>Full-stack</Pill>
            <Pill>Operating Systems</Pill>
          </div>
        </div>
      </div>
    </Card>
    
    <!-- Project 3 -->
    <Card>
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <div class="w-16 h-16 md:w-24 md:h-24 bg-[#D9D9D9] rounded-2xl flex-shrink-0"></div>
        <div class="flex flex-col w-full">
          <h2 class="text-xl md:text-2xl font-bold mb-1">LLM Fine-tuning & Bias Analysis</h2>
          <p class="text-white/80 text-sm md:text-base mb-4">Project 3 Description. Specialized model training pipeline optimizing for accuracy and fairness.</p>
          <div class="flex gap-3 flex-wrap">
            <Pill>GenAI</Pill>
            <Pill>Machine Learning</Pill>
          </div>
        </div>
      </div>
    </Card>
  </div>
</div>