<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
</script>

<div class="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav class="flex items-center justify-around w-full max-w-lg px-2 py-3 md:px-6 md:py-4 bg-[#D9D9D9]/35 backdrop-blur-lg rounded-full shadow-lg border border-white/10 text-sm md:text-base font-semibold">
        <a href={resolve('/')} class="px-4 py-2 rounded-full transition-colors {page.url.pathname === '/' ? 'text-white' : 'text-white/70 hover:text-white'}">Home</a>
        <a href={resolve('/projects')} class="px-4 py-2 rounded-full transition-colors {page.url.pathname === '/projects' ? 'text-white' : 'text-white/70 hover:text-white'}">Projects</a>
        <a href={resolve('/experience')} class="px-4 py-2 rounded-full transition-colors {page.url.pathname === '/experience' ? 'text-white' : 'text-white/70 hover:text-white'}">Experience</a>
        <a href={resolve('/skills')} class="px-4 py-2 rounded-full transition-colors {page.url.pathname === '/skills' ? 'text-white' : 'text-white/70 hover:text-white'}">Skills</a>
    </nav>
</div>