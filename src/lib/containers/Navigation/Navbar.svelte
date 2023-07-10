<script>
  import ThemeSelect from "../MetaSelect/ThemeSelect.svelte";
  import LanguageSelect from "../MetaSelect/LanguageSelect.svelte";
  import LinesMenu from "../../assets/svg/LinesMenu.svelte";
  import Title from "../../components/Brand/Title.svelte";
  import Searchbox from "../../components/Searchbox/Searchbox.svelte";
  import { page } from "$app/stores";
</script>

<nav class="navbar w-full">
  <div class="flex flex-1 md:gap-1 lg:gap-2">
    <!-- Drawer button -->
    <span
      class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip="Menu"
    >
      <label
        for="drawer"
        class="btn btn-square btn-ghost drawer-button"
        class:lg:hidden={$page.url.pathname !== "/"}
      >
        <LinesMenu />
      </label>
    </span>

    <!-- Title -->
    <div
      class="flex items-center gap-2"
      class:lg:hidden={$page.url.pathname !== "/"}
    >
      <a class="flex-0 btn btn-ghost px-2" href="#top">
        <Title />
      </a>
    </div>

    <!-- Search Box -->
    <div class="hidden w-full max-w-sm lg:flex">
      <Searchbox />
    </div>
  </div>

  <div class="flex-0">
    <ThemeSelect />
    <LanguageSelect />
    <slot />
  </div>
</nav>
