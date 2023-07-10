<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";

  const user = $page.data.session?.user;
</script>

{#if user}
  {#if user.image}
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div tabindex="0" class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={user?.image} alt="avatar" loading="lazy" />
        </div>
      </label>
      <ul
        class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li><button on:click={() => signOut()}>Logout</button></li>
      </ul>
    </div>
  {/if}
{:else}
  <button on:click={() => signIn()} class="btn btn-ghost">Sign In</button>
{/if}
