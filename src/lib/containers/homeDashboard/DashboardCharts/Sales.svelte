<script lang="ts">
  import BaseChart from "$lib/components/Chart/BaseChart.svelte";

  let baseOptions = {
    series: [
      {
        name: "Asia",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
        name: "Europe",
        data: [41, 34, 38, 40, 29, 35, 39, 51, 68],
      },
    ],
    chart: {
      height: 450,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    title: {
      text: "Area Installed",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
</script>

<div class="card bg-base-100 h-full shadow-xl">
  <div class="card-body styled-chart">
    <BaseChart {baseOptions} />
  </div>
</div>
