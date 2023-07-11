<script lang="ts">
  import Chat from "$lib/assets/svg/Chat.svelte";
  import Dashboard from "$lib/assets/svg/Dashboard.svelte";
  import Icon404 from "$lib/assets/svg/Icon404.svelte";
  import Install from "$lib/assets/svg/Install.svelte";
  import Pen from "$lib/assets/svg/Pen.svelte";
  import Robot from "$lib/assets/svg/Robot.svelte";
  import Settings from "$lib/assets/svg/Settings.svelte";
  import UserDrawer from "$lib/assets/svg/UserDrawer.svelte";
  import Title from "$lib/components/Brand/Title.svelte";
  import Navbar from "./Navbar.svelte";
  import { page } from "$app/stores";

  import { t } from "$lib/locales/i18n";

  export let checked = false;

  function handleClickHome() {
    checked = false;
  }
</script>

<div class="drawer h-full" class:lg:drawer-open={$page.url.pathname !== "/"}>
  <input id="drawer" type="checkbox" class="drawer-toggle" bind:checked />
  <div class="drawer-content">
    <div
      class="
    sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur
    text-base-content
    "
    >
      <Navbar>
        <slot name="user" />
      </Navbar>
    </div>
    <div class="max-w-[100vw] h-full">
      <slot name="content" />
    </div>
  </div>
  <div class="drawer-side z-40">
    <label for="drawer" class="drawer-overlay" />
    <aside class="w-80 flex flex-col h-full bg-base-100">
      <div
        class="sticky top-0 z-20 hidden items-center gap-2 px-4 py-2 backdrop-blur lg:flex"
      >
        <a href="/" class="btn btn-ghost px-2" on:click={handleClickHome}>
          <Title />
        </a>
      </div>
      <div class="h-4" />
      <ul class="menu menu-lg px-4 py-0">
        <li class="menu-title">
          <h1>{$t("navbar.app")}</h1>
        </li>
        <li>
          <a href="/dashboard" class="px-4 py-2"
            ><span>
              <Dashboard />
            </span>
            <span>{$t("navbar.dashboard")}</span></a
          >
        </li>
        <li>
          <a href="/user" class="px-4 py-2"
            ><span>
              <UserDrawer />
            </span>
            <span>{$t("navbar.user")}</span></a
          >
        </li>
        <li>
          <a href="/chat" class="px-4 py-2"
            ><span>
              <Chat />
            </span>
            <span>{$t("navbar.chat")}</span></a
          >
        </li>
        <li>
          <a href="/settings" class="px-4 py-2"
            ><span>
              <Settings />
            </span>
            <span>{$t("navbar.settings")}</span></a
          >
        </li>
        <li>
          <a href="/this-page-does-not-exist" class="px-4 py-2"
            ><span>
              <Icon404 />
            </span>
            <span>{$t("navbar.page404")}</span></a
          >
        </li>
        <li class="menu-title">
          <h1>{$t("navbar.howToUse")}</h1>
        </li>
        <li>
          <a href="/install" class="px-4 py-2"
            ><span>
              <Install />
            </span>
            <span>{$t("navbar.install")}</span></a
          >
        </li>
        <li>
          <a href="/techstack" class="px-4 py-2"
            ><span>
              <Robot />
            </span>
            <span>{$t("navbar.techstack")}</span></a
          >
        </li>
        <li>
          <a href="/adapt" class="px-4 py-2"
            ><span>
              <Pen />
            </span>
            <span>{$t("navbar.adapt")}</span></a
          >
        </li>
      </ul>
      <div class="grow" />
      <div class="card bg-primary-content shadow-xl text-primary m-2 mb-8">
        <div class="card-body">
          <h2 class="card-title">{$t("navbar.card.title")}</h2>
          <p>{$t("navbar.card.text")}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">{$t("navbar.card.button")}</button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>
