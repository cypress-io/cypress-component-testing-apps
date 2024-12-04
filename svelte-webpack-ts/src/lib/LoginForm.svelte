<script lang="ts">
  import Button from "./Button.svelte";
  import InputField from "./InputField.svelte";

  let {
    title = "Log In",
    errorMessage = undefined,
    username = "",
    password = "",
    submitted = false,
    onLogin = () => undefined
  }: {
    title?: string
    errorMessage?: string | undefined
    username?: string
    password?: string
    submitted?: boolean
    onLogin?: ({username, password}: { username: string, password: string}) =>void
  } = $props()

  function handleFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    submitted = true;

    if (username && password) {
      onLogin({
        username,
        password
      })
    }
  }
</script>

<div class="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
  <form onsubmit={handleFormSubmit} class="flex flex-col">
    <fieldset>
      <legend class="text-3xl text-gray-800 mb-4">{title}</legend>
      <InputField
        name="username"
        type="text"
        label="Username"
        requiredMessage="Username is required"
        autocomplete="username"
        {submitted}
        bind:value={username}
      />
      <InputField
        name="password"
        type="password"
        label="Password"
        requiredMessage="Password is required"
        autocomplete="current-password"
        {submitted}
        bind:value={password}
      />
      <Button type="submit" msg="Login"/>
      {#if errorMessage}
        <div class="text-red-500 mt-2">
          {errorMessage}
        </div>
      {/if}
    </fieldset>
  </form>
</div>
