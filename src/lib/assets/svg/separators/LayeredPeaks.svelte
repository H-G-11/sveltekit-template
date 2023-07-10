<script lang="ts">
  import BaseSeparator from "./BaseSeparator.svelte";

  export let fill = "hsl(var(--n))";
  export let rotate = false;
  let opacities = ["0.1", "0.3", "1"];
  let paths = [
    "M0 84L1200 28L1200 101L0 101Z",
    "M0 95L1200 45L1200 101L0 101Z",
    "M0 94L1200 68L1200 101L0 101Z",
  ];
</script>

<BaseSeparator viewBox="0 0 1200 100" {paths} {opacities} {fill} {rotate} />
