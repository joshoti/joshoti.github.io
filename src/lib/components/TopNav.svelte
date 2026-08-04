<script lang="ts">
  import { GithubSolid, LinkedinSolid, FilePdfSolid, ChevronDownOutline } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';

  let showDropdown = false;
  
  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
</script>

<header class="flex justify-between items-start w-full max-w-6xl mx-auto">
  <!-- Top Left Logo -->
  <a href="/" class="text-2xl md:text-3xl font-bold tracking-tight">JO</a>

  <!-- Top Right Icons -->
  <div class="flex items-center gap-4 md:gap-6">
    <a href="https://github.com/yourusername" target="_blank" class="hover:text-gray-300 transition-colors">
      <GithubSolid class="w-6 h-6 md:w-8 md:h-8" />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" class="hover:text-gray-300 transition-colors">
      <LinkedinSolid class="w-6 h-6 md:w-8 md:h-8" />
    </a>
    
    <!-- PDF Dropdown Container -->
    <div class="relative">
      <button on:click={toggleDropdown} class="flex items-center gap-1 hover:text-gray-300 transition-colors focus:outline-none">
        <FilePdfSolid class="w-6 h-6 md:w-8 md:h-8" />
        <ChevronDownOutline class="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 {showDropdown ? 'rotate-180' : ''}" />
      </button>

      {#if showDropdown}
        <div class="absolute right-0 mt-2 w-32 bg-[#464646]/90 backdrop-blur-md rounded-xl shadow-lg border border-white/10 overflow-hidden z-50">
          <a href="/resume_aiml.pdf" target="_blank" class="block px-4 py-2 hover:bg-white/10 text-sm">AIML</a>
          <a href="/resume_swe.pdf" target="_blank" class="block px-4 py-2 hover:bg-white/10 text-sm">SWE</a>
          <a href="/resume_robotics.pdf" target="_blank" class="block px-4 py-2 hover:bg-white/10 text-sm">Robotics</a>
        </div>
      {/if}
    </div>
  </div>
</header>