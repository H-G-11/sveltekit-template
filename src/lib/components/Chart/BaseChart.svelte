<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import apexchartsStylesFromTheme from "./styles";
  import daisyUIColors from "$lib/stores/daisyUITheme";

  let container: HTMLDivElement;
  let lineChart: ApexCharts;

  export let baseOptions: any;

  onMount(async () => {
    const ApexCharts = (await import("apexcharts")).default;
    lineChart = new ApexCharts(
      container,
      apexchartsStylesFromTheme($daisyUIColors, baseOptions)
    );

    lineChart.render();

    return () => lineChart.destroy();
  });

  const unsubscribe = daisyUIColors.subscribe((val) => {
    if (lineChart) {
      const options = apexchartsStylesFromTheme(val, baseOptions);
      lineChart.updateOptions(options);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="container styled-chart" bind:this={container} />

<style>
  .styled-chart {
    height: "400px";
    margin-top: "40px";
  }
</style>
