<script>
  import { blur } from "svelte/transition";
  import HomeHero from "./HomeHero.svelte";
  import Blurry1 from "$lib/assets/backgrounds/Blurry1.svelte";
</script>

<div class="flex flex-col max-h-screen xl:flex-row h-5/6 relative">
  <div class="-top-16 left-0 absolute h-full w-full hidden md:block">
    <Blurry1 />
  </div>
  <div class="h-full xl:w-2/5" transition:blur|local={{ duration: 500 }}>
    <HomeHero />
  </div>

  <div class="h-full hidden xl:w-3/5 xl:block 2xl:-translate-y-16">
    {#await import("./MovingImages.svelte") then c}
      <svelte:component this={c.default} />
    {/await}
  </div>
</div>
