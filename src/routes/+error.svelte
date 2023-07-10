<script lang="ts">
  import { page } from "$app/stores";
  import Gear from "$lib/assets/svg/Gear.svelte";
  import { onMount, onDestroy } from "svelte";

  let rotationDegrees = 0;
  let intervalRotate: number;

  onMount(() => {
    intervalRotate = setInterval(function () {
      rotationDegrees += (1 / 100) % 180;
    }, 1);
  });
  onDestroy(() => clearInterval(intervalRotate));
</script>

<div class="h-[80%] flex items-center justify-center">
  <div class="flex flex-col items-center justify-center prose">
    <Gear
      beginningColor="rgb(118, 53, 220)"
      endColor="#ffab00"
      {rotationDegrees}
    />
    <h1 class="main-title">Ooops!</h1>
    {#if $page?.status === 404}
      <h1 class="m-0">This page could not be found</h1>
      <h4 class="mt-8">We are working on it. Feel free to help us!</h4>
    {:else if $page?.status === 500}
      <h1 class="m-0">Something went wrong</h1>
      <h4 class="mt-8">We are sorry, and will do our best to correct it.</h4>
    {/if}
  </div>
</div>

<style>
  .main-title {
    background: -webkit-linear-gradient(
      300deg,
      rgb(118, 53, 220) 0%,
      #ffab00 25%,
      rgb(118, 53, 220) 50%,
      #ffab00 75%,
      rgb(118, 53, 220) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    font-size: 3rem;
    font-weight: 1000;
    line-height: 1;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 24px;
    letter-spacing: -2px;

    -webkit-animation: AnimateBG 40s ease infinite;
    animation: AnimateBG 40s ease infinite;
  }

  @-webkit-keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
