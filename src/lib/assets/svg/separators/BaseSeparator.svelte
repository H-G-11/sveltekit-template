<script lang="ts">
  export let fill = "hsl(var(--n))";
  export let rotate = false;
  export let opacities: (string | number)[];
  export let paths: string[] | string[][];
  export let viewBox: string;
  export let durations: (string | number)[] = [];
</script>

<svg
  {viewBox}
  class="w-full"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  class:rotate-180={rotate}
>
  {#each paths as d, i}
    {#if typeof d === "string"}
      <path {d} {fill} opacity={opacities[i]} />
    {:else}
      <path d={d[0]} {fill} fill-opacity={opacities[i]}>
        <animate
          attributeName="d"
          dur="{durations?.[i]}s"
          begin="1s"
          values="{d?.[0]};{d?.[1]};{d?.[0]};"
          repeatCount="indefinite"
        />
      </path>
    {/if}
  {/each}
</svg>
