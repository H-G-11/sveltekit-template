<script>
  import Language from "../../assets/svg/Language.svelte";
  import Dropdown from "../../components/Dropdown/Dropdown.svelte";
  import { locale, localeLanguages } from "../../locales/i18n";

  const LocaleLanguageAbbrevToFull = {
    en: "English (en)",
    fr: "French (fr)",
  };
</script>

<Dropdown buttonText="" dropdownTitle="theme-selection">
  <Language slot="beginningSVG" />
  <div
    slot="options"
    class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box bg-base-200 text-base-content"
  >
    <ul class="p-4 menu compact">
      {#each localeLanguages as l}
        <li>
          <button on:click={() => ($locale = l)} class:active={$locale === l}
            >{LocaleLanguageAbbrevToFull[l]}</button
          >
        </li>
      {/each}
    </ul>
  </div>
</Dropdown>
