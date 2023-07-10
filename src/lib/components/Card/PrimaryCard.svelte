<script lang="ts">
  export let color: "primary" | "secondary";
</script>

<div
  class={color === "primary"
    ? "card shadow-md bg-primary"
    : "card shadow-md bg-secondary"}
>
  <div class="card-body text-base-200">
    <slot />
  </div>
</div>
