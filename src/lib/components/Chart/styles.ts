import merge from "lodash/merge"
import type { daisyUIThemeType } from "$lib/stores/daisyUITheme"

export default function apexchartsStylesFromTheme(
  theme: daisyUIThemeType,
  options?: any
) {
  const LABEL_TOTAL = {
    show: true,
    label: "Total",
    color: theme?.colors?.["base-content"],
    fontSize: "0.875rem",
    fontWeight: 460,
    lineHeight: 2.5,
  }
  const LABEL_VALUE = {
    offsetY: 12,
    color: theme?.colors?.["base-content"],
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 2.5,
  }
  const colors = [
    theme?.colors?.primary,
    theme?.colors?.warning,
    theme?.colors?.info,
    theme?.colors?.error,
    theme?.colors?.success,
    theme?.colors?.["warning-content"],
    theme?.colors?.["success-content"],
    theme?.colors?.["info-content"],
    theme?.colors?.["primary-content"],
  ].filter((c) => typeof c !== "undefined")

  const baseOptions: any = {
    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: false },
      foreColor: theme?.colors?.["base-content"],
      fontFamily: theme?.["font-family"],
    },

    // States
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Datalabels
    dataLabels: { enabled: false },

    // Stroke
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round",
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: theme?.colors?.["base-300"],
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
      borderColor: theme?.colors?.["base-100"],
    },

    // Tooltip
    tooltip: {
      x: {
        show: false,
      },
    },

    // Legend
    legend: {
      show: true,
      fontSize: String(13),
      position: "top",
      horizontalAlign: "right",
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        theme: theme?.colors?.["base-content"],
      },
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        borderRadius: 4,
        columnWidth: "28%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },

      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },

      // Radialbar
      radialBar: {
        track: {
          strokeWidth: "100%",
          background: theme?.colors?.["base-300"],
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },

      // Radar
      radar: {
        polygons: {
          fill: { theme: ["transparent"] },
          // stroketheme: theme.palette.divider,
          // connectortheme: theme.palette.divider,
        },
      },

      // polarArea
      // polarArea: {
      //   rings: {
      //     strokeColor: theme.palette.divider,
      //   },
      //   spokes: {
      //     connectortheme: theme.palette.divider,
      //   },
      // },
    },

    // Responsive
    responsive: [
      {
        // sm
        // breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        // md
        // breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  }
  if (colors.length) {
    baseOptions["colors"] = colors
  }
  return merge(baseOptions, options)
}
