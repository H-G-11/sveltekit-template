<script lang="ts">
  export let buttonText: string;
  export let dropdownTitle: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div title={dropdownTitle} class="dropdown dropdown-end">
  <div tabindex="-1" class="btn btn-ghost normal-case fill-base-content">
    <slot name="beginningSVG" />
    <span class="hidden md:inline"> {buttonText} </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1792 1792"
      class="w-5 h-5 fill-current"
    >
      <path
        d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
      />
    </svg>
  </div>
  <slot name="options" />
</div>
