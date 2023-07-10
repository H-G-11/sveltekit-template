<script lang="ts">
  import PrimaryCard from "$lib/components/Card/PrimaryCard.svelte";

  export let title: string;
  export let subTitle: string;
  export let percentage: number;
  export let color: "primary" | "secondary";
</script>

<PrimaryCard {color}>
  <div class="flex flex-row">
    <div class="basis-1/4">
      <div class="radial-progress" style="--value:{percentage};">
        {percentage}%
      </div>
    </div>
    <div class="prose basis-3/4 text-base-200">
      <h1 class="card-title m-0 text-base-200">{title}</h1>
      <p class="text-opacity-50">{subTitle}</p>
    </div>
  </div>
</PrimaryCard>
