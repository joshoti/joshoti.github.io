<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-[#464646]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 w-full border border-white/5">
    {@render children()}
</div>