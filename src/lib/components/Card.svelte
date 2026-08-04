<script lang="ts">
	let { children } = $props();
</script>

<div class="w-full rounded-3xl border border-white/5 bg-[#464646]/60 p-6 backdrop-blur-md md:p-8">
	{@render children()}
</div>
