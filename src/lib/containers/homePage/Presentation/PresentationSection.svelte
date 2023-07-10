<script>
  import BlobPrimary from "$lib/assets/backgrounds/BlobPrimary.svelte";
  import BlobSecondary from "$lib/assets/backgrounds/BlobSecondary.svelte";
  import MovingImages from "./MovingImages.svelte";
  import HomeHero from "./HomeHero.svelte";
  import Blurry1 from "$lib/assets/backgrounds/Blurry1.svelte";
</script>

<div class="flex flex-col max-h-screen xl:flex-row h-5/6 relative">
  <div class="-top-16 left-0 absolute h-full w-full hidden md:block">
    <Blurry1 />
  </div>
  <!-- <div class="top-0 left-0 absolute">
    <BlobPrimary />
  </div>
  <div class="top-1/2 right-0 absolute -translate-y-96 hidden 2xl:block">
    <BlobSecondary />
  </div> -->
  <div class="h-full xl:w-2/5">
    <HomeHero />
  </div>

  <div class="h-full hidden xl:w-3/5 xl:block 2xl:-translate-y-16">
    {#await import("./MovingImages.svelte") then c}
      <svelte:component this={c.default} />
    {/await}
  </div>
</div>
