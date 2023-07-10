<script lang="ts">
  import BaseChart from "$lib/components/Chart/BaseChart.svelte";
  import { fNumber } from "$lib/utils/formatNumber";

  import { t } from "$lib/locales/i18n";

  let baseOptions = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => "",
        },
      },
    },
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "28%",
        borderRadius: 2,
      },
    },
  };
</script>

<div class="card bg-base-100 h-full shadow-xl">
  <div class="card-body styled-chart">
    <div class="card-title">{$t("homepage.conversersions.title")}</div>
    <p class="text-neutral">{$t("homepage.conversersions.change")}</p>
    <BaseChart {baseOptions} />
  </div>
</div>
