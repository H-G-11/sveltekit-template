<script>
  import Github from "$lib/assets/svg/Github.svelte";
  import Youtube from "$lib/assets/svg/Youtube.svelte";
  import Medium from "$lib/assets/svg/Medium.svelte";
  import FastIcon from "$lib/assets/svg/FastIcon.svelte";
</script>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <div class="items-center grid-flow-col">
    <FastIcon height={48} />
    <p>Fast App - use without limits</p>
  </div>
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a
      href="https://github.com/HuguesGallier/sveltekit-template"
      aria-label="Link To GitHub"><Github /></a
    >
    <a href="#top" aria-label="Link To YouTube"><Youtube /></a>
    <a href="#top" aria-label="Link To Medium"><Medium /></a>
  </div>
</footer>
