<script>
  import Bolt from "$lib/assets/svg/Bolt.svelte";
</script>

<div class="hero h-full bg-transparent relative pb-16">
  <div class="hero-content text-center xl:text-left">
    <div
      class="max-w-lg flex flex-col font-barlow gap-4 justify-center items-center xl:justify-start xl:items-start"
    >
      <h1 class="sub-title">Build Fast and Reliable Applications in</h1>
      <h1 class="main-title">o(1) Time</h1>
      <p>
        For start-ups, small teams and freelancers who want <br /> speed of
        development, professional applications, <br /> and state-of-the-art tooling.
      </p>
      <div
        class="flex flex-row gap-2 w-full justify-center items-center xl:justify-start xl:items-start"
      >
        <div class="rating">
          <input
            type="radio"
            class="mask mask-star-2 bg-[#faaf00]"
            aria-label="first star"
          />
          <input
            type="radio"
            class="mask mask-star-2 bg-[#faaf00]"
            aria-label="second star"
          />
          <input
            type="radio"
            class="mask mask-star-2 bg-[#faaf00]"
            aria-label="third star"
          />
          <input
            type="radio"
            class="mask mask-star-2 bg-[#faaf00]"
            aria-label="fourth star"
          />
          <input
            type="radio"
            class="mask mask-star-2 bg-[#faaf00]"
            aria-label="fifth star"
            checked
          />
        </div>
        <div class="text-sm">
          <span class="font-bold"> 4.95/5</span>
          <span class="font-thins text-xs"> (27+ reviews)</span>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <a href="/dashboard">
          <button class="btn btn-neutral mt-4 px-4 text-white">
            <Bolt />Live Preview
          </button>
        </a>
        <a href="/dashboard">
          <button class="btn btn-outline btn-neutral mt-4 px-4"
            >Get Started</button
          >
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .sub-title {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;
    line-height: 1.3333333333333333;
    letter-spacing: -2px;
  }

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
    font-size: 6.5rem;
    font-weight: 1000;
    line-height: 1;
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
