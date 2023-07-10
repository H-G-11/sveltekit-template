<script lang="ts">
  import FloatingDashboardAward from "$lib/assets/svg/FloatingDashboard/Award.svelte";
  import FloatingDashboardBase from "$lib/assets/svg/FloatingDashboard/Base.svelte";
  import FloatingDashboardCard from "$lib/assets/svg/FloatingDashboard/Card.svelte";
  import FloatingDashboardChart from "$lib/assets/svg/FloatingDashboard/Chart.svelte";
  import FloatingDashboardStat from "$lib/assets/svg/FloatingDashboard/Stat.svelte";
  import MovingElement from "$lib/components/MovingElement/MovingElement.svelte";

  let height = 600;
</script>

<div class="h-full relative overflow-hidden">
  <div class="absolute top-1/2 left-0 -translate-y-1/2 z-10">
    <MovingElement repeatEveryInMs={5000} fromTo={[5, -10]}>
      <FloatingDashboardAward {height} />
    </MovingElement>
  </div>
  <div class="absolute top-1/2 left-0 -translate-y-1/2 z-10">
    <MovingElement repeatEveryInMs={6000} fromTo={[-10, 10]}>
      <FloatingDashboardCard {height} />
    </MovingElement>
  </div>
  <div class="absolute top-1/2 left-0 -translate-y-1/2 z-10">
    <MovingElement repeatEveryInMs={7000} fromTo={[-15, 0]}>
      <FloatingDashboardChart {height} />
    </MovingElement>
  </div>
  <div class="absolute top-1/2 left-0 -translate-y-1/2 z-10">
    <MovingElement repeatEveryInMs={8000} fromTo={[-7, 13]}>
      <FloatingDashboardStat {height} />
    </MovingElement>
  </div>
  <div class="absolute top-1/2 left-0 -translate-y-1/2">
    <FloatingDashboardBase {height} />
  </div>
</div>
