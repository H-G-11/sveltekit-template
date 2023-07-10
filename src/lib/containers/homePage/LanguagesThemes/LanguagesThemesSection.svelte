<script>
  import LanguagesThemesAnimated from "./LanguagesThemesAnimated.svelte";
  import LanguagesThemesHero from "./LanguagesThemesHero.svelte";
</script>

<div class="flex flex-col w-full">
  <LanguagesThemesHero />
  <div class="h-full hidden xl:block">
    <LanguagesThemesAnimated />
  </div>
</div>
