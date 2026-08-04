<script lang="ts">
	let { children } = $props();
</script>

<span
	class="inline-flex items-center rounded-full bg-[#D9D9D9]/35 px-4 py-1.5 text-xs font-medium whitespace-nowrap md:text-sm"
>
	{@render children()}
</span>
