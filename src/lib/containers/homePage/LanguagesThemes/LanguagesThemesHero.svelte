<script lang="ts">
  import Typing from "$lib/components/Typing/Typing.svelte";
  import animatedImages from "$lib/stores/animatedImages";

  const allTextToDisplay = ["Themes", "Languages"];

  function onChangeTypeState(
    indexTextToDisplay: number,
    displayedText: string
  ) {
    if (!displayedText.length) {
      animatedImages.set(
        indexTextToDisplay === 0 ? "languagesStart" : "themesStart"
      );
    } else {
      animatedImages.set(
        indexTextToDisplay === 0 ? "themesEnd" : "languagesEnd"
      );
    }
  }
</script>

<div class="hero h-full bg-transparent relative mt-8 mb-0">
  <div class="hero-content text-center xl:text-right mb-0">
    <div
      class=" flex flex-col font-barlow gap-4 justify-items-center items-center max-w-[80vw] mb-0"
    >
      <h1 class="sub-title">Customize with different</h1>
      <h1 class="animated-text truncate">
        <Typing {allTextToDisplay} {onChangeTypeState} />
      </h1>
      <p class="font-medium text-center">
        Adapt to every user by giving them the graphics they want, and the
        language they need. <br /> Adding a new language will take you no more than
        a few minutes.
      </p>
    </div>
  </div>
</div>

<style>
  .sub-title {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;
    line-height: 1.3333333333333333;
    letter-spacing: -3px;
  }

  .animated-text {
    font-size: 6.5rem;
    font-weight: 1000;
    line-height: 1.3;
    padding: 0rem 0.5rem;
    margin-top: 0px;
    margin-bottom: 24px;
    letter-spacing: -4px;
    min-height: calc(6.5rem * 1.3);
  }
</style>
