<script lang="ts">
  export let repeatEveryInMs: number;
  export let fromTo: [number, number];
  let repeatEveryInSeconds = `${Math.floor(repeatEveryInMs / 1000)}s`;
</script>

<div
  style="--fromStart:{fromTo[0]};--toEnd:{fromTo[1]};--repeatEveryInSeconds:{repeatEveryInSeconds}"
  class="moving-image"
>
  <slot />
</div>

<style>
  .moving-image {
    -webkit-animation: mover var(--repeatEveryInSeconds) infinite alternate;
    animation: mover var(--repeatEveryInSeconds) infinite alternate;
    animation-timing-function: ease-in-out;
  }

  @-webkit-keyframes mover {
    0% {
      transform: translateY(calc(var(--fromStart) * 1px));
    }
    100% {
      transform: translateY(calc(var(--toEnd) * 1px));
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(calc(var(--fromStart) * 1px));
    }
    100% {
      transform: translateY(calc(var(--toEnd) * 1px));
    }
  }
</style>
