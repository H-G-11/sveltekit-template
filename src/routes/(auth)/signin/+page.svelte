<script lang="ts">
  import { signIn } from "@auth/sveltekit/client";
</script>

<div>
  <button on:click={() => signIn()}> Sign in with Auth0 </button>
</div>
