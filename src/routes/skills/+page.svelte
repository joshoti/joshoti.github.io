<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Pill from '$lib/components/Pill.svelte';
</script>

<!-- Global Blur Overlay scoped to this page only -->
<div class="fixed inset-0 z-[-1] backdrop-blur-[6px] bg-black/10 pointer-events-none"></div>

<div class="flex justify-center mb-8 relative z-10">
  <h1 class="text-2xl md:text-[32px] font-bold">Skills</h1>
</div>

<!-- Full Bleed Carousel Container (Breaks out of standard padding) -->
<div class="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-12 py-4 z-10">
  
  <!-- DaisyUI Carousel -->
  <div class="carousel carousel-center max-w-full p-4 space-x-6 md:space-x-12 no-scrollbar rounded-box items-center">
    
    <!-- Slide 1: Programming Languages -->
    <div class="carousel-item w-[85vw] md:w-[600px]">
      <Card>
        <h2 class="text-center text-xl md:text-2xl font-bold mb-8">Programming Languages</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <Pill>Python</Pill>
          <Pill>C++</Pill>
          <Pill>JavaScript</Pill>
          <Pill>TypeScript</Pill>
          <Pill>MATLAB</Pill>
          <Pill>Go</Pill>
          <Pill>Rust</Pill>
        </div>
      </Card>
    </div>

    <!-- Slide 2: AI/ML -->
    <div class="carousel-item w-[85vw] md:w-[600px]">
      <Card>
        <h2 class="text-center text-xl md:text-2xl font-bold mb-8">AI/ML & Data</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <Pill>Machine Learning</Pill>
          <Pill>PyTorch</Pill>
          <Pill>TensorFlow</Pill>
          <Pill>LLM Fine-tuning</Pill>
          <Pill>RAG</Pill>
          <Pill>Data Visualization</Pill>
        </div>
      </Card>
    </div>

    <!-- Slide 3: Engineering & Tools -->
    <div class="carousel-item w-[85vw] md:w-[600px]">
      <Card>
        <h2 class="text-center text-xl md:text-2xl font-bold mb-8">Hardware & Systems</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <Pill>PCB Schematic Capture</Pill>
          <Pill>Soldering</Pill>
          <Pill>Oscilloscopes</Pill>
          <Pill>Logic Analyzers</Pill>
          <Pill>Distributed Systems</Pill>
          <Pill>Docker / Vercel</Pill>
          <Pill>Agile / Scrum</Pill>
        </div>
      </Card>
    </div>

  </div>
</div>