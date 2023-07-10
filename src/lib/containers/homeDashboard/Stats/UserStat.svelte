<script>
  import User from "$lib/assets/svg/User.svelte";
  import Stat from "$lib/components/Stat/Stat.svelte";
  import { t } from "$lib/locales/i18n";
</script>

<Stat title={$t("homepage.stats.users")} value="6,374" diff={2.6}>
  <User color="hsl(var(--p))" height={24} />
</Stat>
