<script lang="ts">
  import { t } from "$lib/locales/i18n";
  import type { LocaleKey } from "$lib/locales/translations";

  function localeStringFromMonthIndex(monthIndex: number): LocaleKey {
    return `month.${monthIndex}` as LocaleKey;
  }
</script>

<div class="form-control w-full">
  <!-- <label class="label" for="month-select">
    <span />
    <span class="label-text-alt">{$t("homepage.form.month")}</span>
  </label> -->
  <select class="select select-bordered" id="month-select">
    <option selected value={-1}>{$t("homepage.form.ytd")}</option>
    {#each [...Array(12).keys()] as monthIndex}
      <option value={monthIndex}
        >{$t(localeStringFromMonthIndex(monthIndex))}</option
      >
    {/each}
  </select>
</div>
