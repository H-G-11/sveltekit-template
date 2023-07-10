<script lang="ts">
  import Icon from "@iconify/svelte";

  export let title: string;
  export let value: string;
  export let diff: number;
  export let textClass: string = "text-primary";
</script>

<div class="stat shadow-xl bg-base-100 rounded-lg">
  <div class="stat-figure {textClass}">
    <slot />
  </div>
  <div class="stat-title">{title}</div>
  <div class="stat-value">{value}</div>

  {#if diff > 0}
    <div class="stat-desc text-success">
      <Icon
        class="inline"
        icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
      />
      &nbsp;
      {diff} %
    </div>
  {:else}
    <div class="stat-desc text-error">
      <Icon
        icon="streamline:money-graph-arrow-decrease-down-stats-graph-descend-right-arrow"
        class="inline"
      />
      &nbsp;
      {diff} %
    </div>
  {/if}
</div>
