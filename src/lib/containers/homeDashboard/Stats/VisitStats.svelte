<script>
  import Connection from "$lib/assets/svg/Connection.svelte";
  import Stat from "$lib/components/Stat/Stat.svelte";
  import { t } from "$lib/locales/i18n";
</script>

<Stat title={$t("homepage.stats.website")} value="1,274" diff={-5.6}>
  <Connection color="hsl(var(--p))" height={24} />
</Stat>
