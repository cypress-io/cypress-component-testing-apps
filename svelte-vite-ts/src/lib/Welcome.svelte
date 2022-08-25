<script lang="ts">
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let username: string;

  function handleLogout() {
    dispatch("logout");
  }
</script>

<div class="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
  <h1 class="text-2xl">Welcome {username}!</h1>
  <Button msg="Log Out" class="mt-2" on:click={handleLogout} />
</div>
