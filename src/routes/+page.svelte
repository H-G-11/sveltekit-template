<script>
  // Background
  import LayeredPeaks from "$lib/assets/svg/separators/LayeredPeaks.svelte";
  import LayeredMultiWave from "$lib/assets/svg/separators/LayeredWaves.svelte";
  import LayeredWave from "$lib/assets/svg/separators/Wave.svelte";
  import LayeredWaveSmall from "$lib/assets/svg/separators/WaveSmall.svelte";

  // Elements
  import Footer from "$lib/containers/Navigation/Footer.svelte";
  import PresentationSection from "$lib/containers/homePage/Presentation/PresentationSection.svelte";
  import LanguagesThemesSection from "$lib/containers/homePage/LanguagesThemes/LanguagesThemesSection.svelte";
  import TechnologyMovingImages from "$lib/containers/homePage/Technology/TechnologyMovingImages.svelte";
</script>

<PresentationSection />

<TechnologyMovingImages />

<LanguagesThemesSection />

<!-- <LayeredPeaks /> -->
<LayeredMultiWave fill="hsl(var(--n))" />
<Footer />
