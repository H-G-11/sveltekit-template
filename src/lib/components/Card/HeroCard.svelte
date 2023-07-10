<script lang="ts">
  export let beforeTitle: string = "Welcome Back,";
  export let title: string = "Jaydon Frankie";
  export let subTitle: string =
    "Here is your dashboard for the selected period";
</script>

<div class="prose prose-lg h-full w-full p-3 pb-0 max-w-none text-center">
  <h1 class=" font-title font-[1000] leading-[1.3]">
    <span>
      {beforeTitle}
    </span>
    <br />
    <span class="inline-grid">
      <span
        class="col-start-1 row-start-1 blured-background blur-3xl opacity-70"
      >
        {title}
      </span>
      <span class="col-start-1 row-start-1 colorful-text">
        {title}
      </span>
    </span>
    <br />
  </h1>
  <h4>{subTitle}</h4>
</div>

<style>
  .blured-background {
    background-image: linear-gradient(
      90deg,
      hsl(var(--s)) 5%,
      hsl(var(--sf)) 15%,
      hsl(var(--pf)) 60%,
      hsl(var(--in)) 95%
    );
  }

  .colorful-text {
    background-image: linear-gradient(
      90deg,
      hsl(var(--s)) 5%,
      hsl(var(--sf)) 15%,
      hsl(var(--pf)) 60%,
      hsl(var(--in)) 95%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
