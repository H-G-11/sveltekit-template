<script lang="ts">
  //  svelte and theme
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  // containers
  import Drawer from "$lib/containers/Navigation/Drawer.svelte";
  import AvatarDropdown from "$lib/containers/UserAvatar/AvatarDropdown.svelte";
  // app css
  import "../app.css";
  // stores
  import daisyUITheme from "$lib/stores/daisyUITheme";
  import type { daisyUIThemeType } from "$lib/stores/daisyUITheme";

  onMount(async () => {
    const theme = (await import("daisyui")).default;
    const defaultDaisyUIColors = theme?.config?.theme?.extend?.colors;
    daisyUITheme.set(defaultDaisyUIColors as daisyUIThemeType);
    themeChange(false);
  });
</script>

<div class="flex flex-col h-screen">
  <Drawer>
    <AvatarDropdown slot="user" />
    <div class="grow h-full" slot="content">
      <slot />
    </div>
  </Drawer>
</div>
