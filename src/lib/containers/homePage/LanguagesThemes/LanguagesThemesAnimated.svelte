<!-- Code from Joy Of Code -->
<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { tick } from "svelte";

  import countries from "$lib/assets/images/flags/index";
  import themes from "$lib/assets/images/themes/index";

  import animatedImages from "$lib/stores/animatedImages";

  type Layout = "hidden" | "shown";
  let layoutLanguages: Layout = "hidden";
  let layoutThemes: Layout = "hidden";
  let unsubscribe = () => {};

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const Flip = (await import("gsap/Flip")).default;

    gsap.registerPlugin(Flip);

    async function flip(flipType: "themes" | "languages") {
      let state;
      if (flipType === "themes") {
        state = Flip.getState(`.themes`, {
          props: "borderRadius,opacity",
        });
        layoutThemes = $animatedImages === "themesStart" ? "shown" : "hidden";
      } else {
        state = Flip.getState(`.languages`, {
          props: "borderRadius,opacity",
        });
        layoutLanguages =
          $animatedImages === "languagesStart" ? "shown" : "hidden";
      }
      await tick();
      Flip.from(state, {
        duration: 0.6,
        // absolute: true,
        stagger: -0.1,
        spin: true,
        ease: "power1.easeOut",
      });
    }

    unsubscribe = animatedImages.subscribe((value) => {
      flip(value.toLowerCase().includes("themes") ? "themes" : "languages");
    });
  });

  onDestroy(unsubscribe);
</script>

<div
  class="grid grid-rows-2 grid-flow-col gap-4 h-64 w-full min-w-full relative"
>
  <div
    class="container w-full min-w-full h-60 absolute top-0 left-1/2 -translate-x-1/2"
  >
    <div data-layout={layoutLanguages}>
      {#each Object.entries(countries) as [alt, src]}
        <img class="circle languages" {src} {alt} loading="lazy" />
      {/each}
    </div>
  </div>
  <div
    class=" container h-60 w-full min-w-full absolute top-0 left-1/2 -translate-x-1/2"
  >
    <div data-layout={layoutThemes}>
      {#each Object.entries(themes) as [alt, src]}
        <img class="circle themes" {src} {alt} loading="lazy" />
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    place-content: center;
    cursor: pointer;
  }

  [data-layout="hidden"] .languages {
    aspect-ratio: 1;
    opacity: 0;
  }

  [data-layout="hidden"] .themes {
    aspect-ratio: 1;
    opacity: 0;
  }

  .languages {
    aspect-ratio: 3/2;
  }

  .themes {
    aspect-ratio: 16/9;
  }

  .circle {
    width: 100px;
    border-radius: 50%;
  }

  [data-layout="hidden"] {
    display: flex;
  }

  [data-layout="hidden"] .circle:not(:first-child) {
    margin-left: -40px;
  }

  [data-layout="shown"] {
    display: flex;
  }

  [data-layout="shown"] .circle {
    border-radius: 20%;
    margin-right: 1rem;
  }
</style>
