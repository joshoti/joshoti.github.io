<script lang="ts">
  import './layout.css';
  import '@fontsource-variable/inter';
  import TopNav from '$lib/components/TopNav.svelte';
  import BottomNav from '$lib/components/BottomNav.svelte';
</script>

<!-- Responsive Background -->
<div class="fixed inset-0 -z-10 w-full h-[100lvh] bg-cover bg-center bg-no-repeat" 
     style="background-image: url('/bg_comp1.png');">
</div>

<!-- Main Layout Wrapper -->
<div class="relative z-0 min-h-[100lvh] flex flex-col pt-6 pb-32 px-4 md:px-12 text-white">
  <TopNav />
  
  <main class="flex-grow w-full max-w-5xl mx-auto mt-8 md:mt-16 text-sm md:text-base">
    <slot />
  </main>
  
  <BottomNav />
</div>