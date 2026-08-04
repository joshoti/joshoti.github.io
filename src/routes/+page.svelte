<script lang="ts">
  import Card from '$lib/components/Card.svelte';
</script>

<div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mt-10 md:mt-20">
  <!-- Profile Picture Square -->
  <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-[#D9D9D9] rounded-[36px] overflow-hidden shadow-2xl">
    <!-- Insert image here, or leave as solid color block for now -->
    <!-- <img src="/your-image.png" alt="Joshua Oti" class="w-full h-full object-cover" /> -->
  </div>

  <!-- Bio Text -->
  <Card>
    <h1 class="text-2xl md:text-[32px] font-bold mb-4">Joshua Oti</h1>
    
    <div class="space-y-1 mb-6 text-sm md:text-lg text-white/90">
      <p>Prev Machine Learning Engineer @ Autodesk</p>
      <p>MS Computer Science @ USC</p>
      <p>B.Eng Mechanical Engineering @ Covenant University</p>
    </div>

    <p class="text-sm md:text-base leading-relaxed text-white/80">
      Building at the intersection of low-level systems, intelligent software, and physical hardware. Core foundation in Mechanical Engineering—graduating top of my class with hands-on lab experience in soldering, PCB schematic capture, and logic analyzers—paired with a Master’s in Computer Science focused on distributed systems, operating systems, and ML.
    </p>
  </Card>
</div>