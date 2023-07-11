<script lang="ts">
  import { fly } from "svelte/transition";
  let visible = true;

  export let upperText: string;
  export let title: string;
  export let subTitle: string;
  export let backgroundRef: any;
</script>

{#if visible}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    out:fly|local={{ y: -200, duration: 500 }}
    in:fly={{ y: -200, duration: 500 }}
    on:click={() => (visible = false)}
    class="flex flex-col-reverse rounded-xl h-full w-full bg-cover prose p-3 pb-0 cursor-pointer"
    style="background-image: linear-gradient(rgba(22, 28, 36, 0) 0%, rgb(22, 28, 36) 75%), url('{backgroundRef}'); "
  >
    <p class="text-white text-sm">{subTitle}</p>
    <h2 class="text-white m-0">{title}</h2>
    <span class="text-secondary uppercase font-bold">{upperText}</span>
  </div>
{/if}
