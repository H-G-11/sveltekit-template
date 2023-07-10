<script lang="ts">
  import SearchIcon from "../../assets/svg/SearchIcon.svelte";
  import possibleResults, { type resultType } from "./searchBoxPossibleResults";

  let results: resultType[] = [];
  let searchInput = "";
  let selected: resultType;

  const typeahead = () => {
    let resultsIncludes = possibleResults.filter((possibleResults) =>
      possibleResults.key.toLowerCase().includes(searchInput.toLowerCase())
    );
    let resultsStartWith = possibleResults.filter((possibleResults) =>
      possibleResults.key.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    results = resultsStartWith.sort().concat(resultsIncludes.sort());
    results = [...new Set(results)];
  };

  const handleResultSelection = (oneResult: resultType) => {
    searchInput = oneResult.key;
  };
</script>

<label class="searchbox relative mx-3 w-full">
  <div id="searchbox-container" class="dropdown w-full">
    <form autocomplete="off">
      <label for="searchfield">
        <SearchIcon
          c="pointer-events-none absolute z-10 mt-3 mb-3.5 ml-4 stroke-current opacity-60 text-base-content"
        />
        <input
          type="text"
          id="searchfield"
          placeholder="Search..."
          name="searchfield"
          class="input input-ghost input-m w-full pl-10 max-h-10 py-2"
          bind:value={searchInput}
          on:input={typeahead}
        />
      </label>
      <div
        class="pointer-events-none absolute right-5 top-2 tgap-1 opacity-50 hidden lg:flex"
      >
        <kbd class="kbd kbd-sm">ctrl</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
      </div>
    </form>
    {#if results.length !== 0}
      <ul class="p-2 mt-4 shadow dropdown-content rounded-box w-full">
        {#each results as oneResult}
          <li
            class="px-4 py-1 max-h-10 cursor-pointer"
            class:selected={selected === oneResult}
            role="option"
            on:mouseenter={() => {
              selected = oneResult;
            }}
            on:mousedown={() => handleResultSelection(oneResult)}
            aria-selected="true"
          >
            <div class="text-sm font-normal my-1 py-1 px-0">
              {oneResult.key}
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</label>

<style>
  li.selected {
    background: hsl(var(--n));
    color: hsl(var(--nc));
    border-radius: var(--rounded-btn);
  }
</style>
