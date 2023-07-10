<script lang="ts">
  import animatedImages from "$lib/stores/animatedImages";
  import { onDestroy, onMount } from "svelte";

  export let typeEvery: number = 150;
  export let allTextToDisplay: string[] = ["Themes", "Languages"];
  export let waitForIntervals: number = 6;
  export let onChangeTypeState: (
    indexTextToDisplay: number,
    displayedText: string
  ) => void;

  let displayedText: string = "";
  let indexTextToDisplay: number = 0;
  let isWriting: boolean = true;
  let intervalTyping: number;
  let intervalWaited: number = 0;

  function handleType() {
    if (displayedText === allTextToDisplay?.[indexTextToDisplay]) {
      handleTypeFullTextDisplayed();
    } else if (!displayedText.length) {
      handleTypeNoTextDisplayed();
    } else {
      handleTypeTextTyping();
    }
  }

  onMount(() => {
    onChangeTypeState(1, displayedText);
    intervalTyping = setInterval(handleType, typeEvery);
  });

  onDestroy(() => clearInterval(intervalTyping));

  function handleTypeFullTextDisplayed() {
    if (!isWriting) {
      displayedText = displayedText.slice(0, -1);
    } else {
      if (intervalWaited === waitForIntervals) {
        isWriting = false;
        onChangeTypeState(indexTextToDisplay, displayedText);
        intervalWaited = 0;
      } else {
        intervalWaited = intervalWaited + 1;
      }
    }
  }

  function handleTypeNoTextDisplayed() {
    if (isWriting) {
      displayedText = displayedText.concat(
        allTextToDisplay?.[indexTextToDisplay]?.[0]
      );
    } else {
      if (intervalWaited === waitForIntervals) {
        isWriting = true;
        onChangeTypeState(indexTextToDisplay, displayedText);
        indexTextToDisplay = (indexTextToDisplay + 1) % allTextToDisplay.length;
        intervalWaited = 0;
      } else {
        intervalWaited = intervalWaited + 1;
      }
    }
  }

  function handleTypeTextTyping() {
    if (isWriting) {
      displayedText = displayedText.concat(
        allTextToDisplay?.[indexTextToDisplay]?.[displayedText.length]
      );
    } else {
      displayedText = displayedText.slice(0, -1);
    }
  }
</script>

{displayedText}
