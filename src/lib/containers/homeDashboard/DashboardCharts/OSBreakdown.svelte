<script lang="ts">
  import BaseChart from "$lib/components/Chart/BaseChart.svelte";
  import { fCurrency } from "$lib/utils/formatNumber";

  let baseOptions = {
    series: [44, 55, 41, 17, 15],
    stroke: {
      width: 3,
      colors: "#ffffff00",
      curve: "smooth",
      lineCap: "round",
    },
    chart: {
      height: 400,
      type: "donut",
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        bottom: 30,
      },
    },
    labels: ["Mac", "Windows", "IOS", "Android", "Linux"],
    legend: {
      floating: false,
      horizontalAlign: "center",
      position: "bottom",
      // offsetY: 15,
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value: number) => fCurrency(value),
        title: {
          formatter: (seriesName: string) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -30,
        },
        donut: {
          size: "90%",
          labels: {
            show: true,
            value: {
              formatter: (v: number | string) =>
                fCurrency(typeof v === "number" ? v : v.split(".")[0]),
            },
            total: {
              show: true,
              formatter: (w: { globals: { seriesTotals: number[] } }) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return fCurrency(sum);
              },
            },
          },
        },
      },
    },
  };
</script>

<div class="card bg-base-100 shadow-xl">
  <div class="card-body styled-chart os-breakdown">
    <BaseChart {baseOptions} />
  </div>
</div>

<style>
  .os-breakdown :global(.apexcharts-legend) {
    padding-top: 10px;
    height: 73px;
    border-top: 1px dashed rgba(145, 158, 171, 0.2);
  }
</style>
