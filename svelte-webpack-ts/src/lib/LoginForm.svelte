<script lang="ts">
  import Button from "./Button.svelte";
  import InputField from "./InputField.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let title = "Log In";
  export let errorMessage: string;

  let username = "";
  let password = "";
  let submitted = false;

  function handleFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    submitted = true;

    if (username && password) {
      dispatch("login", {
        username,
        password,
      });
    }
  }
</script>

<div class="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
  <form on:submit={handleFormSubmit} class="flex flex-col">
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
      <Button type="submit" msg="Login" />
      {#if errorMessage}
        <div class="text-red-500 mt-2">
          {errorMessage}
        </div>
      {/if}
    </fieldset>
  </form>
</div>
