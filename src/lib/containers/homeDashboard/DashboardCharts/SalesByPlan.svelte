<script lang="ts">
  import BaseChart from "$lib/components/Chart/BaseChart.svelte";
  import { fCurrency } from "$lib/utils/formatNumber";
  import sumBy from "lodash/sumBy";

  const series = [
    {
      label: "Premium Plan",
      value: 14303,
    },
    {
      label: "Basic Plan",
      value: 18474,
    },
  ];

  const total = sumBy(series, "value");

  let baseOptions = {
    series: series.map(({ value }) => (100 * value) / total),
    labels: series.map(({ label }) => label),
    legend: {
      floating: false,
      horizontalAlign: "center",
      position: "bottom",
    },
    chart: {
      height: 500,
      type: "radialBar",
      zoom: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        bottom: 30,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "64%" },
        dataLabels: {
          offset: -30,
          name: { offsetY: -16 },
          value: { offsetY: 8 },
          total: {
            label: "Sales",
            formatter: () => `${fCurrency(total)}`,
          },
        },
      },
    },
  };
</script>

<div class="card bg-base-100 h-full shadow-xl">
  <div class="card-body styled-chart sales-by-plan">
    <BaseChart {baseOptions} />
  </div>
</div>

<style>
  .sales-by-plan :global(.apexcharts-legend) {
    padding-top: 10px;
    height: 73px;
    border-top: 1px dashed rgba(145, 158, 171, 0.2);
  }
</style>
