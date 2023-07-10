<!-- Greatly inspired from https://angle.sh/ -->
<script lang="ts">
  import WaveBackground from "$lib/assets/backgrounds/WaveBackground.svelte";
  import Auth0 from "$lib/assets/logos/Auth0.svelte";
  import FastApi from "$lib/assets/logos/FastAPI.svelte";
  import MongoDb from "$lib/assets/logos/MongoDB.svelte";
  import Python from "$lib/assets/logos/Python.svelte";
  import Svelte from "$lib/assets/logos/Svelte.svelte";
  import Tailwind from "$lib/assets/logos/Tailwind.svelte";
  import Hexagon from "$lib/assets/shapes/Hexagon.svelte";
  import { onDestroy, onMount } from "svelte";

  let resizeListener: any;
  let scaleFactor: number = 1;
  let height: number = 720;

  function scaleAccordingToSize() {
    scaleFactor = window.innerWidth / 1300;
    height = scaleFactor * 720;
    console.log({ scaleFactor, height });
  }

  onMount(() => {
    scaleAccordingToSize();
    resizeListener = addEventListener("resize", scaleAccordingToSize);
  });
  onDestroy(() => {
    if (typeof window !== "undefined") {
      removeEventListener("resize", resizeListener);
    }
  });
</script>

<!-- absolute  -->
<div class="relative w-full overflow-hidden h-1/2 mt-16">
  <div class="flex flex-col items-center">
    <div class="w-full text-center font-barlow">
      <h1 class="sub-title">The Technologies You Love</h1>
      <p class="mt-8">
        Python, Svelte and MongoDB hand-in-hand. That's all you need to be <br
        /> fast and efficient!
      </p>
    </div>
  </div>
  <div class="absolute -translate-x-1/2 top-1/4 left-1/2">
    <WaveBackground />
  </div>
  <div
    class="absolute -translate-x-1/2 bottom-[500px] min-[420px]:bottom-[450px] sm:bottom-1/4 left-1/2"
  >
    <div
      class="to-scale w-full h-full"
      style="--scale:{scaleFactor};--height:{height}px"
    >
      <div class="h-[720px] w-[1300px] hoverable-container">
        <div class="absolute top-[251px] left-[33px]">
          <Hexagon
            height={300}
            startColor={"hsl(var(--sf))"}
            endColor={"hsl(var(--s))"}
          />
        </div>
        <div class="absolute top-[150px] left-[328px]">
          <Hexagon
            height={440}
            startColor={"hsl(var(--in))"}
            endColor={"hsl(var(--in))"}
          />
        </div>
        <div class="absolute top-[0px] left-[818px]">
          <Hexagon
            height={410}
            startColor={"hsl(var(--su))"}
            endColor={"hsl(var(--su))"}
          />
        </div>
        <div class="absolute top-[515px] left-[300px]">
          <Hexagon
            height={200}
            startColor={"hsl(var(--a))"}
            endColor={"hsl(var(--af))"}
          />
        </div>
        <div class="absolute top-[410px] left-[760px]">
          <Hexagon
            height={240}
            startColor={"hsl(var(--p))"}
            endColor={"hsl(var(--pf))"}
          />
        </div>
        <div class="absolute top-[190px] left-[0px]">
          <Hexagon height={210}><Python /></Hexagon>
        </div>
        <div class="absolute top-[275px] left-[160px]">
          <Hexagon height={340}><Svelte /></Hexagon>
        </div>
        <div class="absolute top-[456px] left-[436px]">
          <Hexagon height={290}><MongoDb /></Hexagon>
        </div>
        <div class="absolute top-[153px] left-[610px]">
          <Hexagon height={375}><FastApi /></Hexagon>
        </div>
        <div class="absolute top-[55px] left-[930px]">
          <Hexagon height={243}><Auth0 /></Hexagon>
        </div>
        <div class="absolute top-[392px] left-[930px]">
          <Hexagon height={200}><Tailwind /></Hexagon>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .hoverable-container:hover > * {
    transform: translate(50px, -20px);
  }
  .hoverable-container > *:hover {
    transform: translate(0px, -50px);
  }
  .hoverable-container > * {
    transition: all 1s cubic-bezier(0.2, 0.2, 0.2, 1) 0s;
    cursor: auto;
  }
  .sub-title {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;
    line-height: 1.3333333333333333;
    letter-spacing: -3px;
  }
  @media (max-width: 1300px) {
    .to-scale {
      transform: scale(var(--scale));
      height: var(--height);
    }
  }
</style>
