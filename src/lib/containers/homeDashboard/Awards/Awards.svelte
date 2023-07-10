<script>
  import { flip } from "svelte/animate";
  import OverlayCard from "$lib/components/Card/OverlayCard.svelte";

  import background1 from "$lib/assets/backgrounds/background-1.jpg";
  import background2 from "$lib/assets/backgrounds/background-2.jpg";
  import background3 from "$lib/assets/backgrounds/background-3.jpg";
  import background4 from "$lib/assets/backgrounds/background-4.jpg";
  import CustomCard from "$lib/components/Card/CustomCard.svelte";

  let awardList = [
    {
      upperText: "New Award",
      title: "Best Performer",
      subTitle: "Congrats on your Performer award!",
      backgroundRef: background1,
    },
    {
      upperText: "New Award",
      title: "Most Deals in a day",
      subTitle: "Such an achievement",
      backgroundRef: background2,
    },
    {
      upperText: "New Award",
      title: "Most Innovative Idea",
      subTitle: "Keep up the good work!",
      backgroundRef: background4,
    },
  ];
  let seenList = [];
</script>

<div class="stack h-full">
  {#each awardList as award}
    <CustomCard {...award} />
  {/each}
  <div class="grid h-full place-items-center">No more awards here!</div>
</div>
