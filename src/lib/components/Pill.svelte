<script lang="ts">
	let { children } = $props();
</script>

<span class="inline-flex items-center px-4 py-1.5 bg-[#D9D9D9]/35 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
    {@render children()}
</span>