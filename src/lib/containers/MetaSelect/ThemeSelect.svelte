<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import Dropdown from "$lib/components/Dropdown/Dropdown.svelte";
  import Theme from "$lib/assets/svg/Theme.svelte";
  import type { daisyUIThemeType } from "$lib/stores/daisyUITheme";
  import daisyUITheme, { colorNameToKey } from "$lib/stores/daisyUITheme";
  import hslStringToHex from "$lib/utils/colorFunctions";

  let observer: any;

  // The following is necessary to update Apexcharts theme on DaisyUI change.
  // There are probably better ways of doing so, but this is the closest to
  // what is adviced here: https://github.com/saadeghi/theme-change/issues/11.
  onMount(() => {
    observer = new MutationObserver(function () {
      const style = getComputedStyle(document.body);
      const colors = Object.fromEntries(
        Object.entries(colorNameToKey.colors).map(([k, v], i) => [
          k,
          hslStringToHex(style.getPropertyValue(v)),
        ])
      );
      const newThemeObject = {
        "font-family": style.getPropertyValue("font-family"),
        "color-scheme": style.getPropertyValue("color-scheme"),
        colors,
      };
      daisyUITheme.set(newThemeObject as daisyUIThemeType);
    });

    observer.observe(document.documentElement, { attributes: true });
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<Dropdown buttonText="Theme" dropdownTitle="theme-selection">
  <Theme slot="beginningSVG" />
  <div
    slot="options"
    class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"
  >
    <ul class="p-4 menu compact">
      <li>
        <button data-set-theme="light" data-act-class="active"
          >🌝  light
        </button>
      </li>
      <li>
        <button data-set-theme="dark" data-act-class="active">🌚  dark </button>
      </li>
      <li>
        <button data-set-theme="cupcake" data-act-class="active" class=""
          >🧁  cupcake
        </button>
      </li>
      <li>
        <button data-set-theme="bumblebee" data-act-class="active"
          >🐝  bumblebee
        </button>
      </li>
      <li>
        <button data-set-theme="emerald" data-act-class="active" class="active"
          >✳️  Emerald
        </button>
      </li>
      <li>
        <button data-set-theme="corporate" data-act-class="active"
          >🏢  Corporate
        </button>
      </li>
      <li>
        <button data-set-theme="synthwave" data-act-class="active"
          >🌃  synthwave
        </button>
      </li>
      <li>
        <button data-set-theme="retro" data-act-class="active"
          >👴  retro
        </button>
      </li>
      <li>
        <button data-set-theme="cyberpunk" data-act-class="active"
          >🤖  cyberpunk
        </button>
      </li>
      <li>
        <button data-set-theme="valentine" data-act-class="active"
          >🌸  valentine
        </button>
      </li>
      <li>
        <button data-set-theme="halloween" data-act-class="active"
          >🎃  halloween
        </button>
      </li>
      <li>
        <button data-set-theme="garden" data-act-class="active"
          >🌷  garden
        </button>
      </li>
      <li>
        <button data-set-theme="forest" data-act-class="active"
          >🌲  forest
        </button>
      </li>
      <li>
        <button data-set-theme="aqua" data-act-class="active">🐟  aqua </button>
      </li>
      <li>
        <button data-set-theme="lofi" data-act-class="active">👓  lofi </button>
      </li>
      <li>
        <button data-set-theme="pastel" data-act-class="active"
          >🖍  pastel
        </button>
      </li>
      <li>
        <button data-set-theme="fantasy" data-act-class="active"
          >🧚‍♀️  fantasy
        </button>
      </li>
      <li>
        <button data-set-theme="wireframe" data-act-class="active"
          >📝  Wireframe
        </button>
      </li>
      <li>
        <button data-set-theme="black" data-act-class="active"
          >🏴  black
        </button>
      </li>
      <li>
        <button data-set-theme="luxury" data-act-class="active"
          >💎  luxury
        </button>
      </li>
      <li>
        <button data-set-theme="dracula" data-act-class="active"
          >🧛‍♂️  dracula
        </button>
      </li>
      <li>
        <button data-set-theme="cmyk" data-act-class="active">🖨  CMYK </button>
      </li>
    </ul>
  </div>
</Dropdown>
