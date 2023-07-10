<script lang="ts">
  import { logoPath, innerFastAPIPath } from "./path";
  import { quintOut } from "svelte/easing";
  import { fade, draw, fly } from "svelte/transition";
  import { expand } from "../Transitions/TransitionSVG";

  export let height: number;

  let duration = 4000;
  let delay = 200;
  let condition = false;
  setTimeout(() => (condition = true));
</script>

<svg {height} class="mb-4" viewBox="0 0 10195 2234">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(var(--p));stop-opacity:100%" />
      <stop offset="100%" style="stop-color:hsl(var(--s));stop-opacity:100%" />
    </linearGradient>
  </defs>
  <g>
    {#if condition}
      <path
        in:draw={{ duration: 20000, easing: quintOut }}
        d={logoPath}
        fill="none"
        stroke="url(#grad1)"
        stroke-width="50px"
      />
      <path
        in:draw={{ duration: 2000, easing: quintOut }}
        d={innerFastAPIPath}
        fill="none"
        stroke="url(#grad1)"
        stroke-width="50px"
      />
      <path
        in:expand={{ duration: 400, delay: 1600, easing: quintOut }}
        d={logoPath}
        fill="url(#grad1)"
      />
      <path
        in:expand={{ duration: 400, delay: 1600, easing: quintOut }}
        d={innerFastAPIPath}
        fill="white"
      />
    {/if}
  </g>
</svg>
