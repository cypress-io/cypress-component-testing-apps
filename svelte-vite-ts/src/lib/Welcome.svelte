<script lang="ts">
  import Button from "./Button.svelte";

  const {
    username, 
    onLogout = () => undefined 
  }: {
    username: string
    onLogout: () => void
  } = $props()
</script>

<div class="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
  <h1 class="text-2xl">Welcome {username}!</h1>
  <Button msg="Log Out" className="mt-2" onClick={onLogout} />
</div>
