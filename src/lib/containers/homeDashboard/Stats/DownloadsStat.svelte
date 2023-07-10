<script>
  import Download from "$lib/assets/svg/Download.svelte";
  import Stat from "$lib/components/Stat/Stat.svelte";

  import { t } from "$lib/locales/i18n";
</script>

<Stat title={$t("homepage.stats.downloads")} value="126,374" diff={12.6}>
  <Download color="hsl(var(--p))" height={24} />
</Stat>
