<script lang="ts">
  export let headers: string[] = [];
</script>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        {#each headers as colHeader}
          <th>{colHeader}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      <slot />
      <!-- row 1 -->
    </tbody>
  </table>
</div>
