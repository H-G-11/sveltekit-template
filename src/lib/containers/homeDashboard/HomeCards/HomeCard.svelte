<script lang="ts">
  import HeroCard from "$lib/components/Card/HeroCard.svelte";

  import { t } from "$lib/locales/i18n";

  let title = "Jaydon Frankie";
</script>

<HeroCard
  beforeTitle={$t("homepage.welcome")}
  {title}
  subTitle={$t("homepage.subtitle")}
/>
