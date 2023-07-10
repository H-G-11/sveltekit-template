<script>
  import { page } from "$app/stores";
  import Shield from "$lib/assets/svg/Shield.svelte";

  import { t } from "$lib/locales/i18n";

  const user = $page.data.session?.user;
</script>

{#if user}
  <slot />
{:else}
  <div class="h-[80%] flex items-center justify-center">
    <div class="flex flex-col items-center justify-center prose">
      <Shield height={400} />
      <h1 class="main-title">{$t("error.logIn.title")}</h1>
      <h3>{$t("error.logIn.message")}</h3>
    </div>
  </div>
{/if}

<style>
  .main-title {
    background: -webkit-linear-gradient(
      300deg,
      rgb(118, 53, 220) 0%,
      #ffab00 25%,
      rgb(118, 53, 220) 50%,
      #ffab00 75%,
      rgb(118, 53, 220) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    font-size: 3rem;
    font-weight: 1000;
    line-height: 1.3;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 24px;
    letter-spacing: -2px;

    -webkit-animation: AnimateBG 40s ease infinite;
    animation: AnimateBG 40s ease infinite;
  }

  @-webkit-keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
